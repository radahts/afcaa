import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Download } from 'lucide-react';

export default function ResourcesPage() {
  const bannerImage = PlaceHolderImages.find(p => p.id === 'resources-banner');

  return (
    <div className="w-full">
      <div className="relative h-64 bg-secondary">
        {bannerImage && (
          <Image
            src={bannerImage.imageUrl}
            alt={bannerImage.description}
            fill
            className="object-cover opacity-20"
            data-ai-hint={bannerImage.imageHint}
          />
        )}
        <div className="container relative h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold">Pôle de Ressources</h1>
          <p className="mt-4 text-lg max-w-2xl text-white/80">
            Aperçus et analyses à la pointe de la franchise africaine.
          </p>
        </div>
      </div>

      <div className="container -mt-20 relative pb-20">
        <Card className="max-w-4xl mx-auto shadow-xl">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8">
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-2xl sm:text-3xl">
                  Le Rapport sur la Franchise en Afrique 2026
                </CardTitle>
                <CardDescription className="pt-4 text-base">
                  Notre rapport annuel complet, le "Livre Blanc," offre un regard inégalé sur les tendances, les défis et les opportunités au sein de l'écosystème de la franchise africaine. Téléchargez votre copie gratuite pour obtenir un avantage concurrentiel.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-6">
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>Analyse de marché approfondie par pays</li>
                    <li>Entretiens avec des leaders de l'industrie</li>
                    <li>Prévisions de croissance et opportunités d'investissement</li>
                    <li>Études de cas de franchises à succès</li>
                </ul>
                <form className="mt-6 flex flex-col sm:flex-row gap-2">
                    <Input type="email" placeholder="Entrez votre email professionnel" required />
                    <Button type="submit" className="w-full sm:w-auto">
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger maintenant
                    </Button>
                </form>
              </CardContent>
            </div>
            <div className="hidden md:block">
                 <Image
                    src="https://picsum.photos/seed/302/600/800"
                    alt="Report Cover"
                    width={600}
                    height={800}
                    className="object-cover h-full rounded-r-lg"
                    data-ai-hint="report cover"
                  />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
