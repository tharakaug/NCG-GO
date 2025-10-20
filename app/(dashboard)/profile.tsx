

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
  Dimensions,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { profileService } from "@/services/profileService";
import { useRouter } from "expo-router";
import { User } from "firebase/auth";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function ProfileScreen() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);

  // Settings
  const [notifications, setNotifications] = useState(true);
  const [isPrivate, setIsPrivate] = useState(false);
  const [language, setLanguage] = useState("English");

  const [settingsVisible, setSettingsVisible] = useState(false);
  const [helpVisible, setHelpVisible] = useState(false);
  const [bookingsVisible, setBookingsVisible] = useState(false);

  useEffect(() => {
    const currentUser = profileService.getCurrentUser();
    setUser(currentUser);
    setDisplayName(currentUser?.displayName || "");
    setPhotoURL(currentUser?.photoURL || "https://cdn-icons-png.flaticon.com/512/149/149071.png");
  }, []);

  useEffect(() => {
    if (user?.uid) {
      profileService.getSettings(user.uid).then((settings) => {
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
      Alert.alert("Success", "Profile updated successfully!");
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  const toggleSetting = async (key: string, value: boolean) => {
    if (key === "notifications") setNotifications(value);
    if (key === "isPrivate") setIsPrivate(value);

    if (user?.uid) await profileService.updateSetting(user.uid, key, value);
  };

  const handleLogout = async () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            try {
              await profileService.logout();
              router.replace("/login");
            } catch (error) {
              console.error(error);
            }
          },
        },
      ]
    );
  };

  const recentBookings = [
    { id: 1, route: "Moratuwa → Karainagar", date: "Dec 15, 2024", status: "Completed", busNo: "87" },
    { id: 2, route: "Colombo → Passara", date: "Dec 10, 2024", status: "Completed", busNo: "99" },
    { id: 3, route: "Panadura → Kankesanthurai", date: "Dec 5, 2024", status: "Completed", busNo: "15" },
  ];

  const SettingsContent = () => (
    <View style={styles.modalWrapper}>
      <StatusBar barStyle="light-content" backgroundColor="#06B6D4" />
      <LinearGradient
        colors={["#06B6D4", "#2563EB"]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.modalHeaderGradient}
      >
        <View style={styles.modalHeaderContent}>
          <View style={styles.modalHeaderLeft}>
            <View style={styles.modalIconContainer}>
              <Ionicons name="settings" size={20} color="white" />
            </View>
            <View>
              <Text style={styles.modalTitle}>Settings</Text>
              <Text style={styles.modalSubtitle}>Manage your preferences</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.modalCloseButton}
            onPress={() => setSettingsVisible(false)}
          >
            <Ionicons name="close-circle" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.modalScrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionHeader}>Preferences</Text>

        <View style={styles.settingCard}>
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={[styles.settingIcon, { backgroundColor: "rgba(16, 185, 129, 0.1)" }]}>
                <Ionicons name="notifications" size={18} color="#10B981" />
              </View>
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingLabel}>Push Notifications</Text>
                <Text style={styles.settingDescription}>Get booking updates & alerts</Text>
              </View>
            </View>
            <Switch 
              value={notifications} 
              onValueChange={(v) => toggleSetting("notifications", v)}
              trackColor={{ false: "#334155", true: "#10B981" }}
              thumbColor={notifications ? "#FFFFFF" : "#94A3B8"}
            />
          </View>
        </View>

        <View style={styles.settingCard}>
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={[styles.settingIcon, { backgroundColor: "rgba(249, 115, 22, 0.1)" }]}>
                <Ionicons name="lock-closed" size={18} color="#F97316" />
              </View>
              <View style={styles.settingTextContainer}>
                <Text style={styles.settingLabel}>Private Account</Text>
                <Text style={styles.settingDescription}>Hide your profile from others</Text>
              </View>
            </View>
            <Switch 
              value={isPrivate} 
              onValueChange={(v) => toggleSetting("isPrivate", v)}
              trackColor={{ false: "#334155", true: "#F97316" }}
              thumbColor={isPrivate ? "#FFFFFF" : "#94A3B8"}
            />
          </View>
        </View>

        <Text style={styles.sectionHeader}>General</Text>

        <TouchableOpacity style={styles.settingCard}>
          <View style={styles.settingLeft}>
            <View style={[styles.settingIcon, { backgroundColor: "rgba(139, 92, 246, 0.1)" }]}>
              <Ionicons name="language" size={18} color="#8B5CF6" />
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingLabel}>Language</Text>
              <Text style={styles.settingDescription}>Choose your preferred language</Text>
            </View>
          </View>
          <View style={styles.settingRight}>
            <Text style={styles.settingValue}>{language}</Text>
            <Ionicons name="chevron-forward" size={18} color="#64748B" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingCard}>
          <View style={styles.settingLeft}>
            <View style={[styles.settingIcon, { backgroundColor: "rgba(6, 182, 212, 0.1)" }]}>
              <Ionicons name="shield-checkmark" size={18} color="#06B6D4" />
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingLabel}>Privacy Policy</Text>
              <Text style={styles.settingDescription}>Read our privacy terms</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#64748B" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingCard}>
          <View style={styles.settingLeft}>
            <View style={[styles.settingIcon, { backgroundColor: "rgba(234, 179, 8, 0.1)" }]}>
              <Ionicons name="document-text" size={18} color="#EAB308" />
            </View>
            <View style={styles.settingTextContainer}>
              <Text style={styles.settingLabel}>Terms of Service</Text>
              <Text style={styles.settingDescription}>View terms & conditions</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#64748B" />
        </TouchableOpacity>

        <Text style={styles.sectionHeader}>Account</Text>

        <TouchableOpacity 
          style={styles.logoutButtonGradient}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={["#DC2626", "#B91C1C"]}
            style={styles.logoutButton}
          >
            <Ionicons name="log-out-outline" size={18} color="white" />
            <Text style={styles.logoutButtonText}>Logout</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );

  const HelpContent = () => (
    <View style={styles.modalWrapper}>
      <StatusBar barStyle="light-content" backgroundColor="#06B6D4" />
      <LinearGradient
        colors={["#06B6D4", "#2563EB"]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.modalHeaderGradient}
      >
        <View style={styles.modalHeaderContent}>
          <View style={styles.modalHeaderLeft}>
            <View style={styles.modalIconContainer}>
              <Ionicons name="help-circle" size={20} color="white" />
            </View>
            <View>
              <Text style={styles.modalTitle}>Help & Support</Text>
              <Text style={styles.modalSubtitle}>We're here to help you</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.modalCloseButton}
            onPress={() => setHelpVisible(false)}
          >
            <Ionicons name="close-circle" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.modalScrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.helpCard}>
          <View style={styles.helpIconContainer}>
            <LinearGradient
              colors={["#06B6D4", "#2563EB"]}
              style={styles.helpIcon}
            >
              <Ionicons name="book" size={18} color="white" />
            </LinearGradient>
          </View>
          <Text style={styles.helpTitle}>Frequently Asked Questions</Text>
          <View style={styles.faqList}>
            <TouchableOpacity style={styles.faqItem}>
              <Ionicons name="help-circle-outline" size={16} color="#06B6D4" />
              <Text style={styles.faqText}>How do I book a bus ticket?</Text>
              <Ionicons name="chevron-forward" size={14} color="#64748B" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.faqItem}>
              <Ionicons name="help-circle-outline" size={16} color="#06B6D4" />
              <Text style={styles.faqText}>How can I cancel my booking?</Text>
              <Ionicons name="chevron-forward" size={14} color="#64748B" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.faqItem}>
              <Ionicons name="help-circle-outline" size={16} color="#06B6D4" />
              <Text style={styles.faqText}>What payment methods are accepted?</Text>
              <Ionicons name="chevron-forward" size={14} color="#64748B" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.faqItem}>
              <Ionicons name="help-circle-outline" size={16} color="#06B6D4" />
              <Text style={styles.faqText}>How do I track my bus in real-time?</Text>
              <Ionicons name="chevron-forward" size={14} color="#64748B" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.helpCard}>
          <View style={styles.helpIconContainer}>
            <LinearGradient
              colors={["#10B981", "#059669"]}
              style={styles.helpIcon}
            >
              <Ionicons name="chatbubbles" size={18} color="white" />
            </LinearGradient>
          </View>
          <Text style={styles.helpTitle}>Contact Support</Text>
          <Text style={styles.helpDescription}>
            Need assistance? Our support team is available 24/7 to help you with any questions or issues.
          </Text>
          
          <View style={styles.contactMethods}>
            <TouchableOpacity style={styles.contactMethod}>
              <View style={[styles.contactIcon, { backgroundColor: "rgba(6, 182, 212, 0.1)" }]}>
                <Ionicons name="mail" size={16} color="#06B6D4" />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>Email</Text>
                <Text style={styles.contactValue}>support@ncgexpress.lk</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactMethod}>
              <View style={[styles.contactIcon, { backgroundColor: "rgba(16, 185, 129, 0.1)" }]}>
                <Ionicons name="call" size={16} color="#10B981" />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>Phone</Text>
                <Text style={styles.contactValue}>+94 11 234 5678</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactMethod}>
              <View style={[styles.contactIcon, { backgroundColor: "rgba(139, 92, 246, 0.1)" }]}>
                <Ionicons name="logo-whatsapp" size={16} color="#8B5CF6" />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>WhatsApp</Text>
                <Text style={styles.contactValue}>+94 77 123 4567</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity activeOpacity={0.8}>
            <LinearGradient
              colors={["#06B6D4", "#2563EB"]}
              style={styles.contactButton}
            >
              <Ionicons name="send" size={14} color="white" />
              <Text style={styles.contactButtonText}>Send Message</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );

  const BookingsContent = () => (
    <View style={styles.modalWrapper}>
      <StatusBar barStyle="light-content" backgroundColor="#06B6D4" />
      <LinearGradient
        colors={["#06B6D4", "#2563EB"]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.modalHeaderGradient}
      >
        <View style={styles.modalHeaderContent}>
          <View style={styles.modalHeaderLeft}>
            <View style={styles.modalIconContainer}>
              <Ionicons name="receipt" size={20} color="white" />
            </View>
            <View>
              <Text style={styles.modalTitle}>My Bookings</Text>
              <Text style={styles.modalSubtitle}>View your trip history</Text>
            </View>
          </View>
          <TouchableOpacity 
            style={styles.modalCloseButton}
            onPress={() => setBookingsVisible(false)}
          >
            <Ionicons name="close-circle" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView style={styles.modalScrollContent} showsVerticalScrollIndicator={false}>
        {recentBookings.map((booking) => (
          <View key={booking.id} style={styles.bookingCard}>
            <View style={styles.bookingHeader}>
              <View style={styles.bookingLeft}>
                <LinearGradient
                  colors={["#06B6D4", "#2563EB"]}
                  style={styles.bookingIcon}
                >
                  <Ionicons name="bus" size={16} color="white" />
                </LinearGradient>
                <View>
                  <Text style={styles.bookingRoute}>{booking.route}</Text>
                  <Text style={styles.bookingBus}>Bus {booking.busNo}</Text>
                </View>
              </View>
              <View style={styles.statusBadge}>
                <Ionicons name="checkmark-circle" size={12} color="#10B981" />
                <Text style={styles.statusText}>{booking.status}</Text>
              </View>
            </View>
            <View style={styles.bookingFooter}>
              <View style={styles.bookingDate}>
                <Ionicons name="calendar-outline" size={12} color="#64748B" />
                <Text style={styles.bookingDateText}>{booking.date}</Text>
              </View>
              <TouchableOpacity style={styles.viewDetailsButton}>
                <Text style={styles.viewDetailsText}>View Details</Text>
                <Ionicons name="arrow-forward" size={12} color="#06B6D4" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#06B6D4" />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Compact Header matching journey page */}
          <LinearGradient
            colors={["#0F172A", "#1E293B"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.header}
          >
            <View style={styles.headerContent}>
              <View style={styles.headerLeft}>
                <View style={styles.profileImageWrapper}>
                  <Image source={{ uri: photoURL }} style={styles.profileImage} />
                  <View style={styles.onlineBadge}>
                    <View style={styles.onlineDot} />
                  </View>
                </View>
                <View style={styles.headerTextContainer}>
                  <Text style={styles.headerTitle}>{user?.displayName || "No Name"}</Text>
                  <Text style={styles.headerSubtitle}>{user?.email || "No Email"}</Text>
                </View>
              </View>
              <TouchableOpacity 
                style={styles.headerButton}
                onPress={() => setEditMode(!editMode)}
              >
                <Ionicons name={editMode ? "close" : "create-outline"} size={20} color="#94A3B8" />
              </TouchableOpacity>
            </View>
          </LinearGradient>

          {/* Edit Mode */}
          {editMode && (
            <View style={styles.editSection}>
              <View style={styles.inputWrapper}>
                <Ionicons name="person-outline" size={16} color="#94A3B8" style={styles.inputIcon} />
                <TextInput 
                  style={styles.input} 
                  placeholder="Enter name" 
                  value={displayName} 
                  onChangeText={setDisplayName} 
                  placeholderTextColor="#64748B" 
                />
              </View>
              <View style={styles.inputWrapper}>
                <Ionicons name="image-outline" size={16} color="#94A3B8" style={styles.inputIcon} />
                <TextInput 
                  style={styles.input} 
                  placeholder="Enter photo URL" 
                  value={photoURL} 
                  onChangeText={setPhotoURL} 
                  placeholderTextColor="#64748B" 
                />
              </View>
              <View style={styles.editButtonRow}>
                <TouchableOpacity 
                  style={styles.cancelButton} 
                  onPress={() => setEditMode(false)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.saveButtonWrapper} 
                  onPress={handleSave} 
                  disabled={loading}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={["#06B6D4", "#2563EB"]}
                    style={styles.saveButton}
                  >
                    {loading ? (
                      <ActivityIndicator color="#fff" size="small" />
                    ) : (
                      <>
                        <Ionicons name="checkmark-circle" size={16} color="white" />
                        <Text style={styles.saveButtonText}>Save</Text>
                      </>
                    )}
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {/* Stats Section */}
          <View style={styles.statsSection}>
            <View style={styles.statCard}>
              <LinearGradient
                colors={["#06B6D4", "#2563EB"]}
                style={styles.statIconContainer}
              >
                <Ionicons name="bus" size={18} color="white" />
              </LinearGradient>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Total Trips</Text>
            </View>

            <View style={styles.statCard}>
              <LinearGradient
                colors={["#10B981", "#059669"]}
                style={styles.statIconContainer}
              >
                <Ionicons name="calendar" size={18} color="white" />
              </LinearGradient>
              <Text style={styles.statValue}>3</Text>
              <Text style={styles.statLabel}>Upcoming</Text>
            </View>

            <View style={styles.statCard}>
              <LinearGradient
                colors={["#F97316", "#EA580C"]}
                style={styles.statIconContainer}
              >
                <Ionicons name="heart" size={18} color="white" />
              </LinearGradient>
              <Text style={styles.statValue}>5</Text>
              <Text style={styles.statLabel}>Favorites</Text>
            </View>
          </View>

          {/* Recent Bookings Preview */}
          <View style={styles.section}>
            <View style={styles.sectionTitleRow}>
              <Text style={styles.sectionTitle}>Recent Bookings</Text>
              <TouchableOpacity onPress={() => setBookingsVisible(true)}>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>

            {recentBookings.slice(0, 2).map((booking) => (
              <TouchableOpacity key={booking.id} style={styles.bookingPreviewCard}>
                <View style={styles.bookingPreviewLeft}>
                  <LinearGradient
                    colors={["#06B6D4", "#2563EB"]}
                    style={styles.bookingPreviewIcon}
                  >
                    <Ionicons name="bus" size={14} color="white" />
                  </LinearGradient>
                  <View>
                    <Text style={styles.bookingPreviewRoute}>{booking.route}</Text>
                    <Text style={styles.bookingPreviewDate}>{booking.date}</Text>
                  </View>
                </View>
                <Ionicons name="chevron-forward" size={16} color="#64748B" />
              </TouchableOpacity>
            ))}
          </View>

          {/* Quick Actions */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            
            <View style={styles.actionGrid}>
              <TouchableOpacity 
                style={styles.actionGridCard}
                onPress={() => router.push("/journeys")}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={["#06B6D4", "#2563EB"]}
                  style={styles.actionGridIcon}
                >
                  <Ionicons name="search" size={20} color="white" />
                </LinearGradient>
                <Text style={styles.actionGridText}>Find Routes</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.actionGridCard}
                onPress={() => setBookingsVisible(true)}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={["#10B981", "#059669"]}
                  style={styles.actionGridIcon}
                >
                  <Ionicons name="receipt" size={20} color="white" />
                </LinearGradient>
                <Text style={styles.actionGridText}>My Bookings</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.actionGridCard}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={["#8B5CF6", "#7C3AED"]}
                  style={styles.actionGridIcon}
                >
                  <Ionicons name="wallet" size={20} color="white" />
                </LinearGradient>
                <Text style={styles.actionGridText}>Wallet</Text>
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.actionGridCard}
                activeOpacity={0.8}
              >
                <LinearGradient
                  colors={["#F97316", "#EA580C"]}
                  style={styles.actionGridIcon}
                >
                  <Ionicons name="gift" size={20} color="white" />
                </LinearGradient>
                <Text style={styles.actionGridText}>Rewards</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Settings & Support */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Settings & Support</Text>

            <TouchableOpacity 
              style={styles.menuCard}
              onPress={() => setSettingsVisible(true)}
              activeOpacity={0.8}
            >
              <View style={styles.menuLeft}>
                <View style={[styles.menuIcon, { backgroundColor: "rgba(6, 182, 212, 0.1)" }]}>
                  <Ionicons name="settings" size={18} color="#06B6D4" />
                </View>
                <View>
                  <Text style={styles.menuTitle}>Settings</Text>
                  <Text style={styles.menuDescription}>Manage preferences</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#64748B" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuCard}
              onPress={() => setHelpVisible(true)}
              activeOpacity={0.8}
            >
              <View style={styles.menuLeft}>
                <View style={[styles.menuIcon, { backgroundColor: "rgba(16, 185, 129, 0.1)" }]}>
                  <Ionicons name="help-circle" size={18} color="#10B981" />
                </View>
                <View>
                  <Text style={styles.menuTitle}>Help & Support</Text>
                  <Text style={styles.menuDescription}>Get assistance</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#64748B" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.menuCard}
              activeOpacity={0.8}
            >
              <View style={styles.menuLeft}>
                <View style={[styles.menuIcon, { backgroundColor: "rgba(139, 92, 246, 0.1)" }]}>
                  <Ionicons name="star" size={18} color="#8B5CF6" />
                </View>
                <View>
                  <Text style={styles.menuTitle}>Rate Us</Text>
                  <Text style={styles.menuDescription}>Share your feedback</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#64748B" />
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Modals */}
        <Modal visible={settingsVisible} animationType="slide" transparent={false}>
          <SettingsContent />
        </Modal>

        <Modal visible={helpVisible} animationType="slide" transparent={false}>
          <HelpContent />
        </Modal>

        <Modal visible={bookingsVisible} animationType="slide" transparent={false}>
          <BookingsContent />
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020617",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 44,
    paddingBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: "#06B6D4",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#334155",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  profileImageWrapper: {
    position: "relative",
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: "#06B6D4",
  },
  onlineBadge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  onlineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#10B981",
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 0.3,
  },
  headerSubtitle: {
    fontSize: 11,
    color: "#94A3B8",
    marginTop: 2,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#1E293B",
    alignItems: "center",
    justifyContent: "center",
  },
  editSection: {
    padding: 16,
    gap: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0F172A",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#1E293B",
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    padding: 12,
    fontSize: 13,
    color: "#F1F5F9",
  },
  editButtonRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 6,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#1E293B",
    borderWidth: 1,
    borderColor: "#334155",
  },
  cancelButtonText: {
    fontWeight: "700",
    fontSize: 13,
    color: "#F1F5F9",
  },
  saveButtonWrapper: {
    flex: 1,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#06B6D4",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  saveButton: {
    flexDirection: "row",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  saveButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 13,
  },
  statsSection: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 8,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#0F172A",
    borderRadius: 14,
    padding: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1E293B",
  },
  statIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    shadowColor: "#06B6D4",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F1F5F9",
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 10,
    color: "#64748B",
  },
  section: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F1F5F9",
    letterSpacing: 0.2,
  },
  seeAllText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#06B6D4",
  },
  bookingPreviewCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0F172A",
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#1E293B",
  },
  bookingPreviewLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  bookingPreviewIcon: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#06B6D4",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  bookingPreviewRoute: {
    fontSize: 13,
    fontWeight: "700",
    color: "#F1F5F9",
    marginBottom: 2,
  },
  bookingPreviewDate: {
    fontSize: 10,
    color: "#64748B",
  },
  actionGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  actionGridCard: {
    width: (SCREEN_WIDTH - 40) / 2,
    backgroundColor: "#0F172A",
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1E293B",
  },
  actionGridIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    shadowColor: "#06B6D4",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  actionGridText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#F1F5F9",
    textAlign: "center",
  },
  menuCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#0F172A",
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#1E293B",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
  },
  menuIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#F1F5F9",
    marginBottom: 2,
    letterSpacing: 0.2,
  },
  menuDescription: {
    fontSize: 11,
    color: "#64748B",
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: "#020617",
  },
  modalHeaderGradient: {
    paddingTop: 44,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  modalHeaderContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  modalIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 0.3,
  },
  modalSubtitle: {
    fontSize: 11,
    color: "rgba(255, 255, 255, 0.9)",
    marginTop: 2,
  },
  modalCloseButton: {
    marginLeft: 8,
  },
  modalScrollContent: {
    flex: 1,
    padding: 16,
  },
  sectionHeader: {
    fontSize: 11,
    fontWeight: "700",
    color: "#64748B",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10,
    marginTop: 6,
  },
  settingCard: {
    backgroundColor: "#0F172A",
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#1E293B",
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  settingTextContainer: {
    flex: 1,
  },
  settingLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#F1F5F9",
    marginBottom: 2,
    letterSpacing: 0.2,
  },
  settingDescription: {
    fontSize: 11,
    color: "#64748B",
  },
  settingRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  settingValue: {
    fontSize: 13,
    fontWeight: "600",
    color: "#94A3B8",
  },
  logoutButtonGradient: {
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#DC2626",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 14,
  },
  logoutButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
    letterSpacing: 0.2,
  },
  versionContainer: {
    alignItems: "center",
    paddingVertical: 16,
  },
  versionText: {
    fontSize: 11,
    color: "#475569",
  },
  helpCard: {
    backgroundColor: "#0F172A",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#1E293B",
  },
  helpIconContainer: {
    marginBottom: 12,
  },
  helpIcon: {
    width: 42,
    height: 42,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#06B6D4",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  helpTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F1F5F9",
    marginBottom: 10,
    letterSpacing: 0.2,
  },
  helpDescription: {
    fontSize: 13,
    color: "#94A3B8",
    lineHeight: 18,
    marginBottom: 14,
  },
  faqList: {
    gap: 8,
  },
  faqItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#1E293B",
    padding: 10,
    borderRadius: 8,
  },
  faqText: {
    fontSize: 12,
    color: "#CBD5E1",
    flex: 1,
  },
  contactMethods: {
    gap: 8,
    marginBottom: 12,
  },
  contactMethod: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#1E293B",
    padding: 12,
    borderRadius: 10,
  },
  contactIcon: {
    width: 36,
    height: 36,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 10,
    color: "#64748B",
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 13,
    fontWeight: "600",
    color: "#F1F5F9",
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 12,
    borderRadius: 10,
    shadowColor: "#06B6D4",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  contactButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 13,
    letterSpacing: 0.2,
  },
  bookingCard: {
    backgroundColor: "#0F172A",
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#1E293B",
  },
  bookingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  bookingLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  bookingIcon: {
    width: 36,
    height: 36,
    borderRadius: 9,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#06B6D4",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  bookingRoute: {
    fontSize: 14,
    fontWeight: "700",
    color: "#F1F5F9",
    marginBottom: 2,
  },
  bookingBus: {
    fontSize: 10,
    color: "#64748B",
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    backgroundColor: "rgba(16, 185, 129, 0.1)",
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#10B981",
  },
  bookingFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#1E293B",
  },
  bookingDate: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  bookingDateText: {
    fontSize: 11,
    color: "#94A3B8",
  },
  viewDetailsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  viewDetailsText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#06B6D4",
  },
});