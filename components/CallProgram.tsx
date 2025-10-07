// components/CallProgram.tsx
import MagneticButton from './fx/MagneticButton';

type CallItem = { name: string; desc: string };

export default function CallProgram({
  title,
  subtitle,
  callSchedule,
  summary,
  items,
  deliverables
}: {
  title: string;
  subtitle?: string;
  callSchedule?: string;
  summary: string;
  items: CallItem[];
  deliverables: string[];
}) {
  const interactivityFeatures = [
    "Hot-Seat-Coaching mit direktem Feedback",
  "Live-Umfragen und interaktive Quiz",
  "Lernspiele"
  ];

  const materialsList = [
    "PDF-Handout nach jedem Call",
  "Digitale Karteikarten (Anki-kompatibel)",
    "Aufgaben mit detaillierten Lösungen",
    "Komplettes Transkript der Session"
  ];

  return (
    // keep spacing but allow transparent background so parent divider controls the band edge
    <section aria-labelledby="calls-title" className="section-spacing bg-transparent">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="calls-title" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-2xl sm:text-3xl font-semibold text-primary-700 mb-4">
              {subtitle}
            </p>
          )}
          {callSchedule && (
            <div className="text-lg text-neutral-500 mb-6 max-w-3xl mx-auto">
              {callSchedule.split('(').map((part, index) => (
                <p key={index} className={index === 0 ? "mb-1" : ""}>
                  {index === 0 ? part.trim() : `(${part.trim()}`}
                </p>
              ))}
            </div>
          )}
          <p className="text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto font-medium">
            {summary}
          </p>
        </div>

        {/* Call Types Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {items.map((call, index) => (
            <div key={call.name} className="card-elevated p-8 text-center group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-accent-100 border-2 border-primary-300 group-hover:border-primary-400 transition-all duration-300">
                  <div className="text-2xl">
                    {index === 0 && '❓'}
                    {index === 1 && '💬'}
                    {index === 2 && '🎯'}
                    {index === 3 && '👥'}
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-xl text-primary-600 mb-3 group-hover:text-primary-700 transition-colors">
                {call.name}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {call.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactivity Section */}
        <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl p-8 lg:p-12 mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-accent-800 mb-6 text-center">
            So bleibt es interaktiv
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {interactivityFeatures.map((feature, index) => (
              <div key={feature} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-soft">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center border-2 border-accent-300">
                  <svg className="h-4 w-4 text-accent-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19l12-12-1.41-1.41z" />
                  </svg>
                </div>
                <p className="text-accent-800 font-medium">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Materials Section */}
        <div className="bg-gradient-to-br from-success-50 to-success-100 rounded-2xl p-8 lg:p-12 mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-success-800 mb-6 text-center">
            Materialien nach jedem Call
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materialsList.map((material, index) => (
              <div key={material} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-soft">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-success-100 flex items-center justify-center border-2 border-success-300">
                  <div className="text-success-600 font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <p className="text-success-800 font-medium">
                  {material}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What You Get Summary */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-primary-600 mb-4">
            Nach jedem Call erhältst du sofort:
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {deliverables.map((deliverable) => (
              <span key={deliverable} className="bg-primary-100 border border-primary-300 text-primary-800 px-4 py-2 rounded-full font-medium">
                {deliverable}
              </span>
            ))}
          </div>
          
          {/* CTA */}
          <MagneticButton href="https://www.copecart.com/products/4f9cc412/checkout">
            Start der Anmeldung 13.Oktober
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
