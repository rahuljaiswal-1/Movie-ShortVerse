# 🔧 Troubleshooting Guide - MovieVerse

## Common Issues & Solutions

---

## 🚨 Issue 1: "Cannot find module" errors

### Problem:
```
Error: Cannot find module '@/lib/auth'
Error: Cannot find module '@/components/...'
```

### Solution:
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run dev
```

---

## 🚨 Issue 2: Authentication not working

### Problem:
- Can't sign up
- Can't login
- Redirected to signup constantly

### Solution:

**Check LocalStorage:**
1. Open browser DevTools (F12)
2. Go to Application tab
3. Check LocalStorage
4. Look for `movieverse_user`

**Clear and retry:**
```javascript
// In browser console
localStorage.clear();
// Then refresh and sign up again
```

---

## 🚨 Issue 3: Counters not updating

### Problem:
- Movies Watched stays at 0
- My List stays at 0

### Solution:

**For Movies Watched:**
1. Make sure you watch for 10+ seconds
2. Check browser console for: "Tracked: Movie Name added to watched movies"
3. Refresh profile page

**For My List:**
1. Click + button on movie card
2. Should see alert: "Added to My List"
3. Refresh profile page
4. Check My List page

**Manual check:**
```javascript
// In browser console
const user = JSON.parse(localStorage.getItem('movieverse_user'));
console.log('Watched:', user.watchedMovies);
console.log('My List:', user.myList);
```

---

## 🚨 Issue 4: OTP not working

### Problem:
- OTP not showing
- OTP verification fails

### Solution:

**Check OTP display:**
1. Enter mobile number
2. Click "Send OTP"
3. Look for green box with OTP
4. Copy the 6-digit code
5. Enter and verify

**If OTP expired:**
- Click "Change Mobile Number"
- Re-enter number
- Get new OTP

---

## 🚨 Issue 5: Video not playing

### Problem:
- Video player opens but no video
- Black screen
- No audio

### Solution:

**Check video URL:**
```typescript
// In lib/mockData.ts
videoUrl: "https://commondatastorage.googleapis.com/..."
// Make sure URL is valid
```

**Test in browser:**
1. Copy video URL
2. Paste in new tab
3. Should play directly

**Check browser console:**
- Look for CORS errors
- Look for network errors

---

## 🚨 Issue 6: Page not found (404)

### Problem:
- Clicking links shows 404
- Routes not working

### Solution:

**Check file structure:**
```
app/
├── page.tsx              ✓
├── movies/page.tsx       ✓
├── series/page.tsx       ✓
├── movie/[id]/page.tsx   ✓
├── watch/[id]/page.tsx   ✓
```

**Restart dev server:**
```bash
# Stop server (Ctrl+C)
npm run dev
```

---

## 🚨 Issue 7: Styles not loading

### Problem:
- No colors
- No layout
- Plain HTML

### Solution:

**Check Tailwind:**
```bash
# Reinstall dependencies
npm install tailwindcss postcss autoprefixer
npm run dev
```

**Check globals.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🚨 Issue 8: Build errors

### Problem:
```
Error: Build failed
Type errors
```

### Solution:

**Check TypeScript:**
```bash
# Run type check
npx tsc --noEmit

# Fix errors shown
# Then rebuild
npm run build
```

---

## 🚨 Issue 9: Slow performance

### Problem:
- Pages load slowly
- Video stutters
- Laggy UI

### Solution:

**Clear browser cache:**
1. Open DevTools (F12)
2. Right-click refresh button
3. "Empty Cache and Hard Reload"

**Optimize:**
```bash
# Build for production
npm run build
npm start
```

---

## 🚨 Issue 10: Can't sign out

### Problem:
- Sign out button doesn't work
- Still logged in after sign out

### Solution:

**Manual sign out:**
```javascript
// In browser console
localStorage.removeItem('movieverse_user');
localStorage.removeItem('movieverse_otp');
location.reload();
```

---

## ✅ Verification Checklist

### Test All Features:

**Authentication:**
- [ ] Can sign up with email/password
- [ ] Can login with email/password
- [ ] Can login with mobile/OTP
- [ ] Can sign out
- [ ] Redirected to signup when not logged in

**Video Player:**
- [ ] Can play videos
- [ ] Audio works
- [ ] Controls work (play/pause, volume, seek)
- [ ] Fullscreen works
- [ ] Close button works

**Tracking:**
- [ ] Movies Watched counter increases
- [ ] My List counter increases
- [ ] My List page shows added movies
- [ ] Profile shows correct counts

**Navigation:**
- [ ] All menu links work
- [ ] Search works
- [ ] Genre pages work
- [ ] Movie details work

**Responsive:**
- [ ] Works on mobile
- [ ] Works on tablet
- [ ] Works on desktop
- [ ] Mobile menu works

---

## 🔍 Debug Mode

### Enable Console Logging:

**Check what's happening:**
```javascript
// In browser console (F12)

// Check user data
console.log('User:', localStorage.getItem('movieverse_user'));

// Check watched movies
const user = JSON.parse(localStorage.getItem('movieverse_user'));
console.log('Watched:', user?.watchedMovies);
console.log('My List:', user?.myList);

// Check authentication
console.log('Is Authenticated:', !!localStorage.getItem('movieverse_user'));
```

---

## 🚀 Quick Fixes

### Reset Everything:
```bash
# Stop server
# Clear everything
rm -rf .next node_modules package-lock.json

# Reinstall
npm install

# Clear browser data
# In browser: Ctrl+Shift+Delete
# Clear cache and cookies

# Restart
npm run dev

# Visit http://localhost:3000
# Sign up fresh
```

---

## 📞 Still Having Issues?

### Check These:

1. **Node Version:**
   ```bash
   node --version
   # Should be 18+ or 20+
   ```

2. **NPM Version:**
   ```bash
   npm --version
   # Should be 9+ or 10+
   ```

3. **Port Conflict:**
   ```bash
   # If port 3000 is busy
   # Kill process
   npx kill-port 3000
   # Or use different port
   npm run dev -- -p 3001
   ```

4. **Browser:**
   - Use Chrome, Firefox, or Edge
   - Update to latest version
   - Enable JavaScript
   - Disable ad blockers

5. **Internet:**
   - Check connection
   - Videos need internet to load
   - Demo videos are hosted online

---

## 🎯 Common Mistakes

### 1. Not Waiting 10 Seconds
**Problem:** Movies Watched not increasing
**Solution:** Watch video for at least 10 seconds

### 2. Not Refreshing Page
**Problem:** Counters not updating
**Solution:** Refresh profile page after actions

### 3. Wrong Credentials
**Problem:** Can't login
**Solution:** Use exact email/password from signup

### 4. Browser Cache
**Problem:** Old version showing
**Solution:** Hard refresh (Ctrl+Shift+R)

### 5. LocalStorage Full
**Problem:** Can't save data
**Solution:** Clear browser data

---

## 🔧 Developer Tools

### Useful Commands:

```bash
# Check for errors
npm run lint

# Type check
npx tsc --noEmit

# Build test
npm run build

# Production test
npm run build && npm start

# Clear cache
rm -rf .next

# Fresh install
rm -rf node_modules package-lock.json && npm install
```

---

## 📊 Expected Behavior

### Sign Up Flow:
```
1. Visit any page
2. Redirected to /signup
3. Fill form
4. Click "Sign Up"
5. Redirected to home
6. Can browse and watch
```

### Watch Movie Flow:
```
1. Click Play on movie
2. Video player opens
3. Video plays with audio
4. Watch for 10+ seconds
5. Close video
6. Go to profile
7. See "Movies Watched: 1"
```

### Add to List Flow:
```
1. Hover over movie
2. Click + button
3. See alert
4. Go to profile
5. See "In My List: 1"
6. Go to My List page
7. See the movie
```

---

## ✅ Everything Working?

If all features work:
- ✅ Authentication
- ✅ Video playback
- ✅ Tracking
- ✅ Navigation
- ✅ Responsive design

**You're all set! Enjoy your MovieVerse platform!** 🎉

---

## 🆘 Emergency Reset

If nothing works:

```bash
# Nuclear option - start fresh
rm -rf .next node_modules package-lock.json
npm install
```

```javascript
// In browser console
localStorage.clear();
sessionStorage.clear();
```

```bash
# Restart
npm run dev
```

**Then sign up as a new user and test everything!**

---

**Need more help? Check the other documentation files:**
- `README_FINAL.md` - Complete overview
- `AUTH_GUIDE.md` - Authentication details
- `TRACKING_GUIDE.md` - Tracking system
- `COMPLETE_GUIDE.md` - Full guide

---

**Your MovieVerse platform should be working perfectly!** 🎬✨
