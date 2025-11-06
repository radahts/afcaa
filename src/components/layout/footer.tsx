import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "../shared/logo";
import { Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container grid grid-cols-1 gap-12 py-12 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground">
            L'Oscar de la franchise africaine et du commerce associé.
          </p>
          <div className="flex items-center gap-3">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-headline text-lg font-semibold">Liens rapides</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="text-muted-foreground hover:text-primary">À Propos</Link></li>
            <li><Link href="/#categories" className="text-muted-foreground hover:text-primary">Catégories</Link></li>
            <li><Link href="/#jury" className="text-muted-foreground hover:text-primary">Le Jury</Link></li>
            <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg font-semibold">Légal</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Politique de confidentialité</Link></li>
            <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Conditions d'utilisation</Link></li>
            <li><Link href="/cookies" className="text-muted-foreground hover:text-primary">Politique sur les cookies</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg font-semibold">Restez informé</h4>
          <p className="mt-4 text-sm text-muted-foreground">
            Abonnez-vous à notre newsletter pour les dernières mises à jour.
          </p>
          <form className="mt-4 flex gap-2">
            <Input type="email" placeholder="Entrez votre email" className="flex-1" />
            <Button type="submit" variant="default">S'abonner</Button>
          </form>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AFCAA. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
