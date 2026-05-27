import { Link, useLocation } from "react-router-dom"
import { 
  Component, Palette, Type, LayoutTemplate, Layers, 
  Search, ShieldAlert, Table, AppWindow, BellRing, User, 
  Grid3x3, CheckSquare, ListFilter, Activity, Rocket, Frown, PieChart
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Introdução",
    items: [
      { title: "Getting Started", url: "/getting-started", icon: Rocket },
    ],
  },
  {
    title: "Fundação",
    items: [
      { title: "Cores & Identidade", url: "/", icon: Palette },
      { title: "Tipografia", url: "/typography", icon: Type },
      { title: "Sombras & Elevação", url: "/foundation/shadows", icon: Layers },
      { title: "Grid & Spacing", url: "/foundation/grid", icon: Grid3x3 },
    ],
  },
  {
    title: "Componentes Base",
    items: [
      { title: "Botões", url: "/components/buttons", icon: Component },
      { title: "Badges & Tags", url: "/components/badges", icon: Activity },
      { title: "Inputs & Formulários", url: "/components/forms", icon: LayoutTemplate },
      { title: "Checkboxes & Toggles", url: "/components/toggles", icon: CheckSquare },
      { title: "Select & Dropdown", url: "/components/selects", icon: ListFilter },
    ],
  },
  {
    title: "Feedback & Data",
    items: [
      { title: "Alertas & Banners", url: "/feedback/alerts", icon: ShieldAlert },
      { title: "Toasts", url: "/feedback/toasts", icon: BellRing },
      { title: "Skeletons & Spinners", url: "/feedback/spinners", icon: Activity },
      { title: "Tabelas (Data Grid)", url: "/data/tables", icon: Table },
      { title: "Avatares", url: "/data/avatars", icon: User },
      { title: "Gráficos Analíticos", url: "/data/charts", icon: PieChart },
    ],
  },
  {
    title: "Organismos",
    items: [
      { title: "Cards & Containers", url: "/components/cards", icon: Layers },
      { title: "Modais & Dialogs", url: "/organisms/modals", icon: AppWindow },
      { title: "Date Pickers", url: "/organisms/date-pickers", icon: LayoutTemplate },
      { title: "Empty States", url: "/organisms/empty-states", icon: Frown },
    ],
  },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar className="border-r border-sidebar-border bg-sidebar pt-4">
      <SidebarHeader className="px-4 pb-4 border-b border-sidebar-border/50">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sidebar-foreground/50" />
          <input 
            type="text" 
            placeholder="Buscar no sistema..." 
            className="w-full h-9 bg-sidebar-accent/50 border border-sidebar-border/60 rounded-md pl-9 pr-3 text-[13px] text-sidebar-foreground placeholder:text-sidebar-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>
      </SidebarHeader>
      <SidebarContent className="pt-2">
        {items.map((group) => (
          <SidebarGroup key={group.title} className="mb-2">
            <SidebarGroupLabel className="font-mono text-[10px] font-medium uppercase tracking-[0.10em] text-sidebar-foreground/60 px-4 py-2">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = location.pathname === item.url
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        isActive={isActive}
                        className={`h-9 px-4 py-2 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-all rounded-none border-l-2 ${isActive ? 'border-primary bg-primary/10 text-primary font-medium' : 'border-transparent text-sidebar-foreground/80'}`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 w-full">
                          <item.icon className={`h-[18px] w-[18px] shrink-0 ${isActive ? 'text-primary' : 'text-sidebar-foreground/60'}`} />
                          <span className="truncate text-[13px]">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
