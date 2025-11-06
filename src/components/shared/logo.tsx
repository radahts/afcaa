import { cn } from "@/lib/utils";
import Link from "next/link";
import { Locale } from "../../../i18n.config";
import Image from "next/image";

const Logo = ({ className, lang }: { className?: string, lang?: Locale }) => {
  const path = lang ? `/${lang}`: '/';
  return (
    <Link
      href={path}
      className={cn(
        "flex items-center gap-2 text-foreground transition-colors hover:text-primary",
        className
      )}
    >
      <Image src="https://firebasestorage.googleapis.com/v0/b/app-confo.appspot.com/o/public%2Fstudioccp%2F6131362%2Flogo_afcaa.png?alt=media&token=86d34cc8-f033-4f93-a442-f5424d9c8c5c" alt="AFCAA Logo" width={40} height={40} />
      <span className="font-headline text-xl font-bold tracking-tight hidden sm:inline">
        AFCAA <span className="text-primary">2026</span>
      </span>
    </Link>
  );
};

export default Logo;
