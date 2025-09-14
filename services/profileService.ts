import { auth } from "@/firebase";
import { signOut, User } from "firebase/auth";

class ProfileService {
  /**
   * Logout the current user
   * @returns Promise<void>
   */
  async logout(): Promise<void> {
    try {
      await signOut(auth);
      console.log("✅ User logged out successfully");
    } catch (error: any) {
      console.error("❌ Logout failed:", error.message);
      throw error;
    }
  }

  /**
   * Get currently logged-in user
   * @returns User | null
   */
  getCurrentUser(): User | null {
    return auth.currentUser;
  }

  /**
   * Check if a user is logged in
   * @returns boolean
   */
  isLoggedIn(): boolean {
    return auth.currentUser !== null;
  }
}

export const profileService = new ProfileService();
