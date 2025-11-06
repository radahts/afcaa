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
import { candidates } from "@/lib/data";
import { Medal, Trophy, Vote as VoteIcon } from "lucide-react";

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

const CandidateCard = ({ candidate }: { candidate: typeof candidates[0] }) => {
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
        <Button className="w-full" variant="default">
            <VoteIcon className="mr-2 h-4 w-4"/>
            Vote for {candidate.name.split(' ')[0]}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Leaderboard = () => {
    const sortedCandidates = [...candidates].sort((a, b) => b.votes - a.votes);
    const maxVotes = sortedCandidates[0]?.votes || 1;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                    <Trophy className="text-primary"/>
                    Live Leaderboard
                </CardTitle>
                <CardDescription>Votes are updated in real-time. One vote per person, per day.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-12">Rank</TableHead>
                            <TableHead>Candidate</TableHead>
                            <TableHead className="text-right">Votes</TableHead>
                            <TableHead className="w-1/3">Progress</TableHead>
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

export default function VotePage() {
  return (
    <>
      <PageHeader title="People's Choice Award" description="Your vote matters! Support your favorite franchise and help them win the coveted People's Choice Award." />
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h2 className="font-headline text-2xl font-bold mb-6">Top Contenders</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {candidates.map((candidate) => (
                        <CandidateCard key={candidate.id} candidate={candidate} />
                    ))}
                </div>
            </div>
            <div>
                <h2 className="font-headline text-2xl font-bold mb-6">Standings</h2>
                <Leaderboard />
            </div>
        </div>
      </div>
    </>
  );
}
