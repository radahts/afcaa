import { getDictionary } from '@/lib/dictionary';
import { Locale } from '../../../i18n.config';
import HeaderClient from './header-client';

const Header = async ({ lang }: { lang: Locale }) => {
  const dictionary = await getDictionary(lang);

  return <HeaderClient dictionary={dictionary} lang={lang} />;
};

export default Header;
