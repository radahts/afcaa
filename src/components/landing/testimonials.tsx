import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Voices of AFCAA
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Hear from past winners, jury members, and partners about their experience.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full mt-16"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const avatarImage = PlaceHolderImages.find(p => p.id === testimonial.avatar);
              return (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                      <CardContent className="p-6 flex flex-col items-start gap-6">
                        <div className="flex text-primary">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                        </div>
                        <blockquote className="text-lg font-medium leading-relaxed border-l-4 border-primary pl-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center gap-4 pt-4">
                          {avatarImage && (
                            <Avatar className="h-14 w-14">
                              <AvatarImage src={avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={avatarImage.imageHint} />
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <p className="font-headline font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
