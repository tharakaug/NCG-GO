import { getFirestore, collection, addDoc, Timestamp, getDocs, query, where, updateDoc, doc } from "firebase/firestore";
import { Booking } from "@/types/booking";
import { getAuth } from "firebase/auth";

const db = getFirestore();
const bookingsCollection = collection(db, "bookings");
const seatsCollection = collection(db, "seats");

// Create booking + reduce seat count
export const createBooking = async (booking: Booking) => {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error("User not logged in");
  }

  const dateKey = booking.date.toDateString();

  // Save booking
  const bookingData = {
    ...booking,
    passengers: Number(booking.passengers),
    date: Timestamp.fromDate(booking.date),
    status: "confirmed",
    userId: currentUser.uid,
    createdAt: Timestamp.now(),
  };
  const docRef = await addDoc(bookingsCollection, bookingData);

  // Update seat availability
  const seatSnapshot = await getDocs(
    query(seatsCollection, where("busNo", "==", booking.busNo), where("dateKey", "==", dateKey))
  );

  if (seatSnapshot.empty) {
    // No seat record for this bus/date → create one
    await addDoc(seatsCollection, {
      busNo: booking.busNo,
      dateKey,
      available: 51 - bookingData.passengers,
      updatedAt: Timestamp.now(),
    });
  } else {
    // Already exists → update it
    const seatDoc = seatSnapshot.docs[0];
    const seatData = seatDoc.data();
    await updateDoc(doc(db, "seats", seatDoc.id), {
      available: seatData.available - bookingData.passengers,
      updatedAt: Timestamp.now(),
    });
  }

  return { id: docRef.id, status: bookingData.status };
};

// Get seats for a bus & date
export const getAvailableSeats = async (busNo: string, date: Date): Promise<number> => {
  const dateKey = date.toDateString();
  const seatSnapshot = await getDocs(
    query(seatsCollection, where("busNo", "==", busNo), where("dateKey", "==", dateKey))
  );
  if (seatSnapshot.empty) {
    return 51; // default
  } else {
    return seatSnapshot.docs[0].data().available ?? 51;
  }
};

// Get user bookings
export const getUserBookings = async () => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  if (!currentUser) throw new Error("User not logged in");

  const snapshot = await getDocs(bookingsCollection);
  return snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter((b: any) => b.userId === currentUser.uid);
};
