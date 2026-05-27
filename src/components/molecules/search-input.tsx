import * as React from "react"
import { Search, X } from "lucide-react"

import { Input } from "@/components/atoms/input"
import { Button } from "@/components/atoms/button"
import { cn } from "@/lib/utils"

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, value, onClear, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
          <Search className="h-4 w-4" />
        </div>
        <Input
          ref={ref}
          type="text"
          className={cn("pl-9 pr-9", className)}
          value={value}
          {...props}
        />
        {value && onClear && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute inset-y-0 right-0 h-full w-9 hover:bg-transparent text-muted-foreground hover:text-foreground"
            onClick={onClear}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Limpar busca</span>
          </Button>
        )}
      </div>
    )
  }
)
SearchInput.displayName = "SearchInput"
