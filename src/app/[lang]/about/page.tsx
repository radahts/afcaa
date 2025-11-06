import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Trophy, Users, GitMerge, BarChart, TrendingUp, Handshake, BrainCircuit } from "lucide-react";

const Section = ({ title, children, className }: { title: string, children: React.ReactNode, className?: string }) => (
    <section className={`py-12 md:py-16 ${className}`}>
        <div className="container">
            <h2 className="font-headline text-3xl font-bold text-center mb-10 text-primary">{title}</h2>
            {children}
        </div>
    </section>
)

const InfoCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <Card className="text-center">
        <CardHeader className="items-center">
            {icon}
            <CardTitle className="font-headline mt-4">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
)

export default function AboutPage() {
    return (
        <div>
            <div className="bg-card py-12">
                <div className="container text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-primary">
                        L'Oscar Africain de la Franchise et du Commerce Associé
                    </h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                        Catalyser la formalisation et la structuration du vivier d'innovation africain.
                    </p>
                    <p className="font-semibold text-xl mt-4">Dakar - 10 décembre 2026</p>
                </div>
            </div>

            <Section title="Contexte & Justification" className="bg-background">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <p>Le marché africain est un écosystème dynamique où <strong>60% des commerces sont informels</strong>. Ces entreprises, bien que non réglementées, représentent un immense vivier d'innovation, développant des modèles économiques uniques et résilients adaptés à leurs contextes locaux.</p>
                        <p>La formalisation de ces activités est cruciale. Elle permettrait non seulement d'augmenter leur productivité et leur accès aux financements, mais aussi de les intégrer pleinement dans une économie inclusive. C'est ici que les AFCAA interviennent.</p>
                    </div>
                    <div>
                        <BarChart className="w-full h-auto text-primary" />
                    </div>
                </div>
            </Section>

            <Section title="Nos Objectifs" className="bg-card">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <InfoCard icon={<Trophy className="h-12 w-12 text-primary"/>} title="Reconnaissance" description="Mettre en valeur les excellences africaines dans le secteur de la franchise et du commerce associé."/>
                     <InfoCard icon={<Users className="h-12 w-12 text-primary"/>} title="Mise en réseau" description="Connecter les acteurs du secteur pour favoriser les échanges et les collaborations."/>
                     <InfoCard icon={<TrendingUp className="h-12 w-12 text-primary"/>} title="Innovation" description="Promouvoir l'innovation et la structuration du commerce associé en Afrique."/>
                     <InfoCard icon={<Handshake className="h-12 w-12 text-primary"/>} title="Visibilité Partenaires" description="Offrir une visibilité médiatique et un réseau d'connections professionnels à nos partenaires."/>
                </div>
            </Section>

            <Section title="Critères d'Évaluation Transversaux (Les 5P)" className="bg-background">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    <Card><CardHeader><CardTitle>P1</CardTitle></CardHeader><CardContent><p className="font-semibold">Innovation</p><p className="text-sm text-muted-foreground">Créativité et originalité du concept.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>P2</CardTitle></CardHeader><CardContent><p className="font-semibold">Performance</p><p className="text-sm text-muted-foreground">Performance économique et financière.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>P3</CardTitle></CardHeader><CardContent><p className="font-semibold">Impact</p><p className="text-sm text-muted-foreground">Impact social et développement durable.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>P4</CardTitle></CardHeader><CardContent><p className="font-semibold">Qualité</p><p className="text-sm text-muted-foreground">Qualité de la gestion et de l'organisation.</p></CardContent></Card>
                    <Card><CardHeader><CardTitle>P5</CardTitle></CardHeader><CardContent><p className="font-semibold">Visibilité</p><p className="text-sm text-muted-foreground">Visibilité et communication de marque.</p></CardContent></Card>
                </div>
            </Section>

            <Section title="Processus de Sélection en 7 Étapes" className="bg-card">
                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
                    <div className="space-y-12">
                        {[
                            { date: "15 Juil", title: "Ouverture", description: "Dossier de candidature disponible sur le site officiel." },
                            { date: "15 Août", title: "Évaluation", description: "Analyse des dossiers par le comité scientifique." },
                            { date: "15 Sept", title: "Entretiens", description: "Appel aux candidats pour entretiens téléphoniques." },
                            { date: "15 Oct", title: "Visites", description: "Visites in situ des finalistes sélectionnés." },
                            { date: "15 Nov", title: "Notation", description: "Calcul des scores et évaluation finale par la CSE." },
                            { date: "10 Déc", title: "Finalistes", description: "Annonce des finalistes et préparation du livre blanc." },
                            { date: "10 Déc", title: "Cérémonie", description: "Cérémonie des Awards et publication des résultats." },
                        ].map((step, index) => (
                            <div key={index} className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                                <div className={`text-center md:text-right md:pr-8 ${index % 2 === 0 ? '' : 'md:order-2 md:text-left md:pl-8'}`}>
                                    <div className="font-bold text-primary text-xl">{step.date}</div>
                                    <h3 className="font-headline text-2xl font-bold mt-1">{step.title}</h3>
                                    <p className="text-muted-foreground mt-2">{step.description}</p>
                                </div>
                                <div className={`hidden md:flex items-center justify-center ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                                    <div className="w-8 h-8 rounded-full bg-primary ring-8 ring-card flex items-center justify-center">
                                       <CheckCircle className="text-primary-foreground h-5 w-5"/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
