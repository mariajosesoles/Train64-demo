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

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

