# 🎤 Artistly — Performing Artist Booking Platform (Frontend Demo)

A fictional web app platform to connect **Event Planners** with **Performing Artists** — built as part of a React + Next.js frontend developer test assignment for **Eventful India**.

![banner](https://user-images.githubusercontent.com/placeholder/banner.png)

---

## 🚀 Live Demo

🔗 [https://artistly.vercel.app](https://artistly.vercel.app)

---

## 📌 Project Overview

**Artistly.com** is a responsive, 3–4 page web application built with modern frontend tools to simulate a real-world SaaS frontend platform. The core idea is to connect **event organizers** with **verified performing artists** such as singers, dancers, DJs, and comedians.

---

## 🧱 Tech Stack

- **Next.js 14+** (App Router)
- **React 18+** (Functional Components & Hooks)
- **Tailwind CSS** (Utility-first styling)
- **shadcn/ui** (for pre-styled components)
- **React Hook Form** + **Yup** (for form validation)
- **Framer Motion** (for animations)
- **React Query** (for state/data fetching)
- **Mock APIs / JSON Files** (simulating backend)

---

## 📄 Pages Implemented

### 1️⃣ Home Page (`/`)
- Hero section + intro to platform
- CTA buttons for “Explore Artists” & “Join as Artist”
- 4 Artist Category cards: Singer, Dancer, DJ, Magician

### 2️⃣ Artist Listing Page (`/artists`)
- Grid of artist cards from mock JSON
- Live filters: Category, Location, Price Range
- “Ask for Quote” button
- Responsive layout + reusable card components

### 3️⃣ Artist Onboarding Page (`/onboard`)
- Multi-step form for artist registration
- Fields: Name, Bio, Category, Languages, Fee Range, Location, Profile Image
- Validated using React Hook Form + Yup
- Submits data to console/mock handler

### 4️⃣ Manager Dashboard (`/dashboard`) ✅ *(Bonus)*
- Table view of submitted artist profiles
- Each row shows Name, Category, Fee, and Location
- Clean, responsive layout with mock data

---

## ✨ Features & Highlights

| Feature                    | Status |
|---------------------------|--------|
| Routing via App Router    | ✅      |
| Form validation & UX      | ✅      |
| Reusable UI Components    | ✅      |
| Filtering logic           | ✅      |
| State management (hooks)  | ✅      |
| Framer Motion animations  | ✅      |
| Light/dark theme ready    | ✅      |
| Deployed on Vercel        | ✅      |

---

## 🧪 Run Locally

```bash
git clone https://github.com/Neha-Codes295/Artistly.git
cd Artistly
npm install
npm run dev
