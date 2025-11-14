import { Award, BarChart, Briefcase, Gem, Lightbulb, UserCheck, Users, TrendingUp, FileText, BarChart2, Zap, Shield, Building, Globe, Recycle, GitMerge, Scaling, Handshake, Sprout, Network, University, Library, Banknote, Speaker, Bot, Store, ShoppingCart, Tractor, Factory, Ship, Landmark } from "lucide-react";

export const categories = [
  {
      icon: Gem,
      title: "C1 : Meilleure enseigne africaine de franchise locale",
      description: "Récompense une marque africaine ayant développé un modèle de franchise performant, adapté au contexte local.",
  },
  {
      icon: Globe,
      title: "C2 : Meilleure chaîne de distribution régionale",
      description: "Distinction pour un réseau ayant réussi à s’étendre efficacement dans plusieurs pays d’une même région.",
  },
  {
      icon: Users,
      title: "C3 : Meilleur réseau de distribution communautaire",
      description: "Valorise les modèles qui intègrent les communautés locales dans leur chaîne de valeur.",
  },
  {
      icon: Bot,
      title: "C4 : Meilleure franchise technologique africaine",
      description: "Récompense les modèles utilisant la tech pour transformer le commerce de proximité.",
  },
  {
      icon: Tractor,
      title: "C5 : Meilleure initiative de commerce rural",
      description: "Met en lumière les projets qui revitalisent l’économie rurale via des modèles commerciaux inclusifs.",
  },
  {
      icon: Scaling,
      title: "C6 : Meilleur intégrateur de l’économie informelle",
      description: "Récompense les acteurs ayant réussi à formaliser des micro-entrepreneurs informels.",
  },
  {
      icon: Recycle,
      title: "C7 : Meilleure franchise verte",
      description: "Distinction pour les modèles ayant une empreinte environnementale minimale et des pratiques circulaires.",
  },
  {
      icon: Store,
      title: "C8 : Meilleure franchise digitale",
      description: "Valorise les enseignes ayant une stratégie omnicanale réussie (e-commerce + physique).",
  },
  {
      icon: GitMerge,
      title: "C9 : Meilleur modèle inclusif (genre, jeunes, handicap)",
      description: "Récompense les initiatives qui intègrent activement les groupes marginalisés.",
  },
  {
      icon: Sprout,
      title: "C10 : Meilleure franchise émergente (moins de 3 ans)",
      description: "Met en avant les jeunes pousses à fort potentiel.",
  },
  {
      icon: Landmark,
      title: "C11 : Meilleure franchise internationale en Afrique",
      description: "Distinction pour une marque étrangère ayant su s’adapter avec succès au marché africain.",
  },
  {
      icon: Network,
      title: "M1 : Meilleure fédération ou association",
      description: "Récompense les organisations professionnelles qui défendent et structurent le secteur.",
  },
  {
      icon: Briefcase,
      title: "M2 : Meilleur cabinet de conseil",
      description: "Distinction pour les cabinets ayant accompagné avec succès des réseaux africains.",
  },
  {
      icon: Speaker,
      title: "M3 : Meilleur média spécialisé",
      description: "Valorise les médias qui couvrent de manière pertinente et régulière le secteur de la franchise en Afrique.",
  },
  {
      icon: Banknote,
      title: "M4 : Meilleure institution financière africaine pour la franchise",
      description: "Récompense les banques ou institutions ayant développé des produits adaptés aux franchisés.",
  },
  {
      icon: Zap,
      title: "M5 : Meilleure FinTech/InsurTech pour le commerce",
      description: "Distinction pour les startups technologiques facilitant l’accès aux services financiers pour les commerçants.",
  },
  {
      icon: Shield,
      title: "M6 : Meilleure compagnie d’assurance pour les réseaux commerciaux",
      description: "Récompense les assureurs ayant conçu des offres sur mesure pour les réseaux de franchise.",
  },
  {
    icon: ShoppingCart,
    title: "AS1 : Meilleure Coopérative de Commerçants",
    description: "Valoriser le regroupement d’indépendants qui mutualise achats ou services pour abaisser les prix et structurer l’offre locale.",
  },
  {
      icon: Ship,
      title: "AS2 : GIE-Commerce Transfrontalier de l’Année",
      description: "Récompenser le GIE qui mutualise logistique ou achats sur plusieurs pays et réduit les coûts de transport/douane.",
  },
  {
      icon: Factory,
      title: "AS3 : Centrale d’Achat Inclusive",
      description: "Mettre en lumière la centrale qui équilibre prix négociés et intégration de fournisseurs locaux/PME.",
  },
  {
      icon: Users,
      title: "AS4 : Plateforme Coopérative & Crowd-Retail",
      description: "Distinguer les modèles où consommateurs et/ou commerçants sont actionnaires et décident collectivement.",
  },
  {
      icon: Store,
      title: "AS5 : Micro-Réseau d’Épicier·es Affilié·es",
      description: "Promouvoir les réseaux souples gardant enseigne individuelle tout en mutualisant promo, PLV et fidélité.",
  },
  {
      icon: Building,
      title: "AS6 : Retail-Hub & Mutualisation Logistique",
      description: "Récompenser le hub qui partage entrepôt, cold-room ou dernier kilomètre pour plusieurs commerces.",
  },
  {
      icon: Handshake,
      title: "AS7 : Union/Association de Commerçants – Plaidoyer & Services",
      description: "Reconnaître l’association qui défend les intérêts des commerçants et obtient des mesures concrètes des pouvoirs publics.",
  },
  {
      icon: Banknote,
      title: "AS8 : Wallet & FinTech Communautaire",
      description: "Valoriser la solution qui mutualise épargne, crédit et paiements fournisseurs pour un groupe de commerçants.",
  },
  {
      icon: Shield,
      title: "AS9 : Assurance & Services Mutualisés pour Commerçants",
      description: "Mettre en avant l’assureur/mutuelle qui conçoit un pack groupe à prix réduit et délais d’indemnisation courts.",
  },
  {
      icon: Globe,
      title: "AS10 : Collectif Click-&-Collect / Shared-e-Shop",
      description: "Distinguer plusieurs commerçants partageant une plateforme e-commerce et un point retrait unique.",
  }
];

export const testimonials = [
  {
    id: '1',
    name: "Amina Diallo",
    title: "CEO, SafariGrill (Winner 2024)",
    quote: "Winning at AFCAA was a game-changer. The visibility and credibility it brought to our brand have been instrumental in our expansion across West Africa.",
    avatar: "testimonial-avatar-1",
  },
  {
    id: '2',
    name: "Kwame Nkrumah",
    title: "Founder, Kente Kuts",
    quote: "The application process itself was a valuable exercise, forcing us to analyze our business in new ways. The platform is incredibly intuitive.",
    avatar: "testimonial-avatar-2",
  },
  {
    id: '3',
    name: "Fatima Al-Jabir",
    title: "Jury Member",
    quote: "As a jury member, the secure and anonymous dashboard allowed me to focus purely on the merit of each application. A truly professional setup.",
    avatar: "testimonial-avatar-3",
  },
];

export const partners = [
    { id: '1', name: 'Partner One', logo: 'partner-logo-1' },
    { id: '2', name: 'Partner Two', logo: 'partner-logo-2' },
    { id: '3', name: 'Partner Three', logo: 'partner-logo-3' },
    { id: '4', name: 'Partner Four', logo: 'partner-logo-4' },
    { id: '5', name: 'Partner Five', logo: 'partner-logo-5' },
];

export const candidates = [
    { id: '1', name: 'EcoFoods Ltd.', category: 'Social Impact', photo: 'candidate-photo-1', votes: 12503, pitch: 'Revolutionizing sustainable agriculture across the continent.'},
    { id: '2', name: 'Nairobi Java House', category: 'Franchise of the Year', photo: 'candidate-photo-2', votes: 11987, pitch: 'Serving premium coffee and cuisine with a unique Kenyan touch.' },
    { id: '3', name: 'TechieTots', category: 'Emerging Franchise', photo: 'candidate-photo-3', votes: 10450, pitch: 'Coding bootcamps for the next generation of African innovators.'},
    { id: '4', name: 'UrbanGlow Cosmetics', category: 'Franchise of the Year', photo: 'candidate-photo-4', votes: 9870, pitch: 'Inclusive beauty products made for and by Africans.'},
]

export const juryTasks = [
    { id: 'uuid-alpha-001', category: 'Franchise of the Year', progress: 5, total: 20 },
    { id: 'uuid-beta-002', category: 'Social Impact', progress: 18, total: 25 },
    { id: 'uuid-gamma-003', category: 'Emerging Franchise', progress: 10, total: 10 },
]

export const partnerStats = [
    { title: "Impressions", value: "1.2M", change: "+15.2%", icon: TrendingUp },
    { title: "Leads Generated", value: "4,580", change: "+8.1%", icon: Users },
    { title: "Contracts Signed", value: "32", change: "+2", icon: Briefcase },
    { title: "Estimated ROI", value: "250%", change: "+25%", icon: BarChart2 },
]

export const adminStats = [
    { title: "Total Applications", value: "482", icon: FileText },
    { title: "Public Votes", value: "44,810", icon: UserCheck },
    { title: "Active Partners", value: "15", icon: Briefcase },
    { title: "Security Events", value: "0", icon: Shield },
]

export const applicationSteps = [
    { id: '1', name: 'Coordonnées', status: 'current' },
    { id: '2', name: 'Catégorie', status: 'upcoming' },
    { id: '3', name: '5 Piliers', status: 'upcoming' },
    { id: '4', name: 'Résumé', status: 'upcoming' },
    { id: '5', name: 'Paiement', status: 'upcoming' },
    { id: '6', name: 'Soumission', status: 'upcoming' },
];

export const applicationProgress = {
    steps: applicationSteps,
    currentStep: 1,
    totalSteps: applicationSteps.length
}

export const laureates = [
    {
      id: '1',
      slug: 'amina-diallo-safarigrill',
      name: "Amina Diallo",
      company: "SafariGrill",
      category: "Meilleure enseigne africaine de franchise locale",
      year: 2024,
      bio: "Amina Diallo est la fondatrice visionnaire de SafariGrill, une chaîne de restauration rapide qui a su capturer l'essence des saveurs africaines dans un format de franchise moderne. En remportant le prix en 2024, SafariGrill a été reconnu pour son modèle économique robuste, son engagement envers l'approvisionnement local et sa croissance exponentielle à travers l'Afrique de l'Ouest. Amina est une fervente défenseure de l'entrepreneuriat féminin et continue d'inspirer une nouvelle génération de leaders.",
      photo: "laureate-amina-diallo",
      quote: "Ce prix n'est pas seulement une reconnaissance pour SafariGrill, mais pour tous les entrepreneurs africains qui osent rêver grand."
    },
    {
      id: '2',
      slug: 'kwame-asante-ecowear',
      name: "Kwame Asante",
      company: "EcoWear",
      category: "Meilleure franchise verte",
      year: 2024,
      bio: "Kwame Asante est le pionnier derrière EcoWear, une marque de vêtements éthiques qui utilise des matériaux recyclés et des teintures naturelles. Son modèle de franchise innovant permet à des artisans locaux de devenir des entrepreneurs en produisant et en vendant des vêtements durables. Lauréat 2024 dans la catégorie 'Meilleure Franchise Verte', EcoWear est un exemple brillant de la manière dont la mode peut être à la fois rentable et respectueuse de la planète.",
      photo: "laureate-kwame-asante",
      quote: "Notre mission est de prouver que la durabilité n'est pas un compromis, mais un avantage concurrentiel."
    },
    {
        id: '3',
        slug: 'chidinma-okoro-techub',
        name: "Chidinma Okoro",
        company: "TechHub",
        category: "Meilleure franchise technologique africaine",
        year: 2025,
        bio: "Chidinma Okoro a fondé TechHub avec l'objectif de rendre la technologie accessible à tous. Son réseau de kiosques technologiques franchisés offre des services allant de la réparation de téléphones à la formation au codage dans les zones urbaines et rurales. En 2025, TechHub a remporté le prix pour son impact significatif sur la réduction de la fracture numérique et son modèle de franchise unique qui autonomise les jeunes techniciens.",
        photo: "laureate-chidinma-okoro",
        quote: "Nous connectons l'Afrique, un quartier à la fois."
      },
      {
        id: '4',
        slug: 'jean-pierre-dubois-agriplus',
        name: "Jean-Pierre Dubois",
        company: "AgriPlus",
        category: "Meilleure initiative de commerce rural",
        year: 2025,
        bio: "Jean-Pierre Dubois est le cerveau d'AgriPlus, une franchise qui fournit aux petits agriculteurs des semences de haute qualité, des outils modernes et une formation agronomique. Le modèle AgriPlus a transformé les économies rurales en augmentant les rendements et en connectant les agriculteurs à des marchés plus larges. Le prix remporté en 2025 a salué leur contribution exceptionnelle à la sécurité alimentaire et au développement rural durable.",
        photo: "laureate-jean-pierre-dubois",
        quote: "L'avenir de l'Afrique se cultive dans ses campagnes."
      }
  ];

  export const copilPermanentMembers = [
    { id: 'perm-1', name: 'Dr. Evelyn Mensah', title: 'Présidente Permanente', photo: 'member-1' },
    { id: 'perm-2', name: 'M. Olivier Dubois', title: 'Secrétaire Général', photo: 'member-2' },
  ];
  
  export const copil2026Members = [
    { id: '2026-c-1', name: 'Aïssata Traoré', title: 'Directrice Exécutive 2026', photo: 'member-3' },
    { id: '2026-c-2', name: 'Bello Adebayo', title: 'Responsable des Partenariats', photo: 'member-4' },
    { id: '2026-c-3', name: 'Chloé Dupont', title: 'Coordinatrice Logistique', photo: 'member-5' },
    { id: '2026-c-4', name: 'David Kimani', title: 'Superviseur Financier', photo: 'member-6' },
  ];
  
  export const cse2026Members = [
    { id: '2026-s-1', name: 'Prof. Kenza Alami', title: 'Présidente du CSE 2026 (Économiste)', photo: 'member-7' },
    { id: '2026-s-2', name: 'Dr. Samuel Osei', title: 'Expert en Franchise', photo: 'member-8' },
    { id: '2026-s-3', name: 'Me Fatou Diop', title: 'Juriste en Droit des Affaires', photo: 'member-9' },
    { id: '2026-s-4', name: 'Ngozi Okonjo', title: 'Représentante Société Civile', photo: 'member-10' },
    { id: '2026-s-5', name: 'Ahmed Benjelloun', title: 'Auditeur Indépendant', photo: 'member-11' },
    { id: '2026-s-6', name: 'Maria Costa', title: 'Spécialiste en Développement Durable', photo: 'member-12' },
  ];
