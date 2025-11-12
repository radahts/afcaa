
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Line,
  LineChart,
  Tooltip,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";
import { partnerStats } from "@/lib/data";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { name: "Jan", leads: 400, impressions: 240000 },
  { name: "Fév", leads: 300, impressions: 139800 },
  { name: "Mar", leads: 500, impressions: 980000 },
  { name: "Avr", leads: 478, impressions: 390800 },
  { name: "Mai", leads: 689, impressions: 480000 },
  { name: "Juin", leads: 580, impressions: 380000 },
  { name: "Juil", leads: 790, impressions: 430000 },
];

const roiData = [
    { activity: 'Logo sur la page d\'accueil', impressions: '550k', leads: 1200, signed: 12, status: 'En direct' },
    { activity: 'Sponsor de catégorie', impressions: '210k', leads: 850, signed: 8, status: 'En direct' },
    { activity: 'Mention dans la newsletter', impressions: '80k', leads: 450, signed: 5, status: 'Terminé' },
    { activity: 'Branding de l\'événement de gala', impressions: 'N/A', leads: 25, signed: 2, status: 'À venir' },
]

const StatCard = ({ title, value, change, icon: Icon }: { title: string, value: string, change: string, icon: LucideIcon }) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">{change} vs période précédente</p>
        </CardContent>
    </Card>
)

export default function PartnerPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="font-headline text-3xl font-bold mb-8">
        Tableau de Bord Analytique Partenaire
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {partnerStats.map(stat => <StatCard key={stat.title} {...stat} />)}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <Card className="lg:col-span-3">
            <CardHeader>
                <CardTitle className="font-headline">Aperçu des performances</CardTitle>
                <CardDescription>Pistes et impressions générées au fil du temps.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" stroke="hsl(var(--primary))" />
                        <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--accent))" />
                        <Tooltip
                            content={<ChartTooltipContent />}
                        />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="impressions" name="Impressions" stroke="hsl(var(--primary))" strokeWidth={2} />
                        <Line yAxisId="right" type="monotone" dataKey="leads" name="Pistes" stroke="hsl(var(--accent))" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>

        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle className="font-headline">Répartition du ROI</CardTitle>
                <CardDescription>Performance de vos activités de partenariat.</CardDescription>
            </CardHeader>
            <CardContent className="overflow-x-auto">
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Activité</TableHead>
                            <TableHead>Pistes</TableHead>
                            <TableHead>Statut</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {roiData.map(item => (
                            <TableRow key={item.activity}>
                                <TableCell className="font-medium whitespace-nowrap">{item.activity}</TableCell>
                                <TableCell>{item.leads}</TableCell>
                                <TableCell>
                                    <Badge variant={item.status === 'En direct' ? 'default' : item.status === 'Terminé' ? 'secondary' : 'outline'} className={item.status === 'En direct' ? 'bg-green-500 text-white' : ''}>{item.status}</Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
