import { laureates } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Award, Calendar, Quote } from 'lucide-react';
import { Locale } from '../../../../../i18n.config';

export function generateStaticParams() {
    return laureates.map(laureate => ({
        slug: laureate.slug,
    }));
}

const getLaureate = (slug: string) => {
    return laureates.find(l => l.slug === slug);
}

export default function LaureateProfilePage({ params }: { params: { slug: string, lang: Locale } }) {
    const laureate = getLaureate(params.slug);

    if (!laureate) {
        notFound();
    }

    const image = PlaceHolderImages.find(p => p.id === laureate.photo);

    return (
        <div className="bg-background">
            <div className="container py-12 md:py-20">
                <Button asChild variant="outline" className="mb-8">
                    <Link href={`/${params.lang}/laureates`}>
                        <ArrowLeft className="mr-2" />
                        Retour aux lauréats
                    </Link>
                </Button>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                    <div className="md:col-span-1">
                        <Card className="overflow-hidden sticky top-24">
                            {image && (
                                <div className="aspect-square relative">
                                    <Image 
                                        src={image.imageUrl} 
                                        alt={laureate.name} 
                                        fill 
                                        className="object-cover"
                                        data-ai-hint={image.imageHint}
                                    />
                                </div>
                            )}
                             <CardContent className="p-6 text-center">
                                <h2 className="text-2xl font-bold font-headline">{laureate.name}</h2>
                                <p className="mt-1 font-medium text-primary">{laureate.company}</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="md:col-span-2">
                        <div className="flex items-center gap-4">
                             <Award className="h-10 w-10 text-primary" />
                             <div>
                                <h1 className="text-3xl font-bold font-headline">{laureate.category}</h1>
                                <p className="flex items-center gap-2 text-muted-foreground font-medium mt-1">
                                    <Calendar className="h-4 w-4" /> 
                                    Lauréat de l'édition {laureate.year}
                                </p>
                             </div>
                        </div>

                        <div className="mt-8 prose prose-lg max-w-none text-foreground/80">
                            <p>{laureate.bio}</p>
                        </div>
                        
                        <div className="mt-12">
                             <Card className="bg-card border-l-4 border-primary">
                                <CardContent className="p-6">
                                    <Quote className="h-8 w-8 text-primary/50" />
                                    <blockquote className="mt-4 text-xl italic font-medium text-foreground">
                                        {laureate.quote}
                                    </blockquote>
                                    <p className="mt-4 font-headline font-semibold text-right">- {laureate.name}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
