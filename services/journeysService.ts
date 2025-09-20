// import { getFirestore, collection, addDoc, Timestamp, doc, updateDoc, getDoc, getDocs } from "firebase/firestore";
// // import { functions } from "./firebaseConfig"; // your Firebase config
// // import { httpsCallable } from "firebase/functions";
// import { Booking } from "@/types/booking";

// const db = getFirestore();
// const bookingsCollection = collection(db, "bookings");

// // Create booking directly in Firestore (or optionally call a Cloud Function for SMS)
// export const createBooking = async (booking: Booking) => {
//   // Optional: generate a 6-digit confirmation code
//   const confirmationCode = Math.floor(100000 + Math.random() * 900000).toString();

//   const docRef = await addDoc(bookingsCollection, {
//     ...booking,
//     passengers: Number(booking.passengers),
//     date: Timestamp.fromDate(booking.date),
//     status: "pending",
//     confirmationCode,
//     createdAt: Timestamp.now(),
//   });

//   // Optionally: call Firebase Function to send SMS using Twilio
//   // const sendSMS = httpsCallable(functions, "sendBookingSMS");
//   // await sendSMS({ phone: booking.phone, code: confirmationCode });

//   return { id: docRef.id, confirmationCode };
// };

// // Confirm booking (update status)
// export const confirmBooking = async (id: string, code: string) => {
//   const bookingRef = doc(db, "bookings", id);
//   const bookingSnap = await getDoc(bookingRef);

//   if (!bookingSnap.exists()) throw new Error("Booking not found");

//   const bookingData = bookingSnap.data();

//   if (bookingData.confirmationCode !== code) throw new Error("Invalid confirmation code");

//   await updateDoc(bookingRef, {
//     status: "confirmed",
//     confirmationCode: null,
//   });

//   return { message: "Booking confirmed" };
// };

// // Optional: fetch all bookings (for admin dashboard)
// export const getBookings = async () => {
//   const snapshot = await getDocs(bookingsCollection);
//   return snapshot.docs.map((doc: import("firebase/firestore").QueryDocumentSnapshot) => ({ id: doc.id, ...doc.data() }));
// };


import { getFirestore, collection, addDoc, Timestamp, getDocs } from "firebase/firestore";
import { Booking } from "@/types/booking";
import { getAuth } from "firebase/auth";

const db = getFirestore();
const bookingsCollection = collection(db, "bookings");

export const createBooking = async (booking: Booking) => {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  if (!currentUser) {
    throw new Error("User not logged in");
  }

  // Auto-confirm booking
  const bookingData = {
    ...booking,
    passengers: Number(booking.passengers),
    date: Timestamp.fromDate(booking.date),
    status: "confirmed",      // auto-confirm
    userId: currentUser.uid,  // link booking to user
    createdAt: Timestamp.now(),
  };

  const docRef = await addDoc(bookingsCollection, bookingData);
  return { id: docRef.id, status: bookingData.status };
};

// Optional: fetch all bookings for logged-in user
export const getUserBookings = async () => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  if (!currentUser) throw new Error("User not logged in");

  const snapshot = await getDocs(bookingsCollection);
  return snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .filter((b: any) => b.userId === currentUser.uid); // filter by user
};

