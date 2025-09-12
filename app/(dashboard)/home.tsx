
// import { View, Text, Pressable, ScrollView, Image } from "react-native";
// import React from "react"
// import { useRouter } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";

// export default function HomeScreen() {
//   const router = useRouter();

//   const actions = [
//     { title: "Bus Timetable", icon: "time-outline", route: "journeys" },
//     { title: "Routes", icon: "map-outline", route: "journeys" },
//     { title: "Seat Booking", icon: "ticket-outline", route: "journeys" },
//     { title: "Payments", icon: "card-outline", route: "payments" },
//   ];

//   return (
//     <ScrollView className="flex-1 bg-white">
//       {/* Header */}
//           <View className="bg-blue-600 p-6 rounded-b-3xl flex-row items-center justify-between">
//   <View>
//     <Text className="text-2xl font-bold text-white">NCG Bus Service 🚍</Text>
//     <Text className="text-white mt-1">Your trusted express journey</Text>
//   </View>
//   <Pressable onPress={() => router.push("profile")}>
//     <Ionicons name="person-circle-outline" size={32} color="white" />
//   </Pressable>
// </View>

//       {/* Quick Actions */}
//       <View className="mt-6 px-4">
//         <Text className="text-lg font-semibold mb-3 text-slate-800">Quick Access</Text>
//         <View className="flex-row flex-wrap justify-between">
//           {actions.map((item, idx) => (
//             <Pressable
//               key={idx}
//               onPress={() => router.push(item.route)}
//               className="w-[48%] bg-slate-100 rounded-2xl p-5 mb-4 flex-row items-center"
//             >
//               <Ionicons name={item.icon as any} size={28} color="#2563eb" />
//               <Text className="ml-3 font-semibold text-slate-700">{item.title}</Text>
//             </Pressable>
//           ))}
//         </View>
//       </View>


//       {/* Upcoming buses */}
//       <View className="mt-4 px-4">
//         <Text className="text-lg font-semibold mb-3 text-slate-800">Next Departures</Text>
//         <View className="bg-yellow-100 p-4 rounded-xl mb-3">
//           <Text className="font-bold text-slate-900">Colombo → Kandy</Text>
//           <Text className="text-slate-600">Departure: 07:30 AM</Text>
//         </View>
//         <View className="bg-yellow-100 p-4 rounded-xl mb-3">
//           <Text className="font-bold text-slate-900">Kandy → Colombo</Text>
//           <Text className="text-slate-600">Departure: 09:00 AM</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }


"use client"

// import { View, Text, Pressable, ScrollView, Image } from "react-native";
// import React from "react"
// import { useRouter } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";

// export default function HomeScreen() {
//   const router = useRouter()

//   const actions = [
//     { title: "Bus Timetable", icon: "🕐", route: "/journeys", color: "#0EA5E9", bgColor: "#F0F9FF" },
//     { title: "Routes & Maps", icon: "🗺️", route: "/journeys", color: "#06B6D4", bgColor: "#ECFEFF" },
//     { title: "Seat Booking", icon: "🎫", route: "/journeys", color: "#8B5CF6", bgColor: "#FAF5FF" },
//     { title: "Payments", icon: "💳", route: "/payments", color: "#10B981", bgColor: "#F0FDF4" },
//   ]

//   const upcomingBuses = [
//     {
//       route: "Colombo → Kandy",
//       departure: "07:30 AM",
//       seats: "12 seats left",
//       duration: "3h 45m",
//       status: "On Time",
//       price: "Rs. 450",
//       busNumber: "NC-2847",
//     },
//     {
//       route: "Kandy → Colombo",
//       departure: "09:00 AM",
//       seats: "8 seats left",
//       duration: "3h 30m",
//       status: "Delayed 10m",
//       price: "Rs. 450",
//       busNumber: "NC-1923",
//     },
//     {
//       route: "Colombo → Galle",
//       departure: "10:15 AM",
//       seats: "15 seats left",
//       duration: "2h 20m",
//       status: "On Time",
//       price: "Rs. 320",
//       busNumber: "NC-5671",
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
//       <div className="px-4 pt-8 pb-6 rounded-b-[24px] shadow-xl relative overflow-hidden bg-slate-900">
//         <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12"></div>
//         <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>

//         <div className="flex items-center justify-between relative z-10">
//           <div className="flex-1">
//             <div className="flex items-center mb-2">
//               <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3 border border-white/30">
//                 <span className="text-lg">🚌</span>
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-white mb-0">NCG Express</h1>
//                 <p className="text-slate-200 text-xs font-medium">Sri Lanka's Premier Bus Service</p>
//               </div>
//             </div>
//             <div className="flex items-center mt-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5 w-fit border border-white/30">
//               <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 animate-pulse"></div>
//               <span className="text-white text-xs font-medium">Live Tracking Active</span>
//             </div>
//           </div>
//           <button
//             onClick={() => router.push("/profile")}
//             className="w-12 h-12 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg hover:bg-white/25 transition-all duration-300 border border-white/30 hover:scale-105"
//           >
//             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       <div className="mt-6 px-4">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold text-gray-800">Quick Services</h2>
//           <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center text-sm">
//             <span>View All</span>
//             <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         <div className="grid grid-cols-2 gap-3">
//           {actions.map((item, idx) => (
//             <button
//               key={idx}
//               onClick={() => router.push(item.route)}
//               className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
//             >
//               <div
//                 className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 text-2xl group-hover:scale-110 transition-transform duration-300"
//                 style={{ backgroundColor: item.bgColor, border: `2px solid ${item.color}20` }}
//               >
//                 <span style={{ filter: `hue-rotate(${idx * 30}deg)` }}>{item.icon}</span>
//               </div>
//               <h3 className="font-bold text-gray-800 text-sm leading-4 group-hover:text-blue-600 transition-colors">
//                 {item.title}
//               </h3>
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="mt-6 px-4 pb-6">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-bold text-gray-800">Live Departures</h2>
//           <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 text-sm">
//             <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//               />
//             </svg>
//             <span>Refresh</span>
//           </button>
//         </div>

//         <div className="space-y-3">
//           {upcomingBuses.map((bus, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
//             >
//               <div className="flex items-start justify-between mb-3">
//                 <div className="flex-1">
//                   <div className="flex items-center mb-1.5">
//                     <h3 className="text-lg font-bold text-gray-800 mr-2">{bus.route}</h3>
//                     <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
//                       {bus.busNumber}
//                     </span>
//                   </div>
//                   <div className="flex items-center text-gray-600 mb-1.5">
//                     <svg className="w-4 h-4 mr-1.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 8v4l3 3m6-3a9 9 0 00-18 0 9 9 0 0118 0z"
//                       />
//                     </svg>
//                     <span className="font-bold text-base text-gray-800">{bus.departure}</span>
//                     <span className="mx-2 text-gray-400">•</span>
//                     <span className="font-medium text-sm">{bus.duration}</span>
//                   </div>
//                   <div className="text-xl font-bold text-green-600">{bus.price}</div>
//                 </div>
//                 <div
//                   className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-sm ${
//                     bus.status === "On Time"
//                       ? "bg-green-100 text-green-700 border border-green-200"
//                       : "bg-orange-100 text-orange-700 border border-orange-200"
//                   }`}
//                 >
//                   {bus.status}
//                 </div>
//               </div>

//               <div className="flex items-center justify-between pt-3 border-t border-gray-100">
//                 <div className="flex items-center text-gray-600">
//                   <svg className="w-4 h-4 mr-1.5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                     />
//                   </svg>
//                   <span className="font-bold text-base">{bus.seats}</span>
//                 </div>
//                 <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
//                   Book Seat
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


import React, { useRef, useState } from "react";
import { View, Text, Pressable, ScrollView, Animated, Modal, Linking } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function HomeScreen() {
  const router = useRouter();
  const [aboutVisible, setAboutVisible] = useState(false); // About Modal state

  const actions = [
    { title: "Timetable", icon: "🕐", route: "/journeys" },
    { title: "Routes & Maps", icon: "🗺️", route: "/journeys" },
    { title: "Seat Reservations", icon: "🎫", route: "/journeys" },
    { title: "About Service", icon: "ℹ️", route: "about" },
    { title: "Feedback & Support", icon: "📢", route: "/complaints" },
    { title: "App Settings", icon: "⚙️", route: "/settings" },
  ];

  const ActionCard = ({ item }: any) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
      Animated.spring(scaleAnim, { toValue: 0.97, useNativeDriver: true }).start();
    };

    const handlePressOut = () => {
      Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
    };

    const handlePress = () => {
      if (item.route === "about") {
        setAboutVisible(true); // Show About modal
      } else {
        router.push(item.route); // Navigate normally
      }
    };

    return (
      <Animated.View
        style={{
          width: "48%",
          height: 160,
          marginBottom: 15,
          transform: [{ scale: scaleAnim }],
        }}
      >
        <Pressable onPress={handlePress} onPressIn={handlePressIn} onPressOut={handlePressOut} style={{ flex: 1 }}>
          <LinearGradient
            colors={["#1E3A8A", "#274BB0"]}
            start={[0, 0]}
            end={[1, 1]}
            style={{
              borderRadius: 20,
              padding: 20,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "#1E3A8A",
              shadowOpacity: 0.25,
              shadowRadius: 8,
              shadowOffset: { width: 0, height: 4 },
              elevation: 6,
              flex: 1,
            }}
          >
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: "rgba(255,255,255,0.15)",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 12,
              }}
            >
              <Text style={{ fontSize: 28 }}>{item.icon}</Text>
            </View>
            <Text style={{ color: "white", fontWeight: "600", fontSize: 16, textAlign: "center" }} numberOfLines={2} ellipsizeMode="tail">
              {item.title}
            </Text>
          </LinearGradient>
        </Pressable>
      </Animated.View>
    );
  };

  // About Content
  const AboutContent = () => (
    <ScrollView style={{ flex: 1, backgroundColor: "#F9FAFB", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1E3A8A", marginBottom: 10 }}>About NCG Express</Text>
      <Text style={{ fontSize: 16, color: "#374151", lineHeight: 24, marginBottom: 15 }}>
        NCG Express provides safe, reliable, and comfortable bus travel across Sri Lanka. Our luxury fleet, live tracking, online reservations, and professional service redefine public transportation.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#111827", marginBottom: 10 }}>Key Features</Text>
      {[
        { icon: <FontAwesome5 name="bus" size={18} color="#1E3A8A" />, text: "Luxury and super luxury bus services" },
        { icon: <MaterialIcons name="location-pin" size={20} color="#1E3A8A" />, text: "Real-time bus tracking & updates" },
        { icon: <MaterialIcons name="event-seat" size={20} color="#1E3A8A" />, text: "Online seat reservations" },
        { icon: <MaterialIcons name="support-agent" size={20} color="#1E3A8A" />, text: "24/7 customer support" },
      ].map((f, idx) => (
        <View
          key={idx}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            padding: 12,
            borderRadius: 16,
            marginBottom: 10,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 6,
            elevation: 2,
          }}
        >
          {f.icon}
          <Text style={{ marginLeft: 10, fontSize: 15, color: "#374151" }}>{f.text}</Text>
        </View>
      ))}

      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#111827", marginVertical: 10 }}>Contact Us</Text>
      <Pressable onPress={() => Linking.openURL("tel:+94112233445")} style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
        <MaterialIcons name="phone" size={20} color="#1E3A8A" />
        <Text style={{ marginLeft: 10, color: "#1E3A8A", fontSize: 15 }}>+94 11 223 3445</Text>
      </Pressable>
      <Pressable onPress={() => Linking.openURL("mailto:support@ncgexpress.lk")} style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
        <MaterialIcons name="email" size={20} color="#1E3A8A" />
        <Text style={{ marginLeft: 10, color: "#1E3A8A", fontSize: 15 }}>support@ncgexpress.lk</Text>
      </Pressable>
      <Pressable onPress={() => Linking.openURL("https://ncgexpress.lk")} style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
        <FontAwesome5 name="globe" size={18} color="#1E3A8A" />
        <Text style={{ marginLeft: 10, color: "#1E3A8A", fontSize: 15 }}>www.ncgexpress.lk</Text>
      </Pressable>

      <Pressable onPress={() => setAboutVisible(false)} style={{ marginTop: 20, backgroundColor: "#1E3A8A", padding: 12, borderRadius: 12, alignItems: "center" }}>
        <Text style={{ color: "white", fontWeight: "600" }}>Close</Text>
      </Pressable>
    </ScrollView>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#E8F0F8" }} contentContainerStyle={{ paddingBottom: 20 }}>
      {/* Header */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 50,
          paddingBottom: 25,
          borderBottomLeftRadius: 28,
          borderBottomRightRadius: 28,
          backgroundColor: "#1E3A8A",
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 5 },
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View>
            <Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>NCG Express</Text>
            <Text style={{ color: "#D1D5DB", fontSize: 14, marginTop: 2 }}>Sri Lanka's Premier Bus Service</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                backgroundColor: "rgba(255,255,255,0.15)",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 20,
              }}
            >
              <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#10B981", marginRight: 6 }} />
              <Text style={{ color: "white", fontSize: 12 }}>Live Tracking Active</Text>
            </View>
          </View>
          <Pressable
            onPress={() => router.push("/profile")}
            style={{
              width: 50,
              height: 50,
              backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: 14,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>👤</Text>
          </Pressable>
        </View>
      </View>

      {/* Quick Services */}
      <View style={{ marginTop: 25, paddingHorizontal: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#111827" }}>Quick Services</Text>
          <Pressable>
            <Text style={{ color: "#1E3A8A", fontWeight: "600", fontSize: 14 }}>View All</Text>
          </Pressable>
        </View>

        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {actions.map((item, idx) => (
            <ActionCard key={idx} item={item} />
          ))}
        </View>
      </View>

      {/* About Modal */}
      <Modal animationType="slide" visible={aboutVisible}>
        <AboutContent />
      </Modal>
    </ScrollView>
  );
}



