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
      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-xl border-2 border-red-400">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <div className="relative flex-shrink-0">
            <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/50 rounded-full animate-ping"></div>
          </div>
          <p className="text-white font-extrabold text-base sm:text-lg md:text-xl text-center leading-tight">
            Ausgebucht
          </p>
        </div>
      </div>
    </div>
  );
}