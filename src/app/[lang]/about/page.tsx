
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { copilPermanentMembers, copil2026Members, cse2026Members } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Section = ({ title, children, className, id }: { title: string, children: React.ReactNode, className?: string, id?: string }) => (
    <section className={`py-12 md:py-16 ${className}`} id={id}>
        <div className="container">
            <div className="max-w-5xl mx-auto">
                <h2 className="font-headline text-3xl font-bold text-center mb-10 text-primary">{title}</h2>
                {children}
            </div>
        </div>
    </section>
)

type Member = {
    id: string;
    name: string;
    title: string;
    photo: string;
}

const MemberCard = ({ member }: { member: Member }) => {
    const image = PlaceHolderImages.find(p => p.id === member.photo);
    return (
        <div className="text-center">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-card">
                 {image && (
                    <Image 
                        src={image.imageUrl} 
                        alt={member.name} 
                        fill 
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                    />
                )}
            </div>
            <h4 className="mt-4 font-headline text-lg font-semibold">{member.name}</h4>
            <p className="text-sm text-primary font-medium">{member.title}</p>
        </div>
    );
};

const CommitteeSection = ({ title, members }: { title: string; members: Member[] }) => (
    <div className="mt-12">
        <h3 className="text-2xl font-bold font-headline mb-8 text-center">{title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
            {members.map(member => <MemberCard key={member.id} member={member} />)}
        </div>
    </div>
);


export default function AboutPage() {
    return (
        <div>
            <div className="bg-card py-12">
                <div className="container text-center max-w-4xl mx-auto">
                    <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-primary">
                       À propos de l’AFCAA : Catalyser la transformation du commerce africain
                    </h1>
                </div>
            </div>

            <Section title="Contexte & Enjeux">
                <div className="prose lg:prose-xl max-w-none text-foreground/80 mx-auto">
                    <p>L’Afrique est le berceau d’une vitalité entrepreneuriale sans égale : près de <strong>60 % de son activité économique</strong> se déroule dans le secteur informel, selon la Banque africaine de développement (AfDB, 2022). Ce phénomène, loin d’être un simple constat de marginalité, témoigne d’une capacité remarquable d’auto-organisation, d’innovation et de résilience au sein des communautés. Pourtant, ces millions de micro-entreprises — épiceries de quartier, boutiques familiales, artisans, distributeurs locaux — restent trop souvent invisibles aux yeux des institutions financières, des investisseurs et des politiques publiques. Leur potentiel de croissance, de création d’emplois et de contribution fiscale demeure largement inexploité.</p>
                    <p>Face à ce double défi — valoriser l’informel sans le stigmatiser, et transformer cette énergie brute en moteur structuré de développement — naît l’<strong>Africa Franchise & Commerce Associé Awards (AFCAA)</strong>. Initié comme le premier prix panafricain dédié exclusivement à la reconnaissance et à la mise en réseau des acteurs du commerce organisé, de la franchise et de leurs écosystèmes, l’AFCAA se positionne comme un catalyseur de transformation économique, sociale et technologique à l’échelle du continent.</p>
                    <p>L’AFCAA vise à accélérer la transition de l’informel vers le formel en mettant en lumière les modèles les plus performants, inclusifs, durables et reproductibles — qu’il s’agisse de réseaux de franchise locaux, de coopératives de distribution, de chaînes de valeur agricoles structurées ou de plateformes numériques intégrant les petits commerçants. En valorisant ces succès concrets, l’AFCAA 2026 entend devenir la référence continentale en matière de promotion de l’entrepreneuriat structuré et de l’économie inclusive.</p>
                </div>
            </Section>

            <Section title="Nos ambitions, nos engagements" className="bg-card">
                 <div className="prose lg:prose-xl max-w-none mx-auto">
                    <h3 className="text-2xl font-bold font-headline">Objectif général</h3>
                    <p>Créer une plateforme panafricaine dynamique de reconnaissance, de mise en réseau et de valorisation des meilleures pratiques en matière de franchise, de commerce organisé et d’écosystèmes associés, afin de stimuler l’investissement, encourager la formalisation et amplifier la croissance inclusive.</p>
                    
                    <h3 className="text-2xl font-bold font-headline mt-8">Objectifs spécifiques</h3>
                    <ul className="space-y-4">
                        <li><strong>Récompenser l’excellence :</strong> Identifier, évaluer et récompenser les initiatives les plus innovantes, durables et inclusives à travers 11 catégories opérationnelles (C1 à C11) et 6 catégories métiers (M1 à M6), couvrant tout le spectre de la chaîne de valeur du commerce africain.</li>
                        <li><strong>Fédérer un écosystème d’impact :</strong> Structurer un réseau de référence réunissant chefs d’entreprise, institutions financières, médias, fédérations professionnelles, experts techniques et décideurs politiques, autour d’une vision commune de développement économique structuré.</li>
                        <li><strong>Éclairer les décisions stratégiques :</strong> Produire un Livre Blanc sectoriel, fondé sur des données rigoureuses collectées auprès des lauréats et partenaires, destiné à guider les politiques publiques et orienter les investissements privés vers des modèles éprouvés.</li>
                        <li><strong>Générer un impact mesurable :</strong> D’ici 2027, l’AFCAA s’engage à contribuer concrètement à :
                            <ul className="mt-2 space-y-1 list-disc pl-6">
                                <li>La création ou la consolidation de 5 000 emplois directs et indirects,</li>
                                <li>La formation de 1 000 jeunes entrepreneurs aux bonnes pratiques du commerce structuré,</li>
                                <li>Une compensation intégrale de l’empreinte carbone de l’événement et de ses activités associées, en partenariat avec des initiatives de reboisement certifiées.</li>
                            </ul>
                        </li>
                        <li><strong>Offrir une valeur partagée aux partenaires :</strong> Grâce à un modèle d’échange en nature (barter), les partenaires institutionnels et privés bénéficient d’une visibilité stratégique ciblée et d’un retour sur investissement mesurable, sans pression sur leur trésorerie.</li>
                    </ul>

                    <p className="font-semibold italic mt-8">L’AFCAA n’est pas seulement un prix : c’est un mouvement. Un mouvement qui croit que le commerce africain, une fois structuré, connecté et valorisé, peut devenir l’un des principaux leviers de prospérité partagée du continent. Rejoignez-nous dans cette ambition. Ensemble, bâtissons l’avenir du commerce africain — visible, inclusif et durable.</p>
                </div>
            </Section>

            <Section title="Gouvernance et intégrité : deux comités au service de l’excellence africaine">
                <div className="text-center prose lg:prose-xl max-w-none text-foreground/80 mx-auto mb-12">
                    <p>Pour garantir transparence, impartialité et rigueur scientifique, l’Africa Franchise & Commerce Associé Awards (AFCAA) repose sur deux comités indépendants, aux rôles complémentaires et clairement définis. Leur composition pluraliste, leurs procédures strictes et leurs engagements éthiques constituent la colonne vertébrale de la crédibilité de l’AFCAA sur le continent.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Le Comité de Pilotage (COPIL)</CardTitle>
                            <CardDescription>L’instance stratégique et opérationnelle</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           <p>Composé de 12 à 15 membres, le Comité de Pilotage incarne la vision stratégique de l’AFCAA. Ses décisions orientent le projet à grande échelle, en veillant à son alignement avec les priorités économiques africaines et les standards internationaux de gouvernance.</p>
                           <h4 className="font-semibold">Ses missions clés :</h4>
                           <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                               <li><strong>Stratégie :</strong> Sélectionner la ville hôte, valider les catégories de récompense, les partenariats institutionnels et le cadre budgétaire global.</li>
                               <li><strong>Financement :</strong> Mobiliser les ressources nécessaires, négocier et signer les accords de partenariat en nature (barter), et superviser la gestion financière.</li>
                               <li><strong>Gouvernance :</strong> Nommer le Secrétariat Exécutif, l’équipe opérationnelle chargée de la mise en œuvre quotidienne.</li>
                           </ul>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Le Comité Scientifique & Éthique (CSE)</CardTitle>
                            <CardDescription>Le garant de l’intégrité intellectuelle et morale</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           <p>Avec 20 à 25 membres, ce comité incarne l’excellence technique et l’éthique indépendante. Il veille à ce que chaque lauréat soit récompensé sur la base de critères objectifs, transparents et anonymisés.</p>
                           <h4 className="font-semibold">Ses trois piliers d’action :</h4>
                           <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                               <li><strong>Évaluation rigoureuse :</strong> Conception et mise à jour de la grille d’évaluation, appliquée en anonymat total. Le CSE attribue 70 % de la note finale.</li>
                               <li><strong>Intégrité et conformité :</strong> Garde-fou éthique, il examine les conflits d’intérêts, instruit les plaintes et peut exclure un candidat en cas de fraude.</li>
                               <li><strong>Pensée stratégique :</strong> Il rédige le Livre Blanc AFCAA 2026 et formule des recommandations aux gouvernements et investisseurs.</li>
                           </ul>
                        </CardContent>
                    </Card>
                </div>
                
                <CommitteeSection title="Comité de Pilotage Permanent" members={copilPermanentMembers} />
                <CommitteeSection title="Comité de Pilotage AFCAA 2026" members={copil2026Members} />
                <CommitteeSection title="Comité Scientifique & Éthique AFCAA 2026" members={cse2026Members} />

            </Section>

            <Section title="La Charte de l'AFCAA" className="bg-card">
                 <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl font-headline">Préambule</AccordionTrigger>
                        <AccordionContent className="prose max-w-none pt-4">
                        L'Africa Franchise & Commerce Associé Awards (AFCAA) constitue la première initiative panafricaine de reconnaissance et de structuration des acteurs du commerce organisé, de la franchise et du commerce associé. Conscient que près de 60 % du commerce africain demeure informel, malgré une vitalité entrepreneuriale exceptionnelle, les Parties Signataires s'engagent à transformer cette réalité en levier de développement économique inclusif, durable et structuré. La présente Charte formalise les principes, règles et engagements fondamentaux qui régissent l'ensemble du dispositif AFCAA.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl font-headline">Article 1 : Mission et Valeurs</AccordionTrigger>
                        <AccordionContent className="prose max-w-none pt-4">
                            <h4>1.1. Mission</h4>
                            <p>Faire d'AFCAA la référence continentale pour identifier, évaluer, récompenser et diffuser les modèles les plus performants, inclusifs et replicables de franchise et de commerce associé, afin d'accélérer la transition de l'informel vers le formel et de stimuler l'investissement.</p>
                            <h4>1.2. Valeurs cardinales</h4>
                            <ul>
                                <li><strong>Transparence totale :</strong> processus, critères et décisions accessibles et auditable</li>
                                <li><strong>Indépendance scientifique :</strong> sélection basée sur des preuves chiffrées, non sur des réseaux</li>
                                <li><strong>Excellence opérationnelle :</strong> seuil de qualification fixé à 90/150 points, sans compromis</li>
                                <li><strong>Inclusion sociale :</strong> quotas actifs pour femmes, jeunes et personnes en situation de handicap</li>
                                <li><strong>Durabilité environnementale :</strong> neutralité carbone de l'événement et valorisation des pratiques vertes</li>
                                <li><strong>Ancrage local :</strong> priorité aux modèles avec ≥ 60 % de sourcing local et adaptation culturelle</li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-xl font-headline">Article 2 : Gouvernance</AccordionTrigger>
                        <AccordionContent className="prose max-w-none pt-4">
                             <h4>2.1. Comité de Pilotage (COPIL)</h4>
                             <p><strong>Composition :</strong> 12 à 15 membres, dont institutions hôtes ivoiriennes, fédérations de franchise, représentants diaspora. <strong>Pouvoirs :</strong> validation stratégique (budget, catégories, partenariats), levée de fonds, nomination du Secrétariat Exécutif. <strong>Obligations :</strong> réunion trimestrielle, publication de comptes rendus synthétisés, signature de contrats barter sans trésorerie.</p>
                             <h4>2.2. Comité Scientifique & Éthique (CSE)</h4>
                             <p><strong>Composition :</strong> 20 à 25 membres indépendants (30% universitaires, 20% experts, 15% juristes, 15% société civile, 20% auditeurs). <strong>Rôle technique :</strong> conception de la grille d'évaluation (150 points), attribution de 70 % de la note finale en anonymat strict. <strong>Rôle éthique :</strong> traitement des conflits d'intérêt, instruction des plaintes, exclusion en cas de fraude. <strong>Rotation :</strong> renouvellement obligatoire de 30 % des membres à mi-mandat (12 mois).</p>
                             <h4>2.3. Secrétariat Exécutif</h4>
                             <p>Structure opérationnelle désignée par le COPIL, chargée de la logistique, de la campagne de candidatures et de l'interface avec le CSE.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-xl font-headline">Article 4 : Code d'Éthique</AccordionTrigger>
                        <AccordionContent className="prose max-w-none pt-4">
                            <h4>4.1. Interdictions absolues</h4>
                            <p>Aucun membre COPIL/CSE ne peut être candidat. Aucun paiement ne garantit une récompense. Aucun lobbying auprès du CSE (sanction : exclusion).</p>
                             <h4>4.2. Conflits d'intérêt</h4>
                            <p>Déclaration obligatoire pour COPIL/CSE. Abstention automatique si lien direct avec candidat. Registre public des déclarations.</p>
                            <h4>4.3. Confidentialité</h4>
                            <p>Données candidats chiffrées et stockées hors Afrique (GDPR-compliant). Accès CSE via plateforme sécurisée avec audit trail. Non-divulgation des notes.</p>
                        </AccordionContent>
                    </AccordionItem>
                 </Accordion>
            </Section>
        </div>
    );
}
