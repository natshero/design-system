import { ComponentDoc, DocSection } from "@/components/templates/component-doc"

export default function ColorsPage() {
  return (
    <ComponentDoc 
      title="Cores & Identidade" 
      description="Paleta de cores principal do Design System MI Tool. Todas as cores devem ser consumidas via classes nativas do Tailwind."
    >
      <DocSection title="Cores de Marca (Brand)" description="A essência visual da identidade.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <div className="flex flex-col gap-2">
            <div className="h-24 rounded-md bg-primary border border-border shadow-sm flex flex-col justify-between p-3 text-white">
              <span className="font-mono text-xs opacity-80">#1A88FF</span>
              <span className="font-mono text-[11px] font-semibold tracking-wider">bg-primary</span>
            </div>
            <div>
              <p className="font-medium text-[13px]">Brand (Primary)</p>
              <p className="text-[11px] text-muted-foreground">Cor de texto: text-primary</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="h-24 rounded-md bg-[#0050E5] border border-border shadow-sm flex flex-col justify-between p-3 text-white">
              <span className="font-mono text-xs opacity-80">#0050E5</span>
              <span className="font-mono text-[11px] font-semibold tracking-wider">bg-[#0050E5]</span>
            </div>
            <div>
              <p className="font-medium text-[13px]">Brand Dark</p>
              <p className="text-[11px] text-muted-foreground">Cor hardcoded para contrastes fortes.</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="h-24 rounded-md bg-accent border border-border shadow-sm flex flex-col justify-between p-3 text-white">
              <span className="font-mono text-xs opacity-80">#FF0167</span>
              <span className="font-mono text-[11px] font-semibold tracking-wider">bg-accent</span>
            </div>
            <div>
              <p className="font-medium text-[13px]">Accent</p>
              <p className="text-[11px] text-muted-foreground">Cor de texto: text-accent</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="h-24 rounded-md bg-[#07C6C3] border border-border shadow-sm flex flex-col justify-between p-3 text-white">
              <span className="font-mono text-xs opacity-80">#07C6C3</span>
              <span className="font-mono text-[11px] font-semibold tracking-wider">bg-[#07C6C3]</span>
            </div>
            <div>
              <p className="font-medium text-[13px]">Brand Secondary</p>
              <p className="text-[11px] text-muted-foreground">O complemento ciano (Teal).</p>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="Cores Semânticas (Status)" description="Utilizadas universalmente para prover feedback. Consuma as classes utilitárias no seu código.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <div className="flex flex-col gap-2">
            <div className="h-24 rounded-md bg-info border border-border flex flex-col justify-between p-3 text-white shadow-sm">
              <span className="font-mono text-xs opacity-80">#1A88FF</span>
              <span className="font-mono text-[11px] font-semibold tracking-wider">bg-info</span>
            </div>
            <div>
              <p className="font-medium text-[13px]">Informação</p>
              <p className="text-[11px] text-muted-foreground">Uso: text-info, border-info</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-24 rounded-md bg-success border border-border flex flex-col justify-between p-3 text-white shadow-sm">
              <span className="font-mono text-xs opacity-80">#07C6C3</span>
              <span className="font-mono text-[11px] font-semibold tracking-wider">bg-success</span>
            </div>
            <div>
              <p className="font-medium text-[13px]">Sucesso</p>
              <p className="text-[11px] text-muted-foreground">Uso: text-success, border-success</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-24 rounded-md bg-warning border border-border flex flex-col justify-between p-3 text-white shadow-sm">
              <span className="font-mono text-xs opacity-80">#F59E0B</span>
              <span className="font-mono text-[11px] font-semibold tracking-wider">bg-warning</span>
            </div>
            <div>
              <p className="font-medium text-[13px]">Atenção / Alerta</p>
              <p className="text-[11px] text-muted-foreground">Uso: text-warning, border-warning</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-24 rounded-md bg-error border border-border flex flex-col justify-between p-3 text-white shadow-sm">
              <span className="font-mono text-xs opacity-80">#E24B4A</span>
              <span className="font-mono text-[11px] font-semibold tracking-wider">bg-error</span>
            </div>
            <div>
              <p className="font-medium text-[13px]">Erro / Falha</p>
              <p className="text-[11px] text-muted-foreground">Uso: text-error, border-error</p>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="Cores Analíticas (Charts)" description="Cores sequenciais usadas estritamente para visualização de dados (Recharts/Chart.js).">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 w-full">
          {[
            { id: "1", hex: "#1A88FF", var: "--chart-1" },
            { id: "2", hex: "#07C6C3", var: "--chart-2" },
            { id: "3", hex: "#FF0167", var: "--chart-3" },
            { id: "4", hex: "#FF5700", var: "--chart-4" },
            { id: "5", hex: "#00D9FF", var: "--chart-5" },
          ].map((chart) => (
            <div key={chart.id} className="flex flex-col gap-2">
              <div 
                className="h-16 rounded-md border border-border shadow-sm flex flex-col justify-between p-2 text-white"
                style={{ backgroundColor: chart.hex }}
              >
                <span className="font-mono text-[10px] font-semibold">var({chart.var})</span>
              </div>
              <p className="text-[11px] font-medium text-foreground">Chart {chart.id}</p>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="Superfícies (Light & Dark)" description="Classes para definir fundos base, fundos de cards e containers.">
        <div className="flex flex-col gap-6 w-full">
          <div>
            <h4 className="text-[13px] font-semibold mb-3">Backgrounds e Containers Principais</h4>
            <div className="flex gap-2 p-4 bg-background rounded-lg border border-border">
              <div className="flex-1 h-20 rounded-md bg-background border border-border flex flex-col items-center justify-center text-xs text-foreground shadow-sm">
                <span className="font-bold">bg-background</span>
                <span className="text-[10px] text-muted-foreground mt-1">Fundo principal da tela</span>
              </div>
              <div className="flex-1 h-20 rounded-md bg-card border border-border flex flex-col items-center justify-center text-xs text-foreground shadow-sm">
                <span className="font-bold">bg-card</span>
                <span className="text-[10px] text-muted-foreground mt-1">Containers de widgets</span>
              </div>
              <div className="flex-1 h-20 rounded-md bg-muted border border-border flex flex-col items-center justify-center text-xs text-foreground shadow-sm">
                <span className="font-bold">bg-muted</span>
                <span className="text-[10px] text-muted-foreground mt-1">Áreas inativas/secundárias</span>
              </div>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="Gradientes (Gradients)" description="O toque luxuoso para avatares, fundos especiais e marketing.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="h-32 rounded-xl border border-border flex items-center justify-center text-white font-medium text-[13px] shadow-sm" style={{background: "linear-gradient(135deg, #1A88FF, #07C6C3)"}}>
            Ocean Breeze (Brand to Teal)
          </div>
          <div className="h-32 rounded-xl border border-border flex items-center justify-center text-white font-medium text-[13px] shadow-sm" style={{background: "linear-gradient(135deg, #FF0167, #FF5700)"}}>
            Sunset (Accent to Orange)
          </div>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
