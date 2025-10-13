import Link from 'next/link';
import OptimizedImage from './fx/OptimizedImage';
import { FloatingShapes, AnimatedGradientBg } from './fx/FloatingElements';
import { academy } from '../content/germanAiAcademy';
import BlobBg from './fx/BlobBg';
import MagneticButton from './fx/MagneticButton';
import Highlight from './fx/Highlight';
import CountdownTimer from './fx/CountdownTimer';
import ScarcityNotification from './fx/ScarcityNotification';

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      <BlobBg />
      <AnimatedGradientBg />
      <FloatingShapes />
      
      {/* Left Instructor Image - David - Enhanced */}
      <div className="absolute left-0 top-[60%] -translate-y-1/2 -translate-x-1/6 hidden lg:block">
        <div className="relative w-64 h-80 xl:w-80 xl:h-96 rounded-3xl overflow-hidden shadow-hover transform -rotate-6 border-4 border-white transition-all duration-500 hover:scale-105 hover:-rotate-12">
          <OptimizedImage 
            src="/images/David.png" 
            alt="David - AI Academy Instructor" 
            width={320}
            height={384}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
        </div>
      </div>

      {/* Right Instructor Image - Flemming - Enhanced */}
      <div className="absolute right-0 top-[60%] -translate-y-1/2 translate-x-1/6 hidden lg:block">
        <div className="relative w-64 h-80 xl:w-80 xl:h-96 rounded-3xl overflow-hidden shadow-hover transform rotate-6 border-4 border-white transition-all duration-500 hover:scale-105 hover:rotate-12">
          <OptimizedImage 
            src="/images/Flemming.png" 
            alt="Flemming - AI Academy Instructor" 
            width={320}
            height={384}
            className="w-full h-full object-cover object-[center_bottom] block"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 section-spacing relative z-10">
        <div className="mx-auto max-w-4xl text-center content-spacing">
          {/* Enhanced Urgency Badge */}
          <div className="mx-auto mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-accent-100 to-accent-50 border-2 border-accent-300 px-6 py-3 text-lg font-bold text-accent-800 shadow-accent">
            <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulseSoft"></div>
            {academy.hero.audienceBadge}
          </div>

          <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight [text-wrap:balance] text-primary-600">
            <Highlight>{academy.hero.h1}</Highlight>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-neutral-600 max-w-4xl mx-auto font-medium">
            {academy.hero.sub}
          </p>

          {/* Enhanced Scarcity Notification */}
          <div className="max-w-lg mx-auto">
            <ScarcityNotification 
              spotsLeft={academy.hero.urgency.spotsLeft}
              enrolledToday={academy.hero.urgency.enrolledToday}
            />
          </div>

          {/* Enhanced Primary CTA */}
          <div>
            <MagneticButton href={academy.hero.ctaPrimary.href}>
              {academy.hero.ctaPrimary.label}
            </MagneticButton>
          </div>

          {/* Enhanced Countdown Timer */}
          <div className="max-w-lg mx-auto">
            <CountdownTimer 
              targetDate={academy.hero.urgency.cohortStartDate}
            />
          </div>

          {/* Simplified Key Benefits */}
          <ul className="flex flex-wrap justify-center gap-3 text-sm font-medium">
            <li className="rounded-full bg-primary-100 border border-primary-300 px-6 py-3 font-semibold text-primary-800 transition-all duration-300 hover:bg-primary-200">
              B2-C1 Programm
            </li>
            <li className="rounded-full bg-success-100 border border-success-300 px-6 py-3 font-semibold text-success-800 transition-all duration-300 hover:bg-success-200">
              4 Monate Intensiv
            </li>
            <li className="rounded-full bg-accent-100 border border-accent-300 px-6 py-3 font-semibold text-accent-800 transition-all duration-300 hover:bg-accent-200">
              Live-Coaching
            </li>
          </ul>

          {/* Start Date */}
          <p className="mt-6 text-center text-lg font-semibold text-gray-700">
            Unser Fluency Sprint startet ab November 2025
          </p>
        </div>
      </div>
    </header>
  );
}
