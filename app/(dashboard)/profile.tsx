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
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Cover Banner */}
      <View className="bg-blue-500 h-40 relative">
        <View className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=12" }}
            className="w-32 h-32 rounded-full border-4 border-white"
          />
        </View>
      </View>

      {/* Name and Email */}
      <View className="mt-20 items-center">
        <Text className="text-2xl font-bold text-gray-800">John Doe</Text>
        <Text className="text-gray-600 mt-1">johndoe@email.com</Text>

        {/* Edit Profile Button */}
        <TouchableOpacity className="mt-4 bg-blue-500 px-6 py-2 rounded-full shadow-lg flex-row items-center">
          <MaterialIcons name="edit" size={20} color="white" />
          <Text className="text-white font-semibold ml-2">Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Section */}
      <View className="flex-row justify-around mt-8 px-5">
        <View className="bg-white p-4 rounded-2xl shadow-md items-center w-24">
          <Text className="text-xl font-bold text-gray-800">12</Text>
          <Text className="text-gray-500 text-sm mt-1">Trips</Text>
        </View>
        <View className="bg-white p-4 rounded-2xl shadow-md items-center w-24">
          <Text className="text-xl font-bold text-gray-800">5</Text>
          <Text className="text-gray-500 text-sm mt-1">Bookings</Text>
        </View>
        <View className="bg-white p-4 rounded-2xl shadow-md items-center w-24">
          <Text className="text-xl font-bold text-gray-800">120</Text>
          <Text className="text-gray-500 text-sm mt-1">Points</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View className="mt-8 px-5">
        <TouchableOpacity className="bg-white p-4 rounded-2xl shadow-md flex-row items-center mb-4">
          <FontAwesome5 name="bus" size={20} color="#3b82f6" />
          <Text className="ml-4 text-gray-800 font-semibold">Book a Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-4 rounded-2xl shadow-md flex-row items-center mb-4">
          <MaterialIcons name="settings" size={20} color="#3b82f6" />
          <Text className="ml-4 text-gray-800 font-semibold">Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-4 rounded-2xl shadow-md flex-row items-center mb-4">
          <MaterialIcons name="help-outline" size={20} color="#3b82f6" />
          <Text className="ml-4 text-gray-800 font-semibold">Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white p-4 rounded-2xl shadow-md flex-row items-center mb-4">
          <MaterialIcons name="logout" size={20} color="#ef4444" />
          <Text className="ml-4 text-red-500 font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

