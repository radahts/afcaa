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
import type { Icon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { adminStats, candidates } from "@/lib/data";

const StatCard = ({ title, value, icon: Icon }: { title: string, value: string, icon: Icon }) => (
    <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
        </CardContent>
    </Card>
)

export default function AdminPage() {
  return (
    <div className="container mx-auto py-8">
        <div className="flex items-center justify-between mb-8">
            <h1 className="font-headline text-3xl font-bold">
                Admin Back-Office
            </h1>
            <div className="flex items-center gap-2">
                <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Moderate Content
                </Button>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button>
                            <Download className="mr-2 h-4 w-4" />
                            Export Data
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Export Options</DropdownMenuLabel>
                        <DropdownMenuItem>Export Candidates (CSV)</DropdownMenuItem>
                        <DropdownMenuItem>Export Voters (JSON)</DropdownMenuItem>
                        <DropdownMenuItem>Export All Stats (PDF)</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {adminStats.map(stat => <StatCard key={stat.title} {...stat} />)}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Recent Applications</CardTitle>
          <CardDescription>
            A list of the most recent candidate applications for review.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Submitted</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidates.slice(0, 5).map((candidate) => (
                <TableRow key={candidate.id}>
                  <TableCell className="font-medium">{candidate.name}</TableCell>
                  <TableCell>{candidate.category}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Pending Review</Badge>
                  </TableCell>
                  <TableCell>{new Date().toLocaleDateString()}</TableCell>
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
                        <DropdownMenuItem>View Application</DropdownMenuItem>
                        <DropdownMenuItem>Approve</DropdownMenuItem>
                         <DropdownMenuItem className="text-destructive">Reject</DropdownMenuItem>
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
