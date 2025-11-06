import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Medal, Users, Vote } from 'lucide-react';

const ShineButton = ({ children, href }: { children: React.ReactNode, href: string }) => (
    <Button asChild size="lg" className="relative overflow-hidden group">
      <Link href={href}>
        <span className="absolute inset-0 w-full h-full bg-primary-foreground/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
        <span className="relative">{children}</span>
      </Link>
    </Button>
  );

const Hero = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
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
          The <span className="text-primary">Oscar</span> of African Franchising
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-200 md:text-xl">
          Celebrating visionary entrepreneurs and world-class brands shaping the future of commerce on the continent.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ShineButton href="/dashboard/apply">Apply for an Award</ShineButton>
            <Button asChild size="lg" variant="outline">
                <Link href="/vote">Cast Your Vote</Link>
            </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-secondary/50 to-transparent">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
                <div className="flex flex-col items-center">
                    <Medal className="w-8 h-8 text-primary mb-2" />
                    <span className="text-2xl font-bold font-headline">25+ Categories</span>
                    <span className="text-sm text-gray-300">Across all industries</span>
                </div>
                 <div className="flex flex-col items-center">
                    <Users className="w-8 h-8 text-primary mb-2" />
                    <span className="text-2xl font-bold font-headline">1,000+ Applicants</span>
                    <span className="text-sm text-gray-300">From 54 countries</span>
                </div>
                 <div className="flex flex-col items-center">
                    <Vote className="w-8 h-8 text-primary mb-2" />
                    <span className="text-2xl font-bold font-headline">50,000+ Votes</span>
                    <span className="text-sm text-gray-300">For the People's Choice</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
