'use client';

import Link from 'next/link';
import { Menu, Award } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import Logo from '@/components/shared/logo';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import LanguageSwitcher from './language-switcher';

const navLinks = [
    { href: '/', label: 'Accueil', key: 'home' },
    { href: '/about', label: 'À Propos', key: 'about' },
    { href: '/laureates', label: 'Lauréats', key: 'laureates' },
    { href: '/vote', label: 'Voter', key: 'vote' },
    { href: '/resources', label: 'Ressources', key: 'resources' },
    { href: '/dashboard', label: 'Tableau de bord', key: 'dashboard' },
];

const Header = () => {
    const pathname = usePathname();
    const lang = pathname.split('/')[1] || 'fr';

    const getLinkPath = (href: string) => `/${lang}${href === '/' ? '' : href}`;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center">
            <Logo lang={lang as any} />
            <nav className="ml-10 hidden flex-1 gap-6 text-sm font-medium md:flex">
            {(navLinks).map((link) => (
                <Link
                key={link.href}
                href={getLinkPath(link.href)}
                className={cn(
                    "text-muted-foreground transition-colors hover:text-primary"
                )}
                >
                {link.label}
                </Link>
            ))}
            </nav>

            <div className="flex flex-1 items-center justify-end gap-2">
                <LanguageSwitcher />
                <Button variant="ghost" asChild className="hidden sm:flex">
                    <Link href={`/${lang}/dashboard/apply`}>
                        <Award className="mr-2 h-4 w-4" />
                        Postuler
                    </Link>
                </Button>
                <Button asChild>
                    <Link href={`/${lang}/dashboard`}>Connexion</Link>
                </Button>

            <Sheet>
                <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent side="left">
                <div className="flex flex-col gap-6">
                    <Logo lang={lang as any} />
                    <nav className="grid gap-4">
                    {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                            <Link
                                href={getLinkPath(link.href)}
                                className={cn(
                                    "flex items-center py-2 text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                                )}
                            >
                               {link.label}
                            </Link>
                        </SheetClose>
                    ))}
                    </nav>
                </div>
                </SheetContent>
            </Sheet>
            </div>
        </div>
        </header>
    )
}

export default Header;
