import { ComponentDoc, DocSection } from "@/components/templates/component-doc"
import { Input } from "@/components/atoms/input"
import { Label } from "@/components/atoms/label"
import { Checkbox } from "@/components/atoms/checkbox"
import { Button } from "@/components/atoms/button"

export default function FormsPage() {
  return (
    <ComponentDoc 
      title="Inputs & Formulários" 
      description="Componentes interativos para entrada de dados e configurações de usuário."
    >
      <DocSection title="Input Padrão (Text & Email)" description="Campos de texto simples com suporte a estados de foco (ring) e validação.">
        <div className="flex flex-col gap-6 w-full max-w-sm">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email de acesso</Label>
            <Input type="email" id="email" placeholder="nome@rankmyapp.com" />
            <p className="text-[12px] text-muted-foreground mt-1">Insira seu e-mail corporativo.</p>
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="disabled">Input Desabilitado</Label>
            <Input disabled type="text" id="disabled" placeholder="Não é possível editar" />
          </div>
        </div>
      </DocSection>

      <DocSection title="Formulário de Login Mock" description="Exemplo prático de uma composição de moléculas formando um painel de autenticação.">
        <div className="w-full max-w-sm p-6 border rounded-xl bg-card shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-heading font-semibold">Entrar na MI Tool</h3>
            <p className="text-[13px] text-muted-foreground">Bem-vindo de volta! Insira suas credenciais.</p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="mock-email">Email</Label>
              <Input id="mock-email" type="email" placeholder="user@empresa.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="mock-password">Senha</Label>
                <a href="#" className="text-[12px] text-primary hover:underline font-medium">Esqueceu a senha?</a>
              </div>
              <Input id="mock-password" type="password" required />
            </div>
            <div className="flex items-center space-x-2 pt-1 pb-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-[13px] font-normal cursor-pointer text-muted-foreground">
                Lembrar-me neste dispositivo
              </Label>
            </div>
            <Button className="w-full shadow-md shadow-primary/20" type="submit">Fazer Login</Button>
          </form>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
