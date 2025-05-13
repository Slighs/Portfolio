import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"

interface EducationCardProps {
  institution: string
  degree: string
  period: string
  location: string
}

export default function EducationCard({ institution, degree, period, location }: EducationCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h3 className="text-xl font-bold">{institution}</h3>
            <p className="text-lg text-primary">{degree}</p>
          </div>
          <div className="text-sm text-muted-foreground flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {period}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
      </CardContent>
    </Card>
  )
}
