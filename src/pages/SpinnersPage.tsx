import { ComponentDoc, DocSection } from "@/components/templates/component-doc"
import { Loader2 } from "lucide-react"

export default function SpinnersPage() {
  return (
    <ComponentDoc title="Skeletons & Spinners" description="Indicadores visuais de carregamento e atraso de rede.">
      <DocSection title="Spinners Clássicos" description="Para pequenos elementos bloqueantes ou botões.">
        <div className="flex items-center gap-8">
          <div className="w-6 h-6 border-2 border-border border-t-primary rounded-full animate-spin"></div>
          <div className="w-8 h-8 border-[3px] border-border border-t-primary rounded-full animate-spin"></div>
          <Loader2 className="w-6 h-6 animate-spin text-primary" />
        </div>
      </DocSection>

      <DocSection title="Skeleton UI" description="Para carregamento progressivo de conteúdo visual e blocos.">
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-muted/80 rounded-full animate-pulse"></div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="h-4 bg-muted/80 rounded animate-pulse w-3/4"></div>
              <div className="h-3 bg-muted/80 rounded animate-pulse w-1/2"></div>
            </div>
          </div>
          <div className="h-24 bg-muted/80 rounded-md animate-pulse mt-4"></div>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
