
'use client';

import Link from 'next/link';
import { Award } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import Logo from '@/components/shared/logo';
import LanguageSwitcher from './language-switcher';
import { Locale } from '../../i18n.config';
import MobileNav from './mobile-nav';
import { usePathname } from 'next/navigation';

const navLinks = [
    { href: '/', labelKey: 'home' },
    { href: '/about', labelKey: 'about' },
    { href: '/laureates', labelKey: 'laureates' },
    { href: '/vote', labelKey: 'vote' },
    { href: '/resources', labelKey: 'resources' },
    { href: '/dashboard', labelKey: 'dashboard' },
];

export type NavigationDictionary = {
    [key in 'home' | 'about' | 'laureates' | 'vote' | 'resources' | 'dashboard' | 'apply' | 'login']: string;
}

export default function Header({ lang, dictionary }: { lang: Locale, dictionary: NavigationDictionary }) {
    const pathname = usePathname();
    const t = dictionary;
    const getLinkPath = (href: string) => `/${lang}${href === '/' ? '' : href}`;

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center">
                <Logo lang={lang} />
                <nav className="ml-10 hidden flex-1 gap-6 text-sm font-medium md:flex">
                    {navLinks.map((link) => {
                        const linkPath = getLinkPath(link.href);
                        const isActive = pathname === linkPath || (link.href === '/dashboard' && pathname.startsWith(linkPath));
                        return (
                            <Link
                                key={link.href}
                                href={linkPath}
                                className={`transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                            >
                                {t[link.labelKey as keyof typeof t]}
                            </Link>
                        )
                    })}
                </nav>

                <div className="flex flex-1 items-center justify-end gap-2">
                    <LanguageSwitcher />
                    <Button variant="ghost" asChild className="hidden sm:flex">
                        <Link href={getLinkPath('/dashboard/apply')}>
                            <Award className="mr-2 h-4 w-4" />
                            {t.apply}
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link href={getLinkPath('/dashboard')}>{t.login}</Link>
                    </Button>

                    <MobileNav navLinks={navLinks} dictionary={t} lang={lang} />
                </div>
            </div>
        </header>
    )
}
