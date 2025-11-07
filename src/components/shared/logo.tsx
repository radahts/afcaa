import { cn } from "@/lib/utils";
import Link from "next/link";
import { Locale } from "../../../i18n.config";

const LogoSVG = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#006400" }} />
        <stop offset="100%" style={{ stopColor: "#004d00" }} />
      </linearGradient>
      <linearGradient id="laurelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#ffd700" }} />
        <stop offset="100%" style={{ stopColor: "#f39c12" }} />
      </linearGradient>
    </defs>
    <g transform="translate(60, 60)">
      <path
        d="M-50,25 Q-60,0 -50,-25 L-40,-50 C-20,-70 20,-70 40,-50 L50,-25 Q60,0 50,25 L0,55 Z"
        fill="url(#laurelGradient)"
        transform="scale(1.1) translate(-2, 0)"
      />
       <path
        d="M50,25 Q60,0 50,-25 L40,-50 C20,-70 -20,-70 -40,-50 L-50,-25 Q-60,0 -50,25 L0,55 Z"
        fill="url(#laurelGradient)"
        transform="scale(1.1) translate(2, 0) scale(-1, 1)"
      />
    </g>

    <path
      d="M20,10 C20,5 25,0 30,0 L90,0 C95,0 100,5 100,10 L100,60 C100,95 60,115 60,115 C60,115 20,95 20,60 Z"
      fill="#F39C12"
    />
    <path
      d="M22,10 C22,6 26,2 30,2 L90,2 C94,2 98,6 98,10 L98,60 C98,92 60,112 60,112 C60,112 22,92 22,60 Z"
      fill="black"
    />
     <path
      d="M22,10 C22,6 26,2 30,2 L90,2 C94,2 98,6 98,10 L98,40 C98,40 60,50 60,50 C60,50 22,40 22,40 Z"
      fill="#00A859"
    />

    <circle cx="60" cy="30" r="10" fill="#F39C12" />
     <path
      d="M56,32 C57,28 58,25 60,23 C62,25 63,28 64,32 M60,35 V23 M57,30 H63"
      stroke="white"
      strokeWidth="1.5"
      fill="none"
    />

    <text
      x="60"
      y="65"
      fontFamily="Poppins, sans-serif"
      fontSize="22"
      fontWeight="bold"
      fill="#F39C12"
      textAnchor="middle"
    >
      AFCAA
    </text>
    <text
      x="60"
      y="80"
      fontFamily="Noto Sans, sans-serif"
      fontSize="7"
      fill="#F39C12"
      textAnchor="middle"
    >
      Africa Franchise & Commerce Associé
    </text>
     <text
      x="60"
      y="90"
      fontFamily="Noto Sans, sans-serif"
      fontSize="7"
      fill="#F39C12"
      textAnchor="middle"
    >
      AWARDS
    </text>
    
    <text x="60" y="100" fill="#F39C12" fontSize="10" textAnchor="middle">★</text>

  </svg>
);


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
      <LogoSVG />
      <span className="font-headline text-xl font-bold tracking-tight hidden sm:inline">
        AFCAA <span className="text-primary">2026</span>
      </span>
    </Link>
  );
};

export default Logo;
