
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
