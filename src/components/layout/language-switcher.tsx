'use client'

import { usePathname, useRouter } from 'next/navigation'
import { i18n } from '../../../i18n.config'
import { Button } from '../ui/button'
import { Globe } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'

export default function LanguageSwitcher() {
  const pathName = usePathname()
  const router = useRouter()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Globe className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Switch language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {i18n.locales.map(locale => {
            return (
                <DropdownMenuItem key={locale} onClick={() => router.push(redirectedPathName(locale))}>
                    {locale.toUpperCase()}
                </DropdownMenuItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
  )
}
