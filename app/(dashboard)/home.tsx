// import React, { useRef, useState } from "react";
// import { View, Text, Pressable, ScrollView, Animated, Modal, Linking } from "react-native";
// import { useRouter } from "expo-router";
// import { LinearGradient } from "expo-linear-gradient";
// import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

// export default function HomeScreen() {
//   const router = useRouter();
//   const [aboutVisible, setAboutVisible] = useState(false); // About Modal state

//   const actions = [
//     { title: "Timetable", icon: "🕐", route: "/journeys" },
//     { title: "Routes & Maps", icon: "🗺️", route: "/journeys" },
//     { title: "Seat Reservations", icon: "🎫", route: "/journeys" },
//     { title: "About Service", icon: "ℹ️", route: "about" },
//     { title: "Feedback & Support", icon: "📢", route: "/complaints" },
//     { title: "App Settings", icon: "⚙️", route: "/settings" },
//   ];

//   const ActionCard = ({ item }: any) => {
//     const scaleAnim = useRef(new Animated.Value(1)).current;

//     const handlePressIn = () => {
//       Animated.spring(scaleAnim, { toValue: 0.97, useNativeDriver: true }).start();
//     };

//     const handlePressOut = () => {
//       Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
//     };

//     const handlePress = () => {
//       if (item.route === "about") {
//         setAboutVisible(true); // Show About modal
//       } else {
//         router.push(item.route); // Navigate normally
//       }
//     };

//     return (
//       <Animated.View
//         style={{
//           width: "48%",
//           height: 160,
//           marginBottom: 15,
//           transform: [{ scale: scaleAnim }],
//         }}
//       >
//         <Pressable onPress={handlePress} onPressIn={handlePressIn} onPressOut={handlePressOut} style={{ flex: 1 }}>
//           <LinearGradient
//             colors={["#1E3A8A", "#274BB0"]}
//             start={[0, 0]}
//             end={[1, 1]}
//             style={{
//               borderRadius: 20,
//               padding: 20,
//               alignItems: "center",
//               justifyContent: "center",
//               shadowColor: "#1E3A8A",
//               shadowOpacity: 0.25,
//               shadowRadius: 8,
//               shadowOffset: { width: 0, height: 4 },
//               elevation: 6,
//               flex: 1,
//             }}
//           >
//             <View
//               style={{
//                 width: 56,
//                 height: 56,
//                 borderRadius: 28,
//                 backgroundColor: "rgba(255,255,255,0.15)",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 marginBottom: 12,
//               }}
//             >
//               <Text style={{ fontSize: 28 }}>{item.icon}</Text>
//             </View>
//             <Text style={{ color: "white", fontWeight: "600", fontSize: 16, textAlign: "center" }} numberOfLines={2} ellipsizeMode="tail">
//               {item.title}
//             </Text>
//           </LinearGradient>
//         </Pressable>
//       </Animated.View>
//     );
//   };

//   // About Content
//   const AboutContent = () => (
//     <ScrollView style={{ flex: 1, backgroundColor: "#F9FAFB", padding: 20 }}>
//       <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1E3A8A", marginBottom: 10 }}>About NCG Express</Text>
//       <Text style={{ fontSize: 16, color: "#374151", lineHeight: 24, marginBottom: 15 }}>
//         NCG Express provides safe, reliable, and comfortable bus travel across Sri Lanka. Our luxury fleet, live tracking, online reservations, and professional service redefine public transportation.
//       </Text>

//       <Text style={{ fontSize: 18, fontWeight: "bold", color: "#111827", marginBottom: 10 }}>Key Features</Text>
//       {[
//         { icon: <FontAwesome5 name="bus" size={18} color="#1E3A8A" />, text: "Luxury and super luxury bus services" },
//         { icon: <MaterialIcons name="location-pin" size={20} color="#1E3A8A" />, text: "Real-time bus tracking & updates" },
//         { icon: <MaterialIcons name="event-seat" size={20} color="#1E3A8A" />, text: "Online seat reservations" },
//         { icon: <MaterialIcons name="support-agent" size={20} color="#1E3A8A" />, text: "24/7 customer support" },
//       ].map((f, idx) => (
//         <View
//           key={idx}
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             backgroundColor: "white",
//             padding: 12,
//             borderRadius: 16,
//             marginBottom: 10,
//             shadowColor: "#000",
//             shadowOpacity: 0.05,
//             shadowRadius: 6,
//             elevation: 2,
//           }}
//         >
//           {f.icon}
//           <Text style={{ marginLeft: 10, fontSize: 15, color: "#374151" }}>{f.text}</Text>
//         </View>
//       ))}

//       <Text style={{ fontSize: 18, fontWeight: "bold", color: "#111827", marginVertical: 10 }}>Contact Us</Text>
//       <Pressable onPress={() => Linking.openURL("tel:+94112233445")} style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
//         <MaterialIcons name="phone" size={20} color="#1E3A8A" />
//         <Text style={{ marginLeft: 10, color: "#1E3A8A", fontSize: 15 }}>+94 11 223 3445</Text>
//       </Pressable>
//       <Pressable onPress={() => Linking.openURL("mailto:support@ncgexpress.lk")} style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
//         <MaterialIcons name="email" size={20} color="#1E3A8A" />
//         <Text style={{ marginLeft: 10, color: "#1E3A8A", fontSize: 15 }}>support@ncgexpress.lk</Text>
//       </Pressable>
//       <Pressable onPress={() => Linking.openURL("https://ncgexpress.lk")} style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
//         <FontAwesome5 name="globe" size={18} color="#1E3A8A" />
//         <Text style={{ marginLeft: 10, color: "#1E3A8A", fontSize: 15 }}>www.ncgexpress.lk</Text>
//       </Pressable>

//       <Pressable onPress={() => setAboutVisible(false)} style={{ marginTop: 20, backgroundColor: "#1E3A8A", padding: 12, borderRadius: 12, alignItems: "center" }}>
//         <Text style={{ color: "white", fontWeight: "600" }}>Close</Text>
//       </Pressable>
//     </ScrollView>
//   );

//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: "#E8F0F8" }} contentContainerStyle={{ paddingBottom: 20 }}>
//       {/* Header */}
//       <View
//         style={{
//           paddingHorizontal: 20,
//           paddingTop: 50,
//           paddingBottom: 25,
//           borderBottomLeftRadius: 28,
//           borderBottomRightRadius: 28,
//           backgroundColor: "#1E3A8A",
//           shadowColor: "#000",
//           shadowOpacity: 0.2,
//           shadowRadius: 10,
//           shadowOffset: { width: 0, height: 5 },
//         }}
//       >
//         <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//           <View>
//             <Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>NCG Express</Text>
//             <Text style={{ color: "#D1D5DB", fontSize: 14, marginTop: 2 }}>Sri Lanka's Premier Bus Service</Text>
//             <View
//               style={{
//                 flexDirection: "row",
//                 alignItems: "center",
//                 marginTop: 10,
//                 backgroundColor: "rgba(255,255,255,0.15)",
//                 paddingHorizontal: 10,
//                 paddingVertical: 5,
//                 borderRadius: 20,
//               }}
//             >
//               <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: "#10B981", marginRight: 6 }} />
//               <Text style={{ color: "white", fontSize: 12 }}>Live Tracking Active</Text>
//             </View>
//           </View>
//           <Pressable
//             onPress={() => router.push("/profile")}
//             style={{
//               width: 50,
//               height: 50,
//               backgroundColor: "rgba(255,255,255,0.2)",
//               borderRadius: 14,
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Text style={{ color: "white", fontSize: 20 }}>👤</Text>
//           </Pressable>
//         </View>
//       </View>

//       {/* Quick Services */}
//       <View style={{ marginTop: 25, paddingHorizontal: 20 }}>
//         <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
//           <Text style={{ fontSize: 20, fontWeight: "bold", color: "#111827" }}>Quick Services</Text>
//           <Pressable>
//             <Text style={{ color: "#1E3A8A", fontWeight: "600", fontSize: 14 }}>View All</Text>
//           </Pressable>
//         </View>

//         <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
//           {actions.map((item, idx) => (
//             <ActionCard key={idx} item={item} />
//           ))}
//         </View>
//       </View>

//       {/* About Modal */}
//       <Modal animationType="slide" visible={aboutVisible}>
//         <AboutContent />
//       </Modal>
//     </ScrollView>
//   );
// }



import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Animated,
  Modal,
  Linking,
  TextInput,
  Switch,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function HomeScreen() {
  const router = useRouter();

  // Modal states
  const [aboutVisible, setAboutVisible] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [settingsVisible, setSettingsVisible] = useState(false);

  // Settings state
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  // Feedback form state
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });

  const actions = [
    { title: "Timetable", icon: "🕐", route: "/journeys" },
    { title: "Routes & Maps", icon: "🗺️", route: "/journeys" },
    { title: "Seat Reservations", icon: "🎫", route: "/journeys" },
    { title: "About Service", icon: "ℹ️", route: "about" },
    { title: "Feedback & Support", icon: "📢", route: "feedback" },
    { title: "App Settings", icon: "⚙️", route: "settings" },
  ];

  // Card component
  const ActionCard = ({ item }: any) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
      Animated.spring(scaleAnim, { toValue: 0.97, useNativeDriver: true }).start();
    };

    const handlePressOut = () => {
      Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
    };

    const handlePress = () => {
      if (item.route === "about") setAboutVisible(true);
      else if (item.route === "feedback") setFeedbackVisible(true);
      else if (item.route === "settings") setSettingsVisible(true);
      else router.push(item.route);
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
        <Pressable
          onPress={handlePress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={{ flex: 1 }}
        >
          <LinearGradient
            colors={["#1E3A8A", "#274BB0"]}
            start={[0, 0]}
            end={[1, 1]}
            style={{
              borderRadius: 20,
              padding: 20,
              alignItems: "center",
              justifyContent: "center",
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
            <Text
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: 16,
                textAlign: "center",
              }}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
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
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1E3A8A", marginBottom: 10 }}>
        About NCG Express
      </Text>
      <Text style={{ fontSize: 16, color: "#374151", lineHeight: 24, marginBottom: 15 }}>
        NCG Express provides safe, reliable, and comfortable bus travel across Sri Lanka.
        Our luxury fleet, live tracking, online reservations, and professional service
        redefine public transportation.
      </Text>

      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Key Features</Text>
      {[
        { icon: <FontAwesome5 name="bus" size={18} color="#1E3A8A" />, text: "Luxury and super luxury bus services" },
        { icon: <MaterialIcons name="location-pin" size={20} color="#1E3A8A" />, text: "Real-time bus tracking & updates" },
        { icon: <MaterialIcons name="event-seat" size={20} color="#1E3A8A" />, text: "Online seat reservations" },
        { icon: <MaterialIcons name="support-agent" size={20} color="#1E3A8A" />, text: "24/7 customer support" },
      ].map((f, idx) => (
        <View key={idx} style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 12, borderRadius: 16, marginBottom: 10 }}>
          {f.icon}
          <Text style={{ marginLeft: 10 }}>{f.text}</Text>
        </View>
      ))}

      <Pressable
        onPress={() => setAboutVisible(false)}
        style={{ marginTop: 20, backgroundColor: "#1E3A8A", padding: 12, borderRadius: 12, alignItems: "center" }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>Close</Text>
      </Pressable>
    </ScrollView>
  );

  // Feedback Content
  const FeedbackContent = () => (
    <ScrollView style={{ flex: 1, backgroundColor: "#F9FAFB", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1E3A8A", marginBottom: 20 }}>
        Feedback & Support
      </Text>

      <TextInput
        placeholder="Your Name"
        value={feedback.name}
        onChangeText={(t) => setFeedback({ ...feedback, name: t })}
        style={{ backgroundColor: "white", padding: 12, borderRadius: 12, marginBottom: 12 }}
      />
      <TextInput
        placeholder="Email"
        value={feedback.email}
        onChangeText={(t) => setFeedback({ ...feedback, email: t })}
        style={{ backgroundColor: "white", padding: 12, borderRadius: 12, marginBottom: 12 }}
      />
      <TextInput
        placeholder="Your Message"
        value={feedback.message}
        onChangeText={(t) => setFeedback({ ...feedback, message: t })}
        multiline
        style={{ backgroundColor: "white", padding: 12, borderRadius: 12, height: 120, marginBottom: 12 }}
      />

      <Pressable
        onPress={() => {
          Alert.alert("Feedback Submitted", "Thank you for your message!");
          setFeedbackVisible(false);
        }}
        style={{ backgroundColor: "#1E3A8A", padding: 14, borderRadius: 12, alignItems: "center" }}
      >
        <Text style={{ color: "white", fontWeight: "600" }}>Submit</Text>
      </Pressable>

      <Pressable onPress={() => setFeedbackVisible(false)} style={{ marginTop: 10, alignItems: "center" }}>
        <Text style={{ color: "#6B7280" }}>Cancel</Text>
      </Pressable>
    </ScrollView>
  );

  // Settings Content
  const SettingsContent = () => (
    <ScrollView style={{ flex: 1, backgroundColor: "#F9FAFB", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1E3A8A", marginBottom: 20 }}>
        App Settings
      </Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
        <Text style={{ fontSize: 16, color: "#111827" }}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
        <Text style={{ fontSize: 16, color: "#111827" }}>Push Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontSize: 16, color: "#111827", marginBottom: 8 }}>Language</Text>
        <View style={{ borderWidth: 1, borderColor: "#D1D5DB", borderRadius: 12 }}>
          <Pressable onPress={() => setLanguage("English")} style={{ padding: 12, backgroundColor: language === "English" ? "#E0E7FF" : "white", borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
            <Text style={{ color: "#111827" }}>English</Text>
          </Pressable>
        </View>
      </View>

      <Pressable
        onPress={() => setSettingsVisible(false)}
        style={{ marginTop: 20, backgroundColor: "#1E3A8A", padding: 12, borderRadius: 12, alignItems: "center" }}
      >
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
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View>
            <Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>NCG Express</Text>
            <Text style={{ color: "#D1D5DB", fontSize: 14, marginTop: 2 }}>Sri Lanka's Premier Bus Service</Text>
          </View>
          <Pressable onPress={() => router.push("/profile")} style={{ width: 50, height: 50, borderRadius: 14, backgroundColor: "rgba(255,255,255,0.2)", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: 20 }}>👤</Text>
          </Pressable>
        </View>
      </View>

      {/* Quick Services */}
      <View style={{ marginTop: 25, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>Quick Services</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {actions.map((item, idx) => (
            <ActionCard key={idx} item={item} />
          ))}
        </View>
      </View>

      {/* Modals */}
      <Modal animationType="slide" visible={aboutVisible}><AboutContent /></Modal>
      <Modal animationType="slide" visible={feedbackVisible}><FeedbackContent /></Modal>
      <Modal animationType="slide" visible={settingsVisible}><SettingsContent /></Modal>
    </ScrollView>
  );
}
