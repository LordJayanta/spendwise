# SpendWise 🪙

**A professional, offline-first personal finance tracker built with React Native and Expo.**

![Version](https://img.shields.io/badge/version-0.1.0--pre--release-orange)
![License](https://img.shields.io/badge/license-Apache--2.0-blue)
![Platform](https://img.shields.io/badge/platform-Android-green)

SpendWise is a lightweight, secure expense manager designed to give you full control over your financial data. Built with a focus on performance and reliability, it stores everything locally on your device—no cloud, no tracking, just your data.

---

## ✨ Key Features (v0.1.0 MVP)

- 🏦 **Local Persistence**: Powered by **SQLite** for industrial-grade data reliability.
- ⚡ **Real-time Synchronization**: Global state management via **React Context API** ensures your balance and history stay in sync instantly.
- 📝 **Full CRUD Support**: Effortlessly Create, Read, Update, and Delete your transactions.
- 📊 **Live Summary**: Instant calculation of total income and expenses.
- 📅 **Manual Entry Control**: Full control over transaction timestamps and categories.
- 🔄 **Pull-to-Refresh**: Easily force-sync your data with standard mobile interactions.
- 🛡️ **Privacy First**: No internet permissions required for data storage.

---

## 🛠 Tech Stack

- **Framework**: [Expo](https://expo.dev/) (React Native)
- **Database**: [expo-sqlite](https://docs.expo.dev/versions/latest/sdk/sqlite/)
- **State Management**: React Context API
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
- **Icons**: Lucide React Native & Ionicons
- **Language**: JavaScript / TypeScript

---

## 📦 Installation & Use

### For Users

You can download the latest pre-release APK directly to your Android device:

1. Go to the [Releases](https://github.com/LordJayanta/spendwise/releases) page.
2. Download `SpendWise_v0.1.0.apk`.
3. Install the APK on your phone (you may need to allow "Install from Unknown Sources").

### For Developers

To run this project locally:

1. **Clone the repo:**
   ```bash
   git clone https://github.com/LordJayanta/spendwise.git
   cd spendwise
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npx expo start
   ```

---

## 📄 License

Distributed under the **Apache License 2.0**. See `LICENSE` for more information.

---

## 🤝 Contact

**LordJayanta** - [@GitHub](https://github.com/LordJayanta)  
Project Link: [https://github.com/LordJayanta/spendwise](https://github.com/LordJayanta/spendwise)
