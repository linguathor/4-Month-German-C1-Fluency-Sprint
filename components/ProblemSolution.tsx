import React from 'react';
import Image from 'next/image';
import MagneticButton from './fx/MagneticButton';

export default function ProblemSolution() {
  return (
    <section className="bg-gradient-to-br from-neutral-50 to-gray-100 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Problem Section - Part 1 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Hast du genug davon, dich unwohl zu fühlen, wenn du Deutsch sprichst?
            </h2>
            
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Wenn du das hier liest, ist deine Situation sehr wahrscheinlich diese:
              </p>
              
              <p>
                Du lernst schon seit zwei oder drei Jahren Deutsch. Oder noch länger! 
                Du lebst in einem deutschsprachigen Land und brauchst die Sprache aus beruflichen Gründen. 
                Oder einfach, weil du häufig im Alltag mit Deutschen zu tun hast.
              </p>
              
              <p>
                Aber du fühlst dich mit Deutsch einfach nicht gut. Du verstehst manche Details nicht, 
                wenn die Leute schnell reden. Du kannst nicht so antworten, wie du es in deiner Muttersprache tun würdest. 
                Du bist nicht in der Lage, präzise auszudrücken, was du denkst.
              </p>
              
              <p>
                Du kannst nicht deinen wahren Charakter zeigen. Nicht witzig sein. Nicht überzeugend. 
                Nicht selbstbewusst. Du bist zwar ehrgeizig im Job, aber niemand merkt das. 
                Nicht dein Chef, nicht deine Kollegen.
              </p>
              
              <p className="font-semibold text-gray-800">
                Und warum?
              </p>
            </div>
          </div>
          
          {/* Frustrated Person Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/study.jpg"
                alt="Gestresst beim Deutschsprechen"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Central Problem Statement */}
        <div className="text-center py-12 mb-16">
          <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 text-gray-800 py-8 px-12 rounded-2xl shadow-md max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-semibold leading-tight text-red-800">
              Weil dein Deutsch einfach nicht besser wird!
            </h3>
          </div>
        </div>

        {/* Problem Section - Part 2 & Solution */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Success Person Image */}
          <div className="flex justify-center lg:order-1">
            <div className="w-80 h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/communication.jpg"
                alt="Erfolgreich & selbstbewusst"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6 lg:order-2">
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Du bist auf B2-Niveau. Vielleicht hast du sogar schon eine C1-Prüfung gemacht. 
                Aber das heißt leider gar nichts. Denn Deutsch sprechen ist und bleibt eine große Anstrengung für dich. 
                Etwas, das dich nervös und unsicher macht.
              </p>
              
              <p>
                Und egal, was du tust, du wirst einfach nicht besser. Und du weißt, dass es noch 3 oder 4 Jahre 
                oder noch länger dauern kann, bis du wirklich sicher sprechen kannst.
              </p>
              
              <p className="font-semibold text-gray-800">
                Aber das ist keine Option für dich!
              </p>
              
              <p>
                Du willst JETZT besser werden, sicher sprechen, alles verstehen und dich wohl fühlen. Du MUSST! 
                Denn sonst wird der Erfolg im Job ausbleiben. Sonst wird es schwierig bleiben, neue Leute kennen zu lernen. 
                Sonst wird es einfach unmöglich sein, dich jemals wohl zu fühlen in Deutschland.
              </p>
              
              <p className="font-semibold text-red-600">
                So kannst du niemals du selbst sein, niemals glücklich und zufrieden. Deutsch steht dir immer im Weg!
              </p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-12 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Genau für Leute wie dich haben wir unseren 4-monatigen C1 Fluency Sprint entwickelt.
            </h3>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Kein Warten mehr auf bessere Zeiten. Sondern aktives Handeln. Ohne Ausreden. Ohne Plan B. 
              Ein Ziel, eine Strategie und eine bessere Zukunft nur ein paar Wochen entfernt.
            </p>
            
            <p className="text-2xl font-bold text-primary-600 mb-8">
              Bist du dabei?
            </p>
            
            {/* Call to Action */}
            <div className="pt-4">
              <MagneticButton href="">
                Anmeldung vom 13. bis 20. Oktober
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}