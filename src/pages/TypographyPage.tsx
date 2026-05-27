import { ComponentDoc, DocSection } from "@/components/templates/component-doc"

export default function TypographyPage() {
  return (
    <ComponentDoc 
      title="Tipografia" 
      description="Arquitetura de fontes escalável, combinando Space Grotesk para títulos e Inter para interfaces limpas e leitura prolongada."
    >
      <DocSection title="Display & Títulos (Space Grotesk)" description="Usado exclusivamente para Headings (Títulos). Adiciona um ar tecnológico e moderno ao Design System.">
        <div className="flex flex-col gap-8 w-full font-heading">
          <div className="flex items-center gap-6 pb-6 border-b border-border">
            <h1 className="text-5xl font-bold tracking-tight w-2/3">Space Grotesk 48px</h1>
            <div className="flex-1 text-right text-sm text-muted-foreground font-sans">
              Display H1<br/>
              <code className="text-xs bg-muted p-1 rounded font-mono text-primary">text-5xl font-bold font-heading</code>
            </div>
          </div>
          <div className="flex items-center gap-6 pb-6 border-b border-border">
            <h2 className="text-4xl font-semibold tracking-tight w-2/3">Quase lá, falta pouco.</h2>
            <div className="flex-1 text-right text-sm text-muted-foreground font-sans">
              Heading H2<br/>
              <code className="text-xs bg-muted p-1 rounded font-mono text-primary">text-4xl font-semibold font-heading</code>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <h3 className="text-2xl font-medium tracking-normal w-2/3">Pequenos títulos e chamadas</h3>
            <div className="flex-1 text-right text-sm text-muted-foreground font-sans">
              Heading H3<br/>
              <code className="text-xs bg-muted p-1 rounded font-mono text-primary">text-2xl font-medium font-heading</code>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="UI & Corpo de Texto (Inter)" description="Fonte sans-serif altamente legível para todos os parágrafos, botões e labels.">
        <div className="w-full flex flex-col gap-6 font-sans">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 bg-muted/20 rounded-lg border border-border">
            <div className="col-span-1 flex flex-col gap-2">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Base Text</span>
              <code className="text-[10px] w-fit bg-background border border-border p-1 rounded font-mono text-primary">text-[14px] font-sans</code>
            </div>
            <div className="col-span-3">
              <p className="text-[14px] leading-relaxed text-foreground">
                O corpo principal de texto no sistema. Usado em descrições de tabelas, conteúdos de modal e textos de ajuda curtos. O tamanho de 14px garante que os Dashboards pareçam mais profissionais e condensem mais informação sem perder a elegância.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 bg-muted/20 rounded-lg border border-border">
            <div className="col-span-1 flex flex-col gap-2">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Small UI</span>
              <code className="text-[10px] w-fit bg-background border border-border p-1 rounded font-mono text-primary">text-[13px] font-sans</code>
            </div>
            <div className="col-span-3">
              <p className="text-[13px] text-foreground font-medium mb-1">Textos interativos (13px)</p>
              <p className="text-[13px] text-muted-foreground">
                Tamanho de ouro para todos os Inputs, Selects e botões secundários.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5 bg-muted/20 rounded-lg border border-border">
            <div className="col-span-1 flex flex-col gap-2">
              <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Micro Data</span>
              <code className="text-[10px] w-fit bg-background border border-border p-1 rounded font-mono text-primary">text-[11px] font-sans</code>
            </div>
            <div className="col-span-3">
              <span className="inline-block uppercase tracking-[0.06em] text-[11px] font-bold text-muted-foreground mb-2">
                Header de Tabela
              </span>
              <br/>
              <span className="inline-block text-[10px] font-semibold text-primary px-2 py-0.5 bg-primary/10 rounded-sm">
                TAG 10px
              </span>
            </div>
          </div>

        </div>
      </DocSection>
      
      <DocSection title="Números Analíticos (Tabular Nums)" description="Para métricas, tabelas financeiras e dashboards de performance.">
        <div className="w-full flex justify-between items-center bg-card p-6 rounded-lg border border-border shadow-sm font-sans">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Receita Mensal (Normal)</p>
            <p className="text-4xl font-bold">R$ 1.258.490,00</p>
          </div>
          <div className="text-right tabular-nums">
            <p className="text-sm font-medium text-muted-foreground mb-1">Receita Mensal (Tabular Nums)</p>
            <p className="text-4xl font-bold tracking-tight text-success">R$ 1.258.490,00</p>
          </div>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
