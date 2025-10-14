import PriceCard from './PriceCard';

interface PricingProps {
  pricing: {
    title: string;
    note: string;
    plans: readonly {
      name: string;
      priceNote: string;
      period: string;
      features: readonly string[];
      cta: { label: string; href: string };
      popular: boolean;
      legal?: string;
      paymentNote?: string;
      image?: { src: string; alt: string; width: number; height: number };
    }[];
    strategyCall?: {
      title: string;
      message: string;
      ctaLabel: string;
      ctaHref: string;
      subtext?: string;
    };
    image?: { src: string; alt: string; width: number; height: number };
  };
}

export default function Pricing({ pricing }: PricingProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-[#88B6CD]/5 to-white" aria-labelledby="pricing-title">
      <div className="max-w-screen-xl mx-auto">
        <h2 id="pricing-title" className="text-3xl md:text-4xl font-bold text-center mb-4">
          {pricing.title}
        </h2>
        <p className="text-center text-gray-600 mb-4">{pricing.note}</p>
        
        {/* Start Date */}
        <p className="text-center text-lg font-semibold text-gray-700 mb-12">
          Unser Fluency Sprint startet ab November 2025
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricing.plans.map((plan, index) => (
            <PriceCard key={index} plan={plan} />
          ))}
        </div>
        
        {/* Strategy Call CTA */}
        {pricing.strategyCall && (
          <div className="max-w-3xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 md:p-12 border border-blue-100 shadow-lg text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-3">📞</span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {pricing.strategyCall.title}
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {pricing.strategyCall.message}
              </p>
              
              <a
                href={pricing.strategyCall.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {pricing.strategyCall.ctaLabel}
                <span className="text-xl">→</span>
              </a>
              
              {pricing.strategyCall.subtext && (
                <p className="text-sm text-gray-600 mt-4">
                  ✓ {pricing.strategyCall.subtext}
                </p>
              )}
            </div>
          </div>
        )}
        
        {pricing.image && (
          <img
            src={pricing.image.src}
            alt={pricing.image.alt}
            width={pricing.image.width}
            height={pricing.image.height}
            loading="lazy"
            className="mt-8 mx-auto hover:scale-105 transition-transform duration-300"
          />
        )}
      </div>
    </section>
  );
}
