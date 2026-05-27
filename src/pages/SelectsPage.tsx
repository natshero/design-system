import { ComponentDoc, DocSection } from "@/components/templates/component-doc"

export default function SelectsPage() {
  return (
    <ComponentDoc title="Select & Dropdowns" description="Menus de seleção e listas suspensas.">
      <DocSection title="Native Select Otimizado" description="Select estilizado que herda o SVG da seta do design system via CSS background-image.">
        <div className="w-full max-w-xs">
          <label className="block text-[13px] font-medium mb-1.5">Métrica Analítica</label>
          <select className="w-full h-10 px-3 bg-background border border-input rounded-md text-[14px] text-foreground outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/10 transition-shadow appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:16px_16px] bg-[position:right_12px_center] bg-no-repeat cursor-pointer">
            <option>Downloads Est.</option>
            <option>Receita Total</option>
            <option>Usuários Ativos</option>
          </select>
        </div>
      </DocSection>

      <DocSection title="Dropdown Flutuante (Menu)" description="Menu estático para exemplificar popovers e actions no sistema.">
        <div className="bg-card border border-border rounded-md shadow-md p-1 min-w-[200px]">
          <div className="flex items-center gap-2 px-3 py-2 text-[13px] text-foreground hover:bg-secondary rounded-sm cursor-pointer transition-colors">
            <span>👤</span> Perfil do Usuário
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-[13px] text-foreground hover:bg-secondary rounded-sm cursor-pointer transition-colors">
            <span>⚙️</span> Configurações
          </div>
          <div className="h-px bg-border my-1"></div>
          <div className="flex items-center gap-2 px-3 py-2 text-[13px] text-destructive hover:bg-secondary rounded-sm cursor-pointer transition-colors font-medium">
            <span>🚪</span> Sair da Plataforma
          </div>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
