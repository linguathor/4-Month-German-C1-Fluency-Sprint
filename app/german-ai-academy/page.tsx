// app/german-ai-academy/page.tsx
import { Metadata } from 'next';
import { buildMetadata } from '../../lib/seo';
import { faqJsonLd, productJsonLd, courseJsonLd, courseInstanceJsonLd } from '../../lib/schema';
import { academy } from '../../content/germanAiAcademy';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CountdownBanner from '../../components/CountdownBanner';

import Hero from '../../components/Hero';
import ReachableStatus from '../../components/ReachableStatus';
import Outcomes from '../../components/Outcomes';
import LearningLoop from '../../components/LearningLoop';
import CallProgram from '../../components/CallProgram';
import Interactivity from '../../components/Interactivity';
import Materials from '../../components/Materials';
import TandemSpaces from '../../components/TandemSpaces';
import VideoTestimonial from '../../components/VideoTestimonial';
import TextTestimonials from '../../components/TextTestimonials';
import GermanAiAcademyAccess from '../../components/GermanAiAcademyAccess';
import CtaBand from '../../components/CtaBand';

// Dynamic import for ProgressMetrics (heavy dashboard component)
const ProgressMetrics = dynamic(
  () => import('../../components/ProgressMetrics'),
  {
    loading: () => (
      <div className="section-spacing bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 animate-pulse">
          <div className="text-center mb-12">
            <div className="h-10 bg-neutral-200 rounded w-80 mx-auto mb-4"></div>
            <div className="h-6 bg-neutral-100 rounded w-96 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-white rounded-xl h-80 shadow-soft"></div>
            ))}
          </div>
        </div>
      </div>
    ),
    ssr: true
  }
);
import StickyCTA from '../../components/fx/StickyCTA';
import MagneticButton from '../../components/fx/MagneticButton';
import AccountabilityOptin from '../../components/AccountabilityOptin';
import AiPlan from '../../components/AiPlan';
import PlatformChecklist from '../../components/PlatformChecklist';
import Community from '../../components/Community';
import Fit from '../../components/Fit';
import Cohort from '../../components/Cohort';
import Instructors from '../../components/Instructors';
import Pricing from '../../components/Pricing';
import SuccessGuarantee from '../../components/SuccessGuarantee';
import LimitedTimeBonus from '../../components/LimitedTimeBonus';
import EliteMastermindExplainer from '../../components/EliteMastermindExplainer';
import TestimonialsFaces from '../../components/TestimonialsFaces';
import HeroTestimonial from '../../components/HeroTestimonial';
import FAQ from '../../components/FAQ';
import ProblemSolution from '../../components/ProblemSolution';
import FourReasons from '../../components/FourReasons';
import dynamic from 'next/dynamic';

// Dynamic imports for performance optimization
const TestimonialsSection = dynamic(
  () => import('../../components/Testimonials/TestimonialsSection'),
  {
    loading: () => (
      <div className="section-spacing bg-gradient-to-br from-success-50 via-white to-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-pulse">
            <div className="h-12 bg-neutral-200 rounded-lg w-96 mx-auto mb-6"></div>
            <div className="h-6 bg-neutral-100 rounded w-80 mx-auto mb-12"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-xl h-96 animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    ssr: false
  }
);

// NEW: denser wrappers / bands
import Compact from '../../components/Compact';
import { LaunchBonuses } from '../../components/LaunchBonuses';


// Phase 7: Advanced Features
import GermanLevelQuiz from '../../components/GermanLevelQuiz';
import ProgressCalculator from '../../components/ProgressCalculator';
import TrustBadges from '../../components/TrustBadges';

// Effects
import StickyProgress from '../../components/fx/StickyProgress';

// Dynamic import for PerformanceDashboard to avoid hydration issues
const PerformanceDashboard = dynamic(
  () => import('../../components/fx/PerformanceDashboard'),
  {
    ssr: false,
    loading: () => null
  }
);

export const metadata: Metadata = buildMetadata();

export default function GermanAIAcademyPage() {
  const faqSchema = faqJsonLd(academy.faq.items);
  const productSchemas = productJsonLd(
    academy.pricing.plans[0], // 4-monatiger C1 Fluency Sprint
    academy.pricing.plans[1]  // C1-Masterclass
  );

  // Course JSON-LD
  const courseSchema = courseJsonLd({
    name: "German AI Academy – Premium",
    description: academy.meta.description,
    providerName: "Natural. Fluent. German.",
    url: "https://naturalfluentgerman.com/german-ai-academy"
  });

  const courseInstanceSchema = courseInstanceJsonLd({
    courseName: "German AI Academy – Premium",
    startDateISO: "2025-10-07", // Set actual ISO date
    url: "https://naturalfluentgerman.com/german-ai-academy"
  });

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {Array.isArray(productSchemas) ? productSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )) : (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemas) }} />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseInstanceSchema) }}
      />

      {/* Countdown Banner - Sticky at top */}
      {academy.hero.urgency.countdown && (
        <CountdownBanner 
          deadline={academy.hero.urgency.countdown.deadline}
          text={academy.hero.urgency.countdown.text}
        />
      )}

      <Header />

      {/* scroll-linked progress bar */}
      <StickyProgress />

      <main>
        {/* === BAND A: HERO (clean white) === */}
        <section aria-label="Hero" className="bg-white">
          <Compact>
            <Hero />
          </Compact>
        </section>
        
        {/* Hero Testimonial for immediate social proof */}
          <section className="relative -mt-8 pb-8 px-4 bg-white">
            <div className="max-w-screen-xl mx-auto">
              <HeroTestimonial />
            </div>
          </section>

        <ReachableStatus />
        
        {/* Problem & Solution Section - Emotional Connection */}
  <ProblemSolution />

        {/* Slight overlap to reduce the "gap" below hero */}
        {/* === BAND B: LIGHT SKY WASH — Outcomes === */}

        <section id="ergebnisse" aria-label="Ergebnisse" className="relative -mt-6 sm:-mt-8" style={{ backgroundColor: '#88B6CD' }}>
          <Compact>
            <Outcomes />
          </Compact>
        </section>

        {/* === SO FUNKTIONIERT UNSER PROGRAMM - UMBRELLA SECTION === */}
        <section id="programm" className="bg-gradient-to-br from-white via-neutral-50 to-white py-16">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-0">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-600 mb-6">
                So funktioniert unser Programm
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Vier Säulen, die zusammenwirken – für deinen Erfolg
              </p>
            </div>
          </div>
        </section>

        {/* === 1. LIVE-CALLS / COACHING === */}
        <section id="live-calls" aria-label="Live-Calls & Coaching" className="bg-gradient-to-br from-white via-blue-50/30 to-white">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <span className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white text-3xl font-bold rounded-full mb-4 shadow-lg shadow-primary-600/30 ring-4 ring-primary-100 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary-600/40">
                1
              </span>
            </div>
            <CallProgram 
              title={academy.calls.title} 
              subtitle={academy.calls.subtitle} 
              callSchedule={academy.calls.callSchedule} 
              summary={academy.calls.summary} 
              items={academy.calls.items as any} 
              deliverables={academy.calls.deliverables as any} 
            />
          </div>
        </section>

        {/* === 2. TANDEM SPACES === */}
        <section id="tandem-spaces" aria-label="Tandem Spaces" className="bg-gradient-to-br from-neutral-50 to-white">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <span className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white text-3xl font-bold rounded-full mb-4 shadow-lg shadow-primary-600/30 ring-4 ring-primary-100 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary-600/40">
                2
              </span>
            </div>
            <TandemSpaces data={academy.tandemSpaces} />
          </div>
        </section>

        {/* === 3. DIE GERMAN AI ACADEMY === */}
        <section id="academy" aria-label="German AI Academy" className="bg-gradient-to-br from-white via-accent-50/30 to-white">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <span className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white text-3xl font-bold rounded-full mb-4 shadow-lg shadow-primary-600/30 ring-4 ring-primary-100 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary-600/40">
                3
              </span>
            </div>
            <GermanAiAcademyAccess data={academy.germanAiAcademyAccess} />
          </div>
        </section>

        {/* === 4. SO MESSEN WIR DEINEN FORTSCHRITT === */}
        <section id="progress" aria-label="Fortschrittsmessung" className="bg-gradient-to-br from-neutral-50 to-white">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <span className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white text-3xl font-bold rounded-full mb-4 shadow-lg shadow-primary-600/30 ring-4 ring-primary-100 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-primary-600/40">
                4
              </span>
            </div>
            <ProgressMetrics />
          </div>
        </section>

        {/* === LIMITED TIME BONUS === */}
        <LimitedTimeBonus data={academy.limitedTimeBonus} />

        {/* German Level Quiz removed - distraction and not necessary */}

        {/* === VIDEO TESTIMONIAL SECTION === */}
        <div id="testimonials">
        <VideoTestimonial
          title="So profitieren Deutschlerner von der Zusammenarbeit mit uns"
          name="Lupita"
          role="aus Mexiko über die German AI Academy"
          quote="Ich möchte mich bei der German AI Academy bedanken, weil ich jetzt flüssiger Deutsch sprechen kann ... Bei der Akademie gibt es viele Empfehlungen, Tipps, Aktivitäten, und Übungen, die sehr wertvoll sind, weil man seinen eigenen Rhythmus finden kann ... Danke sehr!"
          videoUrl="https://www.youtube.com/embed/MZIZwQ5NxTE"
        />

        {/* === TEXT TESTIMONIALS SECTION === */}
        <TextTestimonials
          testimonials={[
            {
              name: "Fernando Massahiro Kubo",
              origin: "aus Japan",
              image: "/images/Fernando.jpg",
              quote: "Ich komme aus Japan und habe 2019 angefangen, Deutsch zu lernen. Ich finde dieses Programm besonders gut, weil ich zu meinen Lieblingszeiten sowohl Sprech- als auch Schreibübungen machen kann. Im direkten Unterricht ist es oft schwierig, wegen meiner Arbeit die passenden Zeiten zu finden. Besonders das Sprechen konnte ich bisher nur schwer üben, aber durch die Übungen mit der KI habe ich sichtbare Fortschritte gemacht. Besonders praktisch ist auch, dass ich beim Schreiben sofort die korrigierte Version sehen kann.",
              highlight: "Bemerkbare Fortschritte beim Sprechen"
            },
            {
              name: "Serhii",
              origin: "aus der Ukraine",
              image: "/images/Serhii.jpg",
              quote: "Ich heiße Serhii. Ich bin aus der Ukraine gekommen. Ich lerne Deutsch schon seit drei Jahren. Mein größtes Problem beim Deutschlernen war, dass ich, obwohl ich viel Content auf Deutsch höre, doch fast keine praktische Erfahrung darin habe, fließend zu sprechen. Beruflich muss ich leider nur auf Englisch kommunizieren. Das hat mich sehr gestört, deshalb habe ich eben selbst mit KI gesprochen, aber irgendetwas ging einfach nicht. Mir hat die Academy sehr geholfen, indem ich eine nachhaltige Methode gefunden habe, damit ich jeden Tag mit KI spreche. Ich würde sagen, dass ich damit nicht nur meine mündliche Sprachfertigkeit verbessert habe, sondern auch das Schreiben, das Verstehen und das Lesen. Ich bedanke mich bei Flemming und David für die Entwicklung der Methode. Es wirkt meiner Meinung nach ziemlich effektiv.",
              highlight: "Alle Fertigkeiten verbessert"
            }
          ]}
        />
        </div>

  {/* === GERMAN AI ACADEMY ACCESS SECTION === */}
  {/* Removed per request: GermanAiAcademyAccess section */}

        {/* === BAND E: LIGHT GRAY — Accountability + AI Plan + Platform === */}
        {/* Removed per request: 'Wöchentliche Mikro-Aufgaben' and 'Auf der Plattform' sections */}

        {/* === BAND F: LIGHT SKY WASH — Community + Fit + Cohort === */}
        {/* Community & Support section intentionally removed from rendering per request. Component remains in the repo. */}

        {/* Progress Calculator removed - misleading timeline information */}

        {/* === BAND G: BLUE GRADIENT — Instructors === */}
        <div id="coaches">
          <Instructors 
          title={academy.instructors.title} 
          summary={academy.instructors.summary} 
          subtitle={academy.instructors.subtitle}
          description={academy.instructors.description}
          people={academy.instructors.people as any}
          showCta={true}
          ctaTitle="Lerne von den Besten"
          ctaSubtitle="Professionelle Coaches mit jahrelanger Erfahrung warten auf dich."
          ctaLabel="Jetzt anmelden"
          ctaHref="https://www.copecart.com/products/4f9cc412/checkout"
        />
        </div>

        {/* === BAND H: LIGHT SKY WASH — Launch bonuses + Pricing + Guarantee === */}
        {/* LaunchBonuses section removed from rendering per request. Component remains in repo. */}

        {/* === FINAL CONVERSION PUSH - 4 REASONS === */}
        <FourReasons />

        {/* === C1-MASTERCLASS EXPLAINER === */}
        <EliteMastermindExplainer data={academy.eliteMastermindExplainer} />

        {/* === PRICING & GUARANTEE === */}
        <section id="pricing" aria-label="Pricing & Garantie" style={{ backgroundColor: '#88B6CD' }}>
          <Compact>
            <Pricing pricing={academy.pricing} />
          </Compact>
        </section>

        {/* === SUCCESS GUARANTEE === */}
        <SuccessGuarantee
          badge={academy.guarantee.badge}
          headline={academy.guarantee.headline}
          promise={academy.guarantee.promise}
          conditionsTitle={academy.guarantee.conditionsTitle}
          conditions={academy.guarantee.conditions}
          ctaText={academy.guarantee.ctaText}
          ctaHref={academy.guarantee.ctaHref}
        />

        {/* === ENHANCED TESTIMONIALS SECTION === */}
        {/* TestimonialsSection removed from rendering per request. Component remains in repo. */}

        {/* === TRUST BADGES === */}
        {/* TrustBadges (stats section) removed from rendering per request. Component remains in repo. */}

        {/* === BAND I: CLEAN WHITE — FAQ === */}
        <section id="faq" aria-label="FAQ" className="bg-white">
          <Compact>
            <FAQ faq={academy.faq} faqExtra={academy.faqExtra} />
          </Compact>
        </section>

        {/* === FINAL CTA === */}
        <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16">
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-6">
              Bereit für fließendes Deutsch?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
              Starte jetzt deinen 4-monatigen C1-Fluency Sprint und sichere dir deinen Platz.
            </p>
            <MagneticButton href="https://www.copecart.com/products/4f9cc412/checkout">
              Jetzt anmelden
            </MagneticButton>
          </div>
        </section>
      </main>
      <Footer />
      
      {/* Sticky CTA for mobile users */}
      <StickyCTA 
        ctaText={academy.hero.ctaPrimary.label}
        ctaHref={academy.hero.ctaPrimary.href}
        spotsLeft={academy.hero.urgency.spotsLeft}
      />

      {/* Performance monitoring */}
      {process.env.NODE_ENV === 'production' && (
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize performance optimizations
              if (typeof window !== 'undefined') {
                // Preconnect to external domains
                const preconnect = (href) => {
                  const link = document.createElement('link');
                  link.rel = 'preconnect';
                  link.href = href;
                  document.head.appendChild(link);
                };
                preconnect('https://images.unsplash.com');
                preconnect('https://fonts.googleapis.com');
                preconnect('https://fonts.gstatic.com');
              }
            `
          }}
        />
      )}
      
      {/* Development performance dashboard */}
      <PerformanceDashboard />
    </>
  );
}
