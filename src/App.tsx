import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { TooltipProvider } from "@/components/atoms/tooltip"
import { ThemeProvider, useTheme } from "@/components/theme-provider"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/organisms/app-sidebar"
import { Moon, Sun, Monitor, CircleDashed } from "lucide-react"

// Mock pages
import ColorsPage from "./pages/ColorsPage"
import TypographyPage from "./pages/TypographyPage"
import ShadowsPage from "./pages/ShadowsPage"
import GridPage from "./pages/GridPage"

import ButtonsPage from "./pages/ButtonsPage"
import FormsPage from "./pages/FormsPage"
import CardsPage from "./pages/CardsPage"
import BadgesPage from "./pages/BadgesPage"
import TogglesPage from "./pages/TogglesPage"
import SelectsPage from "./pages/SelectsPage"

import AlertsPage from "./pages/AlertsPage"
import ToastsPage from "./pages/ToastsPage"
import SpinnersPage from "./pages/SpinnersPage"
import TablesPage from "./pages/TablesPage"
import AvatarsPage from "./pages/AvatarsPage"

import ModalsPage from "./pages/ModalsPage"
import DatePickersPage from "./pages/DatePickersPage"
import GettingStartedPage from './pages/GettingStartedPage'
import EmptyStatesPage from './pages/EmptyStatesPage'
import ChartsPage from './pages/ChartsPage'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const nextTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'
  
  return (
    <button 
      onClick={() => setTheme(nextTheme)}
      className="flex items-center justify-center w-9 h-9 border border-border/60 rounded-md bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all"
    >
      {theme === 'light' && <Sun className="h-[1.2rem] w-[1.2rem]" />}
      {theme === 'dark' && <Moon className="h-[1.2rem] w-[1.2rem]" />}
      {theme === 'system' && <Monitor className="h-[1.2rem] w-[1.2rem]" />}
    </button>
  )
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Router>
          <div className="flex min-h-screen bg-secondary">
            {/* Header Global */}
            <header className="fixed top-0 left-0 right-0 h-14 bg-background/90 backdrop-blur-md border-b flex items-center justify-between px-6 z-50">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 font-heading font-semibold text-[15px] text-foreground">
                  <CircleDashed className="h-6 w-6 text-primary" />
                  MI Tool DS
                </div>
                <span className="text-[11px] font-medium text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                  v1.0
                </span>
              </div>
              <div className="flex items-center gap-4">
                <ThemeToggle />
              </div>
            </header>

            <SidebarProvider className="pt-14">
              <AppSidebar />
              <main className="flex-1 overflow-auto bg-secondary text-foreground min-h-[calc(100vh-3.5rem)]">
                <div className="p-4 flex items-center shrink-0">
                  <SidebarTrigger />
                </div>
                <div className="p-8 max-w-5xl mx-auto">
                  <Routes>
                    <Route path="/" element={<ColorsPage />} />
                    <Route path="/getting-started" element={<GettingStartedPage />} />
                    <Route path="/typography" element={<TypographyPage />} />
                    <Route path="/foundation/shadows" element={<ShadowsPage />} />
                    <Route path="/foundation/grid" element={<GridPage />} />

                    <Route path="/components/buttons" element={<ButtonsPage />} />
                    <Route path="/components/forms" element={<FormsPage />} />
                    <Route path="/components/cards" element={<CardsPage />} />
                    <Route path="/components/badges" element={<BadgesPage />} />
                    <Route path="/components/toggles" element={<TogglesPage />} />
                    <Route path="/components/selects" element={<SelectsPage />} />

                    <Route path="/feedback/alerts" element={<AlertsPage />} />
                    <Route path="/feedback/toasts" element={<ToastsPage />} />
                    <Route path="/feedback/spinners" element={<SpinnersPage />} />
                    <Route path="/data/tables" element={<TablesPage />} />
                    <Route path="/data/avatars" element={<AvatarsPage />} />
                    <Route path="/data/charts" element={<ChartsPage />} />

                    <Route path="/organisms/modals" element={<ModalsPage />} />
                    <Route path="/organisms/date-pickers" element={<DatePickersPage />} />
                    <Route path="/organisms/empty-states" element={<EmptyStatesPage />} />
                  </Routes>
                </div>
              </main>
            </SidebarProvider>
          </div>
        </Router>
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App
