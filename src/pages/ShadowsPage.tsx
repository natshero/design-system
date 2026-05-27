import { ComponentDoc, DocSection } from "@/components/templates/component-doc"

export default function ShadowsPage() {
  return (
    <ComponentDoc title="Sombras & Elevação" description="Sistema de profundidade da interface baseada em camadas.">
      <DocSection title="Elevações Padrão" description="Sombras suaves para criar hierarquia visual entre os componentes.">
        <div className="flex flex-wrap gap-8">
          <div className="w-28 h-28 bg-card rounded-lg shadow-sm border flex items-center justify-center text-xs text-muted-foreground flex-col gap-1 relative">
            <span className="font-semibold text-foreground">sm</span>
            <span>Cards</span>
            <code className="absolute bottom-2 text-[10px] text-primary">shadow-sm</code>
          </div>
          <div className="w-28 h-28 bg-card rounded-lg shadow-md border flex items-center justify-center text-xs text-muted-foreground flex-col gap-1 relative">
            <span className="font-semibold text-foreground">md</span>
            <span>Dropdowns</span>
            <code className="absolute bottom-2 text-[10px] text-primary">shadow-md</code>
          </div>
          <div className="w-28 h-28 bg-card rounded-lg shadow-lg border flex items-center justify-center text-xs text-muted-foreground flex-col gap-1 relative">
            <span className="font-semibold text-foreground">lg</span>
            <span>Modais</span>
            <code className="absolute bottom-2 text-[10px] text-primary">shadow-lg</code>
          </div>
        </div>
      </DocSection>

      <DocSection title="Sombras Brilhantes (Glow)" description="Sombras coloridas exclusivas do MI Tool para dar aspecto premium e chamativo a ações principais.">
        <div className="flex flex-wrap gap-8">
          <div className="w-48 h-32 rounded-lg border flex flex-col gap-1 items-center justify-center text-xs text-white shadow-[0_4px_20px_rgba(26,136,255,0.40)] relative" style={{background: "#1A88FF"}}>
            <span className="font-semibold text-[13px]">Brand Glow</span>
            <span className="opacity-80 text-[10px]">Primary CTAs</span>
            <code className="absolute bottom-2 text-[9px] bg-black/30 p-1 rounded font-mono">shadow-primary/40</code>
          </div>
          <div className="w-48 h-32 rounded-lg border flex flex-col gap-1 items-center justify-center text-xs text-white shadow-[0_4px_20px_rgba(255,1,103,0.35)] relative" style={{background: "#FF0167"}}>
            <span className="font-semibold text-[13px]">Accent Glow</span>
            <span className="opacity-80 text-[10px]">Highlights</span>
            <code className="absolute bottom-2 text-[9px] bg-black/30 p-1 rounded font-mono">shadow-accent/35</code>
          </div>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
