
"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { candidates as initialCandidates } from "@/lib/data";
import { Medal, Trophy, Vote as VoteIcon, Mail, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PageHeader = ({ title, description }: { title: string; description: string }) => (
    <div className="bg-card py-12">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl text-primary">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );

type Candidate = typeof initialCandidates[0];

const CandidateCard = ({ candidate, onVote }: { candidate: Candidate, onVote: (candidate: Candidate) => void }) => {
  const image = PlaceHolderImages.find((img) => img.id === candidate.photo);
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        {image && (
          <div className="aspect-[4/3] relative">
            <Image
              src={image.imageUrl}
              alt={candidate.name}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="font-headline text-xl">{candidate.name}</CardTitle>
        <CardDescription className="text-sm text-primary font-semibold mt-1">{candidate.category}</CardDescription>
        <p className="text-muted-foreground mt-2 text-sm">{candidate.pitch}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" variant="default" onClick={() => onVote(candidate)}>
            <VoteIcon className="mr-2 h-4 w-4"/>
            Voter pour {candidate.name.split(' ')[0]}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Leaderboard = ({ candidates }: { candidates: Candidate[] }) => {
    const sortedCandidates = [...candidates].sort((a, b) => b.votes - a.votes);
    const maxVotes = sortedCandidates[0]?.votes || 1;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                    <Trophy className="text-primary"/>
                    Classement en direct
                </CardTitle>
                <CardDescription>Les votes sont mis à jour en temps réel. Un vote par personne, par jour.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-12">Rang</TableHead>
                            <TableHead>Candidat</TableHead>
                            <TableHead className="text-right">Votes</TableHead>
                            <TableHead className="w-1/3">Progression</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sortedCandidates.map((candidate, index) => (
                            <TableRow key={candidate.id}>
                                <TableCell className="font-bold text-center">
                                    {index === 0 ? <Medal className="w-6 h-6 text-primary mx-auto" /> : index + 1}
                                </TableCell>
                                <TableCell className="font-medium">{candidate.name}</TableCell>
                                <TableCell className="text-right font-mono">{candidate.votes.toLocaleString()}</TableCell>
                                <TableCell>
                                    <Progress value={(candidate.votes / maxVotes) * 100} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}

const VoteDialog = ({ candidate, open, onOpenChange }: { candidate: Candidate | null, open: boolean, onOpenChange: (open: boolean) => void }) => {
    const [email, setEmail] = useState('');
    const [step, setStep] = useState<'email' | 'confirmation'>('email');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically trigger an API call to send a verification email
        console.log(`Sending verification to ${email} for candidate ${candidate?.id}`);
        setStep('confirmation');
    };
    
    const handleClose = () => {
        onOpenChange(false);
        // Reset state after a short delay to allow for fade-out animation
        setTimeout(() => {
            setStep('email');
            setEmail('');
        }, 300);
    }

    if (!candidate) return null;

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                {step === 'email' && (
                    <>
                        <DialogHeader>
                            <DialogTitle>Voter pour <span className="text-primary">{candidate.name}</span></DialogTitle>
                            <DialogDescription>
                                Pour valider votre vote, veuillez entrer votre adresse e-mail. Un lien de vérification vous sera envoyé.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="email" className="text-right">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="col-span-3"
                                        placeholder="vous@exemple.com"
                                        required
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Vérifier mon vote</Button>
                            </DialogFooter>
                        </form>
                    </>
                )}
                {step === 'confirmation' && (
                     <div className="text-center p-8">
                        <Mail className="mx-auto h-16 w-16 text-green-500" />
                        <DialogTitle className="mt-4">Vérifiez votre boîte de réception !</DialogTitle>
                        <DialogDescription className="mt-2">
                           Un e-mail de confirmation a été envoyé à <span className="font-semibold text-foreground">{email}</span>. Cliquez sur le lien dans l'e-mail pour confirmer votre vote pour <span className="font-semibold text-primary">{candidate.name}</span>.
                        </DialogDescription>
                         <Button onClick={handleClose} className="mt-6">
                            Fermer
                        </Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};


export default function VotePage() {
    const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
    const [isVoteDialogOpen, setIsVoteDialogOpen] = useState(false);

    const handleVote = (candidate: Candidate) => {
        setSelectedCandidate(candidate);
        setIsVoteDialogOpen(true);
    };

    return (
    <>
      <PageHeader title="Prix du Public" description="Votre vote compte ! Soutenez votre franchise préférée et aidez-la à remporter le très convoité Prix du Public." />
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h2 className="font-headline text-2xl font-bold mb-6">Principaux concurrents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {initialCandidates.map((candidate) => (
                        <CandidateCard key={candidate.id} candidate={candidate} onVote={handleVote} />
                    ))}
                </div>
            </div>
            <div>
                <h2 className="font-headline text-2xl font-bold mb-6">Classement</h2>
                <Leaderboard candidates={initialCandidates} />
            </div>
        </div>
      </div>
      <VoteDialog 
        candidate={selectedCandidate}
        open={isVoteDialogOpen}
        onOpenChange={setIsVoteDialogOpen}
      />
    </>
  );
}
