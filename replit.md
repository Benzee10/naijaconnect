# NaijaConnect

## Overview

NaijaConnect is a dating and connection platform built with Next.js that allows users to browse and unlock verified profiles in Nigeria. The platform uses a coin-based system where users purchase coins to unlock contact information (WhatsApp numbers) of profiles they're interested in. The application features user authentication, a payment integration system, and an admin dashboard for profile management.

## Recent Changes

**January 9, 2025 - Design Modernization & Profile Expansion**
- Modernized UI with gradient hero section and smooth animations
- Added 9 new diverse profiles (total: 15 profiles) representing different Nigerian cities and professions
- Updated ProfileCard component with hover effects, image zoom, and modern card styling
- Enhanced Navbar with gradient text logo, backdrop blur, and sticky positioning
- Added custom animations (fade-in, slide-up) for better user experience
- Improved button styles with gradient backgrounds and shadow effects
- Updated global styling with modern gradients and responsive design

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: Next.js 15 with App Router and React 19
- Server and client components pattern for optimal performance
- TypeScript for type safety across the application
- Tailwind CSS for styling with custom color scheme (orange #FF8C00, gold #D4AF37, brown #8B4513)

**Component Structure**:
- Layout components (Navbar with gradient logo and backdrop blur, Footer) provide consistent navigation and branding
- Modern ProfileCard components with hover effects, image zoom, and smooth animations
- PaymentModal handles the coin purchase flow
- Admin dashboard components for profile and user management
- Hero section with gradient background and animated statistics

**State Management**:
- React hooks (useState, useEffect) for local component state
- AuthContext using React Context API for global authentication state
- NextAuth session management for user authentication

**Routing**:
- App Router structure with route groups
- Public routes: home (/), login, register
- Protected routes: wallet, admin dashboard
- API routes under /api for backend functionality

### Backend Architecture

**Authentication System**:
- NextAuth.js v4 for authentication with credentials provider
- bcryptjs for password hashing
- JWT tokens for session management
- Custom session callbacks to include user metadata (coinBalance, isAdmin)

**Database Layer**:
- MongoDB with Mongoose ODM for data persistence
- Connection pooling using cached global connections
- Collections: Users, Profiles, Transactions

**Data Models**:
- User: authentication, coin balance, unlocked profiles tracking, admin privileges
- Profile: user information, bio, location, WhatsApp number, coin cost
- Transaction: payment records, coin purchases, profile unlock history

**API Design**:
- RESTful API endpoints under /api
- Authentication endpoint: /api/auth/[...nextauth]
- Planned endpoints for profile management, transactions, and coin purchases

### Security Considerations

**Authentication**:
- Password hashing with bcryptjs before storage
- JWT-based session tokens
- Protected API routes requiring authentication
- Role-based access control (user vs admin)

**Data Protection**:
- WhatsApp numbers hidden until profile is unlocked
- Coin deduction system prevents unauthorized access
- Environment variables for sensitive configuration

### Payment Integration

**Payment Gateway**: Paystack SDK (@paystack/paystack-sdk)
- Coin packages with tiered pricing (10, 25, 50 coins)
- Integration ready for Paystack payment processing
- Transaction recording for audit trail
- Mock payment flow implemented for development

**Coin Economy**:
- Users purchase coins in packages
- Each profile unlock costs 5 coins (configurable per profile)
- Coin balance tracking per user
- Transaction history for transparency

### Admin Features

**Dashboard Capabilities**:
- User and profile management
- Profile status control (active, pending, suspended)
- Search and filter functionality
- Edit and delete operations for profiles
- Statistics overview (total users, active profiles, pending approvals)

## External Dependencies

### Core Framework
- **Next.js 15.5.4**: React framework with App Router for server-side rendering and routing
- **React 19.1.0**: UI library for component-based architecture
- **TypeScript 5**: Static typing for enhanced development experience

### Authentication & Security
- **NextAuth.js 4.24.11**: Authentication solution with credentials provider
- **bcryptjs 3.0.2**: Password hashing library
- **jsonwebtoken 9.0.2**: JWT token generation and validation

### Database
- **Mongoose 8.19.1**: MongoDB ODM for data modeling and database operations
- **MongoDB**: NoSQL database (connection via MONGODB_URI environment variable)

### Payment Processing
- **@paystack/paystack-sdk 1.0.1**: Paystack payment gateway integration for Nigerian payments

### UI & Styling
- **Tailwind CSS 4**: Utility-first CSS framework with custom configuration
- **tailwindcss-animate 1.0.7**: Animation utilities for Tailwind
- **react-icons 5.5.0**: Icon library for UI elements (WhatsApp, social media, etc.)
- **Geist fonts**: Custom typography from Vercel

### Development Tools
- **ESLint 9**: Code linting with Next.js configuration
- **PostCSS**: CSS processing for Tailwind

### Environment Configuration
Required environment variables:
- `MONGODB_URI`: MongoDB connection string
- `NEXTAUTH_SECRET`: Secret for NextAuth session encryption
- `NEXTAUTH_URL`: Application URL for NextAuth callbacks
- `PAYSTACK_SECRET_KEY`: Paystack API key for payment processing

### Deployment
- Configured for Replit deployment with autoscale
- Custom port configuration (5000) for development and production
- Host binding to 0.0.0.0 for container compatibility
- Build and start scripts optimized for Replit environment