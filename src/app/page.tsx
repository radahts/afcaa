import Hero from '@/components/landing/hero';
import Categories from '@/components/landing/categories';
import Testimonials from '@/components/landing/testimonials';
import CtaSection from '@/components/landing/cta-section';
import Partners from '@/components/landing/partners';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Categories />
      <Partners />
      <Testimonials />
      <CtaSection />
    </div>
  );
}
