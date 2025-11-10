# 🔐 Authentication System Guide - MovieVerse

## Overview

Your MovieVerse platform now has a complete authentication system with three login methods:
1. **Email & Password** (Traditional signup/login)
2. **Mobile Number with OTP** (One-Time Password)
3. **Route Protection** (Must be logged in to access content)

---

## 🎯 How It Works

### First-Time Users
1. User visits any page (e.g., `/`)
2. **Automatically redirected to `/signup`**
3. Must create an account to continue
4. After signup → Logged in → Can access all content

### Returning Users
1. Visit `/login` to sign in with email/password
2. OR visit `/otp-login` to sign in with mobile number
3. After login → Can access all content

---

## 📱 Three Login Methods

### 1. Email & Password Signup/Login

**Signup Flow:**
```
Visit /signup
  ↓
Enter: Name, Email, Password, Confirm Password
  ↓
Click "Sign Up"
  ↓
Account created & logged in
  ↓
Redirected to home page
```

**Login Flow:**
```
Visit /login
  ↓
Enter: Email, Password
  ↓
Click "Sign In"
  ↓
Logged in
  ↓
Redirected to home page
```

**Features:**
- ✅ Name validation
- ✅ Email validation
- ✅ Password minimum 6 characters
- ✅ Password confirmation
- ✅ Duplicate email check
- ✅ Error messages
- ✅ Loading states

---

### 2. Mobile Number with OTP

**OTP Login Flow:**
```
Visit /otp-login
  ↓
Enter: 10-digit mobile number
  ↓
Click "Send OTP"
  ↓
6-digit OTP generated (shown on screen for demo)
  ↓
Enter OTP
  ↓
Click "Verify & Login"
  ↓
Logged in
  ↓
Redirected to home page
```

**Features:**
- ✅ 10-digit mobile number validation
- ✅ 6-digit OTP generation
- ✅ OTP expiry (5 minutes)
- ✅ OTP verification
- ✅ Demo mode (OTP shown on screen)
- ✅ Production ready (integrate SMS service)

**Demo Mode:**
- OTP is displayed on screen
- In production, send via SMS (Twilio, AWS SNS, etc.)

---

### 3. Route Protection

**Protected Routes:**
All pages except:
- `/signup`
- `/login`
- `/otp-login`

**How It Works:**
```
User visits any page
  ↓
AuthGuard checks if logged in
  ↓
If NOT logged in → Redirect to /signup
  ↓
If logged in → Show page
```

---

## 🔧 Technical Implementation

### Authentication Functions

**File:** `lib/auth.ts`

```typescript
// Check if user is authenticated
isAuthenticated(): boolean

// Get current user
getCurrentUser(): User | null

// Set user session
setUserSession(user: User): void

// Clear user session (logout)
clearUserSession(): void

// Register new user
registerUser(email, password, name): Result

// Login with email/password
loginUser(email, password): Result

// Generate OTP
generateOTP(phone): Result

// Verify OTP
verifyOTP(phone, otp): Result
```

### User Data Structure

```typescript
interface User {
  id: string;
  name: string;
  email?: string;      // For email/password users
  phone?: string;      // For OTP users
  createdAt: string;
}
```

### Storage

**Current:** LocalStorage (client-side)
- `movieverse_user` - User session
- `movieverse_otp` - Temporary OTP storage

**Production:** Use backend database
- Firebase Auth
- Supabase Auth
- Custom API with JWT

---

## 🎨 User Interface

### Signup Page (`/signup`)
- Name field
- Email field
- Password field (min 6 chars)
- Confirm Password field
- Sign Up button
- Link to Login
- Link to OTP Login
- Error messages
- Loading state

### Login Page (`/login`)
- Email field
- Password field
- Sign In button
- Link to Signup
- Link to OTP Login
- Error messages
- Loading state

### OTP Login Page (`/otp-login`)
- **Step 1:** Mobile number input
- **Step 2:** OTP input (6 digits)
- Demo OTP display (green box)
- Change number button
- Links to Login/Signup
- Error messages
- Loading states

### Profile Page (`/profile`)
- User information
- Email or Phone display
- Statistics
- **Sign Out button** (red)
- Redirects to signup on logout

---

## 🔐 Security Features

### Current Implementation
- ✅ Password minimum length (6 characters)
- ✅ Password confirmation
- ✅ Duplicate email check
- ✅ OTP expiry (5 minutes)
- ✅ Phone number validation
- ✅ Route protection
- ✅ Session management

### Production Recommendations
- [ ] Password hashing (bcrypt)
- [ ] JWT tokens
- [ ] Refresh tokens
- [ ] Rate limiting
- [ ] HTTPS only
- [ ] CSRF protection
- [ ] XSS protection
- [ ] SQL injection prevention
- [ ] 2FA (Two-Factor Authentication)

---

## 📊 User Flow Diagram

```
New User
  ↓
Visits any page
  ↓
Redirected to /signup
  ↓
Creates account (Email or OTP)
  ↓
Logged in automatically
  ↓
Can access all content
  ↓
Can sign out from profile
  ↓
Redirected to /signup
```

```
Returning User
  ↓
Visits /login or /otp-login
  ↓
Enters credentials
  ↓
Logged in
  ↓
Can access all content
```

---

## 🎯 Testing the System

### Test Signup
1. Go to `http://localhost:3000`
2. Redirected to `/signup`
3. Fill form:
   - Name: John Doe
   - Email: john@example.com
   - Password: password123
   - Confirm: password123
4. Click "Sign Up"
5. Should redirect to home page

### Test Login
1. Sign out from profile
2. Go to `/login`
3. Enter:
   - Email: john@example.com
   - Password: password123
4. Click "Sign In"
5. Should redirect to home page

### Test OTP Login
1. Sign out from profile
2. Go to `/otp-login`
3. Enter mobile: 9876543210
4. Click "Send OTP"
5. See OTP in green box (e.g., 123456)
6. Enter OTP: 123456
7. Click "Verify & Login"
8. Should redirect to home page

### Test Route Protection
1. Sign out from profile
2. Try to visit `/movies`
3. Should redirect to `/signup`
4. Sign in
5. Now can access `/movies`

---

## 🔌 Backend Integration

### For Production

**1. Replace LocalStorage with Database**

```typescript
// Instead of localStorage
// Use API calls to your backend

// Example with fetch
async function loginUser(email, password) {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}
```

**2. Integrate SMS Service for OTP**

```typescript
// Use Twilio, AWS SNS, or similar
async function generateOTP(phone) {
  const otp = generateRandomOTP();
  
  // Send via SMS
  await twilioClient.messages.create({
    body: `Your MovieVerse OTP is: ${otp}`,
    to: phone,
    from: YOUR_TWILIO_NUMBER,
  });
  
  // Store in database with expiry
  await db.otps.create({
    phone,
    otp,
    expiresAt: Date.now() + 300000, // 5 minutes
  });
}
```

**3. Use JWT for Sessions**

```typescript
// Generate JWT on login
const token = jwt.sign(
  { userId: user.id },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }
);

// Store in httpOnly cookie
res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Secure`);
```

**4. Recommended Services**

**Authentication:**
- Firebase Auth (easiest)
- Supabase Auth
- Auth0
- Custom with JWT

**SMS for OTP:**
- Twilio
- AWS SNS
- Vonage (Nexmo)
- MSG91 (India)

**Database:**
- Firebase Firestore
- Supabase (PostgreSQL)
- MongoDB Atlas
- MySQL/PostgreSQL

---

## 🎉 What's Working Now

✅ **Signup with Email/Password**
✅ **Login with Email/Password**
✅ **Login with Mobile/OTP**
✅ **Route Protection**
✅ **Session Management**
✅ **Sign Out**
✅ **Error Handling**
✅ **Loading States**
✅ **Validation**
✅ **User Profile Display**

---

## 🚀 Quick Start

```bash
# Run the app
npm run dev

# Test the flow
1. Visit http://localhost:3000
2. Redirected to signup
3. Create account
4. Start watching movies!
```

---

## 📝 Error Messages

**Signup:**
- "All fields are required"
- "Password must be at least 6 characters"
- "Passwords do not match"
- "Email already registered"

**Login:**
- "Please enter both email and password"
- "Email not found. Please sign up first."
- "Incorrect password"

**OTP:**
- "Please enter a valid 10-digit mobile number"
- "Please enter a valid 6-digit OTP"
- "No OTP found. Please request a new one."
- "OTP expired. Please request a new one."
- "Invalid OTP"

---

## 🎯 Summary

Your MovieVerse platform now has:
1. ✅ Complete authentication system
2. ✅ Three login methods
3. ✅ Route protection
4. ✅ Session management
5. ✅ User profiles
6. ✅ Sign out functionality

**Users must sign up/login before accessing any content!** 🔐

---

**Ready to use! Start the app and test the authentication flow!** 🚀
