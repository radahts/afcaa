'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Logo from '@/components/shared/logo';
import { cn } from '@/lib/utils';
import type { Locale } from '../../../i18n.config';

type NavLink = {
    href: string;
    labelKey: string;
};

type Dictionary = {
    [key: string]: string;
}

interface MobileNavProps {
    navLinks: NavLink[];
    dictionary: Dictionary;
    lang: Locale;
}

const MobileNav = ({ navLinks, dictionary, lang }: MobileNavProps) => {
    const getLinkPath = (href: string) => `/${lang}${href === '/' ? '' : href}`;

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="flex flex-col gap-6">
                    <Logo lang={lang} />
                    <nav className="grid gap-4">
                        {navLinks.map((link) => (
                            <SheetClose asChild key={link.href}>
                                <Link
                                    href={getLinkPath(link.href)}
                                    className="flex items-center py-2 text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                                >
                                    {dictionary[link.labelKey as keyof typeof dictionary]}
                                </Link>
                            </SheetClose>
                        ))}
                    </nav>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
