# MovieVerse Setup Guide

## Quick Start

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
movieverse/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page with hero & carousels
│   ├── movie/[id]/          # Movie details page
│   ├── watch/[id]/          # Video player page
│   ├── movies/              # All movies page
│   ├── series/              # TV series page
│   ├── trending/            # Trending page
│   ├── search/              # Search page
│   ├── my-list/             # User's saved list
│   ├── browse/              # Browse by genre
│   ├── genres/[genre]/      # Genre-specific pages
│   ├── login/               # Login page
│   ├── signup/              # Signup page
│   ├── profile/             # User profile
│   ├── admin/               # Admin dashboard
│   └── not-found.tsx        # 404 page
├── components/              # Reusable components
│   ├── Navbar.tsx           # Navigation bar
│   ├── HeroSection.tsx      # Featured movie banner
│   ├── MovieCard.tsx        # Movie card with hover
│   ├── MovieCarousel.tsx    # Horizontal slider
│   ├── VideoPlayer.tsx      # Video player UI
│   ├── Footer.tsx           # Footer component
│   ├── GenreList.tsx        # Genre grid
│   └── LoadingSpinner.tsx   # Loading state
├── lib/                     # Utilities & data
│   └── mockData.ts          # Mock movie data
└── types/                   # TypeScript types
    └── movie.ts             # Movie & User types
```

## Features Implemented

### ✅ Core Features
- Responsive navigation with mobile menu
- Hero section with featured movie
- Multiple movie carousels (Trending, Popular, Top Rated, New Releases)
- Movie cards with hover effects
- Movie details page with cast, description, and related movies
- Video player interface
- Search functionality
- Genre browsing
- User authentication pages (Login/Signup)
- User profile and My List
- Admin dashboard for managing movies
- 404 error page
- Footer with links

### ✅ Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly mobile navigation
- Optimized layouts for all screen sizes

### ✅ Accessibility
- ARIA labels on all interactive elements
- Focus styles for keyboard navigation
- Semantic HTML structure
- Alt text for images

### ✅ Dark Theme
- Netflix-inspired dark red (#E50914) and black theme
- Gradient overlays
- Custom scrollbar styling

## Pages Overview

### Home (`/`)
- Hero banner with featured movie
- 4 movie carousels
- Footer

### Movies (`/movies`)
- Genre filter buttons
- Grid of all movies

### Series (`/series`)
- TV series collections
- Similar layout to movies

### Trending (`/trending`)
- Numbered ranking badges
- Most watched content

### Search (`/search`)
- Real-time search
- Filter by title and genre

### Browse (`/browse`)
- Colorful genre cards
- Quick genre navigation

### Movie Details (`/movie/[id]`)
- Full movie information
- Cast list
- Related movies
- Play and Add to List buttons

### Watch (`/watch/[id]`)
- Full-screen video player
- Playback controls
- Progress bar

### My List (`/my-list`)
- User's saved movies
- Grid layout

### Profile (`/profile`)
- User information
- Watch statistics
- Account management

### Admin (`/admin`)
- Add/edit/delete movies
- Movie management table
- Form for adding new content

### Auth Pages (`/login`, `/signup`)
- Clean authentication forms
- Responsive design

## Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#E50914',  // Netflix red
    dark: '#B20710',
  },
}
```

### Mock Data
Edit `lib/mockData.ts` to add more movies or modify existing ones.

### Backend Integration
Replace mock data with real API calls:
1. Create API routes in `app/api/`
2. Use Firebase/Supabase for authentication
3. Store movies in database
4. Update components to fetch from API

## Environment Variables (Optional)

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
Build the project and deploy the `.next` folder.

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips
- Images are lazy-loaded
- Components use client-side rendering where needed
- Smooth scrolling with CSS
- Optimized bundle size

## Future Enhancements
- Real video streaming
- User reviews and ratings
- Watchlist sync across devices
- Continue watching feature
- Recommendations algorithm
- Multi-language support
- Download for offline viewing
