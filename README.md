# Welcome to your `SpendWise` - A Expense Tracker App 👋

# How to read git commits

In a professional production environment, we use **Conventional Commits** and **Standardized Branching**. This isn't just for "looking clean"—it’s used by automated tools to generate changelogs, decide version numbers (v1.0.1 vs v1.1.0), and trigger CI/CD pipelines.

Here is the breakdown of what these prefixes mean and how to use them for your E-commerce app.

---

### 1. Commit Messages (`type: description`)

The colon (`:`) is used in **commit messages**. The most common types are:

- **`feat:` (Feature)**
  - **When:** You add something new for the user.
  - _Example:_ `feat: add stripe payment gateway`
- **`fix:` (Bug Fix)**
  - **When:** You fix a bug in the code.
  - _Example:_ `fix: cart total calculation on checkout`
- **`chore:` (Maintenance)**
  - **When:** You do something that doesn't change the app's logic (updating packages, changing `.gitignore`, config files).
  - _Example:_ `chore: update expo-router to v3`
- **`docs:` (Documentation)**
  - **When:** You only change the README, add comments, or write documentation.
- **`refactor:` (Code Cleanup)**
  - **When:** You change the code to make it better/cleaner, but the behavior stays exactly the same.
- **`style:` (Formatting)**
  - **When:** You fix linting, spacing, or semicolons (no logic changes).
- **`test:` (Testing)**
  - **When:** You add or fix Jest or Cypress tests.

---

### 2. Branch Naming (`type/branch-name`)

The slash (`/`) is used for **branch names**. This creates "folders" in Git tools like GitHub or VS Code, making them easy to manage.

- **`feat/`**: For developing a new feature.
  - `feat/user-auth`
  - `feat/product-search`
- **`fix/` or `bugfix/`**: For fixing a bug.
  - `fix/broken-images-ios`
- **`chore/`**: For setup tasks.
  - `chore/initial-boilerplate`
  - `chore/setup-tailwind`
- **`hotfix/`**: Used for critical bugs in production that need an immediate fix.

---

### 3. "Another Points" (Pro Developer Tips)

#### A. Using Scopes `type(scope):`

If you are working on a large E-commerce app, use **scopes** to tell your team exactly which part of the app you touched.

- `feat(api): add products endpoint`
- `feat(ui): create primary button component`
- `fix(cart): prevent duplicate items`

#### B. Breaking Changes (`!`)

If you make a change that **breaks** existing code (e.g., changing a database schema or a major API change), add an exclamation mark:

- `feat!: change login to require phone number instead of email`
- _This tells the system: "This is a MAJOR update (v1.0.0 -> v2.0.0)."_

#### C. The Workflow for your Expo/Vite App:

1.  **Initialize:** `git commit -m "chore: initial project setup"`
2.  **Create Branch:** `git checkout -b chore/setup-navigation`
3.  **Work:** Install libraries, setup files.
4.  **Commit:** `git commit -m "chore(deps): install expo-router and configure"`
5.  **Merge:** Pull request into `main`.
6.  **New Branch:** `git checkout -b feat/login-screen`

### Why do this?

When you use these prefixes, you can use a tool like **[Semantic Release](https://github.com/semantic-release/semantic-release)**. It will read your commits and automatically:

1.  Update your `package.json` version.
2.  Create a `CHANGELOG.md` file listing every `feat` and `fix`.
3.  Create a GitHub Release for you.

**Recommendation:** Start using `feat:` and `fix:` today. It's the #1 sign of a senior developer in a Git history.

---

# Expo app

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project  # Done
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
