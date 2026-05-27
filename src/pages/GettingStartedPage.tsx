import { ComponentDoc, DocSection } from "@/components/templates/component-doc"

export default function GettingStartedPage() {
  return (
    <ComponentDoc 
      title="Getting Started" 
      description="Bem-vindo ao Design System do MI Tool. Aprenda a consumir nossos componentes e padrões."
    >
      <DocSection title="Introdução" description="O que é o Design System do MI Tool?">
        <div className="w-full flex flex-col gap-4 text-sm text-foreground leading-relaxed">
          <p>
            O Design System do <strong>MI Tool</strong> é a base visual e funcional de todas as nossas interfaces. Ele foi construído utilizando <span className="font-semibold text-primary">React</span>, <span className="font-semibold text-primary">Tailwind CSS v4</span> e <span className="font-semibold text-primary">shadcn/ui</span>.
          </p>
          <p>
            O objetivo principal é garantir consistência, velocidade de desenvolvimento e uma experiência de usuário (UX) premium e luxuosa. Nós adotamos o padrão de <strong>Atomic Design</strong>, organizando nossos componentes em <code>atoms</code>, <code>molecules</code> e <code>organisms</code>.
          </p>
        </div>
      </DocSection>

      <DocSection title="Instalação & Setup" description="Como configurar o repositório em um novo projeto front-end.">
        <div className="w-full bg-sidebar rounded-lg p-5 border border-border shadow-sm">
          <p className="text-muted-foreground text-[13px] mb-3">1. Clone o repositório principal do Design System:</p>
          <code className="block bg-black/50 text-[#07C6C3] p-3 rounded text-[13px] font-mono border border-white/10 mb-6">
            git clone git@github.com:rankmyapp/mi-tool-ds.git
          </code>
          
          <p className="text-muted-foreground text-[13px] mb-3">2. Instale as dependências essenciais:</p>
          <code className="block bg-black/50 text-white p-3 rounded text-[13px] font-mono border border-white/10 mb-6">
            npm install
          </code>

          <p className="text-muted-foreground text-[13px] mb-3">3. Importe o CSS Global no ponto de entrada da sua aplicação (ex: <code>main.tsx</code>):</p>
          <code className="block bg-black/50 text-white p-3 rounded text-[13px] font-mono border border-white/10">
            import "@rankmyapp/mi-tool-ds/dist/index.css";
          </code>
        </div>
      </DocSection>

      <DocSection title="Consumo de Componentes" description="Nós seguimos o padrão de exportação direta da arquitetura shadcn.">
        <div className="w-full flex flex-col gap-4">
          <p className="text-sm text-foreground">
            Basta importar os componentes diretamente dos seus respectivos diretórios atômicos. Todas as tipagens do TypeScript e variantes do Tailwind já estão integradas:
          </p>
          <div className="bg-sidebar rounded-lg p-5 border border-border shadow-sm">
            <code className="block bg-black/50 text-[#1A88FF] p-3 rounded text-[13px] font-mono border border-white/10 whitespace-pre">
{`import { Button } from "@/components/atoms/button"
import { Badge } from "@/components/atoms/badge"

function MinhaTela() {
  return (
    <Button variant="primary">
      <Badge variant="success">Novo</Badge> Salvar
    </Button>
  )
}`}
            </code>
          </div>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
