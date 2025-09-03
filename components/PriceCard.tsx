import Link from 'next/link';

interface PriceCardProps {
  plan: {
    name: string;
    priceNote: string;
    period: string;
    features: readonly string[];
    cta: { label: string; href: string };
    popular: boolean;
    image?: { src: string; alt: string; width: number; height: number };
  };
}

export default function PriceCard({ plan }: PriceCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 border-2 ${plan.popular ? 'border-[#229DD1]' : 'border-gray-200'} relative hover:shadow-2xl transition-all duration-300 hover:scale-105`}>
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#229DD1] text-white px-4 py-1 rounded-full text-sm font-medium">
          Beliebt
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <p className="text-3xl font-semibold text-[#229DD1] mb-1">{plan.priceNote}</p>
      <p className="text-gray-600 mb-6">{plan.period}</p>
      <ul className="mb-6 space-y-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2 hover:scale-110 transition-transform duration-300">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="hover:scale-105 transition-transform duration-300">
        <Link
          href={plan.cta.href}
          className="block bg-[#229DD1] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#1183B7] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#229DD1]"
          role="button"
          aria-label={plan.cta.label}
        >
          {plan.cta.label}
        </Link>
      </div>
      {plan.image && (
        <img
          src={plan.image.src}
          alt={plan.image.alt}
          width={plan.image.width}
          height={plan.image.height}
          loading="lazy"
          className="mt-4 mx-auto hover:scale-105 transition-transform duration-300"
        />
      )}
    </div>
  );
}
