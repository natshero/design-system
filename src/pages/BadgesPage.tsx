import { ComponentDoc, DocSection } from "@/components/templates/component-doc"
import { Badge } from "@/components/atoms/badge"

export default function BadgesPage() {
  return (
    <ComponentDoc 
      title="Badges & Tags" 
      description="Indicadores visuais para classificar, destacar ou sinalizar status no sistema."
    >
      <DocSection title="Status Semânticos" description="Utilizados para representar o estado atual de um item ou processo.">
        <div className="flex flex-wrap gap-4">
          <Badge variant="brand" className="gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span> Brand
          </Badge>
          <Badge variant="success" className="gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span> Success
          </Badge>
          <Badge variant="warning" className="gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span> Warning
          </Badge>
          <Badge variant="error" className="gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span> Error
          </Badge>
          <Badge variant="outline" className="gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span> Default
          </Badge>
        </div>
      </DocSection>

      <DocSection title="Tags Analíticas" description="Usadas em Dashboards para sinalizar categorias de forma vibrante.">
        <div className="flex flex-wrap gap-4">
          <Badge variant="error" className="px-2.5 py-0.5 rounded-sm text-[11px] font-semibold">
            Anomalia
          </Badge>
          <Badge variant="success" className="px-2.5 py-0.5 rounded-sm text-[11px] font-semibold">
            Otimizado
          </Badge>
          <Badge variant="outline" className="px-2.5 py-0.5 rounded-sm text-[11px] font-semibold">
            Outline
          </Badge>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
