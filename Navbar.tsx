'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Bell, User, Menu, X } from 'lucide-react';

export default function Navbar() {
     const [scrolled, setScrolled] = useState(false);
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               setScrolled(window.scrollY > 50);
          };
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     return (
          <nav
               className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'
                    }`}
          >
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                         {/* Logo */}
                         <div className="flex items-center space-x-8">
                              <Link href="/" className="flex items-center">
                                   <span className="text-primary text-2xl md:text-3xl font-bold tracking-tight">
                                        Movie Short Verse
                                   </span>
                              </Link>

                              {/* Desktop Navigation */}
                              <div className="hidden md:flex space-x-6">
                                   <Link href="/" className="text-white hover:text-gray-300 transition">
                                        Home
                                   </Link>
                                   <Link href="/movies" className="text-white hover:text-gray-300 transition">
                                        Movies
                                   </Link>
                                   <Link href="/series" className="text-white hover:text-gray-300 transition">
                                        Series
                                   </Link>
                                   <Link href="/trending" className="text-white hover:text-gray-300 transition">
                                        Trending
                                   </Link>
                                   <Link href="/my-list" className="text-white hover:text-gray-300 transition">
                                        My List
                                   </Link>
                                   <Link href="/browse" className="text-white hover:text-gray-300 transition">
                                        Browse
                                   </Link>
                                   <Link href="/history" className="text-white hover:text-gray-300 transition">
                                        History
                                   </Link>
                              </div>
                         </div>

                         {/* Right Side Icons */}
                         <div className="flex items-center space-x-4">
                              {/* Search */}
                              <Link href="/search" className="text-white hover:text-gray-300 transition" aria-label="Search">
                                   <Search size={20} />
                              </Link>

                              {/* Notifications */}
                              <button className="hidden md:block text-white hover:text-gray-300 transition" aria-label="Notifications">
                                   <Bell size={20} />
                              </button>

                              {/* User Profile */}
                              <Link href="/profile" className="text-white hover:text-gray-300 transition" aria-label="User profile">
                                   <User size={20} />
                              </Link>

                              {/* Mobile Menu Toggle */}
                              <button
                                   className="md:hidden text-white"
                                   onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                   aria-label="Toggle menu"
                              >
                                   {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                              </button>
                         </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                         <div className="md:hidden bg-black/95 py-4 space-y-3">
                              <Link href="/" className="block text-white hover:text-primary transition px-4 py-2">
                                   Home
                              </Link>
                              <Link href="/movies" className="block text-white hover:text-primary transition px-4 py-2">
                                   Movies
                              </Link>
                              <Link href="/series" className="block text-white hover:text-primary transition px-4 py-2">
                                   Series
                              </Link>
                              <Link href="/trending" className="block text-white hover:text-primary transition px-4 py-2">
                                   Trending
                              </Link>
                              <Link href="/my-list" className="block text-white hover:text-primary transition px-4 py-2">
                                   My List
                              </Link>
                              <Link href="/browse" className="block text-white hover:text-primary transition px-4 py-2">
                                   Browse
                              </Link>
                              <Link href="/history" className="block text-white hover:text-primary transition px-4 py-2">
                                   History
                              </Link>
                              <Link href="/settings" className="block text-white hover:text-primary transition px-4 py-2">
                                   Settings
                              </Link>
                         </div>
                    )}
               </div>
          </nav>
     );
}
