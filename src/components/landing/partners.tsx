"use client";

import Image from "next/image";
import { partners } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const Partners = () => {
  const partnerLogos = partners.map(p => {
    const img = PlaceHolderImages.find(i => i.id === p.logo);
    return { ...p, ...img };
  });

  return (
    <div className="py-16 bg-card">
      <div className="container mx-auto">
        <h3 className="text-center font-headline text-2xl font-semibold text-muted-foreground mb-8">
          En partenariat avec les plus grandes marques d'Afrique
        </h3>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee motion-reduce:animate-none">
            {partnerLogos.concat(partnerLogos).map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 mx-6 flex items-center justify-center">
                {logo.imageUrl && (
                  <Image
                    src={logo.imageUrl}
                    alt={logo.name}
                    width={158}
                    height={48}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    data-ai-hint={logo.imageHint}
                  />
                )}
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Partners;
