import Hero from '@/components/landing/hero';
import Categories from '@/components/landing/categories';
import Testimonials from '@/components/landing/testimonials';
import CtaSection from '@/components/landing/cta-section';
import Partners from '@/components/landing/partners';
import { Locale } from '../../../i18n.config';

export default function Home({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <div className="flex flex-col">
      <Hero lang={lang} />
      <Categories />
      <Partners />
      <Testimonials />
      <CtaSection lang={lang} />
    </div>
  );
}
