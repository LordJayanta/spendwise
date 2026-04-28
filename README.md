# SpendWise 🪙

**A professional, offline-first personal finance tracker built with React Native and Expo.**

![Version](https://img.shields.io/badge/version-0.3.0--stable-green)
![Size](https://img.shields.io/badge/APK--Size-38MB-blue)
![License](https://img.shields.io/badge/license-Apache--2.0-blue)
![Platform](https://img.shields.io/badge/platform-Android-green)

SpendWise is a lightweight, secure expense manager designed to give you full control over your financial data. Built with a focus on performance and reliability, it stores everything locally on your device—no cloud, no tracking, just your data.

---

## ✨ Key Features (v0.3.0)

- 📈 **Visual Analytics (New)**: Beautiful, interactive **Pie Charts** to visualize spending habits by category, powered by modular data-transformation logic.
- 🏦 **Local Persistence**: Powered by **SQLite** with **Drizzle ORM** for industrial-grade data reliability and type-safe querying.
- ⚡ **Advanced State Management**: Optimized **Zustand** store for lightning-fast global state synchronization and reduced re-renders.
- 📝 **Full CRUD Support**: Effortlessly Create, Read, Update, and Delete your transactions with strict data integrity.
- 📊 **Live Summary**: Instant calculation of total income and expenses with real-time updates.
- 📅 **Manual Entry Control**: Full control over transaction timestamps, notes, and categories.
- 🛡️ **Privacy First**: No internet permissions required. Your financial data never leaves your device.
- ⚙️ **Production Optimized**: ProGuard enabled, resource shrinking, and debug log stripping for a high-performance 38MB footprint.

---

## 🛠 Tech Stack

- **Framework**: [Expo](https://expo.dev/) (React Native)
- **Database**: [expo-sqlite](https://docs.expo.dev/versions/latest/sdk/sqlite/) with [Drizzle ORM](https://orm.drizzle.team/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Visualization**: [react-native-gifted-charts](https://github.com/Abhinav-Kushal/react-native-gifted-charts) & `react-native-svg`
- **Navigation**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
- **Build Tools**: EAS Build (Cloud), ProGuard/R8, Babel
- **Engine**: Hermes (Optimized Bytecode)

---

## 📦 Installation & Use

### For Users

You can download the latest pre-release APK directly to your Android device:

1. Go to the [Releases](https://github.com/LordJayanta/spendwise/releases) page.
2. Download `SpendWise_v0.3.0.apk`.
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

Throughout the development of SpendWise, I documented the major technical challenges, Git workflows, and build optimization strategies I mastered.

If you are another developer learning React Native or a recruiter looking for my technical insights, check out my developer diary here:
👉 **[Read the Developer Cheatsheet & Learnings](./docs/LEARNINGS.md)**

---

## 📄 License

Distributed under the **Apache License 2.0**. See `LICENSE` for more information.

---

## 🤝 Contact

> Maintained by LordJayanta

**LordJayanta** - [@GitHub](https://github.com/LordJayanta)  
Project Link: [https://github.com/LordJayanta/spendwise](https://github.com/LordJayanta/spendwise)

```

```
