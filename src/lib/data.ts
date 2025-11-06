import { Award, BarChart, Briefcase, Gem, Lightbulb, UserCheck, Users, TrendingUp, FileText, BarChart2, Zap, Shield } from "lucide-react";

export const categories = [
  {
    icon: Gem,
    title: "Franchise of the Year (C1-C11)",
    description: "Recognizing overall excellence in franchising.",
  },
  {
    icon: Lightbulb,
    title: "Emerging Franchise (M1-M6)",
    description: "Celebrating the most promising new franchise concepts.",
  },
  {
    icon: Users,
    title: "Social Impact (AS1-AS10)",
    description: "Awarding franchises that make a significant social contribution.",
  },
  {
    icon: TrendingUp,
    title: "Master Franchisee Award",
    description: "Honoring the most successful master franchisee.",
  },
  {
    icon: Award,
    title: "Best Customer Service",
    description: "For franchises that provide an outstanding customer experience.",
  },
  {
    icon: Zap,
    title: "Innovation in Technology",
    description: "Recognizing the use of technology to improve franchise operations.",
  },
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
