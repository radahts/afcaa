import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { laureates } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award } from 'lucide-react';
import { Locale } from '../../../../i18n.config';

const LaureateCard = ({ laureate, lang }: { laureate: (typeof laureates)[0], lang: Locale }) => {
    const image = PlaceHolderImages.find(p => p.id === laureate.photo);
    return (
      <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
        <CardHeader className="p-0">
          {image && (
            <div className="aspect-[4/3] relative">
              <Image
                src={image.imageUrl}
                alt={laureate.name}
                fill
                className="object-cover"
                data-ai-hint={image.imageHint}
              />
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <p className="font-semibold text-primary">{laureate.category}</p>
          <CardTitle className="font-headline mt-2 text-2xl">{laureate.name}</CardTitle>
          <p className="mt-1 text-sm font-medium text-muted-foreground">{laureate.company} - Lauréat {laureate.year}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button asChild className="w-full">
            <Link href={`/${lang}/laureates/${laureate.slug}`}>Découvrir son histoire</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  };

export default function LaureatesPage({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <>
      <div className="bg-card py-16">
        <div className="container text-center">
          <Award className="mx-auto h-16 w-16 text-primary" />
          <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Nos Lauréats
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Célébrons les pionniers et les visionnaires qui ont redéfini l'excellence dans le commerce africain.
          </p>
        </div>
      </div>

      <div className="container py-16">
         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {laureates.map(laureate => (
                <LaureateCard key={laureate.id} laureate={laureate} lang={lang} />
            ))}
        </div>
      </div>
    </>
  );
}
