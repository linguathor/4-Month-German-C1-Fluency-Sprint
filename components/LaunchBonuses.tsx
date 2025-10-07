import React from 'react';
import { CalendarDaysIcon, BookOpenIcon, StarIcon } from '@heroicons/react/24/outline';
import MagneticButton from './fx/MagneticButton';

interface LaunchBonusesProps {
  title: string;
  summary: string;
  deadline: string;
  bonuses: readonly {
    readonly title: string;
    readonly description: string;
    readonly value: string;
    readonly icon: string;
  }[];
}

export function LaunchBonuses({ title, summary, deadline, bonuses }: LaunchBonusesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'calendar':
        return CalendarDaysIcon;
      case 'book':
        return BookOpenIcon;
      case 'star':
        return StarIcon;
      default:
        return CalendarDaysIcon;
    }
  };

  return (
    <div className="py-24 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <StarIcon className="w-4 h-4" />
            Exklusiver Launch-Bonus
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {summary}
          </p>
          
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg inline-block font-semibold text-lg shadow-lg">
            ⏰ {deadline}
          </div>
        </div>

        {/* Bonuses Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {bonuses.map((bonus, index) => {
            const IconComponent = getIcon(bonus.icon);
            
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{bonus.title}</h3>
                    <div className="text-orange-600 font-semibold text-lg">{bonus.value}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{bonus.description}</p>
              </div>
            );
          })}
        </div>

        {/* Total Value */}
        <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 text-center mb-12 border border-orange-200">
          <div className="text-2xl font-bold text-gray-900 mb-2">
            Gesamtwert der Boni: <span className="text-orange-600">249€</span>
          </div>
          <div className="text-gray-600">Für dich kostenlos bei Anmeldung bis {deadline.split(' ').slice(-3).join(' ')}</div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <MagneticButton href="https://YOUR_COPECART_LINK_PREMIUM">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-12 py-4 text-lg font-semibold shadow-xl rounded-lg transition-all duration-300 inline-block">
              Start der Anmeldung 13.Oktober
            </span>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
