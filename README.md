# SportNest Client

## Project Overview

SportNest is a modern sports facility booking management platform where users can explore sports venues, book available slots, and manage their reservations easily. The platform supports facilities like football turfs, badminton courts, swimming pools, tennis courts, and more.

This repository contains the frontend/client-side application built with Next.js, TypeScript, Tailwind CSS, and Better Auth Authentication.

---

## Live URL

🔗 Live Site: https://b13-a09-saddam.vercel.app

---

## Features

- User Authentication with Better Auth
- Google Login Support
- Responsive Design for Mobile, Tablet, and Desktop
- Featured Facilities Section
- Facility Search and Filter
- Facility Details Page
- Book Sports Facilities
- Manage User Bookings
- Add New Facility
- Update/Delete Own Facilities
- Loading Spinner
- Custom 404 Page
- Protected Routes
- Toast Notifications
- Dynamic Pricing Calculation
- Framer Motion Animations
- Theme Toggle Support

---

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Better Auth
- Framer Motion
- React Hot Toast
- HeroUI
- DaisyUI

---

## Pages & Routes

### Public Routes

- `/`
- `/facilities`
- `/login`
- `/register`

### Private Routes

- `/facility/:id`
- `/my-bookings`
- `/add-facility`
- `/manage-my-facilities`

---

## Main Functionalities

### Authentication

- Email & Password Login
- Google Authentication
- Protected Routes
- Persistent Login State

### Facilities

- Browse all facilities
- Search by facility name
- Filter by sport type
- View facility details

### Booking System

- Select booking date
- Choose available slot
- Dynamic total price calculation
- Booking status tracking

### Facility Management

- Add new facilities
- Update facility information
- Delete facility with confirmation

---

## Environment Variables

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_API_URL=your_server_api_url
NEXT_PUBLIC_IMAGE_HOSTING_KEY=your_imgbb_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/Saddam2508/b13-a09-saddam
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

---

## NPM Packages Used

```txt
next
react
typescript
tailwindcss
better-auth
react-hot-toast
framer-motion
```

---

## UI/UX Features

- Clean recruiter-friendly design
- Equal card sizing
- Smooth animations
- Responsive navbar
- Consistent typography
- Modern dashboard layout

---

## Future Improvements

- Online Payment Integration
- Facility Reviews & Ratings
- Real-time Slot Availability
- Admin Dashboard
- Booking History Analytics

---

## Author

Developed by Md Saddam Hossain
