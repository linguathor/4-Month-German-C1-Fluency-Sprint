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
      <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-400 rounded-xl p-4 mb-4 shadow-lg">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulseSoft mr-3"></div>
            <p className="text-red-800 font-bold text-lg text-center">
              <span className="text-red-600 font-extrabold text-xl">Ausgebucht</span>
            </p>
          </div>

        </div>
      </div>

      {/* Enhanced enrollment notification */}
      {enrolledToday > 0 && (
        <div className="bg-gradient-to-r from-success-50 to-success-100 border-2 border-success-300 rounded-xl p-4 shadow-soft">
          <div className="flex items-center justify-center">
            <div className="w-3 h-3 bg-success-500 rounded-full mr-3 animate-pulseSoft"></div>
            <p className="text-success-800 font-semibold text-base text-center">
              <span className="font-bold text-success-600">{enrolledToday} Personen</span> haben sich schon angemeldet
            </p>
          </div>
        </div>
      )}
    </div>
  );
}