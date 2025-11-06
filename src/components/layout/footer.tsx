'use server'
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "../shared/logo";
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import LanguageSwitcher from "./language-switcher";
import { getDictionary } from "@/lib/dictionary";
import React from "react";
import { Locale } from "../../../i18n.config";

const Footer = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);

  if (!dictionary) return null;


  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container grid grid-cols-1 gap-12 py-12 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Logo lang={lang} />
          <p className="text-sm text-muted-foreground">
            {dictionary.footer.tagline}
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
          <h4 className="font-headline text-lg font-semibold">{dictionary.footer.quickLinks}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href={`/${lang}/about`} className="text-muted-foreground hover:text-primary">{dictionary.navigation.about}</Link></li>
            <li><Link href={`/${lang}/#categories`} className="text-muted-foreground hover:text-primary">{dictionary.footer.categories}</Link></li>
            <li><Link href={`/${lang}/#jury`} className="text-muted-foreground hover:text-primary">{dictionary.footer.jury}</Link></li>
            <li><Link href={`/${lang}/contact`} className="text-muted-foreground hover:text-primary">{dictionary.footer.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg font-semibold">{dictionary.footer.legal}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href={`/${lang}/privacy`} className="text-muted-foreground hover:text-primary">{dictionary.footer.privacy}</Link></li>
            <li><Link href={`/${lang}/terms`} className="text-muted-foreground hover:text-primary">{dictionary.footer.terms}</Link></li>
            <li><Link href={`/${lang}/cookies`} className="text-muted-foreground hover:text-primary">{dictionary.footer.cookies}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-lg font-semibold">{dictionary.footer.newsletter}</h4>
          <p className="mt-4 text-sm text-muted-foreground">
           {dictionary.footer.newsletterHint}
          </p>
          <form className="mt-4 flex gap-2">
            <Input type="email" placeholder={dictionary.footer.emailPlaceholder} className="flex-1" />
            <Button type="submit" variant="default">{dictionary.footer.subscribe}</Button>
          </form>
          <div className="mt-4">
              <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AFCAA. {dictionary.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
