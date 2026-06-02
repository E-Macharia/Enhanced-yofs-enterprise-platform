# Enhanced YOFS - Premium Portfolio & Services Platform

A modern, responsive web application built with React, Vite, and Tailwind CSS. Features a corporate website, authentication system, and user dashboard with dark/light theme support.

## Features

✨ **Corporate Website**
- Home page with hero section
- Services showcase
- Portfolio gallery
- Testimonials section
- About page
- Contact form

👤 **Authentication System**
- User registration
- Login with session management
- Protected dashboard routes

📊 **User Dashboard**
- Overview with statistics
- Settings and preferences
- Theme customization

🎨 **Design & UX**
- Dark/Light theme support
- Smooth animations (Framer Motion)
- Responsive mobile-first design
- Modern UI components
- Charts and visualizations (Recharts)

## Tech Stack

- **React 19** - UI framework
- **Vite 8** - Build tool with HMR
- **React Router 7** - Client-side routing
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion** - Animation library
- **Recharts** - Data visualization
- **Lucide React** - Icon library
- **ESLint** - Code quality

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server with HMR
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
```

### Preview

```bash
# Preview production build locally
npm run preview
```

### Linting

```bash
# Check code quality
npm run lint
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   └── ui/           # Base UI components (buttons, etc.)
├── hooks/            # Custom React hooks (useAuth, useTheme)
├── layouts/          # Layout wrappers
├── pages/            # Page components
│   ├── auth/         # Login, Register
│   ├── dashboard/    # User dashboard pages
│   ├── website/      # Public website pages
│   └── errors/       # Error pages (404, 500)
├── utils/            # Utility functions & mock data
└── App.jsx           # Main app with routing
```

## Development Notes

- Hot Module Replacement (HMR) enabled for faster development
- Mock data provided in `src/utils/mockData.js`
- Theme context available via `useTheme` hook
- Auth context available via `useAuth` hook
- Fully responsive design with Tailwind breakpoints
