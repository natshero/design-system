import { ComponentDoc, DocSection } from "@/components/templates/component-doc"
import { Alert, AlertTitle, AlertDescription, AlertAction } from "@/components/ui/alert"
import { Info, CheckCircle2, AlertTriangle, AlertOctagon, X } from "lucide-react"

export default function AlertsPage() {
  return (
    <ComponentDoc 
      title="Alertas & Banners" 
      description="Mensagens de aviso e feedback inseridas no fluxo da página."
    >
      <DocSection title="Semântica de Alertas" description="O componente padrão conta com uma borda lateral grossa colorida e um fundo semi-transparente correspondente.">
        <div className="flex flex-col gap-4 w-full max-w-xl">
          <Alert variant="info">
            <Info />
            <AlertTitle>Nova atualização disponível</AlertTitle>
            <AlertDescription>
              Você pode acessar os novos relatórios no menu lateral.
            </AlertDescription>
            <AlertAction>
              <button className="text-muted-foreground hover:text-foreground">
                <X className="h-4 w-4" />
              </button>
            </AlertAction>
          </Alert>

          <Alert variant="success">
            <CheckCircle2 />
            <AlertTitle>Importação concluída</AlertTitle>
            <AlertDescription>
              Seus 1.250 registros foram importados com sucesso.
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTriangle />
            <AlertTitle>Aviso de Limite</AlertTitle>
            <AlertDescription>
              Sua conta atingiu 80% do limite de uso da API neste mês.
            </AlertDescription>
          </Alert>

          <Alert variant="error">
            <AlertOctagon />
            <AlertTitle>Erro de Sincronização</AlertTitle>
            <AlertDescription>
              Não foi possível conectar ao provedor. Tente novamente mais tarde.
            </AlertDescription>
          </Alert>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
