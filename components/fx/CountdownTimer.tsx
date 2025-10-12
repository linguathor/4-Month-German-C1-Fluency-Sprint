"use client";
import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsExpired(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    // Calculate immediately
    calculateTimeRemaining();

    // Update every second
    const interval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (isExpired) {
    return (
      <div className={`bg-gradient-to-r from-accent-100 to-accent-200 border-2 border-accent-400 rounded-xl p-6 text-center shadow-accent ${className}`}>
        <p className="text-accent-800 font-bold text-lg">Anmeldung geschlossen</p>
        <p className="text-accent-700 text-base font-medium">Die nächste Runde startet bald!</p>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-primary-50 via-accent-50 to-primary-50 border-2 border-primary-300 rounded-xl p-6 shadow-primary ${className}`}>
      <div className="text-center">
        <p className="text-primary-800 font-bold text-xl flex items-center justify-center gap-3">
          <span className="text-3xl animate-pulseSoft">⏰</span>
          Anmeldung läuft
        </p>
        <p className="text-primary-600 font-medium text-base mt-2">
          Sichere dir jetzt deinen Platz
        </p>
      </div>
    </div>
  );
}