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
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  LineChart,
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
import type { Icon } from "lucide-react";
import { partnerStats } from "@/lib/data";

const chartData = [
  { name: "Jan", leads: 400, impressions: 240000 },
  { name: "Feb", leads: 300, impressions: 139800 },
  { name: "Mar", leads: 500, impressions: 980000 },
  { name: "Apr", leads: 478, impressions: 390800 },
  { name: "May", leads: 689, impressions: 480000 },
  { name: "Jun", leads: 580, impressions: 380000 },
  { name: "Jul", leads: 790, impressions: 430000 },
];

const roiData = [
    { activity: 'Logo on Homepage', impressions: '550k', leads: 1200, signed: 12, status: 'Live' },
    { activity: 'Category Sponsorship', impressions: '210k', leads: 850, signed: 8, status: 'Live' },
    { activity: 'Newsletter Mention', impressions: '80k', leads: 450, signed: 5, status: 'Completed' },
    { activity: 'Gala Event Branding', impressions: 'N/A', leads: 25, signed: 2, status: 'Upcoming' },
]

const StatCard = ({ title, value, change, icon: Icon }: { title: string, value: string, change: string, icon: Icon }) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">{change} vs last period</p>
        </CardContent>
    </Card>
)

export default function PartnerPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="font-headline text-3xl font-bold mb-8">
        Partner Analytics Dashboard
      </h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {partnerStats.map(stat => <StatCard key={stat.title} {...stat} />)}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <Card className="lg:col-span-3">
            <CardHeader>
                <CardTitle className="font-headline">Performance Overview</CardTitle>
                <CardDescription>Leads and impressions generated over time.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" stroke="#f39c12" />
                        <YAxis yAxisId="right" orientation="right" stroke="#00a859" />
                        <Tooltip
                            contentStyle={{
                                background: "hsl(var(--background))",
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "var(--radius)",
                            }}
                        />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="impressions" name="Impressions" stroke="#f39c12" strokeWidth={2} />
                        <Line yAxisId="right" type="monotone" dataKey="leads" name="Leads" stroke="#00a859" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>

        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle className="font-headline">ROI Breakdown</CardTitle>
                <CardDescription>Performance of your partnership activities.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Activity</TableHead>
                            <TableHead>Leads</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {roiData.map(item => (
                            <TableRow key={item.activity}>
                                <TableCell className="font-medium">{item.activity}</TableCell>
                                <TableCell>{item.leads}</TableCell>
                                <TableCell>
                                    <Badge variant={item.status === 'Live' ? 'default' : item.status === 'Completed' ? 'secondary' : 'outline'} className={item.status === 'Live' ? 'bg-green-500 text-white' : ''}>{item.status}</Badge>
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
