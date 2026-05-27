import { ComponentDoc, DocSection } from "@/components/templates/component-doc"
import { Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Fev", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Abr", desktop: 73, mobile: 190 },
  { month: "Mai", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export default function ChartsPage() {
  return (
    <ComponentDoc 
      title="Gráficos Analíticos" 
      description="Visualizações de dados baseadas em Recharts. Utilizam os tokens de cores específicas de Chart do sistema."
    >
      <DocSection title="Gráfico de Barras (Bar Chart)" description="Ideal para comparações quantitativas entre categorias.">
        <div className="w-full max-w-2xl border border-border rounded-xl bg-card p-6 shadow-sm">
          <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
                className="text-[11px] font-medium text-muted-foreground"
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </div>
      </DocSection>

      <DocSection title="Gráfico de Linhas (Line Chart)" description="Ideal para visualizar tendências de performance (KPIs) ao longo do tempo.">
        <div className="w-full max-w-2xl border border-border rounded-xl bg-card p-6 shadow-sm">
          <ChartContainer config={chartConfig} className="min-h-[250px] w-full">
            <LineChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
                className="text-[11px] font-medium text-muted-foreground"
              />
              <YAxis 
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                className="text-[11px] font-medium text-muted-foreground"
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="desktop"
                type="monotone"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="mobile"
                type="monotone"
                stroke="var(--color-mobile)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
