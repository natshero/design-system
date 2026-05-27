import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { cn } from "@/lib/utils"

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  trend?: {
    value: string
    label?: string
    direction?: "up" | "down" | "neutral"
  }
  icon?: React.ReactNode
}

export function StatCard({
  title,
  value,
  trend,
  icon,
  className,
  ...props
}: StatCardProps) {
  return (
    <Card className={cn("w-full shadow-sm", className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-[13px] font-medium text-muted-foreground">{title}</CardTitle>
        {icon && (
          <div className="h-4 w-4 text-muted-foreground">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold font-sans tabular-nums text-foreground tracking-tight">{value}</div>
        {trend && (
          <p className="text-[11px] mt-1 text-muted-foreground flex items-center gap-1">
            <span
              className={cn("font-medium", {
                "text-success": trend.direction === "up",
                "text-destructive": trend.direction === "down",
                "text-muted-foreground": trend.direction === "neutral" || !trend.direction,
              })}
            >
              {trend.value}
            </span>
            {trend.label && <span>{trend.label}</span>}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
