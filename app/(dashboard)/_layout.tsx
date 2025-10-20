

"use client"

import { View, SafeAreaView, ActivityIndicator } from "react-native"
import { useEffect } from "react"
import { Tabs, useRouter } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"
import { useAuth } from "@/context/AuthContext"

const DashboardLayout = () => {
  const { user, loading } = useAuth()
  const router = useRouter()
  console.log("User Data :", user)

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading])

  if (loading) {
    return (
      <View style={{ flex: 1, backgroundColor: "#020617", justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#06B6D4" />
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#020617" }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#06B6D4",
          tabBarInactiveTintColor: "#64748B",
          tabBarStyle: {
            backgroundColor: "#0F172A",
            borderTopWidth: 1,
            borderTopColor: "#1E293B",
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "600",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "",
            tabBarIcon: (data) => <MaterialIcons name="home-filled" size={data.size} color={data.color} />,
          }}
        />

        <Tabs.Screen
          name="journeys"
          options={{
            title: "",
            tabBarIcon: (data) => <MaterialIcons name="route" size={data.size} color={data.color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "",
            tabBarIcon: (data) => <MaterialIcons name="person" size={data.size} color={data.color} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}

export default DashboardLayout
