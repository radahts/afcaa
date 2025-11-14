import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { categories } from "@/lib/data";
import Link from "next/link";
import { Button } from "../ui/button";

const Categories = () => {
  return (
    <section className="py-20 sm:py-28 bg-background" id="categories">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Catégories de Prix AFCAA 2026
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Le dispositif AFCAA 2026 distingue deux grandes familles de catégories, totalisant 17 récompenses pour la franchise, 10 pour le commerce associé, et une récompense suprême pour chaque bloc.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 11).map((category) => (
            <Card key={category.title} className="group flex flex-col items-start p-6 border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300">
              <CardHeader className="p-0">
                <div className="bg-primary/10 p-3 rounded-lg mb-4">
                  <category.icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110 duration-300" />
                </div>
                <CardTitle className="font-headline text-xl font-semibold">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base flex-grow">
                {category.description}
              </CardDescription>
            </Card>
          ))}
        </div>

         <div className="text-center mt-16">
            <Button asChild size="lg">
                <Link href="/dashboard/apply">Voir toutes les catégories et candidater</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
