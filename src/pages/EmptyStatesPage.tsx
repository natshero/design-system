import { ComponentDoc, DocSection } from "@/components/templates/component-doc"
import { Button } from "@/components/atoms/button"
import { EmptyState, EmptyStateIcon, EmptyStateTitle, EmptyStateDescription, EmptyStateAction } from "@/components/organisms/empty-state"
import { SearchX, Inbox, PieChart, Plus, Rocket } from "lucide-react"

export default function EmptyStatesPage() {
  return (
    <ComponentDoc 
      title="Empty States" 
      description="Telas e componentes utilizados quando não há dados a serem exibidos. Componentizado para reuso rápido."
    >
      <DocSection title="Sem Resultados (Busca / Filtro)" description="Uso do componente base oficial do DS.">
        <EmptyState className="max-w-lg mx-auto w-full border-dashed bg-muted/10">
          <EmptyStateIcon className="bg-background">
            <SearchX />
          </EmptyStateIcon>
          <EmptyStateTitle>Nenhum resultado encontrado</EmptyStateTitle>
          <EmptyStateDescription>
            Não conseguimos encontrar nenhuma campanha com os filtros selecionados.
          </EmptyStateDescription>
          <EmptyStateAction>
            <Button variant="outline" className="shadow-sm">Limpar Filtros</Button>
          </EmptyStateAction>
        </EmptyState>
      </DocSection>

      <DocSection title="Primeiro Uso (Onboarding / Hero)" description="Padrão Premium UI/UX focando em conversão e engajamento.">
        <EmptyState className="w-full rounded-2xl overflow-hidden relative shadow-md p-16">
          {/* Fundo ilustrativo com glow (Glassmorphism sutil) */}
          <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[80%] h-full bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-background border border-border shadow-xl rounded-3xl flex items-center justify-center rotate-3 relative z-10">
                <Rocket className="h-10 w-10 text-primary" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-muted border border-border shadow-md rounded-2xl flex items-center justify-center -rotate-6 z-0">
                <PieChart className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
            
            <EmptyStateTitle className="text-2xl tracking-tight">Pronto para decolar?</EmptyStateTitle>
            <EmptyStateDescription className="max-w-[400px]">
              Conecte sua primeira fonte de dados e comece a extrair insights e relatórios poderosos com a inteligência do MI Tool.
            </EmptyStateDescription>
            <EmptyStateAction>
              <Button size="lg" className="shadow-lg shadow-primary/25 rounded-full px-8">
                <Plus className="mr-2 h-5 w-5" />
                Conectar Fonte de Dados
              </Button>
            </EmptyStateAction>
          </div>
        </EmptyState>
      </DocSection>

      <DocSection title="Módulo Vazio (Tabelas e Cards Compactos)" description="Versão compacta para ser inserida dentro de outras superfícies.">
        <div className="w-full max-w-2xl border border-border rounded-xl bg-card overflow-hidden shadow-sm">
          {/* Header Falso */}
          <div className="flex border-b border-border bg-muted/30 px-5 py-3">
            <div className="h-4 w-32 bg-muted/80 rounded animate-pulse"></div>
            <div className="h-4 w-20 bg-muted/80 rounded animate-pulse ml-auto"></div>
          </div>
          {/* Body Vazio Usando o Componente */}
          <EmptyState className="border-0 shadow-none rounded-none py-16">
            <EmptyStateIcon className="bg-secondary/60 rounded-xl">
              <Inbox />
            </EmptyStateIcon>
            <EmptyStateTitle className="text-[14px]">Caixa de entrada vazia</EmptyStateTitle>
            <EmptyStateDescription className="mb-0">
              Novas automações e alertas aparecerão aqui.
            </EmptyStateDescription>
          </EmptyState>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
