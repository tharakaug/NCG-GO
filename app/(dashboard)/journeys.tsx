import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-toast-message";
import { createBooking, getAvailableSeats } from "@/services/journeysService";

// Journeys list
const initialJourneys = [
  {
    from: "Moratuwa",
    to: "Karainagar",
    busNo: "87",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    times: [
      "Soysapura - 7.30 PM",
      "Wellawatta - 8.30 PM",
      "Pettah - 8.45 PM",
      "Jaffna Town - 3.00 AM",
      "Karainagar - 4.30 AM",
    ],
  },
  {
    from: "Karainagar",
    to: "Moratuwa",
    busNo: "87",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    times: [
      "Karainagar - 6.30 PM",
      "Jaffna Bus Stand - 8.30 PM",
      "Pettah - 2.45 AM",
      "Wellawatta - 3.00 AM",
      "Soysapura - 3.20 AM",
    ],
  },
  {
    from: "Moratuwa",
    to: "Point Pedro (via Palaly)",
    busNo: "87",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    times: [
      "Soysapura - 8.00 PM",
      "Wellawatta - 9.00 PM",
      "Pettah - 9.15 PM",
      "Jaffna Town - 3.30 AM",
      "Point Pedro - 4.20 AM",
    ],
  },
  {
    from: "Point Pedro",
    to: "Moratuwa (via Palaly)",
    busNo: "87",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    times: [
      "Point Pedro - 7.20 PM",
      "Jaffna Bus Stand - 9.00 PM",
      "Pettah - 3.15 AM",
      "Wellawatta - 3.30 AM",
      "Soysapura - 3.40 AM",
    ],
  },
  {
    from: "Moratuwa",
    to: "Point Pedro (via Kopay)",
    busNo: "87",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    times: [
      "Soysapura - 9.00 PM",
      "Wellawatta - 10.00 PM",
      "Pettah - 10.15 PM",
      "Jaffna Town - 4.30 AM",
      "Point Pedro - 5.10 AM",
    ],
  },
  {
    from: "Point Pedro",
    to: "Moratuwa (via Kopay)",
    busNo: "87",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    times: [
      "Point Pedro - 8.15 PM",
      "Jaffna Bus Stand - 9.30 PM",
      "Pettah - 4.15 AM",
      "Wellawatta - 4.30 AM",
      "Soysapura - 4.40 AM",
    ],
  },
  {
    from: "Panadura",
    to: "Kankesanthurai (via Dambulla)",
    busNo: "15",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    times: [
      "Panadura - 8.30 PM",
      "Pettah - 10.15 PM",
      "Kurunegala - 12.00 AM",
      "Jaffna - 4.30 AM",
      "Kankesanthurai - 5.00 AM",
    ],
  },
  {
    from: "Kankesanthurai",
    to: "Panadura (via Dambulla)",
    busNo: "15",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    times: [
      "Kankesanthurai - 8.45 PM",
      "Jaffna Bus Stand - 10.00 PM",
      "Kurunegala - 2.20  AM",
      "Pettah - 4.20 AM",
      "Panadura - 5.00 AM",
    ],
  },
  {
    from: "Makumbura",
    to: "Badulla EX 01 (via Mattala, Wellawaya, Ella)",
    busNo: "74/31-2",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    times: [
      "Makumbura - 10.30 AM",
      "Mattala - 12.30 PM",
      "Wellawaya - 01.40 PM",
      "Ella - 02.20 PM",
      "Badulla - 03.00 PM",
    ],
  },
  {
    from: "Badulla EX 01",
    to: "Makumbura (via Ella, Wellawaya, Mattala)",
    busNo: "74/31-2",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    times: [
      "Badulla - 10.30 AM",
      "Ella - 11.10 AM",
      "Wellawaya - 11.50 AM",
      "Mattala - 01.00 PM",
      "Makumbura - 03.00 PM",
    ],
  },
  {
    from: "Colombo",
    to: "Passara",
    busNo: "99",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    times: [
      "Colombo - 12.45 AM",
      "Homagama - 1.15 AM",
      "Bandarawela - 5.15 AM",
      "Badulla - 6.00 AM",
      "Passara - 6.45 AM",
    ],
  },
  {
    from: "Passara",
    to: "Colombo",
    busNo: "99",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    times: [
      "Passara - 7.00 PM",
      "Badulla - 7.45 PM",
      "Bandarawela - 8.30 PM",
      "Homagama - 12.30 AM",
      "Colombo - 1.00 AM",
    ],
  },
];

const DEFAULT_SEATS = 51;

const JourneyScreen = () => {
  const [journeys] = useState(initialJourneys);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedJourneyIndex, setSelectedJourneyIndex] = useState<number | null>(null);
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
      Toast.show({ type: "error", text1: "❌ Error", text2: "Please fill in all required fields" });
      return;
    }

    const passengers = Number(formData.passengers);
    if (selectedJourneyIndex === null) return;

    const selectedJourney = journeys[selectedJourneyIndex];
    const seats = await getAvailableSeats(selectedJourney.busNo, formData.date);

    if (passengers > seats) {
      Toast.show({ type: "error", text1: "❌ Not enough seats", text2: `Only ${seats} seats available` });
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
        text1: "✅ Booking Confirmed",
        text2: `Trip ${selectedJourney.from} → ${selectedJourney.to} on ${formData.date.toDateString()}`,
      });

      setModalVisible(false);
      setFormData({ name: "", email: "", phone: "", passengers: "", date: new Date() });
      setSelectedJourneyIndex(null);
    } catch (err: any) {
      Toast.show({ type: "error", text1: "❌ Error", text2: err.message || "Failed to create booking" });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#f0f4f8", padding: 16 }}>
        <Text style={{ fontSize: 26, fontWeight: "bold", color: "#1E3A8A", marginBottom: 16, textAlign: "center" }}>
          NCG Express Journeys 🚍
        </Text>

        {journeys.map((j, idx) => (
          <LinearGradient key={idx} colors={["#1E3A8A", "#274BB0"]} start={[0, 0]} end={[1, 1]} style={styles.journeyCard}>
            <Text style={styles.journeyTitle}>{j.from} → {j.to}</Text>
            <Text style={styles.journeySubText}>Bus No: {j.busNo} | {j.type}</Text>
            <Text style={styles.priceText}>Price: {j.price}</Text>
            <Text style={styles.timetableLabel}>Timetable:</Text>
            <View style={styles.timesContainer}>
              {j.times.map((t, i) => (
                <View key={i} style={styles.timeTag}><Text style={styles.timeText}>{t}</Text></View>
              ))}
            </View>
            <TouchableOpacity style={styles.bookButton} onPress={() => openBookingForm(idx)}>
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
          </LinearGradient>
        ))}

        {/* Booking Modal */}
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.modalTitle}>Book Trip</Text>

                <TextInput placeholder="Name *" style={styles.input} value={formData.name} onChangeText={text => handleInputChange("name", text)} />
                <TextInput placeholder="Email" style={styles.input} value={formData.email} keyboardType="email-address" onChangeText={text => handleInputChange("email", text)} />
                <TextInput placeholder="Phone *" style={styles.input} value={formData.phone} keyboardType="phone-pad" onChangeText={text => handleInputChange("phone", text)} />
                <TextInput placeholder="Number of Passengers *" style={styles.input} value={formData.passengers} keyboardType="numeric" onChangeText={text => handleInputChange("passengers", text)} />

                <Text style={styles.dateLabel}>Travel Date:</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 8 }}>
                  {dateOptions.map((opt, idx) => (
                    <TouchableOpacity
                      key={idx}
                      style={[styles.dateOption, formData.date.toDateString() === opt.value.toDateString() && styles.selectedDateOption]}
                      onPress={() => handleInputChange("date", opt.value)}
                    >
                      <Text style={[styles.dateOptionText, formData.date.toDateString() === opt.value.toDateString() && styles.selectedDateOptionText]}>
                        {opt.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>

                <Text style={{ color: "#facc15", marginBottom: 8 }}>🪑 Seats Available: {availableSeatsForSelectedDate}</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8 }}>
                  <TouchableOpacity style={[styles.submitButton, { backgroundColor: "#ef4444" }]} onPress={() => setModalVisible(false)}>
                    <Text style={styles.submitButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.submitButton} onPress={handleBookingSubmit}>
                    <Text style={styles.submitButtonText}>Confirm Booking</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </ScrollView>

      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  journeyCard: { borderRadius: 20, padding: 16, marginBottom: 16, shadowColor: "#1E3A8A", shadowOpacity: 0.2, shadowRadius: 8, shadowOffset: { width: 0, height: 4 }, elevation: 5 },
  journeyTitle: { fontSize: 18, fontWeight: "bold", color: "white", marginBottom: 4 },
  journeySubText: { color: "#d1d5db", marginBottom: 4 },
  priceText: { color: "#f3f4f6", marginBottom: 4, fontWeight: "600" },
  timetableLabel: { fontWeight: "600", color: "white", marginBottom: 6 },
  timesContainer: { flexDirection: "row", flexWrap: "wrap", marginBottom: 12 },
  timeTag: { backgroundColor: "rgba(255,255,255,0.2)", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 12, marginRight: 8, marginBottom: 8 },
  timeText: { color: "white", fontWeight: "500", fontSize: 12 },
  bookButton: { marginTop: 8, backgroundColor: "#facc15", paddingVertical: 10, borderRadius: 12, alignItems: "center" },
  bookButtonText: { color: "#1E3A8A", fontWeight: "600", fontSize: 16 },
  modalContainer: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center", padding: 16 },
  modalContent: { backgroundColor: "white", padding: 20, width: "100%", borderRadius: 20, shadowColor: "#000", shadowOpacity: 0.25, shadowRadius: 6, shadowOffset: { width: 0, height: 3 }, elevation: 5, maxHeight: "80%" },
  modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 16, color: "#1E3A8A", textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#cbd5e1", borderRadius: 12, padding: 12, marginBottom: 12, fontSize: 16 },
  dateLabel: { fontSize: 16, fontWeight: "600", marginBottom: 8, color: "#1E3A8A" },
  dateOption: { padding: 12, marginRight: 8, borderRadius: 12, borderWidth: 1, borderColor: "#cbd5e1" },
  selectedDateOption: { backgroundColor: "#1E3A8A" },
  dateOptionText: { color: "#1E3A8A", fontSize: 14 },
  selectedDateOptionText: { color: "white", fontWeight: "600" },
  submitButton: { backgroundColor: "#1E3A8A", paddingVertical: 12, paddingHorizontal: 16, borderRadius: 12, alignItems: "center", flex: 1, marginHorizontal: 4 },
  submitButtonText: { color: "white", fontWeight: "600", fontSize: 16 },
});

export default JourneyScreen;
