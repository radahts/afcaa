import { cn } from "@/lib/utils";
import Link from "next/link";

const AfroLionIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 5.5A3.5 3.5 0 0 1 15.5 9" />
      <path d="M12 5.5A3.5 3.5 0 0 0 8.5 9" />
      <path d="M4 12c0-2.5 1.5-4.5 4-5" />
      <path d="M20 12c0-2.5-1.5-4.5-4-5" />
      <path d="M8 14v1" />
      <path d="M16 14v1" />
      <path d="M8.5 18h7" />
      <path d="M11 20h2" />
      <path d="M4.5 10.5c-1.5 0-3 1.5-3 3.5" />
      <path d="M19.5 10.5c1.5 0 3 1.5 3 3.5" />
      <path d="M9.5 16s-1.5 1.5-1.5 2.5" />
      <path d="M14.5 16s1.5 1.5 1.5 2.5" />
    </svg>
  );

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 text-foreground transition-colors hover:text-primary",
        className
      )}
    >
      <AfroLionIcon className="h-8 w-8 text-primary" />
      <span className="font-headline text-2xl font-bold tracking-tight">
        AFCAA <span className="text-primary">2026</span>
      </span>
    </Link>
  );
};

export default Logo;
