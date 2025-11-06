import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Check, Shield } from "lucide-react";
import { juryTasks } from "@/lib/data";


const EvaluationCard = ({ task }: { task: typeof juryTasks[0] }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="font-headline text-xl flex justify-between items-center">
                    <span>{task.category}</span>
                    {task.progress === task.total && <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center gap-1"><Check className="h-4 w-4" />Terminé</span>}
                </CardTitle>
                <CardDescription>ID Candidat: {task.id}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-muted-foreground">{task.progress}/{task.total}</span>
                    <Progress value={(task.progress / task.total) * 100} />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full" disabled={task.progress === task.total}>
                    {task.progress === 0 ? "Commencer l'évaluation" : "Continuer l'évaluation"}
                </Button>
            </CardFooter>
        </Card>
    )
}

export default function JuryPage() {
  const isComplete = juryTasks.every(t => t.progress === t.total);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="font-headline text-3xl font-bold">Tableau de Bord du Jury</h1>
          <p className="text-muted-foreground">
            Évaluez les candidatures assignées. Toutes les soumissions sont anonymisées.
          </p>
        </div>
        {isComplete && <Button variant="primary">Finaliser toutes les évaluations</Button>}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
            <h2 className="font-headline text-xl font-semibold">Tâches d'évaluation</h2>
            {juryTasks.map(task => (
                <EvaluationCard key={task.id} task={task} />
            ))}
        </div>

        <div className="lg:col-span-2">
            <Card className="sticky top-24">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="font-headline text-2xl">Évaluation : Impact Social</CardTitle>
                            <CardDescription>ID Candidat: uuid-beta-002</CardDescription>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground p-2 bg-muted rounded-md">
                            <Shield className="h-4 w-4 text-green-600"/>
                            <span>Anonymisé</span>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="relative aspect-video w-full rounded-md overflow-hidden bg-muted">
                        <Image src="https://picsum.photos/seed/blurry/800/450" alt="Blurred candidate photo" fill className="object-cover filter blur-lg" data-ai-hint="business office" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <p className="text-muted-foreground font-medium">Photo Anonymisée</p>
                        </div>
                    </div>

                    <Separator />
                    
                    <div className="space-y-6">
                        <div>
                            <Label className="text-base font-medium">Critère 1 : Innovation (Spécifique)</Label>
                            <div className="flex items-center gap-4 mt-2">
                                <Slider defaultValue={[65]} max={100} step={1} />
                                <span className="font-bold font-mono text-lg text-primary w-12 text-center">65</span>
                            </div>
                        </div>
                         <div>
                            <Label className="text-base font-medium">Critère 2 : Scalabilité (Transversal)</Label>
                            <div className="flex items-center gap-4 mt-2">
                                <Slider defaultValue={[80]} max={100} step={1} />
                                <span className="font-bold font-mono text-lg text-primary w-12 text-center">80</span>
                            </div>
                        </div>
                    </div>
                     <div className="space-y-2">
                        <Label className="text-base font-medium">Commentaires</Label>
                        <Textarea placeholder="Fournissez vos commentaires détaillés ici. Vos commentaires sont cruciaux pour la délibération finale..." rows={5}/>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Sauvegarder le brouillon</Button>
                    <Button>Soumettre et verrouiller le score</Button>
                </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  );
}
