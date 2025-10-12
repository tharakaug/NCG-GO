// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
//   Modal,
//   StyleSheet,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import Toast from "react-native-toast-message";
// import { createBooking, getAvailableSeats } from "@/services/journeysService";

// // Journeys list
// const initialJourneys = [
//   {
//     from: "Moratuwa",
//     to: "Karainagar",
//     busNo: "87",
//     type: "Super Luxury - Daily",
//     price: "Contact for Price",
//     times: [
//       "Soysapura - 7.30 PM",
//       "Wellawatta - 8.30 PM",
//       "Pettah - 8.45 PM",
//       "Jaffna Town - 3.00 AM",
//       "Karainagar - 4.30 AM",
//     ],
//   },
//   {
//     from: "Karainagar",
//     to: "Moratuwa",
//     busNo: "87",
//     type: "Super Luxury - Daily",
//     price: "Contact for Price",
//     times: [
//       "Karainagar - 6.30 PM",
//       "Jaffna Bus Stand - 8.30 PM",
//       "Pettah - 2.45 AM",
//       "Wellawatta - 3.00 AM",
//       "Soysapura - 3.20 AM",
//     ],
//   },
//   {
//     from: "Moratuwa",
//     to: "Point Pedro (via Palaly)",
//     busNo: "87",
//     type: "Super Luxury - Daily",
//     price: "Contact for Price",
//     times: [
//       "Soysapura - 8.00 PM",
//       "Wellawatta - 9.00 PM",
//       "Pettah - 9.15 PM",
//       "Jaffna Town - 3.30 AM",
//       "Point Pedro - 4.20 AM",
//     ],
//   },
//   {
//     from: "Point Pedro",
//     to: "Moratuwa (via Palaly)",
//     busNo: "87",
//     type: "Super Luxury - Daily",
//     price: "Contact for Price",
//     times: [
//       "Point Pedro - 7.20 PM",
//       "Jaffna Bus Stand - 9.00 PM",
//       "Pettah - 3.15 AM",
//       "Wellawatta - 3.30 AM",
//       "Soysapura - 3.40 AM",
//     ],
//   },
//   {
//     from: "Moratuwa",
//     to: "Point Pedro (via Kopay)",
//     busNo: "87",
//     type: "Super Luxury - Daily",
//     price: "Contact for Price",
//     times: [
//       "Soysapura - 9.00 PM",
//       "Wellawatta - 10.00 PM",
//       "Pettah - 10.15 PM",
//       "Jaffna Town - 4.30 AM",
//       "Point Pedro - 5.10 AM",
//     ],
//   },
//   {
//     from: "Point Pedro",
//     to: "Moratuwa (via Kopay)",
//     busNo: "87",
//     type: "Super Luxury - Daily",
//     price: "Contact for Price",
//     times: [
//       "Point Pedro - 8.15 PM",
//       "Jaffna Bus Stand - 9.30 PM",
//       "Pettah - 4.15 AM",
//       "Wellawatta - 4.30 AM",
//       "Soysapura - 4.40 AM",
//     ],
//   },
//   {
//     from: "Panadura",
//     to: "Kankesanthurai (via Dambulla)",
//     busNo: "15",
//     type: "Super Luxury - Daily",
//     price: "Contact for Price",
//     times: [
//       "Panadura - 8.30 PM",
//       "Pettah - 10.15 PM",
//       "Kurunegala - 12.00 AM",
//       "Jaffna - 4.30 AM",
//       "Kankesanthurai - 5.00 AM",
//     ],
//   },
//   {
//     from: "Kankesanthurai",
//     to: "Panadura (via Dambulla)",
//     busNo: "15",
//     type: "Super Luxury - Daily",
//     price: "Contact for Price",
//     times: [
//       "Kankesanthurai - 8.45 PM",
//       "Jaffna Bus Stand - 10.00 PM",
//       "Kurunegala - 2.20  AM",
//       "Pettah - 4.20 AM",
//       "Panadura - 5.00 AM",
//     ],
//   },
//   {
//     from: "Makumbura",
//     to: "Badulla EX 01 (via Mattala, Wellawaya, Ella)",
//     busNo: "74/31-2",
//     type: "Super Luxury - Daily",
//     price: "Contact for Price",
//     times: [
//       "Makumbura - 10.30 AM",
//       "Mattala - 12.30 PM",
//       "Wellawaya - 01.40 PM",
//       "Ella - 02.20 PM",
//       "Badulla - 03.00 PM",
//     ],
//   },
//   {
//     from: "Badulla EX 01",
//     to: "Makumbura (via Ella, Wellawaya, Mattala)",
//     busNo: "74/31-2",
//     type: "Super Luxury - Daily",
//     price: "Contact for Price",
//     times: [
//       "Badulla - 10.30 AM",
//       "Ella - 11.10 AM",
//       "Wellawaya - 11.50 AM",
//       "Mattala - 01.00 PM",
//       "Makumbura - 03.00 PM",
//     ],
//   },
//   {
//     from: "Colombo",
//     to: "Passara",
//     busNo: "99",
//     type: "Super Luxury - Daily",
//     price: "Contact for Price",
//     times: [
//       "Colombo - 12.45 AM",
//       "Homagama - 1.15 AM",
//       "Bandarawela - 5.15 AM",
//       "Badulla - 6.00 AM",
//       "Passara - 6.45 AM",
//     ],
//   },
//   {
//     from: "Passara",
//     to: "Colombo",
//     busNo: "99",
//     type: "Super Luxury - Daily",
//     price: "Contact for Price",
//     times: [
//       "Passara - 7.00 PM",
//       "Badulla - 7.45 PM",
//       "Bandarawela - 8.30 PM",
//       "Homagama - 12.30 AM",
//       "Colombo - 1.00 AM",
//     ],
//   },
// ];

// const DEFAULT_SEATS = 51;

// const JourneyScreen = () => {
//   const [journeys] = useState(initialJourneys);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedJourneyIndex, setSelectedJourneyIndex] = useState<number | null>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     passengers: "",
//     date: new Date(),
//   });
//   const [dateOptions, setDateOptions] = useState<{ label: string; value: Date }[]>([]);
//   const [availableSeatsForSelectedDate, setAvailableSeatsForSelectedDate] = useState(DEFAULT_SEATS);

//   useEffect(() => {
//     const days: { label: string; value: Date }[] = [];
//     const today = new Date();
//     const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     for (let i = 0; i < 30; i++) {
//       const date = new Date();
//       date.setDate(today.getDate() + i);
//       days.push({
//         label: i === 0 ? "Today" : i === 1 ? "Tomorrow" : `${dayNames[date.getDay()]}, ${date.getDate()} ${monthNames[date.getMonth()]}`,
//         value: date,
//       });
//     }
//     setDateOptions(days);
//   }, []);

//   const openBookingForm = async (index: number) => {
//     setSelectedJourneyIndex(index);
//     const initialDate = dateOptions[0]?.value || new Date();
//     const journey = journeys[index];
//     const seats = await getAvailableSeats(journey.busNo, initialDate);

//     setAvailableSeatsForSelectedDate(seats);
//     setFormData({ name: "", email: "", phone: "", passengers: "", date: initialDate });
//     setModalVisible(true);
//   };

//   const handleInputChange = async (field: string, value: any) => {
//     setFormData({ ...formData, [field]: value });

//     if (field === "date" && selectedJourneyIndex !== null) {
//       const journey = journeys[selectedJourneyIndex];
//       const seats = await getAvailableSeats(journey.busNo, value);
//       setAvailableSeatsForSelectedDate(seats);
//     }
//   };

//   const handleBookingSubmit = async () => {
//     if (!formData.name || !formData.phone || !formData.passengers || !formData.date) {
//       Toast.show({ type: "error", text1: "❌ Error", text2: "Please fill in all required fields" });
//       return;
//     }

//     const passengers = Number(formData.passengers);
//     if (selectedJourneyIndex === null) return;

//     const selectedJourney = journeys[selectedJourneyIndex];
//     const seats = await getAvailableSeats(selectedJourney.busNo, formData.date);

//     if (passengers > seats) {
//       Toast.show({ type: "error", text1: "❌ Not enough seats", text2: `Only ${seats} seats available` });
//       return;
//     }

//     try {
//       await createBooking({
//         ...formData,
//         passengers,
//         from: selectedJourney.from,
//         to: selectedJourney.to,
//         busNo: selectedJourney.busNo,
//         type: selectedJourney.type,
//       });

//       setAvailableSeatsForSelectedDate(seats - passengers);
//       Toast.show({
//         type: "success",
//         text1: "✅ Booking Confirmed",
//         text2: `Trip ${selectedJourney.from} → ${selectedJourney.to} on ${formData.date.toDateString()}`,
//       });

//       setModalVisible(false);
//       setFormData({ name: "", email: "", phone: "", passengers: "", date: new Date() });
//       setSelectedJourneyIndex(null);
//     } catch (err: any) {
//       Toast.show({ type: "error", text1: "❌ Error", text2: err.message || "Failed to create booking" });
//     }
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <ScrollView style={{ flex: 1, backgroundColor: "#f0f4f8", padding: 16 }}>
//         <Text style={{ fontSize: 26, fontWeight: "bold", color: "#1E3A8A", marginBottom: 16, textAlign: "center" }}>
//           NCG Express Journeys 🚍
//         </Text>

//         {journeys.map((j, idx) => (
//           <LinearGradient key={idx} colors={["#1E3A8A", "#274BB0"]} start={[0, 0]} end={[1, 1]} style={styles.journeyCard}>
//             <Text style={styles.journeyTitle}>{j.from} → {j.to}</Text>
//             <Text style={styles.journeySubText}>Bus No: {j.busNo} | {j.type}</Text>
//             <Text style={styles.priceText}>Price: {j.price}</Text>
//             <Text style={styles.timetableLabel}>Timetable:</Text>
//             <View style={styles.timesContainer}>
//               {j.times.map((t, i) => (
//                 <View key={i} style={styles.timeTag}><Text style={styles.timeText}>{t}</Text></View>
//               ))}
//             </View>
//             <TouchableOpacity style={styles.bookButton} onPress={() => openBookingForm(idx)}>
//               <Text style={styles.bookButtonText}>Book Now</Text>
//             </TouchableOpacity>
//           </LinearGradient>
//         ))}

//         {/* Booking Modal */}
//         <Modal animationType="slide" transparent={true} visible={modalVisible}>
//           <View style={styles.modalContainer}>
//             <View style={styles.modalContent}>
//               <ScrollView showsVerticalScrollIndicator={false}>
//                 <Text style={styles.modalTitle}>Book Trip</Text>

//                 <TextInput placeholder="Name *" style={styles.input} value={formData.name} onChangeText={text => handleInputChange("name", text)} />
//                 <TextInput placeholder="Email" style={styles.input} value={formData.email} keyboardType="email-address" onChangeText={text => handleInputChange("email", text)} />
//                 <TextInput placeholder="Phone *" style={styles.input} value={formData.phone} keyboardType="phone-pad" onChangeText={text => handleInputChange("phone", text)} />
//                 <TextInput placeholder="Number of Passengers *" style={styles.input} value={formData.passengers} keyboardType="numeric" onChangeText={text => handleInputChange("passengers", text)} />

//                 <Text style={styles.dateLabel}>Travel Date:</Text>
//                 <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 8 }}>
//                   {dateOptions.map((opt, idx) => (
//                     <TouchableOpacity
//                       key={idx}
//                       style={[styles.dateOption, formData.date.toDateString() === opt.value.toDateString() && styles.selectedDateOption]}
//                       onPress={() => handleInputChange("date", opt.value)}
//                     >
//                       <Text style={[styles.dateOptionText, formData.date.toDateString() === opt.value.toDateString() && styles.selectedDateOptionText]}>
//                         {opt.label}
//                       </Text>
//                     </TouchableOpacity>
//                   ))}
//                 </ScrollView>

//                 <Text style={{ color: "#facc15", marginBottom: 8 }}>🪑 Seats Available: {availableSeatsForSelectedDate}</Text>

//                 <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8 }}>
//                   <TouchableOpacity style={[styles.submitButton, { backgroundColor: "#ef4444" }]} onPress={() => setModalVisible(false)}>
//                     <Text style={styles.submitButtonText}>Cancel</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity style={styles.submitButton} onPress={handleBookingSubmit}>
//                     <Text style={styles.submitButtonText}>Confirm Booking</Text>
//                   </TouchableOpacity>
//                 </View>
//               </ScrollView>
//             </View>
//           </View>
//         </Modal>
//       </ScrollView>

//       <Toast />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   journeyCard: { borderRadius: 20, padding: 16, marginBottom: 16, shadowColor: "#1E3A8A", shadowOpacity: 0.2, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 5 },
//   journeyTitle: { fontSize: 18, fontWeight: "bold", color: "white", marginBottom: 4 },
//   journeySubText: { color: "#d1d5db", marginBottom: 4 },
//   priceText: { color: "#f3f4f6", marginBottom: 4, fontWeight: "600" },
//   timetableLabel: { fontWeight: "600", color: "white", marginBottom: 6 },
//   timesContainer: { flexDirection: "row", flexWrap: "wrap", marginBottom: 12 },
//   timeTag: { backgroundColor: "rgba(255,255,255,0.2)", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 12, marginRight: 8, marginBottom: 8 },
//   timeText: { color: "white", fontWeight: "500", fontSize: 12 },
//   bookButton: { marginTop: 8, backgroundColor: "#facc15", paddingVertical: 10, borderRadius: 12, alignItems: "center" },
//   bookButtonText: { color: "#1E3A8A", fontWeight: "600", fontSize: 16 },
//   modalContainer: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center", padding: 16 },
//   modalContent: { backgroundColor: "white", padding: 20, width: "100%", borderRadius: 20, shadowColor: "#000", shadowOpacity: 0.25, shadowRadius: 6, shadowOffset: { width: 0, height: 3 }, elevation: 5, maxHeight: "80%" },
//   modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 16, color: "#1E3A8A", textAlign: "center" },
//   input: { borderWidth: 1, borderColor: "#cbd5e1", borderRadius: 12, padding: 12, marginBottom: 12, fontSize: 16 },
//   dateLabel: { fontSize: 16, fontWeight: "600", marginBottom: 8, color: "#1E3A8A" },
//   dateOption: { padding: 12, marginRight: 8, borderRadius: 12, borderWidth: 1, borderColor: "#cbd5e1" },
//   selectedDateOption: { backgroundColor: "#1E3A8A" },
//   dateOptionText: { color: "#1E3A8A", fontSize: 14 },
//   selectedDateOptionText: { color: "white", fontWeight: "600" },
//   submitButton: { backgroundColor: "#1E3A8A", paddingVertical: 12, paddingHorizontal: 16, borderRadius: 12, alignItems: "center", flex: 1, marginHorizontal: 4 },
//   submitButtonText: { color: "white", fontWeight: "600", fontSize: 16 },
// });

// export default JourneyScreen;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-toast-message";
import { createBooking, getAvailableSeats } from "@/services/journeysService";
import { Ionicons } from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const initialJourneys = [
  {
    from: "Moratuwa",
    to: "Karainagar",
    busNo: "87",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    departure: "07:30 PM",
    arrival: "04:30 AM",
    duration: "9h 00m",
    stops: ["Soysapura - 7.30 PM", "Wellawatta - 8.30 PM", "Pettah - 8.45 PM", "Jaffna Town - 3.00 AM", "Karainagar - 4.30 AM"],
  },
  {
    from: "Karainagar",
    to: "Moratuwa",
    busNo: "87",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    departure: "06:30 PM",
    arrival: "03:20 AM",
    duration: "8h 50m",
    stops: ["Karainagar - 6.30 PM", "Jaffna Bus Stand - 8.30 PM", "Pettah - 2.45 AM", "Wellawatta - 3.00 AM", "Soysapura - 3.20 AM"],
  },
  {
    from: "Moratuwa",
    to: "Point Pedro (via Palaly)",
    busNo: "87",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    departure: "08:00 PM",
    arrival: "04:20 AM",
    duration: "8h 20m",
    stops: ["Soysapura - 8.00 PM", "Wellawatta - 9.00 PM", "Pettah - 9.15 PM", "Jaffna Town - 3.30 AM", "Point Pedro - 4.20 AM"],
  },
  {
    from: "Point Pedro",
    to: "Moratuwa (via Palaly)",
    busNo: "87",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    departure: "07:20 PM",
    arrival: "03:40 AM",
    duration: "8h 20m",
    stops: ["Point Pedro - 7.20 PM", "Jaffna Bus Stand - 9.00 PM", "Pettah - 3.15 AM", "Wellawatta - 3.30 AM", "Soysapura - 3.40 AM"],
  },
  {
    from: "Moratuwa",
    to: "Point Pedro (via Kopay)",
    busNo: "87",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    departure: "09:00 PM",
    arrival: "05:10 AM",
    duration: "8h 10m",
    stops: ["Soysapura - 9.00 PM", "Wellawatta - 10.00 PM", "Pettah - 10.15 PM", "Jaffna Town - 4.30 AM", "Point Pedro - 5.10 AM"],
  },
  {
    from: "Point Pedro",
    to: "Moratuwa (via Kopay)",
    busNo: "87",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    departure: "08:15 PM",
    arrival: "04:40 AM",
    duration: "8h 25m",
    stops: ["Point Pedro - 8.15 PM", "Jaffna Bus Stand - 9.30 PM", "Pettah - 4.15 AM", "Wellawatta - 4.30 AM", "Soysapura - 4.40 AM"],
  },
  {
    from: "Panadura",
    to: "Kankesanthurai (via Dambulla)",
    busNo: "15",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    departure: "08:30 PM",
    arrival: "05:00 AM",
    duration: "8h 30m",
    stops: ["Panadura - 8.30 PM", "Pettah - 10.15 PM", "Kurunegala - 12.00 AM", "Jaffna - 4.30 AM", "Kankesanthurai - 5.00 AM"],
  },
  {
    from: "Kankesanthurai",
    to: "Panadura (via Dambulla)",
    busNo: "15",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    departure: "08:45 PM",
    arrival: "05:00 AM",
    duration: "8h 15m",
    stops: ["Kankesanthurai - 8.45 PM", "Jaffna Bus Stand - 10.00 PM", "Kurunegala - 2.20 AM", "Pettah - 4.20 AM", "Panadura - 5.00 AM"],
  },
  {
    from: "Makumbura",
    to: "Badulla EX 01 (via Mattala, Wellawaya, Ella)",
    busNo: "74/31-2",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    departure: "10:30 AM",
    arrival: "03:00 PM",
    duration: "4h 30m",
    stops: ["Makumbura - 10.30 AM", "Mattala - 12.30 PM", "Wellawaya - 01.40 PM", "Ella - 02.20 PM", "Badulla - 03.00 PM"],
  },
  {
    from: "Badulla EX 01",
    to: "Makumbura (via Ella, Wellawaya, Mattala)",
    busNo: "74/31-2",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    departure: "10:30 AM",
    arrival: "03:00 PM",
    duration: "4h 30m",
    stops: ["Badulla - 10.30 AM", "Ella - 11.10 AM", "Wellawaya - 11.50 AM", "Mattala - 01.00 PM", "Makumbura - 03.00 PM"],
  },
  {
    from: "Colombo",
    to: "Passara",
    busNo: "99",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    departure: "12:45 AM",
    arrival: "06:45 AM",
    duration: "6h 00m",
    stops: ["Colombo - 12.45 AM", "Homagama - 1.15 AM", "Bandarawela - 5.15 AM", "Badulla - 6.00 AM", "Passara - 6.45 AM"],
  },
  {
    from: "Passara",
    to: "Colombo",
    busNo: "99",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    departure: "07:00 PM",
    arrival: "01:00 AM",
    duration: "6h 00m",
    stops: ["Passara - 7.00 PM", "Badulla - 7.45 PM", "Bandarawela - 8.30 PM", "Homagama - 12.30 AM", "Colombo - 1.00 AM"],
  },
];

const DEFAULT_SEATS = 51;

const JourneyScreen = () => {
  const [journeys] = useState(initialJourneys);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedJourneyIndex, setSelectedJourneyIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    passengers: "",
    date: new Date(),
  });
  const [dateOptions, setDateOptions] = useState<{ label: string; value: Date }[]>([]);
  const [availableSeatsForSelectedDate, setAvailableSeatsForSelectedDate] = useState(DEFAULT_SEATS);

  useEffect(() => {
    const days: { label: string; value: Date }[] = [];
    const today = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      days.push({
        label: i === 0 ? "Today" : i === 1 ? "Tomorrow" : `${dayNames[date.getDay()]}, ${date.getDate()} ${monthNames[date.getMonth()]}`,
        value: date,
      });
    }
    setDateOptions(days);
  }, []);

  const openBookingForm = async (index: number) => {
    setSelectedJourneyIndex(index);
    const initialDate = dateOptions[0]?.value || new Date();
    const journey = journeys[index];
    const seats = await getAvailableSeats(journey.busNo, initialDate);

    setAvailableSeatsForSelectedDate(seats);
    setFormData({ name: "", email: "", phone: "", passengers: "", date: initialDate });
    setModalVisible(true);
  };

  const handleInputChange = async (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });

    if (field === "date" && selectedJourneyIndex !== null) {
      const journey = journeys[selectedJourneyIndex];
      const seats = await getAvailableSeats(journey.busNo, value);
      setAvailableSeatsForSelectedDate(seats);
    }
  };

  const handleBookingSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.passengers || !formData.date) {
      Toast.show({ type: "error", text1: "Error", text2: "Please fill in all required fields" });
      return;
    }

    const passengers = Number(formData.passengers);
    if (selectedJourneyIndex === null) return;

    const selectedJourney = journeys[selectedJourneyIndex];
    const seats = await getAvailableSeats(selectedJourney.busNo, formData.date);

    if (passengers > seats) {
      Toast.show({ type: "error", text1: "Not enough seats", text2: `Only ${seats} seats available` });
      return;
    }

    try {
      await createBooking({
        ...formData,
        passengers,
        from: selectedJourney.from,
        to: selectedJourney.to,
        busNo: selectedJourney.busNo,
        type: selectedJourney.type,
      });

      setAvailableSeatsForSelectedDate(seats - passengers);
      Toast.show({
        type: "success",
        text1: "Booking Confirmed",
        text2: `Trip ${selectedJourney.from} → ${selectedJourney.to} on ${formData.date.toDateString()}`,
      });

      setModalVisible(false);
      setFormData({ name: "", email: "", phone: "", passengers: "", date: new Date() });
      setSelectedJourneyIndex(null);
    } catch (err: any) {
      Toast.show({ type: "error", text1: "Error", text2: err.message || "Failed to create booking" });
    }
  };

  const filteredJourneys = journeys.filter(
    (journey) =>
      journey.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      journey.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
      journey.busNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#020617" />
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <LinearGradient
            colors={["#0F172A", "#1E293B"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.header}
          >
            <View style={styles.headerContent}>
              <View style={styles.headerLeft}>
                <LinearGradient
                  colors={["#06B6D4", "#2563EB"]}
                  style={styles.headerIcon}
                >
                  <Ionicons name="bus" size={20} color="white" />
                </LinearGradient>
                <View>
                  <Text style={styles.headerTitle}>NCG Express</Text>
                  <Text style={styles.headerSubtitle}>Sri Lanka's Premier Service</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.headerButton}>
                <Ionicons name="notifications-outline" size={20} color="#94A3B8" />
              </TouchableOpacity>
            </View>
          </LinearGradient>

          {/* Hero Section */}
          <View style={styles.heroSection}>
            <LinearGradient
              colors={["rgba(6, 182, 212, 0.1)", "rgba(37, 99, 235, 0.1)"]}
              start={[0, 0]}
              end={[1, 1]}
              style={styles.heroCard}
            >
              <View style={styles.heroHeader}>
                <Ionicons name="trending-up" size={14} color="#06B6D4" />
                <Text style={styles.heroLabel}>LIVE TIMETABLE</Text>
              </View>
              <Text style={styles.heroTitle}>Find Your Perfect Journey</Text>
              <Text style={styles.heroDescription}>
                Book comfortable seats on luxury buses across Sri Lanka
              </Text>
            </LinearGradient>
          </View>

          {/* Search Bar */}
          <View style={styles.searchSection}>
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={18} color="#64748B" style={styles.searchIcon} />
              <TextInput
                placeholder="Search routes or bus numbers..."
                placeholderTextColor="#64748B"
                style={styles.searchInput}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>

          {/* Routes Header */}
          <View style={styles.routesHeader}>
            <Text style={styles.routesTitle}>Available Routes</Text>
            <Text style={styles.routesCount}>{filteredJourneys.length} routes</Text>
          </View>

          {/* Journey Cards */}
          {filteredJourneys.map((j, idx) => (
            <View key={idx} style={styles.journeyCard}>
              {/* Card Header */}
              <View style={styles.cardHeader}>
                <View style={styles.cardHeaderLeft}>
                  <LinearGradient
                    colors={["#06B6D4", "#2563EB"]}
                    style={styles.cardIcon}
                  >
                    <Ionicons name="bus" size={16} color="white" />
                  </LinearGradient>
                  <View style={styles.cardHeaderText}>
                    <Text style={styles.routeName} numberOfLines={1}>{j.from} → {j.to}</Text>
                    <View style={styles.cardTags}>
                      <LinearGradient
                        colors={["#06B6D4", "#2563EB"]}
                        style={styles.typeTag}
                      >
                        <Text style={styles.typeTagText}>{j.type}</Text>
                      </LinearGradient>
                    </View>
                  </View>
                </View>
              </View>

              {/* Bus Number and Price Row */}
              <View style={styles.busInfoRow}>
                <View style={styles.busNumberBadge}>
                  <Ionicons name="bus-outline" size={12} color="#06B6D4" />
                  <Text style={styles.busNumberText}>Bus {j.busNo}</Text>
                </View>
                <Text style={styles.priceText}>{j.price}</Text>
              </View>

              {/* Info Grid */}
              <View style={styles.infoGrid}>
                <View style={styles.infoCard}>
                  <View style={[styles.infoIconContainer, { backgroundColor: "rgba(6, 182, 212, 0.1)" }]}>
                    <Ionicons name="time-outline" size={16} color="#06B6D4" />
                  </View>
                  <View style={styles.infoTextContainer}>
                    <Text style={styles.infoLabel}>Departure</Text>
                    <Text style={styles.infoValue}>{j.departure}</Text>
                  </View>
                </View>

                <View style={styles.infoCard}>
                  <View style={[styles.infoIconContainer, { backgroundColor: "rgba(16, 185, 129, 0.1)" }]}>
                    <Ionicons name="navigate-outline" size={16} color="#10B981" />
                  </View>
                  <View style={styles.infoTextContainer}>
                    <Text style={styles.infoLabel}>Duration</Text>
                    <Text style={styles.infoValue}>{j.duration}</Text>
                  </View>
                </View>

                <View style={styles.infoCard}>
                  <View style={[styles.infoIconContainer, { backgroundColor: "rgba(249, 115, 22, 0.1)" }]}>
                    <Ionicons name="ticket-outline" size={16} color="#F97316" />
                  </View>
                  <View style={styles.infoTextContainer}>
                    <Text style={styles.infoLabel}>Available</Text>
                    <Text style={styles.infoValue}>{DEFAULT_SEATS} seats</Text>
                  </View>
                </View>
              </View>

              {/* Route Stops */}
              <View style={styles.stopsContainer}>
                <Text style={styles.stopsLabel}>Route Stops</Text>
                <View style={styles.stopsGrid}>
                  {j.stops.map((stop, i) => (
                    <View key={i} style={styles.stopTag}>
                      <Text style={styles.stopText} numberOfLines={1}>{stop}</Text>
                    </View>
                  ))}
                </View>
              </View>

              {/* Card Footer */}
              <View style={styles.cardFooter}>
                <View style={styles.arrivalInfo}>
                  <Ionicons name="location-outline" size={14} color="#94A3B8" />
                  <Text style={styles.arrivalText}>Arrival: {j.arrival}</Text>
                </View>
                <TouchableOpacity 
                  onPress={() => openBookingForm(idx)}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={["#06B6D4", "#2563EB"]}
                    style={styles.bookButton}
                  >
                    <Text style={styles.bookButtonText}>Book Now</Text>
                    <Ionicons name="arrow-forward" size={14} color="white" />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {/* Empty State */}
          {filteredJourneys.length === 0 && (
            <View style={styles.emptyState}>
              <View style={styles.emptyIcon}>
                <Ionicons name="search" size={32} color="#475569" />
              </View>
              <Text style={styles.emptyTitle}>No routes found</Text>
              <Text style={styles.emptyDescription}>
                Try searching for a different destination or bus number
              </Text>
            </View>
          )}
        </ScrollView>

        {/* Booking Modal */}
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <LinearGradient
                colors={["#06B6D4", "#2563EB"]}
                start={[0, 0]}
                end={[1, 1]}
                style={styles.modalHeader}
              >
                <Text style={styles.modalTitle}>Book Your Trip</Text>
                <Text style={styles.modalSubtitle}>
                  {selectedJourneyIndex !== null && `${journeys[selectedJourneyIndex].from} → ${journeys[selectedJourneyIndex].to}`}
                </Text>
                <TouchableOpacity 
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Ionicons name="close-circle" size={28} color="white" />
                </TouchableOpacity>
              </LinearGradient>

              <ScrollView 
                style={styles.modalForm}
                showsVerticalScrollIndicator={false}
              >
                <View style={styles.inputContainer}>
                  <Ionicons name="person-outline" size={18} color="#94A3B8" style={styles.inputIcon} />
                  <TextInput 
                    placeholder="Full Name *" 
                    placeholderTextColor="#64748B"
                    style={styles.input} 
                    value={formData.name} 
                    onChangeText={text => handleInputChange("name", text)} 
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Ionicons name="mail-outline" size={18} color="#94A3B8" style={styles.inputIcon} />
                  <TextInput 
                    placeholder="Email Address" 
                    placeholderTextColor="#64748B"
                    style={styles.input} 
                    value={formData.email} 
                    keyboardType="email-address" 
                    onChangeText={text => handleInputChange("email", text)} 
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Ionicons name="call-outline" size={18} color="#94A3B8" style={styles.inputIcon} />
                  <TextInput 
                    placeholder="Phone Number *" 
                    placeholderTextColor="#64748B"
                    style={styles.input} 
                    value={formData.phone} 
                    keyboardType="phone-pad" 
                    onChangeText={text => handleInputChange("phone", text)} 
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Ionicons name="people-outline" size={18} color="#94A3B8" style={styles.inputIcon} />
                  <TextInput 
                    placeholder="Number of Passengers *" 
                    placeholderTextColor="#64748B"
                    style={styles.input} 
                    value={formData.passengers} 
                    keyboardType="numeric" 
                    onChangeText={text => handleInputChange("passengers", text)} 
                  />
                </View>

                <View style={styles.dateSection}>
                  <View style={styles.dateSectionHeader}>
                    <Ionicons name="calendar-outline" size={18} color="#F1F5F9" />
                    <Text style={styles.dateLabel}>Select Travel Date</Text>
                  </View>
                  <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false} 
                    style={styles.dateScroll}
                  >
                    {dateOptions.map((opt, idx) => (
                      <TouchableOpacity
                        key={idx}
                        style={[
                          styles.dateOption, 
                          formData.date.toDateString() === opt.value.toDateString() && styles.selectedDateOption
                        ]}
                        onPress={() => handleInputChange("date", opt.value)}
                        activeOpacity={0.7}
                      >
                        <Text style={[
                          styles.dateOptionText, 
                          formData.date.toDateString() === opt.value.toDateString() && styles.selectedDateOptionText
                        ]}>
                          {opt.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>

                <View style={styles.seatsInfo}>
                  <Ionicons name="checkmark-circle" size={18} color="#10B981" />
                  <Text style={styles.seatsText}>
                    {availableSeatsForSelectedDate} Seats Available
                  </Text>
                </View>

                <View style={styles.buttonRow}>
                  <TouchableOpacity 
                    style={[styles.submitButton, styles.cancelButton]} 
                    onPress={() => setModalVisible(false)}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.submitButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.submitButton} 
                    onPress={handleBookingSubmit}
                    activeOpacity={0.8}
                  >
                    <LinearGradient
                      colors={["#06B6D4", "#2563EB"]}
                      style={styles.submitButtonGradient}
                    >
                      <Text style={styles.submitButtonText}>Confirm</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>

        <Toast />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 44,
    paddingBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: "#06B6D4",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#334155",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#06B6D4",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 0.3,
  },
  headerSubtitle: {
    fontSize: 10,
    color: "#94A3B8",
    marginTop: 1,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#1E293B",
    alignItems: "center",
    justifyContent: "center",
  },
  heroSection: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  heroCard: {
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(6, 182, 212, 0.2)",
  },
  heroHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 8,
  },
  heroLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#06B6D4",
    letterSpacing: 0.8,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  heroDescription: {
    fontSize: 13,
    color: "#94A3B8",
    lineHeight: 18,
  },
  searchSection: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0F172A",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#1E293B",
    paddingHorizontal: 14,
    height: 48,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "white",
  },
  routesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 12,
  },
  routesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  routesCount: {
    fontSize: 12,
    color: "#64748B",
  },
  journeyCard: {
    backgroundColor: "#0F172A",
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#1E293B",
    shadowColor: "#06B6D4",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  cardHeaderLeft: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
    gap: 10,
  },
  cardIcon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#06B6D4",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeaderText: {
    flex: 1,
  },
  routeName: {
    fontSize: 15,
    fontWeight: "800",
    color: "white",
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  cardTags: {
    flexDirection: "row",
    alignItems: "center",
  },
  typeTag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  typeTagText: {
    fontSize: 9,
    fontWeight: "700",
    color: "white",
  },
  busInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  busNumberBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(6, 182, 212, 0.1)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    gap: 5,
  },
  busNumberText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#06B6D4",
  },
  priceText: {
    fontSize: 12,
    fontWeight: "700",
    color: "white",
  },
  infoGrid: {
    flexDirection: "row",
    gap: 6,
    marginBottom: 12,
  },
  infoCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 10,
    padding: 8,
    gap: 6,
  },
  infoIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  infoTextContainer: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 9,
    color: "#64748B",
    marginBottom: 1,
  },
  infoValue: {
    fontSize: 11,
    fontWeight: "700",
    color: "white",
  },
  stopsContainer: {
    backgroundColor: "rgba(30, 41, 59, 0.5)",
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
  },
  stopsLabel: {
    fontSize: 10,
    color: "#64748B",
    fontWeight: "700",
    marginBottom: 6,
  },
  stopsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  },
  stopTag: {
    backgroundColor: "#334155",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
    maxWidth: SCREEN_WIDTH * 0.4,
  },
  stopText: {
    fontSize: 9,
    color: "#CBD5E1",
    fontWeight: "500",
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#1E293B",
  },
  arrivalInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  arrivalText: {
    fontSize: 11,
    color: "#94A3B8",
  },
  bookButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#06B6D4",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  bookButtonText: {
    fontSize: 12,
    fontWeight: "800",
    color: "white",
    letterSpacing: 0.2,
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  emptyIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#1E293B",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
    marginBottom: 6,
  },
  emptyDescription: {
    fontSize: 12,
    color: "#64748B",
    textAlign: "center",
    lineHeight: 18,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#0F172A",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    maxHeight: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: -3 },
    elevation: 16,
  },
  modalHeader: {
    paddingTop: 28,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    position: "relative",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 0.3,
    marginBottom: 4,
  },
  modalSubtitle: {
    fontSize: 13,
    color: "rgba(255,255,255,0.9)",
    fontWeight: "500",
  },
  closeButton: {
    position: "absolute",
    top: 28,
    right: 16,
  },
  modalForm: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#334155",
    paddingHorizontal: 14,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 14,
    fontSize: 14,
    color: "#F1F5F9",
  },
  dateSection: {
    marginTop: 6,
    marginBottom: 16,
  },
  dateSectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 6,
  },
  dateLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#F1F5F9",
  },
  dateScroll: {
    marginVertical: 3,
  },
  dateOption: {
    padding: 12,
    marginRight: 8,
    borderRadius: 12,
    backgroundColor: "#1E293B",
    borderWidth: 1,
    borderColor: "#334155",
    minWidth: 90,
    alignItems: "center",
  },
  selectedDateOption: {
    backgroundColor: "#06B6D4",
    borderColor: "#0891B2",
  },
  dateOptionText: {
    color: "#CBD5E1",
    fontSize: 11,
    fontWeight: "600",
  },
  selectedDateOptionText: {
    color: "white",
    fontWeight: "800",
  },
  seatsInfo: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: "#10B981",
  },
  seatsText: {
    color: "#10B981",
    fontSize: 13,
    fontWeight: "700",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 6,
  },
  submitButton: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
  },
  submitButtonGradient: {
    paddingVertical: 14,
    alignItems: "center",
    shadowColor: "#06B6D4",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
  },
  cancelButton: {
    backgroundColor: "#DC2626",
    shadowColor: "#DC2626",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonText: {
    color: "white",
    fontWeight: "800",
    fontSize: 14,
    letterSpacing: 0.3,
  },
});

export default JourneyScreen;
