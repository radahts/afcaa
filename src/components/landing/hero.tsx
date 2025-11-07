
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Medal, Users, Vote } from 'lucide-react';
import { Locale } from '../../i18n.config';

const ShineButton = ({ children, href }: { children: React.ReactNode, href: string }) => (
    <Button asChild size="lg" className="relative overflow-hidden group">
      <Link href={href}>
        <span className="absolute inset-0 w-full h-full bg-primary-foreground/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
        <span className="relative">{children}</span>
      </Link>
    </Button>
  );

const Hero = ({ lang }: { lang: Locale }) => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative w-full h-[90vh] min-h-[650px] flex items-center justify-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-secondary/70 backdrop-brightness-50" />
      
      <div className="relative z-10 container text-center px-4">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          L' <span className="text-primary">Oscar</span> de la Franchise Africaine
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200 md:text-xl">
          Célébrer les entrepreneurs visionnaires et les marques de classe mondiale qui façonnent l'avenir du commerce sur le continent.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShineButton href={`/${lang}/dashboard/apply`}>Postuler pour un Prix</ShineButton>
            <Button asChild size="lg" variant="outline">
                <Link href={`/${lang}/vote`}>Votez</Link>
            </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-secondary/50 to-transparent">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
                <div className="flex flex-col items-center p-4">
                    <Medal className="w-8 h-8 text-primary mb-2" />
                    <span className="text-2xl font-bold font-headline">+25 Catégories</span>
                    <span className="text-sm text-gray-300">Toutes industries confondues</span>
                </div>
                 <div className="flex flex-col items-center p-4">
                    <Users className="w-8 h-8 text-primary mb-2" />
                    <span className="text-2xl font-bold font-headline">+1000 Candidats</span>
                    <span className="text-sm text-gray-300">De 54 pays</span>
                </div>
                 <div className="flex flex-col items-center p-4">
                    <Vote className="w-8 h-8 text-primary mb-2" />
                    <span className="text-2xl font-bold font-headline">+50 000 Votes</span>
                    <span className="text-sm text-gray-300">Pour le Prix du Public</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
