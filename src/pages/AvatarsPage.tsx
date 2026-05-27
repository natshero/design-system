import { ComponentDoc, DocSection } from "@/components/templates/component-doc"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarsPage() {
  return (
    <ComponentDoc title="Avatares" description="Representações visuais de usuários ou empresas.">
      <DocSection title="Avatar (Shadcn UI)" description="Uso do componente oficial com integração dos gradientes específicos do MI Tool para dar destaque.">
        <div className="flex gap-6 items-end">
          
          <div className="relative">
            <Avatar className="h-12 w-12 shadow-sm">
              <AvatarImage src="" alt="User" />
              <AvatarFallback className="text-white font-medium text-base bg-gradient-to-br from-info to-success">
                TS
              </AvatarFallback>
            </Avatar>
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-success rounded-full border-2 border-card"></div>
          </div>

          <Avatar className="h-10 w-10 shadow-sm">
            <AvatarImage src="" alt="Manager" />
            <AvatarFallback className="text-white font-medium text-sm bg-gradient-to-br from-accent to-destructive">
              RM
            </AvatarFallback>
          </Avatar>

          <Avatar className="h-8 w-8 shadow-sm">
            <AvatarFallback className="bg-muted text-muted-foreground font-medium text-xs border border-border">
              +3
            </AvatarFallback>
          </Avatar>

        </div>
      </DocSection>
    </ComponentDoc>
  )
}
