
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <div className="bg-card py-12">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-primary">
            Contactez-nous
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Nous sommes là pour répondre à toutes vos questions.
          </p>
        </div>
      </div>
      <div className="container py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-headline text-3xl font-bold mb-6">Envoyer un message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Prénom</Label>
                  <Input id="first-name" placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Nom</Label>
                  <Input id="last-name" placeholder="Votre nom" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Votre email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Votre message" rows={5} />
              </div>
              <Button type="submit" className="w-full">Envoyer</Button>
            </form>
          </div>
          <div>
            <h2 className="font-headline text-3xl font-bold mb-6">Nos coordonnées</h2>
            <div className="space-y-6">
                <InfoItem icon={<MapPin />} title="Adresse" lines={["AFCAA 2026", "Dakar, Sénégal"]} />
                <InfoItem icon={<Phone />} title="Téléphone" lines={["+225 0758725821"]} />
                <InfoItem icon={<Mail />} title="Email" lines={["info@afranchiseforrum-mag.com"]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InfoItem = ({ icon, title, lines }: { icon: React.ReactNode, title: string, lines: string[] }) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0 text-primary mt-1">{icon}</div>
        <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="text-muted-foreground">
                {lines.map((line, i) => <p key={i}>{line}</p>)}
            </div>
        </div>
    </div>
)
