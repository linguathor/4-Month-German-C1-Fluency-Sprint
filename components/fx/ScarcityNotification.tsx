"use client";
import { useState, useEffect } from 'react';

interface ScarcityNotificationProps {
  spotsLeft: number;
  enrolledToday: number;
  className?: string;
}

export default function ScarcityNotification({ spotsLeft, enrolledToday, className = "" }: ScarcityNotificationProps) {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show notification with a slight delay for dramatic effect
    const timer = setTimeout(() => setShowNotification(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!showNotification) return null;

  return (
    <div className={`animate-fade-in ${className}`}>
      {/* Enhanced spots remaining alert */}
      <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-400 rounded-xl p-3 sm:p-4 mb-4 shadow-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-red-600 rounded-full animate-pulseSoft mr-2 sm:mr-3"></div>
            <p className="text-red-800 font-bold text-base sm:text-lg text-center">
              <span className="text-red-600 font-extrabold text-lg sm:text-xl">Ausgebucht</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}