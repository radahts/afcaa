"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  Users,
  BarChart2,
  Settings,
  Shield,
  Award,
  LogOut,
  ChevronDown,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";
import Logo from "@/components/shared/logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const sidebarNav = [
  {
    title: "Candidate Space",
    href: "/dashboard/apply",
    icon: Award,
    role: "candidate",
  },
  {
    title: "Jury Dashboard",
    href: "/dashboard/jury",
    icon: Users,
    role: "jury",
  },
  {
    title: "Partner Analytics",
    href: "/dashboard/partner",
    icon: BarChart2,
    role: "partner",
  },
  {
    title: "Admin Panel",
    href: "/dashboard/admin",
    icon: Shield,
    role: "admin",
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  // In a real app, this would come from an auth context
  const userRoles = ["candidate", "jury", "partner", "admin"];

  return (
    <aside className="hidden lg:flex flex-col w-72 border-r bg-card">
      <div className="h-16 flex items-center px-6 border-b">
        <Logo />
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="flex flex-col px-4 py-4">
          <Accordion type="multiple" defaultValue={userRoles} className="w-full">
            {userRoles.map((role) => {
              const items = sidebarNav.filter((item) => item.role === role);
              if (items.length === 0) return null;
              
              return (
              <AccordionItem value={role} key={role} className="border-b-0">
                <AccordionTrigger className="py-2 text-sm text-muted-foreground hover:no-underline capitalize">
                  {role} Space
                </AccordionTrigger>
                <AccordionContent className="pb-2">
                  <div className="flex flex-col space-y-1">
                    {items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                          pathname.startsWith(item.href)
                            ? "bg-accent text-accent-foreground"
                            : "text-foreground",
                          "transition-all"
                        )}
                      >
                        <item.icon className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-accent-foreground transition-all" />
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )})}
          </Accordion>
        </nav>
      </div>

      <div className="p-4 border-t mt-auto">
          <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="https://picsum.photos/seed/user/100/100" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm font-medium">Demo User</p>
                    <p className="text-xs text-muted-foreground">user@afcaa.com</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" asChild>
                  <Link href="/">
                    <LogOut className="h-4 w-4" />
                  </Link>
              </Button>
          </div>
      </div>
    </aside>
  );
}
