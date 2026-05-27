import * as React from "react"
import { addDays, format } from "date-fns"
import { ptBR } from "date-fns/locale"
import type { DateRange } from "react-day-picker"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/atoms/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ComponentDoc, DocSection } from "@/components/templates/component-doc"

export default function DatePickersPage() {
  const [date, setDate] = React.useState<Date>()
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 0, 10),
    to: addDays(new Date(2025, 0, 10), 20),
  })

  return (
    <ComponentDoc title="Date Pickers" description="Seletores de data simples e por período (Range).">
      <DocSection title="Seletor de Data Simples" description="O Date Picker oficial utilizando o calendário e popover nativos.">
        
        <Popover>
          <PopoverTrigger render={
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] justify-start text-left font-normal text-[13px] hover:border-primary/50 transition-colors",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP", { locale: ptBR }) : <span>Selecione uma data</span>}
            </Button>
          } />
          <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={ptBR}
              />
          </PopoverContent>
        </Popover>

      </DocSection>

      <DocSection title="Seletor de Período (Range com 2 meses)" description="O padrão analítico para selecionar períodos de relatórios no Dashboard.">
        <div className={cn("grid gap-2")}>
          <Popover>
            <PopoverTrigger render={
              <Button
                id="date"
                variant={"outline"}
                className={cn(
                  "w-fit min-w-[300px] justify-start text-left font-normal text-[13px] hover:border-primary/50 transition-colors",
                  !dateRange && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange?.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "PPP", { locale: ptBR })} -{" "}
                      {format(dateRange.to, "PPP", { locale: ptBR })}
                    </>
                  ) : (
                    format(dateRange.from, "PPP", { locale: ptBR })
                  )
                ) : (
                  <span>Selecione o período</span>
                )}
              </Button>
            } />
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="range"
                defaultMonth={dateRange?.from}
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
                locale={ptBR}
              />
            </PopoverContent>
          </Popover>
        </div>
      </DocSection>
    </ComponentDoc>
  )
}
