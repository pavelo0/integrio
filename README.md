# Integrio — Contributing & Git Convention

## 📖 Description

**Integrio** is a no-code platform for building custom chat widgets with AI integration for websites.

A client sets up their own chat in about **5 minutes**: custom colors, logo, and **context** (data used for AI answers). They then get a **unique integrator link** to embed the chat on their site.

**Why Integrio:**  
Simplicity and low cost compared to live-operator solutions. With traditional support you deal with higher cost, long wait times, and clunky implementations—plus users often have to fill out a form with a phone number before they can even ask a question. Integrio gives an AI-powered chat that fits the brand and answers from your context, without that friction.

## 🛠️ Tech Stack

| Technology              | Purpose                    |
| ----------------------- | -------------------------- |
| React 19.2              | UI                         |
| TypeScript 5.9          | Typing                     |
| Vite 7.2                | Build & dev server         |
| React Router 7.13       | Routing                    |
| Redux Toolkit 2.11      | Global state               |
| React Redux 9.2         | React–Redux bindings       |
| React Hook Form 7.71    | Form handling              |
| @hookform/resolvers 5.2 | Zod–RHF integration        |
| Zod 4.3                 | Validation schemas & types |
| Tailwind CSS 4.1        | Styling                    |
| ESLint + Prettier       | Linting & formatting       |
| Husky + lint-staged     | Pre-commit checks          |

## 📁 Project Structure

```
integrio/
├── src/
│   ├── App.tsx              # Root component & routes
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles, variables
│   ├── components/          # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── WelcomeSection.tsx
│   │   ├── AdvantagesSection.tsx
│   │   ├── DemoSection.tsx
│   │   └── PricingSection.tsx
│   ├── constants/
│   │   └── routes.ts        # Route constants
│   ├── layouts/
│   │   └── Landing.tsx      # Landing layout
│   ├── pages/
│   │   ├── LandingPage.tsx
│   │   ├── LoginPage.tsx
│   │   └── RegisterPage.tsx
│   ├── schemas/
│   │   └── auth.ts          # Zod schemas & types for forms
│   ├── store/
│   │   ├── store.ts         # Redux config
│   │   └── authSlice.ts     # Auth slice
│   └── assets/
├── docs/
│   └── zod-basics.md        # Zod reference
├── public/
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Quick Start

**Install dependencies**

```bash
npm install
```

**Run dev server**

```bash
npm run dev
```

The app will be available at: http://localhost:5173

**Build for production**

```bash
npm run build
```

**Preview production build**

```bash
npm run preview
```

**Linting**

```bash
npm run lint
```

**Format (Prettier)**

```bash
npm run format
```

## 📝 Git Commit Convention

The project uses commit prefixes in square brackets to keep commit history consistent.

### Commit format

All commits must follow the format: **`[type] message`**

### Commit types

| Prefix       | Purpose                                   |
| ------------ | ----------------------------------------- |
| `[feat]`     | New feature                               |
| `[fix]`      | Bug fix                                   |
| `[docs]`     | Documentation changes                     |
| `[style]`    | Code style (formatting, semicolons, etc.) |
| `[refactor]` | Refactoring without changing behavior     |
| `[test]`     | Adding or updating tests                  |
| `[chore]`    | Build, configs, dependencies              |
| `[perf]`     | Performance improvement                   |
| `[ci]`       | CI/CD changes                             |

### Examples

```bash
# New feature
[feat] Add login and register forms with RHF and Zod

# Bug fix
[fix] Show error when password is wrong on login

# Documentation
[docs] Add CONTRIBUTING and git convention

# Code style
[style] Format auth pages with Prettier

# Refactoring
[refactor] Move auth schemas to schemas/auth.ts

# Tests
[test] Add unit tests for authSlice

# Config
[chore] Update dependencies
```

### Branches

Name branches in the same way: e.g. `feat_auth-ui-and-logic`, `fix_login-error`, `docs_readme`. When pushing, use the **same name** as your local branch: `git push -u origin feat_auth-ui-and-logic`.
