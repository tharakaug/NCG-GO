// import React, { useRef, useState } from "react";
// import {
//   View,
//   Text,
//   Pressable,
//   ScrollView,
//   Animated,
//   Modal,
//   Linking,
//   TextInput,
//   Switch,
//   Alert,
// } from "react-native";
// import { useRouter } from "expo-router";
// import { LinearGradient } from "expo-linear-gradient";
// import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

// export default function HomeScreen() {
//   const router = useRouter();

//   // Modal states
//   const [aboutVisible, setAboutVisible] = useState(false);
//   const [feedbackVisible, setFeedbackVisible] = useState(false);
//   const [settingsVisible, setSettingsVisible] = useState(false);

//   // Settings state
//   const [darkMode, setDarkMode] = useState(false);
//   const [notifications, setNotifications] = useState(true);
//   const [language, setLanguage] = useState("English");

//   // Feedback form state
//   const [feedback, setFeedback] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const actions = [
//     { title: "Timetable", icon: "🕐", route: "/journeys" },
//     { title: "Routes & Maps", icon: "🗺️", route: "/journeys" },
//     { title: "Seat Reservations", icon: "🎫", route: "/journeys" },
//     { title: "About Service", icon: "ℹ️", route: "about" },
//     { title: "Feedback & Support", icon: "📢", route: "feedback" },
//     { title: "App Settings", icon: "⚙️", route: "settings" },
//   ];

//   // Card component
//   const ActionCard = ({ item }: any) => {
//     const scaleAnim = useRef(new Animated.Value(1)).current;

//     const handlePressIn = () => {
//       Animated.spring(scaleAnim, { toValue: 0.97, useNativeDriver: true }).start();
//     };

//     const handlePressOut = () => {
//       Animated.spring(scaleAnim, { toValue: 1, useNativeDriver: true }).start();
//     };

//     const handlePress = () => {
//       if (item.route === "about") setAboutVisible(true);
//       else if (item.route === "feedback") setFeedbackVisible(true);
//       else if (item.route === "settings") setSettingsVisible(true);
//       else router.push(item.route);
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
//         <Pressable
//           onPress={handlePress}
//           onPressIn={handlePressIn}
//           onPressOut={handlePressOut}
//           style={{ flex: 1 }}
//         >
//           <LinearGradient
//             colors={["#1E3A8A", "#274BB0"]}
//             start={[0, 0]}
//             end={[1, 1]}
//             style={{
//               borderRadius: 20,
//               padding: 20,
//               alignItems: "center",
//               justifyContent: "center",
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
//             <Text
//               style={{
//                 color: "white",
//                 fontWeight: "600",
//                 fontSize: 16,
//                 textAlign: "center",
//               }}
//               numberOfLines={2}
//               ellipsizeMode="tail"
//             >
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
//       <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1E3A8A", marginBottom: 10 }}>
//         About NCG Express
//       </Text>
//       <Text style={{ fontSize: 16, color: "#374151", lineHeight: 24, marginBottom: 15 }}>
//         NCG Express provides safe, reliable, and comfortable bus travel across Sri Lanka.
//         Our luxury fleet, live tracking, online reservations, and professional service
//         redefine public transportation.
//       </Text>

//       <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Key Features</Text>
//       {[
//         { icon: <FontAwesome5 name="bus" size={18} color="#1E3A8A" />, text: "Luxury and super luxury bus services" },
//         { icon: <MaterialIcons name="location-pin" size={20} color="#1E3A8A" />, text: "Real-time bus tracking & updates" },
//         { icon: <MaterialIcons name="event-seat" size={20} color="#1E3A8A" />, text: "Online seat reservations" },
//         { icon: <MaterialIcons name="support-agent" size={20} color="#1E3A8A" />, text: "24/7 customer support" },
//       ].map((f, idx) => (
//         <View key={idx} style={{ flexDirection: "row", alignItems: "center", backgroundColor: "white", padding: 12, borderRadius: 16, marginBottom: 10 }}>
//           {f.icon}
//           <Text style={{ marginLeft: 10 }}>{f.text}</Text>
//         </View>
//       ))}

//       <Pressable
//         onPress={() => setAboutVisible(false)}
//         style={{ marginTop: 20, backgroundColor: "#1E3A8A", padding: 12, borderRadius: 12, alignItems: "center" }}
//       >
//         <Text style={{ color: "white", fontWeight: "600" }}>Close</Text>
//       </Pressable>
//     </ScrollView>
//   );

//   // Feedback Content
//   const FeedbackContent = () => (
//     <ScrollView style={{ flex: 1, backgroundColor: "#F9FAFB", padding: 20 }}>
//       <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1E3A8A", marginBottom: 20 }}>
//         Feedback & Support
//       </Text>

//       <TextInput
//         placeholder="Your Name"
//         value={feedback.name}
//         onChangeText={(t) => setFeedback({ ...feedback, name: t })}
//         style={{ backgroundColor: "white", padding: 12, borderRadius: 12, marginBottom: 12 }}
//       />
//       <TextInput
//         placeholder="Email"
//         value={feedback.email}
//         onChangeText={(t) => setFeedback({ ...feedback, email: t })}
//         style={{ backgroundColor: "white", padding: 12, borderRadius: 12, marginBottom: 12 }}
//       />
//       <TextInput
//         placeholder="Your Message"
//         value={feedback.message}
//         onChangeText={(t) => setFeedback({ ...feedback, message: t })}
//         multiline
//         style={{ backgroundColor: "white", padding: 12, borderRadius: 12, height: 120, marginBottom: 12 }}
//       />

//       <Pressable
//         onPress={() => {
//           Alert.alert("Feedback Submitted", "Thank you for your message!");
//           setFeedbackVisible(false);
//         }}
//         style={{ backgroundColor: "#1E3A8A", padding: 14, borderRadius: 12, alignItems: "center" }}
//       >
//         <Text style={{ color: "white", fontWeight: "600" }}>Submit</Text>
//       </Pressable>

//       <Pressable onPress={() => setFeedbackVisible(false)} style={{ marginTop: 10, alignItems: "center" }}>
//         <Text style={{ color: "#6B7280" }}>Cancel</Text>
//       </Pressable>
//     </ScrollView>
//   );

//   // Settings Content
//   const SettingsContent = () => (
//     <ScrollView style={{ flex: 1, backgroundColor: "#F9FAFB", padding: 20 }}>
//       <Text style={{ fontSize: 24, fontWeight: "bold", color: "#1E3A8A", marginBottom: 20 }}>
//         App Settings
//       </Text>

//       <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
//         <Text style={{ fontSize: 16, color: "#111827" }}>Dark Mode</Text>
//         <Switch value={darkMode} onValueChange={setDarkMode} />
//       </View>

//       <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 }}>
//         <Text style={{ fontSize: 16, color: "#111827" }}>Push Notifications</Text>
//         <Switch value={notifications} onValueChange={setNotifications} />
//       </View>

//       <View style={{ marginBottom: 15 }}>
//         <Text style={{ fontSize: 16, color: "#111827", marginBottom: 8 }}>Language</Text>
//         <View style={{ borderWidth: 1, borderColor: "#D1D5DB", borderRadius: 12 }}>
//           <Pressable onPress={() => setLanguage("English")} style={{ padding: 12, backgroundColor: language === "English" ? "#E0E7FF" : "white", borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
//             <Text style={{ color: "#111827" }}>English</Text>
//           </Pressable>
//         </View>
//       </View>

//       <Pressable
//         onPress={() => setSettingsVisible(false)}
//         style={{ marginTop: 20, backgroundColor: "#1E3A8A", padding: 12, borderRadius: 12, alignItems: "center" }}
//       >
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
//         }}
//       >
//         <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//           <View>
//             <Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>NCG Express</Text>
//             <Text style={{ color: "#D1D5DB", fontSize: 14, marginTop: 2 }}>Sri Lanka's Premier Bus Service</Text>
//           </View>
//           <Pressable onPress={() => router.push("/profile")} style={{ width: 50, height: 50, borderRadius: 14, backgroundColor: "rgba(255,255,255,0.2)", alignItems: "center", justifyContent: "center" }}>
//             <Text style={{ color: "white", fontSize: 20 }}>👤</Text>
//           </Pressable>
//         </View>
//       </View>

//       {/* Quick Services */}
//       <View style={{ marginTop: 25, paddingHorizontal: 20 }}>
//         <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>Quick Services</Text>
//         <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
//           {actions.map((item, idx) => (
//             <ActionCard key={idx} item={item} />
//           ))}
//         </View>
//       </View>

//       {/* Modals */}
//       <Modal animationType="slide" visible={aboutVisible}><AboutContent /></Modal>
//       <Modal animationType="slide" visible={feedbackVisible}><FeedbackContent /></Modal>
//       <Modal animationType="slide" visible={settingsVisible}><SettingsContent /></Modal>
//     </ScrollView>
//   );
// }

// import React, { useRef, useState } from "react";
// import {
//   View,
//   Text,
//   Pressable,
//   ScrollView,
//   Animated,
//   Modal,
//   Linking,
//   TextInput,
//   Switch,
//   Alert,
//   StatusBar,
// } from "react-native";
// import { useRouter } from "expo-router";
// import { LinearGradient } from "expo-linear-gradient";
// import { MaterialIcons, FontAwesome5, Ionicons } from "@expo/vector-icons";

// export default function HomeScreen() {
//   const router = useRouter();

//   // Modal states
//   const [aboutVisible, setAboutVisible] = useState(false);
//   const [feedbackVisible, setFeedbackVisible] = useState(false);
//   const [settingsVisible, setSettingsVisible] = useState(false);

//   // Settings state
//   const [darkMode, setDarkMode] = useState(true);
//   const [notifications, setNotifications] = useState(true);
//   const [language, setLanguage] = useState("English");

//   // Feedback form state
//   const [feedback, setFeedback] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const actions = [
//     { 
//       title: "Timetable", 
//       icon: "time-outline", 
//       route: "/journeys",
//       gradient: ["#06B6D4", "#2563EB"],
//       shadowColor: "#06B6D4",
//     },
//     { 
//       title: "Routes & Maps", 
//       icon: "map-outline", 
//       route: "/journeys",
//       gradient: ["#10B981", "#0D9488"],
//       shadowColor: "#10B981",
//     },
//     { 
//       title: "Seat Reservations", 
//       icon: "ticket-outline", 
//       route: "/journeys",
//       gradient: ["#8B5CF6", "#9333EA"],
//       shadowColor: "#8B5CF6",
//     },
//     { 
//       title: "About Service", 
//       icon: "information-circle-outline", 
//       route: "about",
//       gradient: ["#F97316", "#DC2626"],
//       shadowColor: "#F97316",
//     },
//     { 
//       title: "Feedback & Support", 
//       icon: "chatbubbles-outline", 
//       route: "feedback",
//       gradient: ["#EC4899", "#F43F5E"],
//       shadowColor: "#EC4899",
//     },
//     { 
//       title: "App Settings", 
//       icon: "settings-outline", 
//       route: "settings",
//       gradient: ["#F59E0B", "#EAB308"],
//       shadowColor: "#F59E0B",
//     },
//   ];

//   // Card component with exact web colors
//   const ActionCard = ({ item }: any) => {
//     const scaleAnim = useRef(new Animated.Value(1)).current;

//     const handlePressIn = () => {
//       Animated.spring(scaleAnim, { 
//         toValue: 0.95, 
//         useNativeDriver: true,
//         tension: 100,
//         friction: 7
//       }).start();
//     };

//     const handlePressOut = () => {
//       Animated.spring(scaleAnim, { 
//         toValue: 1, 
//         useNativeDriver: true,
//         tension: 100,
//         friction: 7
//       }).start();
//     };

//     const handlePress = () => {
//       if (item.route === "about") setAboutVisible(true);
//       else if (item.route === "feedback") setFeedbackVisible(true);
//       else if (item.route === "settings") setSettingsVisible(true);
//       else router.push(item.route);
//     };

//     return (
//       <Animated.View
//         style={{
//           width: "48%",
//           height: 170,
//           marginBottom: 16,
//           transform: [{ scale: scaleAnim }],
//         }}
//       >
//         <Pressable
//           onPress={handlePress}
//           onPressIn={handlePressIn}
//           onPressOut={handlePressOut}
//           style={{ flex: 1 }}
//         >
//           <LinearGradient
//             colors={item.gradient}
//             start={[0, 0]}
//             end={[1, 1]}
//             style={{
//               borderRadius: 24,
//               padding: 20,
//               alignItems: "center",
//               justifyContent: "center",
//               flex: 1,
//               shadowColor: item.shadowColor,
//               shadowOffset: { width: 0, height: 8 },
//               shadowOpacity: 0.6,
//               shadowRadius: 16,
//               elevation: 12,
//             }}
//           >
//             <View
//               style={{
//                 width: 68,
//                 height: 68,
//                 borderRadius: 34,
//                 backgroundColor: "rgba(255,255,255,0.2)",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 marginBottom: 14,
//                 borderWidth: 2,
//                 borderColor: "rgba(255,255,255,0.3)",
//               }}
//             >
//               <Ionicons name={item.icon as any} size={34} color="white" />
//             </View>
//             <Text
//               style={{
//                 color: "white",
//                 fontWeight: "800",
//                 fontSize: 15,
//                 textAlign: "center",
//                 letterSpacing: 0.5,
//                 textShadowColor: "rgba(0,0,0,0.3)",
//                 textShadowOffset: { width: 0, height: 2 },
//                 textShadowRadius: 4,
//               }}
//               numberOfLines={2}
//               ellipsizeMode="tail"
//             >
//               {item.title}
//             </Text>
//           </LinearGradient>
//         </Pressable>
//       </Animated.View>
//     );
//   };

//   // About Content with matching colors
//   const AboutContent = () => (
//     <View style={{ flex: 1, backgroundColor: "#020617" }}>
//       <LinearGradient
//         colors={["#10B981", "#0D9488"]}
//         start={[0, 0]}
//         end={[1, 1]}
//         style={{
//           paddingTop: 60,
//           paddingBottom: 30,
//           paddingHorizontal: 24,
//           borderBottomLeftRadius: 32,
//           borderBottomRightRadius: 32,
//         }}
//       >
//         <Pressable
//           onPress={() => setAboutVisible(false)}
//           style={{ position: "absolute", top: 50, right: 20, zIndex: 10 }}
//         >
//           <Ionicons name="close-circle" size={36} color="white" />
//         </Pressable>
//         <Text style={{ fontSize: 34, fontWeight: "bold", color: "white", marginBottom: 8, letterSpacing: 0.5 }}>
//           About NCG Express
//         </Text>
//         <Text style={{ fontSize: 16, color: "rgba(255,255,255,0.95)", lineHeight: 22 }}>
//           Your trusted travel companion
//         </Text>
//       </LinearGradient>

//       <ScrollView style={{ flex: 1, padding: 24 }}>
//         <View style={{ 
//           backgroundColor: "#0F172A", 
//           borderRadius: 24, 
//           padding: 24, 
//           marginBottom: 20,
//           borderWidth: 1,
//           borderColor: "#1E293B",
//           shadowColor: "#10B981",
//           shadowOffset: { width: 0, height: 4 },
//           shadowOpacity: 0.3,
//           shadowRadius: 12,
//           elevation: 8,
//         }}>
//           <Text style={{ fontSize: 16, color: "#CBD5E1", lineHeight: 26, marginBottom: 24 }}>
//             NCG Express provides safe, reliable, and comfortable bus travel across Sri Lanka.
//             Our luxury fleet, live tracking, online reservations, and professional service
//             redefine public transportation.
//           </Text>

//           <Text style={{ fontSize: 22, fontWeight: "bold", color: "#F1F5F9", marginBottom: 18, letterSpacing: 0.3 }}>
//             Key Features
//           </Text>
//           {[
//             { icon: "directions-bus", text: "Luxury and super luxury bus services", color: "#06B6D4" },
//             { icon: "location-on", text: "Real-time bus tracking & updates", color: "#10B981" },
//             { icon: "event-seat", text: "Online seat reservations", color: "#8B5CF6" },
//             { icon: "support-agent", text: "24/7 customer support", color: "#F97316" },
//           ].map((f, idx) => (
//             <View key={idx} style={{ 
//               flexDirection: "row", 
//               alignItems: "center", 
//               backgroundColor: "#1E293B", 
//               padding: 18, 
//               borderRadius: 18, 
//               marginBottom: 14,
//               borderLeftWidth: 4,
//               borderLeftColor: f.color,
//               shadowColor: f.color,
//               shadowOffset: { width: 0, height: 2 },
//               shadowOpacity: 0.4,
//               shadowRadius: 8,
//             }}>
//               <View style={{ 
//                 width: 44, 
//                 height: 44, 
//                 borderRadius: 22, 
//                 backgroundColor: `${f.color}20`, 
//                 alignItems: "center", 
//                 justifyContent: "center" 
//               }}>
//                 <MaterialIcons name={f.icon as any} size={24} color={f.color} />
//               </View>
//               <Text style={{ marginLeft: 16, flex: 1, fontSize: 15, color: "#E2E8F0", lineHeight: 22 }}>
//                 {f.text}
//               </Text>
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );

//   // Feedback Content with matching colors
//   const FeedbackContent = () => (
//     <View style={{ flex: 1, backgroundColor: "#020617" }}>
//       <LinearGradient
//         colors={["#EC4899", "#F43F5E"]}
//         start={[0, 0]}
//         end={[1, 1]}
//         style={{
//           paddingTop: 60,
//           paddingBottom: 30,
//           paddingHorizontal: 24,
//           borderBottomLeftRadius: 32,
//           borderBottomRightRadius: 32,
//         }}
//       >
//         <Pressable
//           onPress={() => setFeedbackVisible(false)}
//           style={{ position: "absolute", top: 50, right: 20, zIndex: 10 }}
//         >
//           <Ionicons name="close-circle" size={36} color="white" />
//         </Pressable>
//         <Text style={{ fontSize: 34, fontWeight: "bold", color: "white", marginBottom: 8, letterSpacing: 0.5 }}>
//           Feedback & Support
//         </Text>
//         <Text style={{ fontSize: 16, color: "rgba(255,255,255,0.95)", lineHeight: 22 }}>
//           We'd love to hear from you
//         </Text>
//       </LinearGradient>

//       <ScrollView style={{ flex: 1, padding: 24 }}>
//         <View style={{ 
//           backgroundColor: "#0F172A", 
//           borderRadius: 24, 
//           padding: 24,
//           borderWidth: 1,
//           borderColor: "#1E293B",
//           shadowColor: "#EC4899",
//           shadowOffset: { width: 0, height: 4 },
//           shadowOpacity: 0.3,
//           shadowRadius: 12,
//           elevation: 8,
//         }}>
//           <TextInput
//             placeholder="Your Name"
//             placeholderTextColor="#64748B"
//             value={feedback.name}
//             onChangeText={(t) => setFeedback({ ...feedback, name: t })}
//             style={{ 
//               backgroundColor: "#1E293B", 
//               padding: 18, 
//               borderRadius: 16, 
//               marginBottom: 16, 
//               fontSize: 16,
//               color: "#F1F5F9",
//               borderWidth: 1,
//               borderColor: "#334155",
//             }}
//           />
//           <TextInput
//             placeholder="Email Address"
//             placeholderTextColor="#64748B"
//             value={feedback.email}
//             onChangeText={(t) => setFeedback({ ...feedback, email: t })}
//             keyboardType="email-address"
//             style={{ 
//               backgroundColor: "#1E293B", 
//               padding: 18, 
//               borderRadius: 16, 
//               marginBottom: 16, 
//               fontSize: 16,
//               color: "#F1F5F9",
//               borderWidth: 1,
//               borderColor: "#334155",
//             }}
//           />
//           <TextInput
//             placeholder="Your Message"
//             placeholderTextColor="#64748B"
//             value={feedback.message}
//             onChangeText={(t) => setFeedback({ ...feedback, message: t })}
//             multiline
//             numberOfLines={6}
//             textAlignVertical="top"
//             style={{ 
//               backgroundColor: "#1E293B", 
//               padding: 18, 
//               borderRadius: 16, 
//               height: 150, 
//               marginBottom: 24, 
//               fontSize: 16,
//               color: "#F1F5F9",
//               borderWidth: 1,
//               borderColor: "#334155",
//             }}
//           />

//           <Pressable
//             onPress={() => {
//               Alert.alert("Feedback Submitted", "Thank you for your message! We'll get back to you soon.");
//               setFeedbackVisible(false);
//             }}
//             style={{ 
//               backgroundColor: "#EC4899", 
//               padding: 20, 
//               borderRadius: 16, 
//               alignItems: "center",
//               shadowColor: "#EC4899",
//               shadowOffset: { width: 0, height: 6 },
//               shadowOpacity: 0.6,
//               shadowRadius: 12,
//               elevation: 8,
//             }}
//           >
//             <Text style={{ 
//               color: "white", 
//               fontWeight: "800", 
//               fontSize: 17, 
//               letterSpacing: 0.8,
//               textTransform: "uppercase",
//             }}>
//               Submit Feedback
//             </Text>
//           </Pressable>
//         </View>
//       </ScrollView>
//     </View>
//   );

//   // Settings Content with matching colors
//   const SettingsContent = () => (
//     <View style={{ flex: 1, backgroundColor: "#020617" }}>
//       <LinearGradient
//         colors={["#F59E0B", "#EAB308"]}
//         start={[0, 0]}
//         end={[1, 1]}
//         style={{
//           paddingTop: 60,
//           paddingBottom: 30,
//           paddingHorizontal: 24,
//           borderBottomLeftRadius: 32,
//           borderBottomRightRadius: 32,
//         }}
//       >
//         <Pressable
//           onPress={() => setSettingsVisible(false)}
//           style={{ position: "absolute", top: 50, right: 20, zIndex: 10 }}
//         >
//           <Ionicons name="close-circle" size={36} color="white" />
//         </Pressable>
//         <Text style={{ fontSize: 34, fontWeight: "bold", color: "white", marginBottom: 8, letterSpacing: 0.5 }}>
//           App Settings
//         </Text>
//         <Text style={{ fontSize: 16, color: "rgba(255,255,255,0.95)", lineHeight: 22 }}>
//           Customize your experience
//         </Text>
//       </LinearGradient>

//       <ScrollView style={{ flex: 1, padding: 24 }}>
//         <View style={{ 
//           backgroundColor: "#0F172A", 
//           borderRadius: 24, 
//           padding: 24, 
//           marginBottom: 20,
//           borderWidth: 1,
//           borderColor: "#1E293B",
//           shadowColor: "#F59E0B",
//           shadowOffset: { width: 0, height: 4 },
//           shadowOpacity: 0.3,
//           shadowRadius: 12,
//           elevation: 8,
//         }}>
//           <View style={{ 
//             flexDirection: "row", 
//             justifyContent: "space-between", 
//             alignItems: "center", 
//             paddingVertical: 18,
//             borderBottomWidth: 1,
//             borderBottomColor: "#1E293B",
//           }}>
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <LinearGradient
//                 colors={["#8B5CF6", "#9333EA"]}
//                 style={{ 
//                   width: 48, 
//                   height: 48, 
//                   borderRadius: 24, 
//                   alignItems: "center", 
//                   justifyContent: "center", 
//                   marginRight: 16 
//                 }}
//               >
//                 <Ionicons name="moon" size={24} color="white" />
//               </LinearGradient>
//               <View>
//                 <Text style={{ fontSize: 17, color: "#F1F5F9", fontWeight: "700" }}>Dark Mode</Text>
//                 <Text style={{ fontSize: 13, color: "#94A3B8", marginTop: 3 }}>Always enabled</Text>
//               </View>
//             </View>
//             <Switch 
//               value={darkMode} 
//               onValueChange={setDarkMode}
//               trackColor={{ false: "#334155", true: "#9333EA" }}
//               thumbColor={darkMode ? "#8B5CF6" : "#CBD5E1"}
//             />
//           </View>

//           <View style={{ 
//             flexDirection: "row", 
//             justifyContent: "space-between", 
//             alignItems: "center", 
//             paddingVertical: 18,
//             borderBottomWidth: 1,
//             borderBottomColor: "#1E293B",
//           }}>
//             <View style={{ flexDirection: "row", alignItems: "center" }}>
//               <LinearGradient
//                 colors={["#10B981", "#0D9488"]}
//                 style={{ 
//                   width: 48, 
//                   height: 48, 
//                   borderRadius: 24, 
//                   alignItems: "center", 
//                   justifyContent: "center", 
//                   marginRight: 16 
//                 }}
//               >
//                 <Ionicons name="notifications" size={24} color="white" />
//               </LinearGradient>
//               <View>
//                 <Text style={{ fontSize: 17, color: "#F1F5F9", fontWeight: "700" }}>Push Notifications</Text>
//                 <Text style={{ fontSize: 13, color: "#94A3B8", marginTop: 3 }}>Get travel updates</Text>
//               </View>
//             </View>
//             <Switch 
//               value={notifications} 
//               onValueChange={setNotifications}
//               trackColor={{ false: "#334155", true: "#0D9488" }}
//               thumbColor={notifications ? "#10B981" : "#CBD5E1"}
//             />
//           </View>

//           <View style={{ paddingTop: 18 }}>
//             <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
//               <LinearGradient
//                 colors={["#F97316", "#DC2626"]}
//                 style={{ 
//                   width: 48, 
//                   height: 48, 
//                   borderRadius: 24, 
//                   alignItems: "center", 
//                   justifyContent: "center", 
//                   marginRight: 16 
//                 }}
//               >
//                 <Ionicons name="language" size={24} color="white" />
//               </LinearGradient>
//               <View>
//                 <Text style={{ fontSize: 17, color: "#F1F5F9", fontWeight: "700" }}>Language</Text>
//                 <Text style={{ fontSize: 13, color: "#94A3B8", marginTop: 3 }}>Choose your language</Text>
//               </View>
//             </View>
//             <View style={{ 
//               backgroundColor: "#1E293B", 
//               borderRadius: 16, 
//               overflow: "hidden",
//               borderWidth: 1,
//               borderColor: "#334155",
//             }}>
//               {["English", "Sinhala", "Tamil"].map((lang, idx) => (
//                 <Pressable 
//                   key={lang}
//                   onPress={() => setLanguage(lang)} 
//                   style={{ 
//                     padding: 18, 
//                     backgroundColor: language === lang ? "#F59E0B" : "transparent",
//                     borderBottomWidth: idx < 2 ? 1 : 0,
//                     borderBottomColor: "#334155",
//                     flexDirection: "row",
//                     justifyContent: "space-between",
//                     alignItems: "center"
//                   }}
//                 >
//                   <Text style={{ 
//                     color: language === lang ? "white" : "#CBD5E1", 
//                     fontWeight: language === lang ? "700" : "400", 
//                     fontSize: 16 
//                   }}>
//                     {lang}
//                   </Text>
//                   {language === lang && <Ionicons name="checkmark-circle" size={24} color="white" />}
//                 </Pressable>
//               ))}
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );

//   return (
//     <>
//       <StatusBar barStyle="light-content" backgroundColor="#020617" />
//       <ScrollView 
//         style={{ flex: 1, backgroundColor: "#020617" }} 
//         contentContainerStyle={{ paddingBottom: 30 }}
//       >
//         {/* Dark Header matching web design */}
//         <LinearGradient
//           colors={["#0F172A", "#1E293B"]}
//           start={[0, 0]}
//           end={[1, 1]}
//           style={{
//             paddingHorizontal: 24,
//             paddingTop: 60,
//             paddingBottom: 40,
//             borderBottomLeftRadius: 32,
//             borderBottomRightRadius: 32,
//             shadowColor: "#06B6D4",
//             shadowOffset: { width: 0, height: 8 },
//             shadowOpacity: 0.4,
//             shadowRadius: 16,
//             elevation: 12,
//             borderBottomWidth: 1,
//             borderBottomColor: "#334155",
//           }}
//         >
//           <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//             <View style={{ flex: 1 }}>
//               <Text style={{ 
//                 color: "white", 
//                 fontSize: 36, 
//                 fontWeight: "bold", 
//                 letterSpacing: 0.8,
//               }}>
//                 NCG Express
//               </Text>
//               <Text style={{ 
//                 color: "#94A3B8", 
//                 fontSize: 14, 
//                 marginTop: 6, 
//                 letterSpacing: 0.3,
//               }}>
//                 Sri Lanka's Premier Service
//               </Text>
//             </View>
//             <Pressable 
//               onPress={() => router.push("/profile")} 
//             >
//               <LinearGradient
//                 colors={["#06B6D4", "#2563EB"]}
//                 style={{ 
//                   width: 60, 
//                   height: 60, 
//                   borderRadius: 30, 
//                   alignItems: "center", 
//                   justifyContent: "center",
//                   shadowColor: "#06B6D4",
//                   shadowOffset: { width: 0, height: 4 },
//                   shadowOpacity: 0.6,
//                   shadowRadius: 12,
//                   elevation: 8,
//                 }}
//               >
//                 <Ionicons name="person" size={28} color="white" />
//               </LinearGradient>
//             </Pressable>
//           </View>
//         </LinearGradient>

//         {/* Quick Services Section */}
//         <View style={{ marginTop: 32, paddingHorizontal: 24 }}>
//           <View style={{ 
//             flexDirection: "row", 
//             justifyContent: "space-between", 
//             alignItems: "center", 
//             marginBottom: 24 
//           }}>
//             <Text style={{ 
//               fontSize: 26, 
//               fontWeight: "bold", 
//               color: "#F1F5F9", 
//               letterSpacing: 0.5 
//             }}>
//               Quick Services
//             </Text>
//             <Ionicons name="grid-outline" size={26} color="#06B6D4" />
//           </View>
//           <View style={{ 
//             flexDirection: "row", 
//             flexWrap: "wrap", 
//             justifyContent: "space-between" 
//           }}>
//             {actions.map((item, idx) => (
//               <ActionCard key={idx} item={item} />
//             ))}
//           </View>
//         </View>
//       </ScrollView>

//       {/* Dark Modals */}
//       <Modal animationType="slide" visible={aboutVisible} presentationStyle="pageSheet">
//         <AboutContent />
//       </Modal>
//       <Modal animationType="slide" visible={feedbackVisible} presentationStyle="pageSheet">
//         <FeedbackContent />
//       </Modal>
//       <Modal animationType="slide" visible={settingsVisible} presentationStyle="pageSheet">
//         <SettingsContent />
//       </Modal>
//     </>
//   );
// }

"use client"
"use client"

import { useRef, useState } from "react"
import { View, Text, Pressable, ScrollView, Animated, Modal, TextInput, Switch, Alert, StatusBar } from "react-native"
import { useRouter } from "expo-router"
import { LinearGradient } from "expo-linear-gradient"
import { MaterialIcons, Ionicons } from "@expo/vector-icons"

export default function HomeScreen() {
  const router = useRouter()

  // Modal states
  const [aboutVisible, setAboutVisible] = useState(false)
  const [feedbackVisible, setFeedbackVisible] = useState(false)
  const [settingsVisible, setSettingsVisible] = useState(false)

  // Settings state
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [language, setLanguage] = useState("English")

  // Feedback form state
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  })

  const actions = [
    {
      title: "Timetable",
      icon: "time-outline",
      route: "/journeys",
      gradient: ["#06B6D4", "#2563EB"],
      shadowColor: "#06B6D4",
    },
    {
      title: "Routes & Maps",
      icon: "map-outline",
      route: "/journeys",
      gradient: ["#06B6D4", "#2563EB"],
      shadowColor: "#06B6D4",
    },
    {
      title: "Seat Reservations",
      icon: "ticket-outline",
      route: "/journeys",
      gradient: ["#06B6D4", "#2563EB"],
      shadowColor: "#06B6D4",
    },
    {
      title: "About Service",
      icon: "information-circle-outline",
      route: "about",
      gradient: ["#06B6D4", "#2563EB"],
      shadowColor: "#06B6D4",
    },
    {
      title: "Feedback & Support",
      icon: "chatbubbles-outline",
      route: "feedback",
      gradient: ["#06B6D4", "#2563EB"],
      shadowColor: "#06B6D4",
    },
    {
      title: "App Settings",
      icon: "settings-outline",
      route: "settings",
      gradient: ["#06B6D4", "#2563EB"],
      shadowColor: "#06B6D4",
    },
  ]

  // Card component with exact web colors
  const ActionCard = ({ item }: any) => {
    const scaleAnim = useRef(new Animated.Value(1)).current

    const handlePressIn = () => {
      Animated.spring(scaleAnim, {
        toValue: 0.95,
        useNativeDriver: true,
        tension: 100,
        friction: 7,
      }).start()
    }

    const handlePressOut = () => {
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        tension: 100,
        friction: 7,
      }).start()
    }

    const handlePress = () => {
      if (item.route === "about") setAboutVisible(true)
      else if (item.route === "feedback") setFeedbackVisible(true)
      else if (item.route === "settings") setSettingsVisible(true)
      else router.push(item.route)
    }

    return (
      <Animated.View
        style={{
          width: "48%",
          height: 140,
          marginBottom: 12,
          transform: [{ scale: scaleAnim }],
        }}
      >
        <Pressable onPress={handlePress} onPressIn={handlePressIn} onPressOut={handlePressOut} style={{ flex: 1 }}>
          <LinearGradient
            colors={item.gradient}
            start={[0, 0]}
            end={[1, 1]}
            style={{
              borderRadius: 20,
              padding: 16,
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
              shadowColor: item.shadowColor,
              shadowOffset: { width: 0, height: 6 },
              shadowOpacity: 0.5,
              shadowRadius: 12,
              elevation: 10,
            }}
          >
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                backgroundColor: "rgba(255,255,255,0.2)",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10,
                borderWidth: 2,
                borderColor: "rgba(255,255,255,0.3)",
              }}
            >
              <Ionicons name={item.icon as any} size={28} color="white" />
            </View>
            <Text
              style={{
                color: "white",
                fontWeight: "800",
                fontSize: 13,
                textAlign: "center",
                letterSpacing: 0.3,
                textShadowColor: "rgba(0,0,0,0.3)",
                textShadowOffset: { width: 0, height: 2 },
                textShadowRadius: 4,
              }}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              {item.title}
            </Text>
          </LinearGradient>
        </Pressable>
      </Animated.View>
    )
  }

  // About Content with matching colors
  const AboutContent = () => (
    <View style={{ flex: 1, backgroundColor: "#020617" }}>
      <LinearGradient
        colors={["#06B6D4", "#2563EB"]}
        start={[0, 0]}
        end={[1, 1]}
        style={{
          paddingTop: 50,
          paddingBottom: 24,
          paddingHorizontal: 20,
          borderBottomLeftRadius: 28,
          borderBottomRightRadius: 28,
        }}
      >
        <Pressable
          onPress={() => setAboutVisible(false)}
          style={{ position: "absolute", top: 44, right: 16, zIndex: 10 }}
        >
          <Ionicons name="close-circle" size={32} color="white" />
        </Pressable>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "white", marginBottom: 6, letterSpacing: 0.4 }}>
          About NCG Express
        </Text>
        <Text style={{ fontSize: 14, color: "rgba(255,255,255,0.95)", lineHeight: 20 }}>
          Your trusted travel companion
        </Text>
      </LinearGradient>

      <ScrollView style={{ flex: 1, padding: 20 }}>
        <View
          style={{
            backgroundColor: "#0F172A",
            borderRadius: 20,
            padding: 20,
            marginBottom: 16,
            borderWidth: 1,
            borderColor: "#1E293B",
            shadowColor: "#06B6D4",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 6,
          }}
        >
          <Text style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 22, marginBottom: 20 }}>
            NCG Express provides safe, reliable, and comfortable bus travel across Sri Lanka. Our luxury fleet, live
            tracking, online reservations, and professional service redefine public transportation.
          </Text>

          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#F1F5F9", marginBottom: 14, letterSpacing: 0.3 }}>
            Key Features
          </Text>
          {[
            {
              icon: "directions-bus",
              text: "Luxury and super luxury bus services",
              color: "#06B6D4",
            },
            {
              icon: "location-on",
              text: "Real-time bus tracking & updates",
              color: "#10B981",
            },
            {
              icon: "event-seat",
              text: "Online seat reservations",
              color: "#8B5CF6",
            },
            {
              icon: "support-agent",
              text: "24/7 customer support",
              color: "#F97316",
            },
          ].map((f, idx) => (
            <View
              key={idx}
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#1E293B",
                padding: 14,
                borderRadius: 14,
                marginBottom: 10,
                borderLeftWidth: 3,
                borderLeftColor: f.color,
                shadowColor: f.color,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
              }}
            >
              <View
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 19,
                  backgroundColor: `${f.color}20`,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialIcons name={f.icon as any} size={20} color={f.color} />
              </View>
              <Text style={{ marginLeft: 12, flex: 1, fontSize: 13, color: "#E2E8F0", lineHeight: 20 }}>{f.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )

  // Feedback Content with matching colors
  const FeedbackContent = () => (
    <View style={{ flex: 1, backgroundColor: "#020617" }}>
      <LinearGradient
        colors={["#06B6D4", "#2563EB"]}
        start={[0, 0]}
        end={[1, 1]}
        style={{
          paddingTop: 50,
          paddingBottom: 24,
          paddingHorizontal: 20,
          borderBottomLeftRadius: 28,
          borderBottomRightRadius: 28,
        }}
      >
        <Pressable
          onPress={() => setFeedbackVisible(false)}
          style={{ position: "absolute", top: 44, right: 16, zIndex: 10 }}
        >
          <Ionicons name="close-circle" size={32} color="white" />
        </Pressable>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "white", marginBottom: 6, letterSpacing: 0.4 }}>
          Feedback & Support
        </Text>
        <Text style={{ fontSize: 14, color: "rgba(255,255,255,0.95)", lineHeight: 20 }}>
          We'd love to hear from you
        </Text>
      </LinearGradient>

      <ScrollView style={{ flex: 1, padding: 20 }}>
        <View
          style={{
            backgroundColor: "#0F172A",
            borderRadius: 20,
            padding: 20,
            marginBottom: 16,
            borderWidth: 1,
            borderColor: "#1E293B",
            shadowColor: "#06B6D4",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 6,
          }}
        >
          <TextInput
            placeholder="Your Name"
            placeholderTextColor="#64748B"
            value={feedback.name}
            onChangeText={(t) => setFeedback({ ...feedback, name: t })}
            style={{
              backgroundColor: "#1E293B",
              padding: 14,
              borderRadius: 14,
              marginBottom: 12,
              fontSize: 14,
              color: "#F1F5F9",
              borderWidth: 1,
              borderColor: "#334155",
            }}
          />
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#64748B"
            value={feedback.email}
            onChangeText={(t) => setFeedback({ ...feedback, email: t })}
            keyboardType="email-address"
            style={{
              backgroundColor: "#1E293B",
              padding: 14,
              borderRadius: 14,
              marginBottom: 12,
              fontSize: 14,
              color: "#F1F5F9",
              borderWidth: 1,
              borderColor: "#334155",
            }}
          />
          <TextInput
            placeholder="Your Message"
            placeholderTextColor="#64748B"
            value={feedback.message}
            onChangeText={(t) => setFeedback({ ...feedback, message: t })}
            multiline
            numberOfLines={6}
            textAlignVertical="top"
            style={{
              backgroundColor: "#1E293B",
              padding: 14,
              borderRadius: 14,
              height: 130,
              marginBottom: 20,
              fontSize: 14,
              color: "#F1F5F9",
              borderWidth: 1,
              borderColor: "#334155",
            }}
          />

          <Pressable
            onPress={() => {
              Alert.alert("Feedback Submitted", "Thank you for your message! We'll get back to you soon.")
              setFeedbackVisible(false)
            }}
          >
            <LinearGradient
              colors={["#06B6D4", "#2563EB"]}
              style={{
                padding: 16,
                borderRadius: 14,
                alignItems: "center",
                shadowColor: "#06B6D4",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.5,
                shadowRadius: 10,
                elevation: 6,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "800",
                  fontSize: 15,
                  letterSpacing: 0.6,
                  textTransform: "uppercase",
                }}
              >
                Submit Feedback
              </Text>
            </LinearGradient>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )

  // Settings Content with matching colors
  const SettingsContent = () => (
    <View style={{ flex: 1, backgroundColor: "#020617" }}>
      <LinearGradient
        colors={["#06B6D4", "#2563EB"]}
        start={[0, 0]}
        end={[1, 1]}
        style={{
          paddingTop: 50,
          paddingBottom: 24,
          paddingHorizontal: 20,
          borderBottomLeftRadius: 28,
          borderBottomRightRadius: 28,
        }}
      >
        <Pressable
          onPress={() => setSettingsVisible(false)}
          style={{ position: "absolute", top: 44, right: 16, zIndex: 10 }}
        >
          <Ionicons name="close-circle" size={32} color="white" />
        </Pressable>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "white", marginBottom: 6, letterSpacing: 0.4 }}>
          App Settings
        </Text>
        <Text style={{ fontSize: 14, color: "rgba(255,255,255,0.95)", lineHeight: 20 }}>Customize your experience</Text>
      </LinearGradient>

      <ScrollView style={{ flex: 1, padding: 20 }}>
        <View
          style={{
            backgroundColor: "#0F172A",
            borderRadius: 20,
            padding: 20,
            marginBottom: 16,
            borderWidth: 1,
            borderColor: "#1E293B",
            shadowColor: "#06B6D4",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 14,
              borderBottomWidth: 1,
              borderBottomColor: "#1E293B",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <LinearGradient
                colors={["#06B6D4", "#2563EB"]}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 21,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Ionicons name="moon" size={20} color="white" />
              </LinearGradient>
              <View>
                <Text style={{ fontSize: 15, color: "#F1F5F9", fontWeight: "700" }}>Dark Mode</Text>
                <Text style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>Always enabled</Text>
              </View>
            </View>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: "#334155", true: "#2563EB" }}
              thumbColor={darkMode ? "#06B6D4" : "#CBD5E1"}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 14,
              borderBottomWidth: 1,
              borderBottomColor: "#1E293B",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <LinearGradient
                colors={["#06B6D4", "#2563EB"]}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 21,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Ionicons name="notifications" size={20} color="white" />
              </LinearGradient>
              <View>
                <Text style={{ fontSize: 15, color: "#F1F5F9", fontWeight: "700" }}>Push Notifications</Text>
                <Text style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>Get travel updates</Text>
              </View>
            </View>
            <Switch
              value={notifications}
              onValueChange={setNotifications}
              trackColor={{ false: "#334155", true: "#2563EB" }}
              thumbColor={notifications ? "#06B6D4" : "#CBD5E1"}
            />
          </View>

          <View style={{ paddingTop: 14 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
              <LinearGradient
                colors={["#06B6D4", "#2563EB"]}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 21,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                <Ionicons name="language" size={20} color="white" />
              </LinearGradient>
              <View>
                <Text style={{ fontSize: 15, color: "#F1F5F9", fontWeight: "700" }}>Language</Text>
                <Text style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>Choose your language</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#1E293B",
                borderRadius: 14,
                overflow: "hidden",
                borderWidth: 1,
                borderColor: "#334155",
              }}
            >
              {["English", "Sinhala", "Tamil"].map((lang, idx) => (
                <Pressable
                  key={lang}
                  onPress={() => setLanguage(lang)}
                  style={{
                    padding: 14,
                    backgroundColor: language === lang ? "#06B6D4" : "transparent",
                    borderBottomWidth: idx < 2 ? 1 : 0,
                    borderBottomColor: "#1E293B",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: language === lang ? "white" : "#CBD5E1",
                      fontWeight: language === lang ? "700" : "400",
                      fontSize: 14,
                    }}
                  >
                    {lang}
                  </Text>
                  {language === lang && <Ionicons name="checkmark-circle" size={20} color="white" />}
                </Pressable>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#020617" />
      <ScrollView style={{ flex: 1, backgroundColor: "#020617" }} contentContainerStyle={{ paddingBottom: 24 }}>
        <LinearGradient
          colors={["#0F172A", "#1E293B"]}
          start={[0, 0]}
          end={[1, 1]}
          style={{
            paddingHorizontal: 20,
            paddingTop: 50,
            paddingBottom: 32,
            borderBottomLeftRadius: 28,
            borderBottomRightRadius: 28,
            shadowColor: "#06B6D4",
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.4,
            shadowRadius: 12,
            elevation: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#334155",
          }}
        >
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 30,
                  fontWeight: "bold",
                  letterSpacing: 0.6,
                }}
              >
                NCG Express
              </Text>
              <Text
                style={{
                  color: "#94A3B8",
                  fontSize: 13,
                  marginTop: 4,
                  letterSpacing: 0.3,
                }}
              >
                Sri Lanka's Premier Service
              </Text>
            </View>
            <Pressable onPress={() => router.push("/profile")}>
              <LinearGradient
                colors={["#06B6D4", "#2563EB"]}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 26,
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#06B6D4",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.5,
                  shadowRadius: 10,
                  elevation: 6,
                }}
              >
                <Ionicons name="person" size={24} color="white" />
              </LinearGradient>
            </Pressable>
          </View>
        </LinearGradient>

        <View style={{ marginTop: 24, paddingHorizontal: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 18,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                color: "#F1F5F9",
                letterSpacing: 0.4,
              }}
            >
              Quick Services
            </Text>
            <Ionicons name="grid-outline" size={22} color="#06B6D4" />
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {actions.map((item, idx) => (
              <ActionCard key={idx} item={item} />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Dark Modals */}
      <Modal animationType="slide" visible={aboutVisible} presentationStyle="pageSheet">
        <AboutContent />
      </Modal>
      <Modal animationType="slide" visible={feedbackVisible} presentationStyle="pageSheet">
        <FeedbackContent />
      </Modal>
      <Modal animationType="slide" visible={settingsVisible} presentationStyle="pageSheet">
        <SettingsContent />
      </Modal>
    </>
  )
}
