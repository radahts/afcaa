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
          <h1 className="font-headline text-4xl sm:text-5xl font-bold">Resources Hub</h1>
          <p className="mt-4 text-lg max-w-2xl text-white/80">
            Insights and analysis from the forefront of African franchising.
          </p>
        </div>
      </div>

      <div className="container -mt-20 relative pb-20">
        <Card className="max-w-4xl mx-auto shadow-xl">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8">
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-2xl sm:text-3xl">
                  The 2026 Africa Franchise Report
                </CardTitle>
                <CardDescription className="pt-4 text-base">
                  Our comprehensive annual report, the "Livre Blanc," offers an unparalleled look into the trends, challenges, and opportunities within the African franchise ecosystem. Download your free copy to gain a competitive edge.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-6">
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    <li>In-depth market analysis by country</li>
                    <li>Interviews with industry leaders</li>
                    <li>Growth forecasts and investment opportunities</li>
                    <li>Case studies of successful franchises</li>
                </ul>
                <form className="mt-6 flex flex-col sm:flex-row gap-2">
                    <Input type="email" placeholder="Enter your business email" required />
                    <Button type="submit" className="w-full sm:w-auto">
                        <Download className="mr-2 h-4 w-4" />
                        Download Now
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
