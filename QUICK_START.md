# 🚀 Quick Start Guide - MovieVerse

## Get Started in 3 Minutes!

---

## Step 1: Install Dependencies

```bash
npm install
```

**Wait for installation to complete...**

---

## Step 2: Start Development Server

```bash
npm run dev
```

**You should see:**
```
✓ Ready in 2.5s
○ Local: http://localhost:3000
```

---

## Step 3: Open in Browser

Visit: **http://localhost:3000**

---

## 🎉 You're Ready!

### What Happens Next:

1. **Automatic Redirect to Signup**
   - You'll be redirected to `/signup`
   - This is normal - authentication is required!

2. **Create Your Account**
   - Enter your name
   - Enter your email
   - Create a password (min 6 characters)
   - Confirm password
   - Click "Sign Up"

3. **Start Watching!**
   - You'll be logged in automatically
   - Redirected to home page
   - Browse 12 movies
   - Click Play to watch

---

## 🎬 Quick Tour

### Home Page
- **Hero Section**: Featured movie with Play button
- **4 Carousels**: Trending, Popular, Top Rated, New Releases
- **Hover Effects**: Hover over movies to see Play button

### Watch a Movie
1. Click Play on any movie
2. Video player opens full-screen
3. Movie plays with audio
4. Use controls (play/pause, volume, seek)
5. Close when done

### Add to My List
1. Hover over any movie card
2. Click the + (Plus) button
3. See alert: "Added to My List"
4. Go to My List page to see it

### Check Your Profile
1. Click user icon in navbar
2. See your statistics:
   - Movies Watched (grows automatically)
   - In My List (grows when you add)
   - Member Since

---

## 🎯 Test Everything

### Test 1: Watch a Movie
```
1. Click Play on "The Dark Horizon"
2. Wait 10 seconds
3. Close video
4. Go to Profile
5. See "Movies Watched: 1" ✅
```

### Test 2: Add to List
```
1. Hover over "Love in Paris"
2. Click + button
3. See alert
4. Go to My List
5. See the movie ✅
```

### Test 3: Search
```
1. Click search icon
2. Type "cyber"
3. See "Cyber Wars" ✅
```

### Test 4: Browse Genres
```
1. Click "Browse" in navbar
2. Click "Action" genre
3. See action movies ✅
```

---

## 📱 Try Different Devices

### Desktop
- Full navigation bar
- Large video player
- 6-column movie grid

### Tablet
- Responsive layout
- 4-column grid
- Touch controls

### Mobile
- Hamburger menu
- 2-column grid
- Touch-friendly

---

## 🔐 Try Different Login Methods

### Method 1: Email/Password
```
1. Sign out from profile
2. Go to /login
3. Enter email & password
4. Sign in ✅
```

### Method 2: Mobile/OTP
```
1. Sign out from profile
2. Go to /otp-login
3. Enter mobile: 9876543210
4. Click "Send OTP"
5. See OTP in green box
6. Enter OTP
7. Sign in ✅
```

---

## 🎨 Explore All Pages

### Main Pages
- `/` - Home
- `/movies` - All movies
- `/series` - TV series
- `/trending` - Trending content
- `/search` - Search movies
- `/browse` - Browse genres

### User Pages
- `/my-list` - Your saved movies
- `/profile` - Your dashboard
- `/login` - Sign in
- `/signup` - Create account
- `/otp-login` - Mobile login

### Content Pages
- `/movie/1` - Movie details
- `/watch/1` - Video player
- `/genres/action` - Genre page

### Admin
- `/admin` - Content management

---

## 🎉 Features to Try

### Video Player
- ▶️ Play/Pause
- 🔊 Volume control
- ⏩ Skip forward/back
- 📊 Progress bar
- ⛶ Fullscreen
- ❌ Close

### Movie Cards
- 🎬 Play button (white circle)
- ➕ Add to list (gray circle)
- ℹ️ More info (gray circle)
- Hover to see details

### Navigation
- 🏠 Home
- 🎬 Movies
- 📺 Series
- 🔥 Trending
- ❤️ My List
- 🔍 Search
- 👤 Profile

---

## 📊 Watch Your Stats Grow

### Initial State
```
Movies Watched: 0
In My List: 0
```

### After Watching 3 Movies
```
Movies Watched: 3
In My List: 0
```

### After Adding 5 to List
```
Movies Watched: 3
In My List: 5
```

---

## 🔧 Common Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Clear cache
rm -rf .next
```

---

## 🆘 Having Issues?

### Quick Fixes:

**Can't sign up?**
- Check all fields are filled
- Password must be 6+ characters
- Passwords must match

**Video not playing?**
- Wait for video to load
- Check internet connection
- Try different browser

**Counters not updating?**
- Watch for 10+ seconds
- Refresh profile page
- Check browser console

**Page not found?**
- Restart dev server
- Clear browser cache
- Check URL spelling

---

## 📚 Need More Help?

Check these guides:
- `TROUBLESHOOTING.md` - Fix common issues
- `AUTH_GUIDE.md` - Authentication help
- `TRACKING_GUIDE.md` - How tracking works
- `COMPLETE_GUIDE.md` - Full documentation

---

## ✅ Checklist

Before you start:
- [ ] Node.js 18+ installed
- [ ] NPM installed
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] Browser open to localhost:3000

After setup:
- [ ] Signed up successfully
- [ ] Can browse movies
- [ ] Can play videos
- [ ] Can add to list
- [ ] Can see profile stats

---

## 🎬 You're All Set!

**Your MovieVerse platform is ready to use!**

Enjoy watching movies! 🍿

---

## 🚀 Next Steps

1. **Customize**: Change colors, add more movies
2. **Deploy**: Put it online with Vercel
3. **Backend**: Add real database
4. **Share**: Show it to friends!

---

**Happy Streaming!** 🎉🎬
