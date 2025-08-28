# HillDrive Self Drive Car Rental

![HillDrive Logo](public/lovable-uploads/0748e3f1-28bc-44ec-83f6-3435ccae6aac.png)

## 🚗 About HillDrive

**Your Adventure Starts in Udaipur**

HillDrive is a premium self-drive car rental service based in Udaipur, offering well-maintained vehicles for exploring the beautiful landscapes of Rajasthan and beyond. Built with modern web technologies, our platform provides a seamless booking experience for customers seeking freedom and flexibility in their travel plans.

## ✨ Features

### 🏠 **Core Functionality**
- **Car Booking System** - Easy online reservation with flexible duration options
- **User Dashboard** - Manage bookings and view rental history
- **Authentication** - Secure user registration and login via Supabase
- **Responsive Design** - Mobile-friendly interface for all devices

### 📋 **Complete Pages**
- **Homepage** - Hero section with booking form and car listings
- **About Us** - Company information, features, and achievements
- **Services** - Detailed service offerings with pricing tiers
- **Contact** - Contact form, FAQ, and company information
- **Privacy Policy** - Comprehensive data protection information
- **Refund Policy** - Transparent cancellation and refund terms
- **Terms & Conditions** - Legal terms and user responsibilities

### 🎨 **Design System**
- **Golden Theme** - Consistent golden color scheme (`hsl(45 95% 55%)`)
- **Modern UI** - Built with shadcn/ui and Tailwind CSS
- **Gradient Effects** - Beautiful golden gradients with glow effects
- **Professional Layout** - Clean, accessible design

### 🔧 **Technical Features**
- **TypeScript** - Type-safe development
- **React Router** - Client-side routing
- **Supabase Integration** - Backend services and authentication
- **Form Validation** - React Hook Form with Zod validation
- **Toast Notifications** - User feedback system

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern React with hooks
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 5.4.19** - Fast build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible components
- **React Router 6.30.1** - Client-side routing
- **React Query** - Server state management
- **React Hook Form** - Form handling and validation

### Backend
- **Supabase** - PostgreSQL database
- **Supabase Auth** - User authentication
- **Supabase Real-time** - Live data updates

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Lovable IDE** - Development environment

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/hilldrive-rideshare.git
   cd hilldrive-rideshare
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file with your Supabase credentials
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:8080
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 📱 Pages Overview

### 🏠 **Homepage (`/`)**
- Hero section with booking form
- Featured offers and promotions
- Car listings with filtering
- User dashboard access

### ℹ️ **About (`/about`)**
- Company introduction and mission
- Why choose HillDrive features
- Service achievements and promises
- Call-to-action sections

### 🔧 **Services (`/services`)**
- Comprehensive service offerings
- Pricing tiers and discounts
- 4-step booking process
- Additional features and benefits

### 📞 **Contact (`/contact`)**
- Contact form with validation
- Company contact information
- FAQ section
- Business statistics

### 📄 **Legal Pages**
- **Privacy Policy** (`/privacy-policy`) - Data protection and cookies
- **Refund Policy** (`/refund-policy`) - Cancellation terms and timelines
- **Terms & Conditions** (`/terms-conditions`) - Legal terms and liability

## 🎨 Design System

### Colors
- **Primary**: `hsl(45 95% 55%)` - Golden yellow
- **Primary Glow**: `hsl(45 100% 70%)` - Lighter golden
- **Background**: `hsl(0 0% 100%)` - White
- **Foreground**: `hsl(222.2 84% 4.9%)` - Dark text

### Typography
- **Headings**: Bold, modern font stack
- **Body**: Clean, readable text
- **Responsive**: Mobile-first approach

### Components
- Consistent spacing and padding
- Hover effects and transitions
- Accessible color contrasts
- Mobile-responsive layouts

## 📞 Contact Information

- **Email**: Hilldrive01@gmail.com
- **Phone**: +91 8829952535
- **Address**: PWD Parking Gulab Bagh Near RMV Girls Hostel Udaipur 313001
- **Business Hours**: 24/7 Operations

## 🌟 Key Features

- ✅ **Free Cancellation** - Up to 24 hours before pickup
- ✅ **24/7 Support** - Round-the-clock customer assistance
- ✅ **GPS Equipped** - All vehicles include navigation
- ✅ **No Hidden Charges** - Transparent pricing
- ✅ **Theft Protection** - Comprehensive insurance coverage
- ✅ **Award-Winning Service** - Recognized excellence

## 📈 Development

### Project Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── integrations/       # Supabase integration
├── lib/               # Utility functions
└── index.css          # Global styles and design system
```

### Key Components
- `Header` - Navigation and user menu
- `Footer` - Links and company information
- `HeroSection` - Main booking interface
- `CarListing` - Vehicle display and filtering
- `BookingModal` - Reservation form

## 🔐 Authentication

Powered by Supabase Auth with features:
- Email/password authentication
- Secure session management
- User profile management
- Protected routes

## 📊 Database Schema

Built on Supabase PostgreSQL with tables for:
- Users and profiles
- Car inventory and categories
- Bookings and reservations
- Real-time updates

## 🚀 Deployment

### Lovable Platform
```bash
# Deploy via Lovable
# Click "Share -> Publish" in Lovable IDE
```

### Manual Deployment
```bash
# Build for production
npm run build

# Deploy to your preferred hosting platform
# (Vercel, Netlify, etc.)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev) - AI-powered development
- UI components by [shadcn/ui](https://ui.shadcn.com)
- Icons by [Lucide React](https://lucide.dev)
- Backend by [Supabase](https://supabase.com)

## 📞 Support

For support and inquiries:
- Email: Hilldrive01@gmail.com
- Phone: +91 8829952535
- Create an issue in this repository

---

**Made with ❤️ in Udaipur** | **Your Adventure Starts Here** 🚗✨