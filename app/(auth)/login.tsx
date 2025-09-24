import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { login } from "@/services/authService";
import { BlurView } from "expo-blur";
import Animated, { FadeInUp } from "react-native-reanimated";
import { profileService } from "@/services/profileService";


const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleLogin = async () => {
    // if(email)
    // password
    if (isLoading) return

    setIsLoading(true)
    await login(email, password)
      .then((res) => {
        router.push("/home")
      })
      .catch((err) => {
        Alert.alert("Login failed", "Somthing went wrong")
        console.error(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleLogout = async () => {
  try {
    await profileService.logout();
    router.replace("/login"); // redirect to login screen
  } catch (error) {
    console.error("Logout error:", error);
  }
};

  return (
    <LinearGradient
      colors={["#0f2027", "#203a43", "#2c5364"]}
      style={{ flex: 1 }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        {/* Logo / Title */}
        <Animated.View
          entering={FadeInUp.duration(700).springify()}
          style={{ alignItems: "center", marginBottom: 28 }}
        >
          <Image
            source={{ uri: "https://img.icons8.com/color/96/bus.png" }}
            style={{ width: 90, height: 90, marginBottom: 12 }}
          />
          <LinearGradient
            colors={["#60a5fa", ""]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ borderRadius: 6, paddingHorizontal: 12, paddingVertical: 4 }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "700",
                color: "white",
                textAlign: "center",
              }}
            >
              NCG GO
            </Text>
          </LinearGradient>
          <Text
            style={{
              fontSize: 16,
              color: "#d1d5db",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Plan your journey, book your seat 🚍
          </Text>
        </Animated.View>

        {/* Glass Card */}
        <BlurView
          intensity={80}
          tint="light"
          style={{
            borderRadius: 28,
            padding: 24,
            width: "90%",
            shadowColor: "#000",
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 8 },
            shadowRadius: 14,
            elevation: 10,
            backgroundColor: "rgba(255,255,255,0.7)",
          }}
        >
          {/* Email Input */}
          <TextInput
            placeholder="Email"
            placeholderTextColor="#9ca3af"
            value={email}
            onChangeText={setEmail}
            style={{
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: 16,
              paddingHorizontal: 16,
              paddingVertical: 14,
              marginBottom: 16,
              fontSize: 16,
              color: "#111827",
              borderWidth: 1,
              borderColor: "#e5e7eb",
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 4,
            }}
          />

          {/* Password Input */}
          <TextInput
            placeholder="Password"
            placeholderTextColor="#9ca3af"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={{
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: 16,
              paddingHorizontal: 16,
              paddingVertical: 14,
              marginBottom: 12,
              fontSize: 16,
              color: "#111827",
              borderWidth: 1,
              borderColor: "#e5e7eb",
              shadowColor: "#000",
              shadowOpacity: 0.05,
              shadowRadius: 4,
            }}
          />

          {/* Forgot Password */}
          <Pressable
            onPress={() => Alert.alert("Reset", "Forgot password flow")}
          >
            <Text
              style={{
                textAlign: "right",
                fontSize: 14,
                color: "#2563eb",
                marginBottom: 20,
                fontWeight: "500",
              }}
            >
              Forgot Password?
            </Text>
          </Pressable>

          {/* Login Button */}
          <TouchableOpacity onPress={handleLogin} style={{ marginBottom: 16 }}>
            <LinearGradient
              colors={["#2563eb", "#1d4ed8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                paddingVertical: 16,
                borderRadius: 18,
                alignItems: "center",
                shadowColor: "#2563eb",
                shadowOpacity: 0.3,
                shadowRadius: 6,
              }}
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "700",
                    letterSpacing: 0.5,
                  }}
                >
                  Login
                </Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

          {/* Register Redirect */}
          <Pressable onPress={() => router.push("/register")}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                color: "#374151",
              }}
            >
              Don’t have an account?{" "}
              <Text style={{ color: "#2563eb", fontWeight: "700" }}>
                Register
              </Text>
            </Text>
          </Pressable>
        </BlurView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default Login;
