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
      <div className="bg-gradient-to-r from-accent-50 to-accent-100 border-2 border-accent-300 rounded-xl p-4 mb-4 shadow-accent">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center mb-2">
            <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulseSoft mr-3"></div>
            <p className="text-accent-800 font-bold text-lg text-center">
              Nur noch <span className="text-accent-600 font-extrabold text-xl">{spotsLeft} Plätze</span> verfügbar <span className="text-red-600">❗❗❗</span>
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