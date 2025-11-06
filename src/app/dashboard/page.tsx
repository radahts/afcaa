import { redirect } from 'next/navigation';

export default function DashboardPage() {
  // Default to the candidate view
  redirect('/dashboard/apply');
}
