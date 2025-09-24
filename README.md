# NCG-GO (NCG Bus Booking & Timetable App)

![NCG-GO Logo](./assets/logo.png)  

**NCG-GO** is a mobile application for NCG Express bus services in Sri Lanka. It allows users to browse bus routes & timetables, book seats, manage their profile, and adjust app settings — all from a sleek, cross-platform React Native app.

---

## 🚍 Features

| Feature | Description |
|--------|-------------|
| Browse Routes & Timetables | View all bus journeys between various cities with full schedule lists |
| Booking System | Reserve one or more seats; seats are deducted from the availability |
| User Profile | View and edit your name, profile photo, settings |
| Settings | Toggle dark mode, notifications, language preferences |
| Help & Support | FAQ section, contact info, about page |
| Authentication | Register, login, and logout with Firebase Auth |
| Persistent Settings | User preferences stored in Firestore for consistency across devices |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React Native (Expo) |
| Auth & Profile | Firebase Auth + Firestore |
| Backend API | (Optional) Node.js / Express or Firebase Functions |
| Styling | Tailwind / NativeWind + custom component styling |
| UI / Animations | Expo LinearGradient, Animated, Modal, Toasts |

---

## 📁 Project Structure

NCG-GO/
├── app/ # Screens & routes (Expo Router)
│ ├── (auth)/ # login, register
│ ├── settings.tsx
│ ├── journeys/ # journey listing, booking flows
│ ├── profile.tsx
│ └── index.tsx # home dashboard
├── assets/ # Images / fonts / icons
├── services/ # API & Firebase service layers
│ ├── authService.ts
│ ├── profileService.ts
│ └── journeysService.ts
├── firebase.ts # Firebase initialization
├── global.css # Tailwind base
├── tailwind.config.js
├── package.json
└── README.md

