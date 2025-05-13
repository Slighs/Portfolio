import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"

interface ExperienceCardProps {
  company: string
  position: string
  period: string
  location: string
  responsibilities: string[]
}

export default function ExperienceCard({ company, position, period, location, responsibilities }: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold">{position}</h3>
            <p className="text-lg text-primary">{company}</p>
          </div>
          <div className="text-sm text-muted-foreground flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {period}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-3 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
        <ul className="list-disc list-inside space-y-1">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm">
              {responsibility}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
