import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

interface ProjectDetailCardProps {
  title: string
  date: string
  technologies: string[]
  description: string
  points: string[]
}

export default function ProjectDetailCard({ title, date, technologies, description, points }: ProjectDetailCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h2 className="text-2xl font-bold">{title}</h2>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <ul className="space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
