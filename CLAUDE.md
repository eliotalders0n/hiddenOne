# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, single-page React portfolio website for Pukuta Mwanza, hosted on Firebase at https://pukutamwanza.web.app. The project showcases web development skills, projects, and experience through an elegant, minimalist interface with scroll-triggered animations.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 3000)
npm start

# Build for production
npm run build

# Run tests
npm test

# Deploy to Firebase (requires firebase-tools)
firebase deploy
```

## Architecture

### Single-Page Structure
The application is a single-page design with smooth scroll navigation to the following sections:
- **Navigation** - Fixed header with anchor links
- **Hero** - Introduction with stats and CTA
- **About** - Personal background and statistics
- **Portfolio** - Project showcase grid
- **Experience** - Work history timeline
- **Contact** - CTA and contact information
- **Footer** - Site navigation and copyright

### Component Organization
- **src/App.js** - Main application entry that composes all sections
- **src/theme.js** - Chakra UI theme configuration with custom colors and styles
- **src/components/** - Modular section components:
  - `Navigation.js` - Fixed navigation header with mobile menu
  - `HeroSection.js` - Hero section with animated intro
  - `AboutSection.js` - About section with scroll animations
  - `PortfolioSection.js` - Portfolio grid with project cards
  - `ExperienceSection.js` - Experience timeline
  - `ContactSection.js` - Contact CTA and links
  - `Footer.js` - Footer with navigation links

**Design Pattern**: Each section is a self-contained component with scroll-triggered animations using Framer Motion's `useInView` hook.

### Styling Approach
- **Chakra UI** for component library and layout system
- **Framer Motion** for scroll-triggered fade-in animations
- **Color Palette:**
  - Primary: `#222222` (dark black)
  - Secondary: `#7B7B7B` (gray)
  - Tertiary: `#F8F8F8` (light gray)
  - White: `#FFFFFF`
- **Typography:** System fonts (San Francisco, Segoe UI, Roboto, etc.)
- **Animation Pattern:** Components fade in from bottom when scrolled into view
- **Responsive Design:** Mobile-first approach with Chakra UI's responsive props

### Firebase Integration
- **src/firebase_config.js** - Firebase initialization (Firestore, Storage, Auth configured)
- Project ID: `famers-admin`
- **firebase.json** - Hosting configuration with SPA rewrites
- Build directory: `build/`

### Static Assets
- **public/assets/** - Currently cleaned for redesign
- Images and assets can be added to this directory as needed

## Firebase Deployment Notes
- Run `firebase deploy` after building to deploy to production
- The `build/` directory contains the production bundle
- Firebase hosting rewrites all routes to `/index.html` for SPA support

## Key Dependencies
- React 18.2.0 (no router - single page app)
- Chakra UI 2.10.9 for UI components
- Framer Motion 12.23.26 for animations
- Emotion 11.14.0 for CSS-in-JS (Chakra UI dependency)
- Firebase 9.10.0 for backend services

## Development Notes
- This is a Create React App project (react-scripts 5.0.1)
- No TypeScript - uses plain JavaScript/JSX
- No React Router - single-page design with anchor navigation
- Smooth scroll behavior enabled in CSS
- ESLint configured with react-app rules
- Testing setup with @testing-library/react

## Design System
- Inspired by minimalist portfolio design patterns
- Focus on typography and white space
- Scroll-triggered animations for engagement
- Mobile-responsive throughout
- Accessible navigation with keyboard support
