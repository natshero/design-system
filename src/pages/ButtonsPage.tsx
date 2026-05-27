import { Button } from "@/components/atoms/button"
import { Send, Plus, Trash2, Loader2, LogOut, Download } from "lucide-react"
import { ComponentDoc, DocSection } from "@/components/templates/component-doc"

export default function ButtonsPage() {
  return (
    <ComponentDoc 
      title="Botões" 
      description="Componentes essenciais para ações do usuário. Representam o átomo fundamental de interação da interface."
    >
      <DocSection title="Variantes" description="O estilo visual do botão define a sua hierarquia e importância dentro da página.">
        <div className="flex flex-wrap gap-4">
          <Button className="shadow-md shadow-primary/20">Primário</Button>
          <Button variant="secondary">Secundário</Button>
          <Button variant="destructive">Destrutivo</Button>
          <Button variant="outline">Contorno</Button>
          <Button variant="ghost">Fantasma</Button>
          <Button variant="link">Link</Button>
        </div>
      </DocSection>

      <DocSection title="Tamanhos" description="Diferentes proporções para se adequar a espaços amplos ou áreas compactas.">
        <div className="flex items-center gap-4 flex-wrap">
          <Button size="sm">Pequeno</Button>
          <Button size="default">Padrão</Button>
          <Button size="lg">Grande</Button>
        </div>
      </DocSection>

      <DocSection title="Com Ícones" description="O uso de ícones reforça a compreensão visual e agiliza a leitura da ação.">
        <div className="flex flex-wrap gap-4">
          <Button>
            <Send className="mr-2 h-4 w-4" /> Enviar
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Baixar PDF
          </Button>
          <Button variant="ghost">
            Sair <LogOut className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </DocSection>

      <DocSection title="Icon-only & Formas" description="Botões de ícone único, ideais para barras de ferramentas e ações rápidas.">
        <div className="flex items-center gap-4">
          <Button size="icon" aria-label="Adicionar">
            <Plus className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="destructive" aria-label="Excluir">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline" className="rounded-full" aria-label="Novo">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </DocSection>

      <DocSection title="Estados de Ação" description="Visualização dos estados de desabilitado e carregamento para feedback do sistema.">
        <div className="flex flex-wrap gap-4">
          <Button disabled>Desabilitado</Button>
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Salvando...
          </Button>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
