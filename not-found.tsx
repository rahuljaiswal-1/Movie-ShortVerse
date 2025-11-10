import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
     return (
          <div className="min-h-screen bg-black flex items-center justify-center px-4">
               <div className="text-center">
                    <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                         Sorry, we couldn't find the page you're looking for. It might have been removed or doesn't exist.
                    </p>
                    <Link
                         href="/"
                         className="inline-flex items-center space-x-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md transition font-semibold"
                    >
                         <Home size={20} />
                         <span>Back to Home</span>
                    </Link>
               </div>
          </div>
     );
}
