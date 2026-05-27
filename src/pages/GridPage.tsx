import { ComponentDoc, DocSection } from "@/components/templates/component-doc"

export default function GridPage() {
  return (
    <ComponentDoc title="Grid & Spacing" description="Sistema de espaçamento baseado em escala de múltiplos de 4px e 8px.">
      <DocSection title="Escala (Tokens)" description="As variáveis CSS de espaçamento garantem o ritmo vertical e horizontal perfeito.">
        <div className="flex flex-col gap-4 w-full max-w-xl">
          <div className="flex items-center gap-6 p-3 border-b bg-card rounded">
            <div className="w-16 text-xs font-mono text-muted-foreground">--sp-xs</div>
            <div className="w-8 text-xs font-bold">4px</div>
            <div className="flex-1 flex gap-2">
              <code className="text-[10px] bg-muted px-2 py-1 rounded font-mono text-primary">p-1</code>
              <code className="text-[10px] bg-muted px-2 py-1 rounded font-mono text-primary">gap-1</code>
              <code className="text-[10px] bg-muted px-2 py-1 rounded font-mono text-primary">m-1</code>
            </div>
            <div className="h-4 bg-primary/20 rounded-sm" style={{width: "4px"}}></div>
          </div>
          <div className="flex items-center gap-6 p-3 border-b bg-card rounded">
            <div className="w-16 text-xs font-mono text-muted-foreground">--sp-sm</div>
            <div className="w-8 text-xs font-bold">8px</div>
            <div className="flex-1 flex gap-2">
              <code className="text-[10px] bg-muted px-2 py-1 rounded font-mono text-primary">p-2</code>
              <code className="text-[10px] bg-muted px-2 py-1 rounded font-mono text-primary">gap-2</code>
            </div>
            <div className="h-4 bg-primary/30 rounded-sm" style={{width: "8px"}}></div>
          </div>
          <div className="flex items-center gap-6 p-3 border-b bg-card rounded">
            <div className="w-16 text-xs font-mono text-muted-foreground">--sp-md</div>
            <div className="w-8 text-xs font-bold">12px</div>
            <div className="flex-1 flex gap-2">
              <code className="text-[10px] bg-muted px-2 py-1 rounded font-mono text-primary">p-3</code>
              <code className="text-[10px] bg-muted px-2 py-1 rounded font-mono text-primary">gap-3</code>
            </div>
            <div className="h-4 bg-primary/40 rounded-sm" style={{width: "12px"}}></div>
          </div>
          <div className="flex items-center gap-6 p-3 border-b bg-card rounded">
            <div className="w-16 text-xs font-mono text-muted-foreground">--sp-lg</div>
            <div className="w-8 text-xs font-bold">16px</div>
            <div className="flex-1 flex gap-2">
              <code className="text-[10px] bg-muted px-2 py-1 rounded font-mono text-primary">p-4</code>
              <code className="text-[10px] bg-muted px-2 py-1 rounded font-mono text-primary">gap-4</code>
            </div>
            <div className="h-4 bg-primary/50 rounded-sm" style={{width: "16px"}}></div>
          </div>
          <div className="flex items-center gap-6 p-3 border-b bg-card rounded">
            <div className="w-16 text-xs font-mono text-muted-foreground">--sp-xl</div>
            <div className="w-8 text-xs font-bold">20px</div>
            <div className="flex-1 flex gap-2">
              <code className="text-[10px] bg-muted px-2 py-1 rounded font-mono text-primary">p-5</code>
              <code className="text-[10px] bg-muted px-2 py-1 rounded font-mono text-primary">gap-5</code>
            </div>
            <div className="h-4 bg-primary/60 rounded-sm" style={{width: "20px"}}></div>
          </div>
          <div className="flex items-center gap-6 p-3 border-b bg-card rounded">
            <div className="w-16 text-xs font-mono text-muted-foreground">--sp-2xl</div>
            <div className="w-8 text-xs font-bold">24px</div>
            <div className="flex-1 flex gap-2">
              <code className="text-[10px] bg-muted px-2 py-1 rounded font-mono text-primary">p-6</code>
              <code className="text-[10px] bg-muted px-2 py-1 rounded font-mono text-primary">gap-6</code>
            </div>
            <div className="h-4 bg-primary/70 rounded-sm" style={{width: "24px"}}></div>
          </div>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
