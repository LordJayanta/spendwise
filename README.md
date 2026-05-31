# SpendWise 🪙

**A professional, offline-first personal finance tracker built with React Native and Expo.**

![Version](https://img.shields.io/badge/version-0.4.0--stable-green)
![Size](https://img.shields.io/badge/APK--Size-45.6MB-blue)
![License](https://img.shields.io/badge/license-Apache--2.0-blue)
![Platform](https://img.shields.io/badge/platform-Android-green)

SpendWise is a lightweight, secure expense manager designed to give you full control over your financial data. Built with a focus on performance and reliability, it stores everything locally on your device—no cloud, no tracking, just your data.

> ⚠️ **IMPORTANT NOTICE: The Road to v1.0.0**  
> v0.4.0 is the final release under the "SpendWise" name. We are currently undergoing a massive UI/UX overhaul and rebranding the project to **OpenSpent** for our v1.0.0 production launch. Please use the new **CSV Export** feature in this version to backup your data so you can import it into the new app when it launches!

---

## ✨ Key Features (v0.4.0 - The "Feature Complete" Update)

- 🔒 **Biometric Security (New)**: Hardware-level app locking using FaceID or Fingerprint (`expo-local-authentication`), featuring background-to-foreground AppState monitoring.
- 📁 **Data Portability (New)**: Complete CSV Export and Import using `PapaParse`. Your data belongs to you.
- 👋 **User Onboarding (New)**: A smooth, swipable tutorial and guest profile setup using `react-native-pager-view`.
- 🧭 **Tab Navigation (New)**: Upgraded architecture to a modular Tab-based navigation system for seamless user flow.
- 📈 **Visual Analytics**: Beautiful, interactive **Pie Charts** to visualize spending habits by category.
- 🏦 **Local Persistence**: Powered by **SQLite** with **Drizzle ORM** for industrial-grade data reliability.
- ⚡ **Advanced State Management**: Optimized **Zustand** store for lightning-fast global state synchronization.
- ⚙️ **Production Optimized**: Keyboard-aware scrolling, ProGuard shrinking, and debug log stripping for a high-performance ~38MB footprint.

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

### For Users

You can download the final release(SpendWise) APK directly to your Android device:

1. Go to the [Releases](https://github.com/LordJayanta/spendwise/releases) page.
2. Download `SpendWise_v0.4.0.apk`.
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
Project Link: [https://github.com/LordJayanta/spendwise](https://github.com/LordJayanta/spendwise)
