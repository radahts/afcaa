import DashboardSidebar from "@/components/layout/dashboard-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      <DashboardSidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background overflow-auto">
        {children}
      </main>
    </div>
  );
}
