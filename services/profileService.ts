import { auth, db } from "@/firebase";
import { signOut, User, updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

class ProfileService {
  async logout(): Promise<void> {
    await signOut(auth);
  }

  getCurrentUser(): User | null {
    return auth.currentUser;
  }

  isLoggedIn(): boolean {
    return auth.currentUser !== null;
  }

  async updateProfile(data: { displayName?: string; photoURL?: string }) {
    if (!auth.currentUser) throw new Error("No logged in user");
    await updateProfile(auth.currentUser, data);
    return auth.currentUser;
  }

  async getSettings(userId: string) {
    const userRef = doc(db, "userSettings", userId);
    const snapshot = await getDoc(userRef);

    if (snapshot.exists()) {
      return snapshot.data();
    } else {
      const defaultSettings = {
        darkMode: false,
        notifications: true,
        isPrivate: false,
        language: "English",
      };
      // Create default settings document
      await setDoc(userRef, defaultSettings);
      return defaultSettings;
    }
  }

  async updateSetting(userId: string, key: string, value: any) {
    const userRef = doc(db, "userSettings", userId);
    const snapshot = await getDoc(userRef);

    if (snapshot.exists()) {
      await updateDoc(userRef, { [key]: value });
    } else {
      // Create the document if it doesn't exist
      await setDoc(userRef, { [key]: value }, { merge: true });
    }
  }

  async saveSettings(userId: string, settings: any) {
    const userRef = doc(db, "userSettings", userId);
    await setDoc(userRef, settings, { merge: true });
  }
}

export const profileService = new ProfileService();
