# Estrutura do Design System

Abaixo está a arquitetura recomendada para o nosso Design System utilizando **React, Vite, Tailwind CSS v4 e shadcn/ui**. O foco é manter a organização, escalabilidade e a facilidade de manutenção, além de suportar os temas Light e Dark de forma nativa.

```text
design-system/
├── public/                 # Assets estáticos (imagens, fontes, etc)
├── src/
│   ├── assets/             # Estilos globais e variáveis CSS
│   │   └── globals.css     # Diretrizes de design tokens, Tailwind v4 e variáveis Light/Dark
│   ├── components/         
│   │   ├── ui/             # Componentes base e primitivos baixados diretamente do shadcn/ui/radix
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ...
│   │   ├── custom/         # Componentes compostos criados a partir dos primitivos do shadcn
│   │   └── layout/         # Componentes de layout estrutural (Sidebar, Header, etc)
│   ├── hooks/              # Custom hooks (ex: use-theme para controle de dark mode)
│   ├── lib/                # Funções utilitárias (ex: cn, utils.ts fornecidos pelo shadcn)
│   ├── pages/
│   │   └── Playground.tsx  # Tela principal que serve como vitrine para renderizar e testar os componentes
│   ├── App.tsx             # Arquivo raiz do React (configuração do tema e rotas)
│   └── main.tsx            # Entry point da aplicação
├── components.json         # Arquivo de configuração do shadcn/ui
├── tailwind.config.ts      # Configuração do Tailwind (se aplicável ao v4 na integração)
├── tsconfig.json           # Configuração do TypeScript
├── vite.config.ts          # Configuração do bundler Vite
└── package.json            # Dependências e scripts
```

## Diretrizes e Padrões
- **shadcn/ui**: Sempre faça o download (`npx shadcn@latest add <componente>`) e utilize os componentes base sem reinventar a roda.
- **Temas (Light/Dark)**: O controle de tema deve ser feito utilizando variáveis CSS (`--background`, `--foreground`, etc.) em conjunto com a classe `dark` no elemento html raiz.
- **Playground**: Como não usaremos Storybook inicialmente, o `Playground.tsx` deve ser extremamente organizado em seções (ex: Tipografia, Botões, Formulários, Feedback) para facilitar a visualização e teste.
- **Estética Visual (UI/UX)**: Foco em criar uma experiência visual "Premium", utilizando espaçamentos coerentes, micro-interações, cores harmoniosas e boa legibilidade.
