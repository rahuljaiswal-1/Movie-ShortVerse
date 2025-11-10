'use client';

import { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface ToastProps {
     message: string;
     type?: 'success' | 'error' | 'info';
     duration?: number;
     onClose: () => void;
}

export default function Toast({ message, type = 'success', duration = 3000, onClose }: ToastProps) {
     const [isVisible, setIsVisible] = useState(true);

     useEffect(() => {
          const timer = setTimeout(() => {
               setIsVisible(false);
               setTimeout(onClose, 300);
          }, duration);

          return () => clearTimeout(timer);
     }, [duration, onClose]);

     const icons = {
          success: <CheckCircle size={20} className="text-green-500" />,
          error: <AlertCircle size={20} className="text-red-500" />,
          info: <Info size={20} className="text-blue-500" />,
     };

     const colors = {
          success: 'bg-green-500/10 border-green-500',
          error: 'bg-red-500/10 border-red-500',
          info: 'bg-blue-500/10 border-blue-500',
     };

     return (
          <div
               className={`fixed top-20 right-4 z-50 transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                    }`}
          >
               <div className={`${colors[type]} border rounded-lg p-4 shadow-lg backdrop-blur-sm max-w-sm`}>
                    <div className="flex items-start space-x-3">
                         {icons[type]}
                         <p className="text-white flex-1">{message}</p>
                         <button
                              onClick={() => {
                                   setIsVisible(false);
                                   setTimeout(onClose, 300);
                              }}
                              className="text-white/60 hover:text-white transition"
                         >
                              <X size={18} />
                         </button>
                    </div>
               </div>
          </div>
     );
}
