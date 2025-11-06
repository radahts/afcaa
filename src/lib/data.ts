import { Award, BarChart, Briefcase, Gem, Lightbulb, UserCheck, Users, TrendingUp, FileText, BarChart2, Zap, Shield, Building, Globe, Recycle, GitMerge, Scaling, Handshake, Sprout, Network, University, Library, Banknote, Speaker, Bot } from "lucide-react";

export const categories = [
  {
      icon: Gem,
      title: "Meilleure enseigne africaine de franchise locale (C1)",
      description: "Récompense une marque africaine ayant développé un modèle de franchise performant, adapté au contexte local.",
  },
  {
      icon: Globe,
      title: "Meilleure chaîne de distribution régionale (C2)",
      description: "Distinction pour un réseau ayant réussi à s’étendre efficacement dans plusieurs pays d’une même région.",
  },
  {
      icon: Users,
      title: "Meilleur réseau de distribution communautaire (C3)",
      description: "Valorise les modèles qui intègrent les communautés locales dans leur chaîne de valeur.",
  },
  {
      icon: Bot,
      title: "Meilleure franchise technologique africaine (C4)",
      description: "Récompense les modèles utilisant la tech pour transformer le commerce de proximité.",
  },
  {
      icon: Handshake,
      title: "Meilleure initiative de commerce rural (C5)",
      description: "Met en lumière les projets qui revitalisent l’économie rurale via des modèles commerciaux inclusifs.",
  },
  {
      icon: Scaling,
      title: "Meilleur intégrateur de l’économie informelle (C6)",
      description: "Récompense les acteurs ayant réussi à formaliser des micro-entrepreneurs informels.",
  },
  {
      icon: Recycle,
      title: "Meilleure franchise verte (C7)",
      description: "Distinction pour les modèles ayant une empreinte environnementale minimale et des pratiques circulaires.",
  },
  {
      icon: GitMerge,
      title: "Meilleur modèle inclusif (genre, jeunes, handicap) (C8)",
      description: "Valorise les enseignes ayant une stratégie omnicanale réussie (e-commerce + physique).",
  },
  {
      icon: Building,
      title: "Meilleure franchise digitale (C9)",
      description: "Établissement d'hospitalité incluant hôtels, pensions, camping, etc., destiné à l'accueil des clients.",
  },
  {
      icon: Sprout,
      title: "Meilleure franchise émergente (moins de 3 ans) (C10)",
      description: "Met en avant les jeunes pousses à fort potentiel.",
  },
  {
      icon: Award,
      title: "Meilleure franchise internationale en Afrique (C11)",
      description: "Distinction pour une marque étrangère ayant su s’adapter avec succès au marché africain.",
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

export const applicationProgress = {
    steps: [
      { id: '1', name: 'Coordinates', status: 'complete' },
      { id: '2', name: 'Category', status: 'complete' },
      { id: '3', name: '5 Pillars', status: 'current' },
      { id: '4', name: 'Summary', status: 'upcoming' },
      { id: '5', name: 'Payment', status: 'upcoming' },
      { id: '6', name: 'Submission', status: 'upcoming' },
    ],
    currentStep: 3,
    totalSteps: 6
}
