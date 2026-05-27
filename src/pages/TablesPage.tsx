import { ComponentDoc, DocSection } from "@/components/templates/component-doc"
import { Badge } from "@/components/atoms/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function TablesPage() {
  return (
    <ComponentDoc title="Tabelas (Data Grid)" description="Listagem de dados complexos com cabeçalhos estruturados.">
      <DocSection title="Tabela Analítica MI Tool" description="Estilo de tabela focada em dados numéricos, com cabeçalhos sutis em caixa alta e linhas espaçadas.">
        <div className="w-full border border-border rounded-lg overflow-hidden bg-card shadow-sm">
          <Table>
            <TableHeader className="bg-secondary/40">
              <TableRow className="hover:bg-transparent">
                <TableHead className="uppercase text-[11px] font-semibold tracking-[0.06em] text-muted-foreground w-[300px]">Campanha</TableHead>
                <TableHead className="uppercase text-[11px] font-semibold tracking-[0.06em] text-muted-foreground">Status</TableHead>
                <TableHead className="uppercase text-[11px] font-semibold tracking-[0.06em] text-muted-foreground text-right">Downloads</TableHead>
                <TableHead className="uppercase text-[11px] font-semibold tracking-[0.06em] text-muted-foreground text-right">Receita Est.</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-[13px]">
              <TableRow>
                <TableCell className="font-medium">Aceleração BF2026</TableCell>
                <TableCell>
                  <Badge variant="success" className="gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-semibold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span> Ativo
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-muted-foreground">42.500</TableCell>
                <TableCell className="text-right font-medium">R$ 18.2k</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Reengajamento Inverno</TableCell>
                <TableCell>
                  <Badge variant="warning" className="gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-semibold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span> Pausado
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-muted-foreground">1.200</TableCell>
                <TableCell className="text-right font-medium">R$ 4.1k</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Campanha de Busca Genérica</TableCell>
                <TableCell>
                  <Badge variant="error" className="gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-semibold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span> Erro
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-muted-foreground">0</TableCell>
                <TableCell className="text-right font-medium">R$ 0,00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
