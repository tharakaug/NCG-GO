// import { View, Text } from "react-native"
// import React from "react"

// const HomeScreen = () => {
//   return (
//     <View className="flex-1 w-full justify-center align-items-center">
//       <Text className="text-center text-4xl">Home screen</Text>
//     </View>
//   )
// }

// export default HomeScreen

import { View, Text, Pressable, ScrollView, Image } from "react-native";
import React from "react"
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const router = useRouter();

  const actions = [
    { title: "Bus Timetable", icon: "time-outline", route: "journeys" },
    { title: "Routes", icon: "map-outline", route: "journeys" },
    { title: "Seat Booking", icon: "ticket-outline", route: "journeys" },
    { title: "Payments", icon: "card-outline", route: "payments" },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
          <View className="bg-blue-600 p-6 rounded-b-3xl flex-row items-center justify-between">
  <View>
    <Text className="text-2xl font-bold text-white">NCG Bus Service 🚍</Text>
    <Text className="text-white mt-1">Your trusted express journey</Text>
  </View>
  <Pressable onPress={() => router.push("profile")}>
    <Ionicons name="person-circle-outline" size={32} color="white" />
  </Pressable>
</View>

      {/* Quick Actions */}
      <View className="mt-6 px-4">
        <Text className="text-lg font-semibold mb-3 text-slate-800">Quick Access</Text>
        <View className="flex-row flex-wrap justify-between">
          {actions.map((item, idx) => (
            <Pressable
              key={idx}
              onPress={() => router.push(item.route)}
              className="w-[48%] bg-slate-100 rounded-2xl p-5 mb-4 flex-row items-center"
            >
              <Ionicons name={item.icon as any} size={28} color="#2563eb" />
              <Text className="ml-3 font-semibold text-slate-700">{item.title}</Text>
            </Pressable>
          ))}
        </View>
      </View>


      {/* Upcoming buses */}
      <View className="mt-4 px-4">
        <Text className="text-lg font-semibold mb-3 text-slate-800">Next Departures</Text>
        <View className="bg-yellow-100 p-4 rounded-xl mb-3">
          <Text className="font-bold text-slate-900">Colombo → Kandy</Text>
          <Text className="text-slate-600">Departure: 07:30 AM</Text>
        </View>
        <View className="bg-yellow-100 p-4 rounded-xl mb-3">
          <Text className="font-bold text-slate-900">Kandy → Colombo</Text>
          <Text className="text-slate-600">Departure: 09:00 AM</Text>
        </View>
      </View>
    </ScrollView>
  );
}
