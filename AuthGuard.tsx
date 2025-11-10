'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';

interface AuthGuardProps {
     children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
     const router = useRouter();
     const pathname = usePathname();
     const [isChecking, setIsChecking] = useState(true);

     useEffect(() => {
          // Public routes that don't require authentication
          const publicRoutes = ['/login', '/signup', '/otp-login'];

          if (publicRoutes.includes(pathname)) {
               setIsChecking(false);
               return;
          }

          // Check authentication
          if (!isAuthenticated()) {
               router.push('/signup');
          } else {
               setIsChecking(false);
          }
     }, [pathname, router]);

     if (isChecking) {
          return null;
     }

     return <>{children}</>;
}
