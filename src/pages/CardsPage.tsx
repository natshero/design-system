import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/organisms/card"
import { StatCard } from "@/components/organisms/stat-card"
import { Badge } from "@/components/atoms/badge"
import { Button } from "@/components/atoms/button"
import { ComponentDoc, DocSection } from "@/components/templates/component-doc"
import { Check, TrendingUp, Users, Activity } from "lucide-react"

export default function CardsPage() {
  return (
    <ComponentDoc 
      title="Cards (Containers)" 
      description="Organismos utilizados para agrupar informações e ações em superfícies discretas."
    >
      <DocSection title="Simples (Base)" description="Card estrutural padrão para qualquer tipo de conteúdo.">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Configurações do App</CardTitle>
            <CardDescription>Gerencie as preferências de notificação.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">O conteúdo interno do card vai aqui.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancelar</Button>
            <Button>Salvar</Button>
          </CardFooter>
        </Card>
      </DocSection>

      <DocSection title="Pricing Cards (SaaS)" description="Organismos complexos utilizados em telas de upgrade e vendas.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Básico</CardTitle>
              <CardDescription>Para pequenos projetos.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-4xl font-bold mb-4">R$ 0<span className="text-sm font-normal text-muted-foreground">/mês</span></p>
              <div className="space-y-2 mt-4">
                <div className="flex items-center text-sm"><Check className="mr-2 h-4 w-4 text-primary" /> 1 App monitorado</div>
                <div className="flex items-center text-sm"><Check className="mr-2 h-4 w-4 text-primary" /> Histórico de 7 dias</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Plano Atual</Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col border-primary relative overflow-hidden shadow-md">
            <div className="absolute top-0 w-full h-1 bg-primary" />
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>Para analistas de marketing.</CardDescription>
                </div>
                <Badge>Recomendado</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-4xl font-bold mb-4">R$ 499<span className="text-sm font-normal text-muted-foreground">/mês</span></p>
              <div className="space-y-2 mt-4">
                <div className="flex items-center text-sm"><Check className="mr-2 h-4 w-4 text-primary" /> Apps ilimitados</div>
                <div className="flex items-center text-sm"><Check className="mr-2 h-4 w-4 text-primary" /> Histórico completo</div>
                <div className="flex items-center text-sm"><Check className="mr-2 h-4 w-4 text-primary" /> Suporte dedicado</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Fazer Upgrade</Button>
            </CardFooter>
          </Card>
        </div>
      </DocSection>

      <DocSection title="Analytics / Stat Cards" description="Pequenos cards para exibir KPIs no topo de Dashboards. (Agora usando o componente oficial `<StatCard>`)">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          <StatCard
            title="Download Estimados"
            value="+12,234"
            icon={<TrendingUp />}
            trend={{ value: "+19%", label: "em relação ao mês anterior", direction: "up" }}
          />
          <StatCard
            title="Usuários Ativos"
            value="4,231"
            icon={<Users />}
            trend={{ value: "+4.1%", label: "esta semana", direction: "up" }}
          />
          <StatCard
            title="Taxa de Rejeição"
            value="24.3%"
            icon={<Activity />}
            trend={{ value: "-2.5%", label: "hoje", direction: "down" }}
          />
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
