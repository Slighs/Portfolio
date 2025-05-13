import type React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  label: string
  icon?: React.ReactNode
  className?: string
}

export default function SkillBadge({ label, icon, className }: SkillBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className={cn("px-3 py-1 h-auto text-xs font-medium flex items-center justify-center", className)}
    >
      {icon}
      {label}
    </Badge>
  )
}
