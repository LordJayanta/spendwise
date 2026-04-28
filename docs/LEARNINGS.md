# 🚀 SpendWise: The Developer Cheatsheet

## 📚 1. Conventional Commits (The "Language" of Pros)

We used prefixes to tell a story in our Git history.

- **`feat:`** Adding a new capability (e.g., `feat(db): add SQLite support`)
- **`fix:`** Resolving a bug (e.g., `fix(context): sync state after delete`)
- **`chore:`** Maintenance, setup, or configs (e.g., `chore: install zustand`)
- **`refactor:`** Changing code without changing behavior (e.g., `refactor(state): move Context to Zustand`)
- **`perf:`** Code that improves performance/size (e.g., `perf: enable Hermes engine`)
- **`style:`** UI polishing or code formatting (e.g., `style(ui): use destructive red button`)
- **`docs:`** Updating documentation (e.g., `docs: update README for v0.1.0`)

---

## 🏗️ 2. The Project Journey (What I Learned)

### 🟢 v0.1.0: The MVP (Context API + SQLite)

- **The "Boilerplate" Rule:** Always initialize Git and commit the raw Expo template _before_ writing code.
- **Atomic Commits:** Building the UI first (`feat: ui`), then adding the logic (`feat: logic`).
- **Top-Level Await Bug:** Learned that React Native's JS engine crashes if you put `await` outside a function. (Fixed by moving `PRAGMA` into `initDb`).
- **Write-Ahead Logging (WAL):** Added `PRAGMA journal_mode = WAL` to allow the database to read and write simultaneously without freezing.

### 🟡 v0.1.1: The Performance Patch

- **The 93MB to 38MB Victory:**
  - Added `"jsEngine": "hermes"` to `app.json` (faster bytecode).
  - Deleted local `android/ios` folders so EAS builds a "Managed" optimized app.
  - Used `expo-build-properties` to enable **ProGuard** (Tree Shaking).
- **Production Clean-up:** Used Babel to strip `console.log` from production.

### 🔵 v0.2.0: The Enterprise Refactor (Zustand + Drizzle)

- **The Legacy Branch:** Saved the old Context code to a branch (`architecture/legacy-context-sqlite`) for recruiters to see, while moving `main` forward.
- **The "Source of Truth" Rule:** Always build the Database schema first (Drizzle), then the State (Zustand), then the UI.

### 🟣 v0.3.0: Data Analytics & Visualization

- **Data Transformation Pattern**: Learned how to transform raw database rows (Flat Arrays) into specialized data structures (Grouped Objects) required by charting libraries.
- **Library Integration**: Successfully integrated `react-native-gifted-charts` and `react-native-svg`, handling the complexity of third-party peer dependencies in an Expo environment.
- **Modular Component Design**: Practiced "Separation of Concerns" by moving complex chart logic out of the main screens and into dedicated, reusable analytics components.
- **The "Road to v1.0.0" Strategy**: Implemented feature scaffolding (Route placeholders) before committing to heavy logic, ensuring the navigation flow was stable first.

---

## 💻 3. The Git Command Dictionary

### Branching (Workflow)

| Command                                | What it does                                              |
| :------------------------------------- | :-------------------------------------------------------- |
| `git checkout -b feat/my-feature`      | Creates a new branch and switches to it.                  |
| `git checkout main`                    | Switches back to the main branch.                         |
| `git branch -d feat/my-feature`        | Safely deletes a local branch.                            |
| `git branch -D feat/my-feature`        | **Force** deletes a local branch (Scrapping a prototype). |
| `git push origin --delete branch-name` | Deletes the branch from GitHub.                           |

### Fixing Mistakes (The "Oh No" Commands)

| Command                                     | What it does                                                              |
| :------------------------------------------ | :------------------------------------------------------------------------ |
| `git commit --amend --no-edit`              | Adds a forgotten file to your _last_ commit without changing the message. |
| `git commit --amend`                        | Opens the editor to let you fix a typo in your last commit message.       |
| `git push origin branch --force-with-lease` | The "Safe Force Push." Updates GitHub after you `amend` a commit.         |
| `git stash`                                 | Hides your current messy code so you can have a clean workspace.          |
| `git stash pop`                             | Brings your hidden messy code back.                                       |

### Time Travel (Resets)

| Command                   | What it does                                                                     |
| :------------------------ | :------------------------------------------------------------------------------- |
| `git reset --soft HEAD~1` | Undoes the last commit, but **keeps** your code in the staging area.             |
| `git reset --hard HEAD`   | Destroys all uncommitted changes. Reverts to the last commit.                    |
| `git clean -fd`           | Deletes new/untracked files and folders that `--hard` missed.                    |
| `git reflog`              | The "Diary." Shows a history of every reset/commit so you can recover lost work. |

### Releasing (Tags)

| Command                                  | What it does                                       |
| :--------------------------------------- | :------------------------------------------------- |
| `npm version 0.1.0 --no-git-tag-version` | Bumps version in `package.json` safely.            |
| `git tag -a v0.1.0 -m "Release v0.1.0"`  | Creates a permanent snapshot marker for a release. |
| `git push origin v0.1.0`                 | Pushes the tag to GitHub.                          |
| `git tag -d v0.1.0`                      | Deletes a tag locally if you made a mistake.       |

---

## ☁️ 4. EAS Build Cheat Codes

**The `eas.json` Magic File:**
Always ensure you use the `preview` profile for testing so you get an `.apk` instead of an `.aab`.

```json
"preview": {
  "distribution": "internal",
  "android": {
    "buildType": "apk"
  },
  "ios": {
    "simulator": true
  }
}
```

**Essential EAS Commands:**

- `eas build:configure`: Generates the `eas.json` file.
- `eas build --platform android --profile preview`: Builds the shareable APK on Expo servers.
- `eas build --platform all --profile preview --clear-cache`: Builds both iOS and Android, and forces the server to delete heavy cached files (vital for shrinking app size).

---

### A Note for My CV:

> _"Yes, my initial Android build was 93MB. I solved it by deleting legacy native folders, forcing the Hermes engine, and enabling ProGuard resource shrinking, which reduced the size by 60%."_ (Instant hire!)
