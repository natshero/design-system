import * as React from "react"
import { Label } from "@/components/atoms/label"
import { cn } from "@/lib/utils"

export interface FormFieldProps {
  id: string
  label: string
  description?: string
  error?: string
  required?: boolean
  className?: string
  children: React.ReactNode
}

export function FormField({
  id,
  label,
  description,
  error,
  required,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2 w-full", className)}>
      <div className="flex items-center justify-between">
        <Label htmlFor={id} className={cn(error && "text-destructive")}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      </div>
      
      {/* We assume the child is an Input, Select, etc. We wrap it nicely. */}
      {/* If error is present, we pass a red border via CSS if the child supports className injection or we let the user handle it. */}
      {/* For purely visual dumb component display, we'll just render children. */}
      <div className={cn("relative w-full", error && "[&_input]:border-destructive [&_input]:focus-visible:ring-destructive")}>
        {children}
      </div>

      {(description || error) && (
        <div className="text-sm">
          {error ? (
            <p className="text-destructive font-medium">{error}</p>
          ) : (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      )}
    </div>
  )
}
