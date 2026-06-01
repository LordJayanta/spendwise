# OpenSpent 🪙 || (formerly SpendWise)

**A professional, offline-first personal finance tracker built with React Native and Expo. (Formerly SpendWise)**

![Version](https://img.shields.io/badge/version-1.0.0--dev-orange)
![Size](https://img.shields.io/badge/APK--Size-45.6MB-blue)
![License](https://img.shields.io/badge/license-Apache--2.0-blue)
![Platform](https://img.shields.io/badge/platform-Android-green)

OpenSpent is a lightweight, secure expense manager designed to give you full control over your financial data. Built with a focus on performance and reliability, it stores everything locally on your device—no cloud, no tracking, just your data.

> 🚀 **WELCOME TO OPENSPENT (formerly SpendWise)**  
> This project has officially been rebranded from **SpendWise** to **OpenSpent**! We are currently in active development for the **v1.0.0 Production Launch**, which includes a massive UI/UX overhaul.
>
> _If you are an existing user looking for the final legacy SpendWise app, you can still download [v0.4.0 from the Releases page](https://github.com/LordJayanta/openspent/releases/tag/v0.4.0). You can use the CSV Export feature in v0.4.0 to migrate your data to OpenSpent once v1.0.0 is released!_

---

## ✨ Key Features (v1.0.0-dev)

- 🔒 **Biometric Security**: Hardware-level app locking using FaceID or Fingerprint (`expo-local-authentication`), featuring background-to-foreground AppState monitoring.
- 📁 **Data Portability**: Complete CSV Export and Import using `PapaParse`. Your data belongs to you.
- 👋 **User Onboarding**: A smooth, swipable tutorial and guest profile setup using `react-native-pager-view`.
- 🧭 **Tab Navigation**: Modular Tab-based navigation system for seamless user flow.
- 📈 **Visual Analytics**: Beautiful, interactive **Pie Charts** to visualize spending habits by category.
- 🏦 **Local Persistence**: Powered by **SQLite** with **Drizzle ORM** for industrial-grade data reliability.
- ⚡ **Advanced State Management**: Optimized **Zustand** store for lightning-fast global state synchronization.
- ⚙️ **Production Optimized**: Keyboard-aware scrolling, ProGuard shrinking, and debug log stripping for a high-performance footprint.

---

## 🛠 Tech Stack

- **Framework**: [Expo](https://expo.dev/) (React Native)
- **Database**: [expo-sqlite](https://docs.expo.dev/versions/latest/sdk/sqlite/) with [Drizzle ORM](https://orm.drizzle.team/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) (with AsyncStorage persistence)
- **Data Parsing**: PapaParse (CSV serialization/deserialization)
- **Security**: Expo Local Authentication
- **Visualization**: `react-native-gifted-charts`
- **Build Tools**: EAS Build (Cloud), ProGuard/R8, Babel
- **Engine**: Hermes (Optimized Bytecode)

---

## 📦 Installation & Use

### For Users (Stable Legacy Release)

You can download the final legacy SpendWise APK directly to your Android device:

1. Go to the [Releases](https://github.com/LordJayanta/openspent/releases) page.
2. Download `SpendWise_v0.4.0.apk`.
3. Install the APK on your phone. _(The official OpenSpent v1.0.0 APK is coming soon!)_

### For Developers (Current Dev Branch)

To run the new OpenSpent project locally:

1. **Clone the repo:**
   ```bash
   git clone https://github.com/LordJayanta/openspent.git
   cd openspent
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

## 🧠 Developer Diary & Learnings

Throughout the development of this app, I documented the major technical challenges, Git workflows, and build optimization strategies I mastered.

👉 **[Read the Developer Cheatsheet & Learnings](./docs/LEARNINGS.md)**

---

## 📄 License

Distributed under the **Apache License 2.0**. See `LICENSE` for more information.

---

## 🤝 Contact

> Maintained by LordJayanta

**LordJayanta** - [@GitHub](https://github.com/LordJayanta)  
Project Link: [https://github.com/LordJayanta/openspent](https://github.com/LordJayanta/openspent)
