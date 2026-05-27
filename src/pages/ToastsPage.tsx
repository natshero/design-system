import { ComponentDoc, DocSection } from "@/components/templates/component-doc"
import { CheckCircle2, Info, X } from "lucide-react"

export default function ToastsPage() {
  return (
    <ComponentDoc title="Toasts" description="Notificações flutuantes assíncronas no canto da tela.">
      <DocSection title="Variações de Toast" description="Exibição de mensagens rápidas que somem sozinhas.">
        <div className="flex flex-col gap-4 w-full max-w-sm relative bg-muted/20 p-8 rounded-xl h-[400px]">
          
          <div className="flex gap-3 p-3.5 rounded-md border bg-card shadow-lg relative items-start transform transition-transform hover:-translate-y-1">
            <CheckCircle2 className="h-[18px] w-[18px] text-[#07C6C3] shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-[13px] font-semibold mb-0.5">Configurações salvas</h4>
              <p className="text-[12px] text-muted-foreground">As alterações foram aplicadas ao projeto e já estão em vigor.</p>
            </div>
            <button className="text-muted-foreground/60 hover:text-foreground">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="flex gap-3 p-3.5 rounded-md border bg-card shadow-lg relative items-start">
            <Info className="h-[18px] w-[18px] text-[#1A88FF] shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="text-[13px] font-semibold mb-0.5">Sincronização em andamento</h4>
              <p className="text-[12px] text-muted-foreground">Buscando novos dados do provedor (Apple Search Ads).</p>
            </div>
            <button className="text-muted-foreground/60 hover:text-foreground">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>
      </DocSection>
    </ComponentDoc>
  )
}
