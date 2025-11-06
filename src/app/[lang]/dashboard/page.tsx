import { redirect } from 'next/navigation';
import { Locale } from '../../../../i18n.config';

export default function DashboardPage({ params: { lang } }: { params: { lang: Locale } }) {
  // Default to the candidate view
  redirect(`/${lang}/dashboard/apply`);
}
