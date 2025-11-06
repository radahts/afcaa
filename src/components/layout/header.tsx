'use client';

import Link from 'next/link';
import { Menu, Award } from 'lucide-react';
import { usePathname } from 'next/navigation';
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
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '../../../i18n.config';


const navLinks = [
    { href: '/', labelKey: 'home' },
    { href: '/about', labelKey: 'about' },
    { href: '/vote', labelKey: 'vote' },
    { href: '/resources', labelKey: 'resources' },
    { href: '/dashboard', labelKey: 'dashboard' },
];

const HeaderClient = ({ dictionary, lang }: { dictionary: any, lang: Locale }) => {
    const pathname = usePathname();

    if (!dictionary) return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
           <div className="container flex h-16 max-w-screen-2xl items-center">
               {/* Skeleton or loading state */}
           </div>
       </header>
    );

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center">
            <Logo lang={lang} />
            <nav className="ml-10 hidden flex-1 gap-6 text-sm font-medium md:flex">
            {(navLinks).map((link) => (
                <Link
                key={link.href}
                href={`/${lang}${link.href === '/' ? '' : link.href}`}
                className={cn(
                    "text-muted-foreground transition-colors hover:text-primary",
                    (pathname === `/${lang}${link.href}` || (link.href === '/' && pathname === `/${lang}`)) && "text-primary font-semibold"
                )}
                >
                {dictionary.navigation[link.labelKey]}
                </Link>
            ))}
            </nav>

            <div className="flex flex-1 items-center justify-end gap-2">
                <Button variant="ghost" asChild className="hidden sm:flex">
                    <Link href={`/${lang}/dashboard/apply`}>
                        <Award className="mr-2 h-4 w-4" />
                        {dictionary.navigation.apply}
                    </Link>
                </Button>
                <Button asChild>
                    <Link href={`/${lang}/dashboard`}>{dictionary.navigation.login}</Link>
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
                    <Logo lang={lang} />
                    <nav className="grid gap-4">
                    {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                            <Link
                                href={`/${lang}${link.href === '/' ? '' : link.href}`}
                                className={cn(
                                    "flex items-center py-2 text-lg font-medium text-muted-foreground transition-colors hover:text-primary",
                                    pathname === `/${lang}${link.href}` && "text-primary"
                                )}
                            >
                                {dictionary.navigation[link.labelKey]}
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


const Header = ({ lang }: { lang: Locale }) => {
    const [dictionary, setDictionary] = React.useState<any>(null);

    React.useEffect(() => {
        const fetchDict = async () => {
            const dict = await getDictionary(lang);
            setDictionary(dict);
        }
        fetchDict();
    }, [lang]);

    return <HeaderClient dictionary={dictionary} lang={lang} />;
};

export default Header;