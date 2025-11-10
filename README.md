# MovieVerse - Netflix-like Streaming Platform 🎬

A modern, fully responsive movie streaming website UI built with Next.js, React, and Tailwind CSS featuring a sleek dark theme with Netflix-inspired design.

![MovieVerse](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎯 Core Features
- **Responsive Navigation**: Logo, search, categories (Movies, Series, Trending, My List, Browse), mobile menu
- **Hero Section**: Autoplay-ready featured movie banner with play and info buttons
- **Movie Carousels**: Multiple horizontal sliders with smooth scrolling
- **Movie Cards**: Interactive hover effects with Play and Add to My List buttons
- **Movie Details**: Full page with trailer, description, rating, cast, and related movies
- **Video Player**: Full-screen player with controls
- **Search**: Real-time search by title and genre
- **Browse by Genre**: Colorful genre cards with filtering
- **Authentication**: Login and signup pages
- **User Profile**: Dashboard with stats and My List management
- **Admin Panel**: Add/edit/delete movies interface
- **404 Page**: Custom error page

### 📱 Responsive Design
- Mobile-first approach
- Perfect on all devices (mobile, tablet, desktop)
- Touch-friendly navigation
- Optimized layouts for every screen size

### ♿ Accessibility
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus styles for better UX
- Semantic HTML structure

### 🎨 Design
- Dark red (#E50914) and black Netflix-style theme
- Smooth animations and transitions
- Custom scrollbar styling
- Gradient overlays

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
movieverse/
├── app/                      # Next.js pages
│   ├── page.tsx             # Home with hero & carousels
│   ├── movie/[id]/          # Movie details
│   ├── watch/[id]/          # Video player
│   ├── movies/              # All movies
│   ├── series/              # TV series
│   ├── trending/            # Trending content
│   ├── search/              # Search page
│   ├── browse/              # Browse genres
│   ├── genres/[genre]/      # Genre pages
│   ├── my-list/             # User's list
│   ├── profile/             # User profile
│   ├── admin/               # Admin dashboard
│   ├── login/               # Authentication
│   └── signup/              # Registration
├── components/              # Reusable components
│   ├── Navbar.tsx           # Navigation
│   ├── HeroSection.tsx      # Featured banner
│   ├── MovieCard.tsx        # Movie card
│   ├── MovieCarousel.tsx    # Slider
│   ├── VideoPlayer.tsx      # Player UI
│   ├── Footer.tsx           # Footer
│   └── GenreList.tsx        # Genre grid
├── lib/mockData.ts          # Mock data
└── types/movie.ts           # TypeScript types
```

## 🎬 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero banner + carousels |
| Movies | `/movies` | All movies with filters |
| Series | `/series` | TV series collection |
| Trending | `/trending` | Trending with rankings |
| Search | `/search` | Search functionality |
| Browse | `/browse` | Genre cards |
| Genre | `/genres/[genre]` | Genre-specific movies |
| Movie Details | `/movie/[id]` | Full movie info |
| Watch | `/watch/[id]` | Video player |
| My List | `/my-list` | User's saved movies |
| Profile | `/profile` | User dashboard |
| Admin | `/admin` | Content management |
| Login | `/login` | Authentication |
| Signup | `/signup` | Registration |

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Backend Ready**: Firebase/Supabase integration ready

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#E50914',  // Your color
    dark: '#B20710',
  },
}
```

### Add Movies
Edit `lib/mockData.ts`:
```typescript
{
  id: 13,
  title: "Your Movie",
  poster: "url",
  description: "...",
  // ...
}
```

## 🔌 Backend Integration

### Option 1: Firebase
1. Install Firebase: `npm install firebase`
2. Setup Firebase Auth for login/signup
3. Use Firestore for movies database
4. Update components to fetch from Firebase

### Option 2: Supabase
1. Install Supabase: `npm install @supabase/supabase-js`
2. Setup Supabase Auth
3. Create tables for movies and users
4. Update API calls

### Option 3: Custom API
1. Create API routes in `app/api/`
2. Connect to your backend
3. Replace mock data with API calls

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
vercel
```

## 🌟 Features Roadmap

- [ ] Real video streaming
- [ ] User reviews and ratings
- [ ] Continue watching
- [ ] Recommendations algorithm
- [ ] Multi-language support
- [ ] Download for offline
- [ ] Watchlist sync
- [ ] Social sharing

## 📄 License

MIT License - feel free to use for personal or commercial projects

## 🤝 Contributing

Contributions welcome! Feel free to submit issues and pull requests.

## 📧 Support

For questions or support, open an issue on GitHub.

---

Made with ❤️ using Next.js and Tailwind CSS
