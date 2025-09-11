// import { View, Text, ScrollView } from "react-native";
// import React from "react";

// const journeys = [
//   {
//     from: "Moratuwa",
//     to: "Karainagar",
//     busNo: "87",
//     type: "Super Luxury - Daily",
//     price: "Contact for Price",
//     times: ["Soysapura - 7.30 PM", "Wellawatta - 8.30 PM", "Pettah - 8.45 PM", "Jaffna Town - 3.00 AM", "Karainagar - 4.30 AM"],
//   },
//   {
//     from: "Karainagar",
//     to: "Moratuwa",
//     busNo: "87",
//     type: "Super Luxury - Daily",
//     price: "Contact for Price",
//     times: ["Karainagar - 6.30 PM", "Jaffna Bus Stand - 8.30 PM", "Pettah - 2.45 AM", "Wellawatta - 3.00 AM", "Soysapura - 3.20 AM"],
//   },
//   {
//     from: "Moratuwa",
//     to: "Point Pedro (via Palaly)",
//     busNo: "87",
//     type: "Super Luxury - Daily",
//     times: ["Soysapura - 8.00 PM", "Wellawatta - 9.00 PM", "Pettah - 9.15 PM", "Jaffna Town - 3.30 AM", "Point Pedro - 4.20 AM"],
//   },
//   {
//     from: "Point Pedro",
//     to: "Moratuwa (via Palaly)",
//     busNo: "87",
//     type: "Super Luxury - Daily",
//     times: ["Point Pedro - 7.20 PM", "Jaffna Bus Stand - 9.00 PM", "Pettah - 3.15 AM", "Wellawatta - 3.30 AM", "Soysapura - 3.40 AM"],
//   },
//   {
//     from: "Moratuwa",
//     to: "Point Pedro (via Kopay)",
//     busNo: "87",
//     type: "Super Luxury - Daily",
//     times: ["Soysapura - 9.00 PM", "Wellawatta - 10.00 PM", "Pettah - 10.15 PM", "Jaffna Town - 4.30 AM", "Point Pedro - 5.10 AM"],
//   },
//   {
//     from: "Point Pedro",
//     to: "Moratuwa (via Kopay)",
//     busNo: "87",
//     type: "Super Luxury - Daily",
//     times: ["Point Pedro - 8.15 PM", "Jaffna Bus Stand - 9.30 PM", "Pettah - 3.45 AM", "Wellawatta - 4.00 AM", "Soysapura - 4.10 AM"],
//   },
//   {
//     from: "Panadura",
//     to: "Kankesanthurai (via Dambulla)",
//     busNo: "15",
//     type: "Super Luxury - Daily",
//     times: ["Panadura - 8.30 PM", "Pettah - 10.15 PM", "Kurunegala - 12.00 AM", "Jaffna - 4.30 AM", "Kankesanthurai - 5.00 AM"],
//   },
//   {
//     from: "Kankesanthurai",
//     to: "Panadura (via Dambulla)",
//     busNo: "15",
//     type: "Super Luxury - Daily",
//     times: ["Kankesanthurai - 8.45 PM", "Jaffna Bus Stand - 10.00 PM", "Kurunegala - 2.20 AM", "Pettah - 4.20 AM", "Panadura - 5.00 AM"],
//   },
//   {
//     from: "Makumbura",
//     to: "Badulla EX 01 (via Mattala, Wellawaya, Ella)",
//     busNo: "74/31-2",
//     type: "Super Luxury - Daily",
//     times: ["Makumbura - 10.30 AM", "Mattala - 12.30 PM", "Wellawaya - 01.40 PM", "Ella - 02.20 PM", "Badulla - 03.00 PM"],
//   },
//   {
//     from: "Colombo",
//     to: "Passara",
//     busNo: "99",
//     type: "Super Luxury - Daily",
//     times: ["Colombo - 12.45 AM", "Homagama - 1.15 AM", "Bandarawela - 5.15 AM", "Badulla - 6.00 AM", "Passara - 6.45 AM"],
//   },
//   {
//     from: "Panadura",
//     to: "Kandy",
//     busNo: "17",
//     type: "Normal - Daily",
//     times: [
//       "Panadura - 03.30 AM → Kandy - 07.20 AM",
//       "Panadura - 04.00 AM → Kandy - 07.50 AM",
//       "Panadura - 05.15 AM → Kandy - 09.30 AM",
//       "Panadura - 07.00 AM → Kandy - 10.50 AM",
//       "Panadura - 08.30 AM → Kandy - 01.40 PM",
//     ],
//   },
// ];

// const JourneyScreen = () => {
//   return (
//     <ScrollView className="flex-1 bg-white px-5 py-6">
//       <Text className="text-2xl font-bold text-blue-600 mb-6">
//         NCG Express Journeys 🚍
//       </Text>

//       {journeys.map((j, idx) => (
//         <View
//           key={idx}
//           className="bg-slate-100 p-5 rounded-2xl mb-5 shadow-sm"
//         >
//           <Text className="text-lg font-bold text-slate-900 mb-1">
//             {j.from} → {j.to}
//           </Text>
//           {j.busNo && (
//             <Text className="text-slate-600">
//               Bus No: {j.busNo} | {j.type}
//             </Text>
//           )}
//           {j.price && <Text className="text-slate-700 mt-1">Price: {j.price}</Text>}

//           <Text className="font-semibold text-slate-800 mt-3 mb-2">Timetable:</Text>
//           <View className="flex-row flex-wrap">
//             {j.times.map((t, i) => (
//               <View
//                 key={i}
//                 className="bg-blue-100 px-3 py-2 rounded-lg mr-2 mb-2"
//               >
//                 <Text className="text-blue-700 font-medium">{t}</Text>
//               </View>
//             ))}
//           </View>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// export default JourneyScreen;


import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  StyleSheet,
} from "react-native";

const journeys = [
  {
    from: "Moratuwa",
    to: "Karainagar",
    busNo: "87",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    times: ["Soysapura - 7.30 PM", "Wellawatta - 8.30 PM", "Pettah - 8.45 PM", "Jaffna Town - 3.00 AM", "Karainagar - 4.30 AM"],
  },
  {
    from: "Karainagar",
    to: "Moratuwa",
    busNo: "87",
    type: "Super Luxury - Daily",
    price: "Contact for Price",
    times: ["Karainagar - 6.30 PM", "Jaffna Bus Stand - 8.30 PM", "Pettah - 2.45 AM", "Wellawatta - 3.00 AM", "Soysapura - 3.20 AM"],
  },
  {
    from: "Moratuwa",
    to: "Point Pedro (via Palaly)",
    busNo: "87",
    type: "Super Luxury - Daily",
    times: ["Soysapura - 8.00 PM", "Wellawatta - 9.00 PM", "Pettah - 9.15 PM", "Jaffna Town - 3.30 AM", "Point Pedro - 4.20 AM"],
  },
  {
    from: "Point Pedro",
    to: "Moratuwa (via Palaly)",
    busNo: "87",
    type: "Super Luxury - Daily",
    times: ["Point Pedro - 7.20 PM", "Jaffna Bus Stand - 9.00 PM", "Pettah - 3.15 AM", "Wellawatta - 3.30 AM", "Soysapura - 3.40 AM"],
  },
  {
    from: "Moratuwa",
    to: "Point Pedro (via Kopay)",
    busNo: "87",
    type: "Super Luxury - Daily",
    times: ["Soysapura - 9.00 PM", "Wellawatta - 10.00 PM", "Pettah - 10.15 PM", "Jaffna Town - 4.30 AM", "Point Pedro - 5.10 AM"],
  },
  {
    from: "Point Pedro",
    to: "Moratuwa (via Kopay)",
    busNo: "87",
    type: "Super Luxury - Daily",
    times: ["Point Pedro - 8.15 PM", "Jaffna Bus Stand - 9.30 PM", "Pettah - 3.45 AM", "Wellawatta - 4.00 AM", "Soysapura - 4.10 AM"],
  },
  {
    from: "Panadura",
    to: "Kankesanthurai (via Dambulla)",
    busNo: "15",
    type: "Super Luxury - Daily",
    times: ["Panadura - 8.30 PM", "Pettah - 10.15 PM", "Kurunegala - 12.00 AM", "Jaffna - 4.30 AM", "Kankesanthurai - 5.00 AM"],
  },
  {
    from: "Kankesanthurai",
    to: "Panadura (via Dambulla)",
    busNo: "15",
    type: "Super Luxury - Daily",
    times: ["Kankesanthurai - 8.45 PM", "Jaffna Bus Stand - 10.00 PM", "Kurunegala - 2.20 AM", "Pettah - 4.20 AM", "Panadura - 5.00 AM"],
  },
  {
    from: "Makumbura",
    to: "Badulla EX 01 (via Mattala, Wellawaya, Ella)",
    busNo: "74/31-2",
    type: "Super Luxury - Daily",
    times: ["Makumbura - 10.30 AM", "Mattala - 12.30 PM", "Wellawaya - 01.40 PM", "Ella - 02.20 PM", "Badulla - 03.00 PM"],
  },
  {
    from: "Colombo",
    to: "Passara",
    busNo: "99",
    type: "Super Luxury - Daily",
    times: ["Colombo - 12.45 AM", "Homagama - 1.15 AM", "Bandarawela - 5.15 AM", "Badulla - 6.00 AM", "Passara - 6.45 AM"],
  },
  {
    from: "Panadura",
    to: "Kandy",
    busNo: "17",
    type: "Normal - Daily",
    times: [
      "Panadura - 03.30 AM → Kandy - 07.20 AM",
      "Panadura - 04.00 AM → Kandy - 07.50 AM",
      "Panadura - 05.15 AM → Kandy - 09.30 AM",
      "Panadura - 07.00 AM → Kandy - 10.50 AM",
      "Panadura - 08.30 AM → Kandy - 01.40 PM",
    ],
  },
  // Add other journeys...
];

const JourneyScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedJourney, setSelectedJourney] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    passengers: "",
  });

  const openBookingForm = (journey) => {
    setSelectedJourney(journey);
    setModalVisible(true);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleBookingSubmit = () => {
    console.log("Booking Data:", { journey: selectedJourney, ...formData });
    Alert.alert(
      "Booking Submitted!",
      `You have booked a trip from ${selectedJourney.from} to ${selectedJourney.to}.`
    );
    setModalVisible(false);
    setFormData({ name: "", email: "", phone: "", passengers: "" });
    setSelectedJourney(null);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f8fafc", padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1d4ed8", marginBottom: 16 }}>
        NCG Express Journeys 🚍
      </Text>

      {journeys.map((j, idx) => (
        <View
          key={idx}
          style={{
            backgroundColor: "#e2e8f0",
            borderRadius: 20,
            padding: 16,
            marginBottom: 16,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 6,
            shadowOffset: { width: 0, height: 3 },
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#1e293b", marginBottom: 4 }}>
            {j.from} → {j.to}
          </Text>

          {j.busNo && (
            <Text style={{ color: "#475569", marginBottom: 4 }}>
              Bus No: {j.busNo} | {j.type}
            </Text>
          )}

          {j.price && <Text style={{ color: "#334155", marginBottom: 8 }}>Price: {j.price}</Text>}

          <Text style={{ fontWeight: "600", color: "#1e293b", marginBottom: 8 }}>Timetable:</Text>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {j.times.map((t, i) => (
              <View
                key={i}
                style={{
                  backgroundColor: "#bfdbfe",
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  borderRadius: 12,
                  marginRight: 8,
                  marginBottom: 8,
                }}
              >
                <Text style={{ color: "#1d4ed8", fontWeight: "500" }}>{t}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity
            style={{
              marginTop: 12,
              backgroundColor: "#1d4ed8",
              paddingVertical: 10,
              borderRadius: 12,
              alignItems: "center",
            }}
            onPress={() => openBookingForm(j)}
          >
            <Text style={{ color: "white", fontWeight: "600" }}>Book Now</Text>
          </TouchableOpacity>
        </View>
      ))}

      {/* Booking Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 12 }}>
              Book Trip: {selectedJourney?.from} → {selectedJourney?.to}
            </Text>

            <TextInput
              placeholder="Name"
              style={styles.input}
              value={formData.name}
              onChangeText={(text) => handleInputChange("name", text)}
            />
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={formData.email}
              keyboardType="email-address"
              onChangeText={(text) => handleInputChange("email", text)}
            />
            <TextInput
              placeholder="Phone"
              style={styles.input}
              value={formData.phone}
              keyboardType="phone-pad"
              onChangeText={(text) => handleInputChange("phone", text)}
            />
            <TextInput
              placeholder="Number of Passengers"
              style={styles.input}
              value={formData.passengers}
              keyboardType="numeric"
              onChangeText={(text) => handleInputChange("passengers", text)}
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleBookingSubmit}
            >
              <Text style={{ color: "white", fontWeight: "600" }}>Submit Booking</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.submitButton, { backgroundColor: "#ef4444", marginTop: 8 }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={{ color: "white", fontWeight: "600" }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    width: "90%",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
  },
  submitButton: {
    backgroundColor: "#1d4ed8",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
});

export default JourneyScreen;
