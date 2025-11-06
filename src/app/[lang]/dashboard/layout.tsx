import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import { Locale } from "../../../../i18n.config";

export default function DashboardLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode;
  params: { lang: Locale }
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DashboardSidebar lang={lang} />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background overflow-auto">
        {children}
      </main>
    </div>
  );
}
