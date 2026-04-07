# Train64 Auth Demo

Authentication module built with Next.js (App Router), focused on clean UI, reusable components, and modern UX patterns.

---

## ✨ Features

* 🔐 Sign-in page
* 👁️ Password visibility toggle
* 📩 Forgot password (UX preview, no backend)
* 💬 Toast notification (top-right feedback)
* ♻️ Reusable auth components
* 🎨 Clean and minimal UI (Tailwind CSS)

---

## 🧠 Purpose

This project is a **demo of an authentication system UI/UX**, designed before backend integration.

It focuses on:

* Component architecture
* UX flows (login, password recovery)
* Scalable structure for future features

---

## 🏗️ Tech Stack

* Next.js 16 (App Router)
* React 19
* Tailwind CSS 4
* TypeScript

---

## 📂 Project Structure

```
app/
 ├── (auth)/
 │    ├── sign-in/
 │    │    └── page.tsx
 │    └── layout.tsx
 │
 ├── components/
 │    ├── auth/
 │    │    ├── Input.tsx
 │    │    ├── AuthButton.tsx
 │    │    ├── FormHeader.tsx
 │    │    └── ...
 │    └── ui/ (legacy - not required)
 │
 └── layout.tsx
```

---

## 📌 Notes

* The `components/ui` folder contains **legacy components from a previous marketing/UI playground**
* These components are **not required for the current auth flow**
* The project is now focused only on **auth-related components**

---

## ⚙️ Getting Started

```bash
npm install
npm run dev
```

Open:
http://localhost:3000/sign-in

---

## 🚀 Next Steps

* [ ] Add sign-up page
* [ ] Connect backend auth
* [ ] Add validation & error states
* [ ] Implement protected routes

---

## 👨‍💻 Author

Built by Mariajose Soles
