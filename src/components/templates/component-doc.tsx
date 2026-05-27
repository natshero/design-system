import React from "react"
import { Separator } from "@/components/atoms/separator"

interface ComponentDocProps {
  title: string
  description: string
  children: React.ReactNode
}

export function ComponentDoc({ title, description, children }: ComponentDocProps) {
  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto w-full pb-12">
      <div>
        <h1 className="text-3xl font-heading font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground mt-2">{description}</p>
        <Separator className="my-6" />
      </div>
      <div className="flex flex-col gap-12">
        {children}
      </div>
    </div>
  )
}

interface DocSectionProps {
  title: string
  description?: string
  children: React.ReactNode
}

export function DocSection({ title, description, children }: DocSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-xl font-heading font-semibold tracking-tight">{title}</h3>
        {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 md:p-10 flex flex-wrap items-center gap-6 justify-center bg-muted/20">
          {children}
        </div>
      </div>
    </div>
  )
}
