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
            The Oscar of African franchise and associated trade.
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
          <h4 className="font-headline text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
            <li><Link href="/categories" className="text-muted-foreground hover:text-primary">Categories</Link></li>
            <li><Link href="/jury" className="text-muted-foreground hover:text-primary">The Jury</Link></li>
            <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg font-semibold">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            <li><Link href="/cookies" className="text-muted-foreground hover:text-primary">Cookie Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg font-semibold">Stay Updated</h4>
          <p className="mt-4 text-sm text-muted-foreground">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="mt-4 flex gap-2">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit" variant="default">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AFCAA. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
