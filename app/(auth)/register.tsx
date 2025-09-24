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
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { register } from "@/services/authService";
import { BlurView } from "expo-blur";
import Animated, { FadeInUp } from "react-native-reanimated";

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cPassword, setCPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRegister = async () => {
    if (isLoading) return;

    if (password !== cPassword) {
      Alert.alert("Password Mismatch", "Passwords do not match. Please try again.");
      return;
    }

    setIsLoading(true);
    await register(email, password)
      .then(() => {
        router.back(); // go back to login
      })
      .catch((err) => {
        Alert.alert("Registration failed", "Something went wrong");
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
        <Animated.View
          entering={FadeInUp.duration(700).springify()}
          style={{ alignItems: "center", marginBottom: 28 }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: "700",
              color: "white",
              textAlign: "center",
              marginBottom: 8,
            }}
          >
            Create Account
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#d1d5db",
              textAlign: "center",
            }}
          >
            Register to get started with NCG Bus App 🚍
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
              backgroundColor: "rgba(255,255,255,0.85)",
              borderRadius: 16,
              paddingHorizontal: 16,
              paddingVertical: 14,
              marginBottom: 16,
              fontSize: 16,
              color: "#111827",
              borderWidth: 1,
              borderColor: "#e5e7eb",
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
              backgroundColor: "rgba(255,255,255,0.85)",
              borderRadius: 16,
              paddingHorizontal: 16,
              paddingVertical: 14,
              marginBottom: 16,
              fontSize: 16,
              color: "#111827",
              borderWidth: 1,
              borderColor: "#e5e7eb",
            }}
          />

          {/* Confirm Password Input */}
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#9ca3af"
            value={cPassword}
            onChangeText={setCPassword}
            secureTextEntry
            style={{
              backgroundColor: "rgba(255,255,255,0.85)",
              borderRadius: 16,
              paddingHorizontal: 16,
              paddingVertical: 14,
              marginBottom: 20,
              fontSize: 16,
              color: "#111827",
              borderWidth: 1,
              borderColor: "#e5e7eb",
            }}
          />

          {/* Register Button */}
          <TouchableOpacity onPress={handleRegister} style={{ marginBottom: 16 }}>
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
                  }}
                >
                  Register
                </Text>
              )}
            </LinearGradient>
          </TouchableOpacity>

          {/* Back to Login */}
          <Pressable onPress={() => router.back()}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                color: "#374151",
              }}
            >
              Already have an account?{" "}
              <Text style={{ color: "#2563eb", fontWeight: "700" }}>
                Login
              </Text>
            </Text>
          </Pressable>
        </BlurView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

export default Register;