

import {
  Card,
  CardContent,
  CardDescription,
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
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Download, FileText } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { adminStats, candidates } from "@/lib/data";
import { StatCard } from "@/components/shared/stat-card";


export default function AdminPage() {
  return (
    <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
            <h1 className="font-headline text-3xl font-bold">
                Back-Office Administrateur
            </h1>
            <div className="flex w-full sm:w-auto items-center gap-2">
                <Button variant="outline" className="w-full sm:w-auto">
                    <FileText className="mr-2 h-4 w-4" />
                    Modérer
                </Button>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="w-full sm:w-auto">
                            <Download className="mr-2 h-4 w-4" />
                            Exporter
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Options d'exportation</DropdownMenuLabel>
                        <DropdownMenuItem>Exporter les candidats (CSV)</DropdownMenuItem>
                        <DropdownMenuItem>Exporter les votants (JSON)</DropdownMenuItem>
                        <DropdownMenuItem>Exporter toutes les statistiques (PDF)</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {adminStats.map(stat => <StatCard key={stat.title} {...stat} />)}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Candidatures Récentes</CardTitle>
          <CardDescription>
            Liste des candidatures les plus récentes à examiner.
          </CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidat</TableHead>
                <TableHead>Catégorie</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidates.slice(0, 5).map((candidate) => (
                <TableRow key={candidate.id}>
                  <TableCell className="font-medium whitespace-nowrap">{candidate.name}</TableCell>
                  <TableCell className="whitespace-nowrap">{candidate.category}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">En attente</Badge>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">{new Date().toLocaleDateString('fr-FR')}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Voir</DropdownMenuItem>
                        <DropdownMenuItem>Approuver</DropdownMenuItem>
                         <DropdownMenuItem className="text-destructive">Rejeter</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
