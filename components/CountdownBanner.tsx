"use client";
import { useState, useEffect } from "react";

interface CountdownBannerProps {
  deadline: string;
  text: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownBanner({ deadline, text }: CountdownBannerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const calculateTimeLeft = (): TimeLeft | null => {
      const difference = +new Date(deadline) - +new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return null;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline, isClient]);

  // Don't render anything on server
  if (!isClient) {
    return null;
  }

  // Show expired message if countdown ended
  if (!timeLeft) {
    return (
      <div className="sticky top-0 z-[60] bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 text-white shadow-lg">
        <div className="max-w-screen-xl mx-auto px-4 py-4">
          <div className="text-center">
            <p className="font-bold text-base md:text-lg mb-1">Anmeldung geschlossen</p>
            <p className="text-sm md:text-base">Die nächste Runde startet bald!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-[60] bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white shadow-lg">
      <div className="max-w-screen-xl mx-auto px-3 py-3 md:px-4 md:py-3">
        <div className="flex items-center justify-center gap-2 md:gap-4 text-center flex-wrap">
          {/* Icon and Text */}
          <div className="flex items-center gap-2">
            <span className="text-2xl animate-pulse">⏰</span>
            <span className="font-bold text-sm md:text-base">{text}</span>
          </div>

          {/* Countdown Display */}
          <div className="flex items-center gap-1.5 md:gap-3">
            {/* Days */}
            <div className="flex flex-col items-center bg-white/20 rounded-lg px-2 py-1.5 md:px-3 md:py-2 backdrop-blur-sm min-w-[44px] md:min-w-[60px]">
              <span className="text-xl md:text-2xl font-bold leading-tight">{timeLeft.days}</span>
              <span className="text-[10px] md:text-xs uppercase leading-tight">Tage</span>
            </div>

            <span className="text-xl md:text-2xl font-bold">:</span>

            {/* Hours */}
            <div className="flex flex-col items-center bg-white/20 rounded-lg px-2 py-1.5 md:px-3 md:py-2 backdrop-blur-sm min-w-[44px] md:min-w-[60px]">
              <span className="text-xl md:text-2xl font-bold leading-tight">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-[10px] md:text-xs uppercase leading-tight">Std</span>
            </div>

            <span className="text-xl md:text-2xl font-bold">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center bg-white/20 rounded-lg px-2 py-1.5 md:px-3 md:py-2 backdrop-blur-sm min-w-[44px] md:min-w-[60px]">
              <span className="text-xl md:text-2xl font-bold leading-tight">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-[10px] md:text-xs uppercase leading-tight">Min</span>
            </div>

            <span className="text-xl md:text-2xl font-bold">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center bg-white/20 rounded-lg px-2 py-1.5 md:px-3 md:py-2 backdrop-blur-sm min-w-[44px] md:min-w-[60px]">
              <span className="text-xl md:text-2xl font-bold leading-tight">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-[10px] md:text-xs uppercase leading-tight">Sek</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
