import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
     return (
          <footer className="bg-black border-t border-gray-900 py-12">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Social Links */}
                    <div className="flex space-x-6 mb-8">
                         <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Facebook">
                              <Facebook size={24} />
                         </a>
                         <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Instagram">
                              <Instagram size={24} />
                         </a>
                         <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                              <Twitter size={24} />
                         </a>
                         <a href="#" className="text-gray-400 hover:text-white transition" aria-label="YouTube">
                              <Youtube size={24} />
                         </a>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                         <div>
                              <ul className="space-y-3 text-sm text-gray-400">
                                   <li><Link href="#" className="hover:text-white transition">Audio Description</Link></li>
                                   <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
                                   <li><Link href="#" className="hover:text-white transition">Gift Cards</Link></li>
                                   <li><Link href="#" className="hover:text-white transition">Media Center</Link></li>
                              </ul>
                         </div>
                         <div>
                              <ul className="space-y-3 text-sm text-gray-400">
                                   <li><Link href="#" className="hover:text-white transition">Investor Relations</Link></li>
                                   <li><Link href="#" className="hover:text-white transition">Jobs</Link></li>
                                   <li><Link href="#" className="hover:text-white transition">Terms of Use</Link></li>
                                   <li><Link href="#" className="hover:text-white transition">Privacy</Link></li>
                              </ul>
                         </div>
                         <div>
                              <ul className="space-y-3 text-sm text-gray-400">
                                   <li><Link href="#" className="hover:text-white transition">Legal Notices</Link></li>
                                   <li><Link href="#" className="hover:text-white transition">Cookie Preferences</Link></li>
                                   <li><Link href="#" className="hover:text-white transition">Corporate Information</Link></li>
                                   <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
                              </ul>
                         </div>
                         <div>
                              <ul className="space-y-3 text-sm text-gray-400">
                                   <li><Link href="#" className="hover:text-white transition">Account</Link></li>
                                   <li><Link href="#" className="hover:text-white transition">Redeem Gift Cards</Link></li>
                                   <li><Link href="#" className="hover:text-white transition">Ways to Watch</Link></li>
                                   <li><Link href="#" className="hover:text-white transition">Speed Test</Link></li>
                              </ul>
                         </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-gray-500">
                         <p>&copy; 2024 Movie Short Verse, Inc. All rights reserved.</p>
                    </div>
               </div>
          </footer>
     );
}
