"use client";
import { useState, useEffect } from 'react';
import MagneticButton from './MagneticButton';

interface StickyCTAProps {
  ctaText: string;
  ctaHref: string;
  spotsLeft: number;
}

export default function StickyCTA({ ctaText, ctaHref, spotsLeft }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showGuarantee, setShowGuarantee] = useState(false);
  const [showBonus, setShowBonus] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = 800; // Show after scrolling past hero section
      
      // Show sticky CTA after scrolling past hero
      setIsVisible(currentScrollY > heroHeight);
      
      // Check if user has scrolled past the guarantee section (roughly at 70% of page)
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (currentScrollY / pageHeight) * 100;
      setShowGuarantee(scrollPercentage > 50); // Show guarantee message after 50% scroll
      
      // Check if bonus section is visible or passed
      const bonusSection = document.getElementById('bonus');
      if (bonusSection) {
        const bonusRect = bonusSection.getBoundingClientRect();
        // Show bonus message when section is in viewport or already passed
        setShowBonus(bonusRect.top < window.innerHeight || bonusRect.bottom < 0);
      }
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      {/* Glassmorphism container with subtle gradient */}
      <div 
        className="relative backdrop-blur-xl bg-gradient-to-br from-white/80 via-amber-50/70 to-white/75 border-t border-amber-200/50 shadow-[0_-4px_24px_-8px_rgba(0,0,0,0.12)] px-4" 
        style={{ 
          paddingTop: '1rem',
          paddingBottom: 'max(1rem, calc(1rem + env(safe-area-inset-bottom)))' 
        }}
      >
        {/* Subtle top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
        
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center mb-1.5">
                {/* Softer pulsing indicator */}
                <div className="relative mr-2.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-pulse shadow-sm" />
                  <div className="absolute inset-0 w-2 h-2 bg-orange-400/30 rounded-full animate-ping" />
                </div>
                <p className="text-sm font-semibold bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                  {showBonus ? (
                    <>
                      {/* Mobile: shorter text with bonus */}
                      <span className="sm:hidden">🎁 Bonus | Ausgebucht</span>
                      {/* Desktop: full text with bonus */}
                      <span className="hidden sm:inline">🎁 Jetzt mit Bonus | Ausgebucht</span>
                    </>
                  ) : showGuarantee ? (
                    <>
                      {/* Mobile: shorter text */}
                      <span className="sm:hidden">100% Garantie | Ausgebucht</span>
                      {/* Desktop: full text */}
                      <span className="hidden sm:inline">100% Garantie | Ausgebucht</span>
                    </>
                  ) : (
                    <>Ausgebucht</>
                  )}
                </p>
              </div>
              <p className="text-xs text-gray-500 font-medium truncate">
                {showBonus ? 'Wöchentliche Übungspläne sichern' : showGuarantee ? 'Risikofrei starten' : 'Sichere deinen Platz jetzt'}
              </p>
            </div>
            <div className="flex-shrink-0">
              <MagneticButton href={ctaHref}>
                <span className="text-sm sm:text-base font-bold px-2">Platz sichern</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}