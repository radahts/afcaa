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
          Ready to Make Your Mark?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/80">
          Join the ranks of Africa's most prestigious franchises. Showcase your success, gain continental recognition, and inspire the next generation of entrepreneurs.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="primary">
            <Link href="/dashboard/apply">Start Your Application</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Become a Partner</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
