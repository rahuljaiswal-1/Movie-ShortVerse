// Authentication utilities
export interface User {
     id: string;
     name: string;
     email?: string;
     phone?: string;
     createdAt: string;
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
     if (typeof window === 'undefined') return false;
     const user = localStorage.getItem('movieshortverse_user');
     return !!user;
}

// Get current user
export function getCurrentUser(): User | null {
     if (typeof window === 'undefined') return null;
     const user = localStorage.getItem('movieshortverse_user');
     return user ? JSON.parse(user) : null;
}

// Set user session
export function setUserSession(user: User): void {
     if (typeof window === 'undefined') return;
     localStorage.setItem('movieshortverse_user', JSON.stringify(user));
}

// Clear user session
export function clearUserSession(): void {
     if (typeof window === 'undefined') return;
     localStorage.removeItem('movieshortverse_user');
     localStorage.removeItem('movieshortverse_otp');
}

// Mock user database (in production, use real database)
const mockUsers: { [key: string]: any } = {};

// Register new user
export function registerUser(email: string, password: string, name: string): { success: boolean; message: string; user?: User } {
     if (mockUsers[email]) {
          return { success: false, message: 'Email already registered' };
     }

     const user: User = {
          id: Date.now().toString(),
          name,
          email,
          createdAt: new Date().toISOString(),
     };

     mockUsers[email] = { ...user, password };
     return { success: true, message: 'Registration successful', user };
}

// Login with email/password
export function loginUser(email: string, password: string): { success: boolean; message: string; user?: User } {
     const userData = mockUsers[email];

     if (!userData) {
          return { success: false, message: 'Email not found. Please sign up first.' };
     }

     if (userData.password !== password) {
          return { success: false, message: 'Incorrect password' };
     }

     const { password: _, ...user } = userData;
     return { success: true, message: 'Login successful', user };
}

// Generate OTP (mock - in production, send via SMS)
export function generateOTP(phone: string): { success: boolean; message: string; otp?: string } {
     const otp = Math.floor(100000 + Math.random() * 900000).toString();

     // Store OTP temporarily (in production, store in database with expiry)
     if (typeof window !== 'undefined') {
          localStorage.setItem('movieshortverse_otp', JSON.stringify({ phone, otp, expires: Date.now() + 300000 })); // 5 min expiry
     }

     console.log(`OTP for ${phone}: ${otp}`); // In production, send via SMS
     return { success: true, message: `OTP sent to ${phone}`, otp };
}

// Verify OTP
export function verifyOTP(phone: string, otp: string): { success: boolean; message: string; user?: User } {
     if (typeof window === 'undefined') {
          return { success: false, message: 'Invalid environment' };
     }

     const storedData = localStorage.getItem('movieshortverse_otp');
     if (!storedData) {
          return { success: false, message: 'No OTP found. Please request a new one.' };
     }

     const { phone: storedPhone, otp: storedOTP, expires } = JSON.parse(storedData);

     if (Date.now() > expires) {
          localStorage.removeItem('movieshortverse_otp');
          return { success: false, message: 'OTP expired. Please request a new one.' };
     }

     if (phone !== storedPhone) {
          return { success: false, message: 'Phone number mismatch' };
     }

     if (otp !== storedOTP) {
          return { success: false, message: 'Invalid OTP' };
     }

     // Create or get user
     const user: User = {
          id: Date.now().toString(),
          name: `User ${phone.slice(-4)}`,
          phone,
          createdAt: new Date().toISOString(),
     };

     localStorage.removeItem('movieshortverse_otp');
     return { success: true, message: 'Login successful', user };
}
