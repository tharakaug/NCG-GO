export interface Booking {
  from: string;
  to: string;
  busNo: string;
  type: string;
  date: Date;
  passengers: number | string;
  name: string;
  email?: string;
  phone: string;
  userId?: string;  // Firebase Auth UID
  status?: "pending" | "confirmed"; // auto-confirm
  createdAt?: any;
}
