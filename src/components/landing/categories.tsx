import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { categories } from "@/lib/data";

const Categories = () => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Catégories de Prix
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Un éventail de catégories pour reconnaître l'excellence dans toutes les facettes de la franchise et du commerce associé.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
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
      </div>
    </section>
  );
};

export default Categories;
