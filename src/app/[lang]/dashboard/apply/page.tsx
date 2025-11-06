import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Upload, File, X, ArrowRight, ArrowLeft } from "lucide-react";
import { applicationProgress } from "@/lib/data";
import { cn } from "@/lib/utils";

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

const ApplicationProgress = () => {
    const { steps, currentStep, totalSteps } = applicationProgress;
    const progressValue = ((currentStep - 1) / (totalSteps -1)) * 100;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Progression de la candidature</CardTitle>
                <CardDescription>Complétez toutes les étapes pour soumettre votre candidature.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-4 mb-4">
                    <AfroLionIcon className={cn("h-10 w-10 text-primary transition-transform", progressValue === 100 && "animate-bounce")} />
                    <Progress value={progressValue} className="w-full" />
                    <span className="font-bold font-mono text-lg text-primary">{Math.round(progressValue)}%</span>
                </div>
                 <ol className="space-y-4">
                    {steps.map((step, stepIdx) => (
                        <li key={step.name} className="flex items-center">
                        {step.status === 'complete' ? (
                            <>
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                                <svg className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="ml-3 text-sm font-medium">{step.name}</p>
                            </>
                        ) : step.status === 'current' ? (
                            <>
                             <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary">
                                <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                            </div>
                            <p className="ml-3 text-sm font-semibold text-primary">{step.name}</p>
                            </>
                        ) : (
                            <>
                            <div className="h-6 w-6 rounded-full bg-gray-200" />
                            <p className="ml-3 text-sm text-muted-foreground">{step.name}</p>
                            </>
                        )}
                        </li>
                    ))}
                 </ol>
            </CardContent>
             <CardFooter>
                <Button variant="outline" className="w-full">Sauvegarder le brouillon</Button>
            </CardFooter>
        </Card>
    )
}

const FileUpload = () => {
    return (
        <div className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center bg-card hover:border-primary transition-colors">
                <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">Cliquez pour télécharger</span> ou glissez-déposez
                </p>
                <p className="text-xs text-muted-foreground">Jusqu'à 5 Go par fichier. PDF, JPG, PNG, MP4 pris en charge.</p>
            </div>
            <div className="space-y-2">
                <p className="font-medium text-sm">Fichiers téléchargés:</p>
                <div className="flex items-center justify-between p-2 rounded-md bg-accent/10 border border-accent/20">
                    <div className="flex items-center gap-2">
                        <File className="h-5 w-5 text-accent"/>
                        <span className="text-sm font-medium">business_plan_final.pdf</span>
                    </div>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                        <X className="h-4 w-4"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

const BarterCode = () => {
    return (
        <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle className="font-headline text-xl">Code de troc partenaire</CardTitle>
                <CardDescription>Si vous avez un code de troc de l'un de nos partenaires, entrez-le ici pour ne pas payer les frais de candidature.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="flex gap-2">
                    <Input placeholder="Entrez votre code de troc"/>
                    <Button variant="secondary">Appliquer le code</Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default function ApplicationPage() {
  return (
    <div className="container mx-auto py-8">
        <h1 className="font-headline text-3xl font-bold mb-2">Ma Candidature</h1>
        <p className="text-muted-foreground mb-8">Soumettez votre candidature pour les prix AFCAA 2026.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Étape 3 : Les 5 Piliers d'Excellence</CardTitle>
                        <CardDescription>Fournissez des preuves et des descriptions détaillées pour chacun des cinq piliers. Téléchargez les documents justificatifs ci-dessous.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                         <div className="space-y-2">
                            <Label htmlFor="pillar1">Pilier 1 : Vision & Stratégie</Label>
                            <Textarea id="pillar1" placeholder="Décrivez la vision et la stratégie à long terme de votre entreprise..." rows={4}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="pillar2">Pilier 2 : Performance Financière</Label>
                            <Textarea id="pillar2" placeholder="Détaillez votre croissance financière, votre rentabilité et votre stabilité..." rows={4}/>
                        </div>
                         <div className="space-y-2">
                            <Label>Documents justificatifs</Label>
                            <FileUpload />
                        </div>
                    </CardContent>
                </Card>
                
                <BarterCode />

                <div className="flex justify-between">
                    <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4"/> Étape précédente</Button>
                    <Button><ArrowRight className="mr-2 h-4 w-4"/> Étape suivante</Button>
                </div>

            </div>
            <div className="lg:col-span-1 sticky top-24">
               <ApplicationProgress />
            </div>
        </div>
    </div>
  );
}
