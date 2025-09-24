import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Alert,
  Switch,
  Modal,
} from "react-native";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { profileService } from "@/services/profileService";
import { useRouter } from "expo-router";
import { User } from "firebase/auth";


export default function ProfileScreen() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);

  // Settings
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [isPrivate, setIsPrivate] = useState(false);
  const [language, setLanguage] = useState("English");

  const [settingsVisible, setSettingsVisible] = useState(false);
  const [helpVisible, setHelpVisible] = useState(false);

  useEffect(() => {
    const currentUser = profileService.getCurrentUser();
    setUser(currentUser);
    setDisplayName(currentUser?.displayName || "");
    setPhotoURL(currentUser?.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png");
  }, []);

  useEffect(() => {
    if (user?.uid) {
      profileService.getSettings(user.uid).then((settings) => {
        setDarkMode(settings.darkMode ?? false);
        setNotifications(settings.notifications ?? true);
        setIsPrivate(settings.isPrivate ?? false);
        setLanguage(settings.language ?? "English");
      });
    }
  }, [user]);

  const handleSave = async () => {
    if (!displayName) {
      Alert.alert("Error", "Name cannot be empty");
      return;
    }
    try {
      setLoading(true);
      await profileService.updateProfile({ displayName, photoURL });
      const updatedUser = profileService.getCurrentUser();
      setUser(updatedUser);
      setEditMode(false);
      Alert.alert("✅ Success", "Profile updated successfully!");
    } catch (err) {
      console.error(err);
      Alert.alert("❌ Error", "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const toggleSetting = async (key: string, value: boolean) => {
    if (key === "darkMode") setDarkMode(value);
    if (key === "notifications") setNotifications(value);
    if (key === "isPrivate") setIsPrivate(value);

    if (user?.uid) await profileService.updateSetting(user.uid, key, value);
  };

  const handleLogout = async () => {
    try {
      await profileService.logout();
      router.replace("/login");
    } catch (error) {
      console.error(error);
    }
  };

  // Conditional colors based on darkMode
  const colors = {
    background: darkMode ? "#0f172a" : "#f0f4f8",
    card: darkMode ? "#1e293b" : "white",
    text: darkMode ? "#f1f5f9" : "#111827",
    subText: darkMode ? "#94a3b8" : "#475569",
    button: darkMode ? "#3b82f6" : "#1E3A8A",
    buttonText: "white",
    logoutText: darkMode ? "#f87171" : "#ef4444",
  };

  const SettingsContent = () => (
    <ScrollView style={[styles.modalContainer, { backgroundColor: colors.background }]}>
      <Text style={[styles.modalHeader, { color: colors.text }]}>⚙️ App Settings</Text>

      <View style={styles.settingRow}>
        <Text style={[styles.settingText, { color: colors.text }]}>🌙 Dark Mode</Text>
        <Switch value={darkMode} onValueChange={(v) => toggleSetting("darkMode", v)} />
      </View>

      <View style={styles.settingRow}>
        <Text style={[styles.settingText, { color: colors.text }]}>🔔 Notifications</Text>
        <Switch value={notifications} onValueChange={(v) => toggleSetting("notifications", v)} />
      </View>

      <View style={styles.settingRow}>
        <Text style={[styles.settingText, { color: colors.text }]}>🔒 Private Account</Text>
        <Switch value={isPrivate} onValueChange={(v) => toggleSetting("isPrivate", v)} />
      </View>

      <View style={{ marginTop: 15 }}>
        <Text style={[styles.settingText, { color: colors.text }]}>🌐 Language</Text>
        <TouchableOpacity style={[styles.languageButton, { backgroundColor: colors.card }]}>
          <Text style={[styles.languageText, { color: colors.button }]}>{language}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#DC2626" }]} onPress={handleLogout}>
        <MaterialIcons name="logout" size={20} color="#fff" />
        <Text style={[styles.actionText, { color: "#fff" }]}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.closeButton, { backgroundColor: colors.button }]} onPress={() => setSettingsVisible(false)}>
        <Text style={styles.closeText}>Close</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  const HelpContent = () => (
    <ScrollView style={[styles.modalContainer, { backgroundColor: colors.background }]}>
      <Text style={[styles.modalHeader, { color: colors.text }]}>❓ Help & Support</Text>

      <View style={[styles.helpCard, { backgroundColor: colors.card }]}>
        <Text style={[styles.helpTitle, { color: colors.button }]}>📘 FAQ</Text>
        <Text style={[styles.helpText, { color: colors.subText }]}>
          - How to book a bus?{"\n"}- How to cancel a booking?{"\n"}- How to contact support?
        </Text>
      </View>

      <TouchableOpacity style={[styles.closeButton, { backgroundColor: colors.button }]} onPress={() => setHelpVisible(false)}>
        <Text style={styles.closeText}>Close</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }}>
      <LinearGradient
        colors={darkMode ? ["#0f172a", "#1e293b"] : ["#1E3A8A", "#274BB0"]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.coverBanner}
      >
        <View style={styles.profileImageWrapper}>
          <Image source={{ uri: photoURL }} style={styles.profileImage} />
        </View>
      </LinearGradient>

      <View style={styles.userInfo}>
        {editMode ? (
          <>
            <TextInput style={styles.input} placeholder="Enter name" value={displayName} onChangeText={setDisplayName} placeholderTextColor={colors.subText} />
            <TextInput style={styles.input} placeholder="Enter photo URL" value={photoURL} onChangeText={setPhotoURL} placeholderTextColor={colors.subText} />
          </>
        ) : (
          <>
            <Text style={[styles.userName, { color: colors.text }]}>{user?.displayName || "No Name"}</Text>
            <Text style={[styles.userEmail, { color: colors.subText }]}>{user?.email || "No Email"}</Text>
          </>
        )}

        {editMode ? (
          <>
            <TouchableOpacity style={[styles.saveButton, { backgroundColor: colors.button }]} onPress={handleSave} disabled={loading}>
              {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.saveButtonText}>Save Changes</Text>}
            </TouchableOpacity>
            <TouchableOpacity style={[styles.editButton, { backgroundColor: "#9ca3af" }]} onPress={() => setEditMode(false)}>
              <Text style={styles.editButtonText}>Cancel</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={[styles.editButton, { backgroundColor: colors.button }]} onPress={() => setEditMode(true)}>
            <MaterialIcons name="edit" size={20} color="white" />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.card }]} onPress={() => router.push("/journeys")}>
          <FontAwesome5 name="bus" size={20} color={colors.button} />
          <Text style={[styles.actionText, { color: colors.button }]}>Book a Trip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.card }]} onPress={() => setSettingsVisible(true)}>
          <MaterialIcons name="settings" size={20} color={colors.button} />
          <Text style={[styles.actionText, { color: colors.button }]}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, { backgroundColor: colors.card }]} onPress={() => setHelpVisible(true)}>
          <MaterialIcons name="help-outline" size={20} color={colors.button} />
          <Text style={[styles.actionText, { color: colors.button }]}>Help & Support</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.actionButton, { backgroundColor: "#ffe6e6" }]} onPress={handleLogout}>
          <MaterialIcons name="logout" size={20} color={colors.logoutText} />
          <Text style={[styles.actionText, { color: colors.logoutText }]}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={settingsVisible} animationType="slide">
        <SettingsContent />
      </Modal>

      <Modal visible={helpVisible} animationType="slide">
        <HelpContent />
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  coverBanner: { height: 160, justifyContent: "flex-end", alignItems: "center" },
  profileImageWrapper: { position: "absolute", bottom: -50, borderRadius: 60, borderWidth: 4, borderColor: "white", overflow: "hidden" },
  profileImage: { width: 120, height: 120, borderRadius: 60 },
  userInfo: { marginTop: 60, alignItems: "center", paddingHorizontal: 16 },
  userName: { fontSize: 24, fontWeight: "bold" },
  userEmail: { fontSize: 14, marginTop: 4 },
  editButton: { flexDirection: "row", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 25, alignItems: "center", marginTop: 12, justifyContent: "center" },
  editButtonText: { color: "white", fontWeight: "600", marginLeft: 8 },
  saveButton: { paddingVertical: 12, paddingHorizontal: 25, borderRadius: 25, alignItems: "center", marginTop: 12 },
  saveButtonText: { color: "white", fontWeight: "600", fontSize: 16 },
  input: { width: "90%", borderWidth: 1, borderRadius: 12, padding: 10, marginBottom: 10 },
  actionsContainer: { marginTop: 30, paddingHorizontal: 16 },
  actionButton: { flexDirection: "row", alignItems: "center", paddingVertical: 14, paddingHorizontal: 16, borderRadius: 20, marginBottom: 16 },
  actionText: { fontSize: 16, fontWeight: "600", marginLeft: 12 },
  modalContainer: { flex: 1, padding: 20 },
  modalHeader: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  settingRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 15 },
  settingText: { fontSize: 16 },
  languageButton: { padding: 12, borderWidth: 1, borderRadius: 10, marginTop: 6, alignItems: "center" },
  languageText: { fontWeight: "600" },
  closeButton: { marginTop: 20, padding: 12, borderRadius: 12, alignItems: "center" },
  closeText: { color: "white", fontWeight: "600" },
  helpCard: { padding: 16, borderRadius: 12, marginBottom: 16, shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 4 },
  helpTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 6 },
  helpText: { fontSize: 14 },
});
