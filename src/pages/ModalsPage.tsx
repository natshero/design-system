import { ComponentDoc, DocSection } from "@/components/templates/component-doc"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/atoms/button"

export default function ModalsPage() {
  return (
    <ComponentDoc title="Modais & Dialogs" description="Sobreposições para foco total em ações críticas do usuário.">
      <DocSection title="Modal de Confirmação (Destrutivo)" description="Exemplo interativo utilizando o Dialog do Shadcn/ui.">
        
        <Dialog>
          <DialogTrigger render={<Button variant="destructive" />}>
            Excluir Campanha
          </DialogTrigger>
          <DialogContent className="sm:max-w-md overflow-hidden p-0 border-border">
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive"></div>
            
            <div className="p-6 pb-2">
              <DialogHeader>
                <DialogTitle className="font-heading text-lg">Confirmar Exclusão</DialogTitle>
                <DialogDescription className="pt-2 text-[14px]">
                  Você está prestes a excluir a campanha <strong className="text-foreground">Black Friday 2026</strong> permanentemente. 
                  Todos os dados analíticos associados a ela serão apagados. Deseja continuar?
                </DialogDescription>
              </DialogHeader>
            </div>
            <DialogFooter className="bg-muted/20 px-6 py-4 border-t border-border flex flex-col sm:flex-row justify-end gap-3 sm:space-x-0">
              <Button type="button" variant="outline" className="text-[13px] h-9">
                Cancelar
              </Button>
              <Button type="button" variant="destructive" className="text-[13px] h-9 shadow-sm">
                Sim, Excluir Campanha
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </DocSection>
    </ComponentDoc>
  )
}
