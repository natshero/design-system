import { ComponentDoc, DocSection } from "@/components/templates/component-doc"

export default function TogglesPage() {
  return (
    <ComponentDoc title="Checkboxes & Toggles" description="Inputs booleanos estilizados para ativar funcionalidades.">
      <DocSection title="Toggles (Switches)" description="O visual arredondado premium do MI Tool para habilitar opções rápidas.">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="relative inline-block w-10 h-[22px]">
              <input type="checkbox" className="peer opacity-0 w-0 h-0 absolute" defaultChecked />
              <div className="absolute inset-0 bg-border/60 rounded-full cursor-pointer peer-checked:bg-primary transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:w-[18px] before:h-[18px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px] shadow-sm"></div>
            </div>
            <span className="text-[13px] font-medium">Sincronização Ativada</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative inline-block w-10 h-[22px]">
              <input type="checkbox" className="peer opacity-0 w-0 h-0 absolute" />
              <div className="absolute inset-0 bg-border/60 rounded-full cursor-pointer peer-checked:bg-primary transition-colors before:content-[''] before:absolute before:top-[2px] before:left-[2px] before:w-[18px] before:h-[18px] before:bg-white before:rounded-full before:transition-transform peer-checked:before:translate-x-[18px] shadow-sm"></div>
            </div>
            <span className="text-[13px] font-medium text-muted-foreground">Sincronização Desativada</span>
          </div>
        </div>
      </DocSection>
      
      <DocSection title="Checkboxes" description="Para seleções em massa ou concordância de termos.">
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-[18px] h-[18px] accent-primary rounded-sm border-border cursor-pointer" defaultChecked />
            <span className="text-[13px]">Selecionar item</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="w-[18px] h-[18px] accent-primary rounded-sm border-border cursor-pointer" />
            <span className="text-[13px]">Lembrar-me neste dispositivo</span>
          </label>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
