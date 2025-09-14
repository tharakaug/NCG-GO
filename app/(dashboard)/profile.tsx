// import React from "react"
// import { Text, View } from "react-native"

// const ProfileScreen = () => {
//   return (
//     <View className="flex-1 w-full justify-center align-items-center">
//       <Text className="text-center text-4xl">Profile screen</Text>
//     </View>
//   )
// }

// export default ProfileScreen

import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { profileService } from "@/services/profileService";
import { useRouter } from "expo-router";


export default function ProfileScreen() {

const router = useRouter();

const handleLogout = async () => {
  try {
    await profileService.logout();
    router.replace("/login"); // redirect after logout
  } catch (error) {
    console.error("Logout error:", error);
  }
};


  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f0f4f8" }}>
      {/* Cover Banner */}
      <LinearGradient
        colors={["#1E3A8A", "#274BB0"]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.coverBanner}
      >
        <View style={styles.profileImageWrapper}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=12" }}
            style={styles.profileImage}
          />
        </View>
      </LinearGradient>

      {/* Name and Email */}
      <View style={styles.userInfo}>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>johndoe@email.com</Text>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editButton}>
          <MaterialIcons name="edit" size={20} color="white" />
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Section */}
      <View style={styles.statsContainer}>
        <View style={[styles.statCard, { backgroundColor: "#1E3A8A" }]}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Trips</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: "#274BB0" }]}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Bookings</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor: "#3B82F6" }]}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Points</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesome5 name="bus" size={20} color="#1E3A8A" />
          <Text style={styles.actionText}>Book a Trip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="settings" size={20} color="#1E3A8A" />
          <Text style={styles.actionText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <MaterialIcons name="help-outline" size={20} color="#1E3A8A" />
          <Text style={styles.actionText}>Help & Support</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#ffe6e6" }]}>
          <MaterialIcons name="logout" size={20} color="#ef4444" />
          <Text style={[styles.actionText, { color: "#ef4444" }]}>Logout</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
  style={[styles.actionButton, { backgroundColor: "#ffe6e6" }]}
  onPress={handleLogout}
>
  <MaterialIcons name="logout" size={20} color="#ef4444" />
  <Text style={[styles.actionText, { color: "#ef4444" }]}>Logout</Text>
</TouchableOpacity>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  coverBanner: {
    height: 160,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  profileImageWrapper: {
    position: "absolute",
    bottom: -50,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: "white",
    overflow: "hidden",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  userInfo: {
    marginTop: 60,
    alignItems: "center",
    paddingHorizontal: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1E3A8A",
  },
  userEmail: {
    fontSize: 14,
    color: "#475569",
    marginTop: 4,
  },
  editButton: {
    flexDirection: "row",
    backgroundColor: "#1E3A8A",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 12,
    shadowColor: "#1E3A8A",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  editButtonText: {
    color: "white",
    fontWeight: "600",
    marginLeft: 8,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    paddingHorizontal: 16,
  },
  statCard: {
    width: 100,
    height: 100,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#1E3A8A",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  statLabel: {
    fontSize: 14,
    color: "white",
    marginTop: 4,
  },
  actionsContainer: {
    marginTop: 30,
    paddingHorizontal: 16,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  actionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1E3A8A",
    marginLeft: 12,
  },
});

