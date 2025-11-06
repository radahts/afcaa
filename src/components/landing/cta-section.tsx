import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const CtaSection = () => {
    const ctaImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  return (
    <section className="relative py-24 sm:py-32 bg-secondary text-primary-foreground">
         {ctaImage && (
        <Image
          src={ctaImage.imageUrl}
          alt={ctaImage.description}
          fill
          className="object-cover opacity-10"
          data-ai-hint={ctaImage.imageHint}
        />
      )}
      <div className="container relative z-10 text-center">
        <h2 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Prêt à laisser votre empreinte ?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/80">
          Rejoignez les rangs des franchises les plus prestigieuses d'Afrique. Mettez en valeur votre succès, obtenez une reconnaissance continentale et inspirez la prochaine génération d'entrepreneurs.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="primary">
            <Link href="/dashboard/apply">Commencez votre candidature</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Devenez partenaire</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
