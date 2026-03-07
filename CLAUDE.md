# CLAUDE.md — Lambda Solar Landing Page

## Stack

- **Next.js 16.1.6** (App Router) / **React 19** / **TypeScript 5.7 strict**
- **Tailwind CSS v4.2** (CSS-first config en `app/globals.css`, sin `tailwind.config.js`)
- **DaisyUI v5** (plugin en CSS via `@plugin "daisyui"`)
- **Framer Motion** para animaciones scroll/entrada
- **Lucide React** para iconos
- **ApexCharts + react-apexcharts** para graficos y dashboards
- **Zod** para validacion de schemas
- **Vitest + React Testing Library** para testing
- **Vercel Analytics** (`@vercel/analytics/next`)
- Idioma: Español (Chile) — `lang="es"`

## Comandos

```bash
npm run dev      # Dev server
npm run build    # Build produccion — correr antes de cada PR
npm run lint     # ESLint — debe pasar antes de cada commit
npm run test     # Vitest en watch mode
npm run test:run # Vitest single run
```

## Estructura de Carpetas

```
app/
  layout.tsx          # Root layout (fonts, metadata, Analytics)
  page.tsx            # Home — compone secciones
  globals.css         # Tailwind v4 config, @theme, @plugin, animaciones
components/
  landing/            # Un archivo por seccion del landing
  ui/                 # Primitivos UI reutilizables (futuro)
lib/                  # Utilidades, helpers, constantes (futuro)
public/
  images/             # Imagenes locales (hero, logo, clients/)
```

## Nomenclatura

| Elemento | Convencion | Ejemplo |
|---|---|---|
| Archivos | `kebab-case.tsx` | `hero-section.tsx` |
| Componentes | `PascalCase` | `HeroSection` |
| Variables / funciones | `camelCase` | `navLinks`, `toggleTheme` |
| CSS custom properties | `--kebab-case` | `--color-blue-500` |
| Data arrays | `camelCase`, top del archivo | `const highlights = [...]` |
| Types / Interfaces | `PascalCase` | `StatCardProps` |

## TypeScript

**No `any`. Nunca.** Usar `unknown` + type narrowing, generics, o tipos explicitos.

```tsx
// MAL
function parse(data: any) { ... }

// BIEN
function parse(data: unknown): ParsedResult { ... }
```

Tipos nombrados para props con 2+ propiedades:

```tsx
// MAL
function Card({ title, desc }: { title: string; desc: string }) { ... }

// BIEN
type StatCardProps = {
  icon: React.ReactNode
  value: string
  label: string
}

function StatCard({ icon, value, label }: StatCardProps) { ... }
```

## Arquitectura de Componentes

### Server vs Client

Server Components por defecto. Agregar `'use client'` solo cuando se usa:
- `useState`, `useEffect` u otros hooks
- `framer-motion` (elementos `motion.*`)
- APIs del browser (`window`, `document`)
- Event handlers (`onClick`, `onChange`)

```tsx
// Server Component (sin directiva)
export default function Footer() { ... }

// Client Component (solo cuando es necesario)
'use client'
export default function Navbar() { ... }
```

### Exports

Siempre **default exports** para componentes de seccion. Un componente por archivo.

```tsx
// BIEN
export default function HeroSection() { ... }

// MAL
export function HeroSection() { ... }
export const HeroSection = () => { ... }
```

### Sub-componentes

Van en el **mismo archivo**, debajo del default export. No se exportan.

```tsx
export default function HeroSection() {
  return ( /* usa <StatCard /> */ )
}

function StatCard({ icon, value, label }: StatCardProps) {
  return ( /* ... */ )
}
```

### Separacion de Datos

Arrays estaticos van al **top del archivo**, despues de imports.

```tsx
import { motion } from 'framer-motion'
import { TrendingUp, Clock } from 'lucide-react'

const highlights = [
  { icon: TrendingUp, label: '+30% Ahorro', description: '...' },
  { icon: Clock, label: 'Tiempo Real', description: '...' },
]

export default function SolutionSection() { ... }
```

### Funciones Puras y Early Returns

Preferir funciones puras para testabilidad. Guard clauses (early returns) en vez de condicionales anidados.

```tsx
// MAL
function getStatus(value: number) {
  if (value > 0) {
    if (value > 100) {
      return 'high'
    } else {
      return 'normal'
    }
  } else {
    return 'low'
  }
}

// BIEN
function getStatus(value: number): Status {
  if (value <= 0) return 'low'
  if (value > 100) return 'high'
  return 'normal'
}
```

## Estilos: Valores Estandarizados

### Container

```tsx
// BIEN — seccion estandar
<div className="max-w-6xl mx-auto px-6 lg:px-8">

// BIEN — seccion amplia (hero, footer, navbar)
<div className="max-w-7xl mx-auto px-6 lg:px-8">

// BIEN — seccion angosta (FAQ, texto largo)
<div className="max-w-3xl mx-auto px-6 lg:px-8">

// MAL — nunca usar container
<div className="container mx-auto px-6 lg:px-8">
```

### Escala de Opacidad

Usar SOLO estos valores:

```
base-content/5    — bordes ultra-sutiles
base-content/10   — bordes estandar, divisores
base-content/35   — footnotes, disclaimers
base-content/50   — labels secundarios, captions
base-content/60   — texto de cuerpo, descripciones
base-content/70   — texto de cuerpo enfatizado
base-content/80   — texto fuerte
```

**Nunca** usar `/55`, `/65`, `/75`. Elegir el valor estandar mas cercano.

**Nunca** usar doble opacidad:

```tsx
// MAL — opacidad doble invalida
className="border border-base-content/10/40"

// BIEN
className="border border-base-content/10"
```

### Header de Seccion

Patron exacto para todas las secciones:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="text-center max-w-2xl mx-auto mb-16"
>
  <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
    Label de Seccion
  </span>
  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content text-balance mb-4">
    Titulo de Seccion
  </h2>
  <p className="text-base text-base-content/60 leading-relaxed text-pretty">
    Descripcion de la seccion.
  </p>
</motion.div>
```

### Icon Box

```tsx
{/* Estandar (40px) */}
<div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
  <IconName className="w-5 h-5 text-primary" />
</div>

{/* Pequeno (32px) */}
<div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
  <IconName className="w-4 h-4 text-primary" />
</div>
```

### Card

```tsx
{/* Card estandar */}
className="rounded-xl border border-base-content/10 bg-base-content/[0.03] p-6"

{/* Card con hover */}
className="rounded-xl border border-base-content/10 bg-base-content/[0.03] p-6 hover:border-primary/30 transition-all duration-300"
```

## Framer Motion

### Animaciones de Entrada

Usar estos valores exactos:

```tsx
// Fade up — DEFAULT para la mayoria de elementos
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}

// Fade up grande — bloques de contenido amplios
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}

// Fade sutil — badges, UI pequeno
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}

// Slide desde derecha — items de lista
initial={{ opacity: 0, x: 20 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
```

### Stagger Delays

Para listas mapeadas usar `delay: BASE + index * STEP`:

| Contexto | Base | Step |
|---|---|---|
| Cards en grid | `0` | `0.05` |
| Items de lista | `0.15` | `0.08` |
| Pasos secuenciales | `0` | `0.1` |

**Siempre** incluir `viewport={{ once: true }}` en animaciones `whileInView`.

## DaisyUI v5

Usar clases semanticas de DaisyUI cuando exista un componente. No reconstruir con Tailwind raw.

```tsx
// MAL
<button className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium">

// BIEN
<button className="btn btn-primary">
```

### Componentes usados

| Componente | Clases | Uso |
|---|---|---|
| Navbar | `navbar`, `navbar-start/center/end` | Navegacion |
| Button | `btn`, `btn-primary`, `btn-ghost`, `btn-circle`, `btn-sm` | Botones |
| Badge | `badge`, `badge-outline`, `badge-sm` | Labels de seccion |
| Menu | `menu`, `menu-horizontal` | Listas de nav links |
| Collapse | `collapse`, `collapse-arrow`, `collapse-title`, `collapse-content` | FAQ accordion |

### Colores

Usar colores semanticos de DaisyUI. Nunca colores raw de Tailwind para elementos temáticos.

```tsx
// MAL
className="bg-gray-900 text-white"

// BIEN
className="bg-base-100 text-base-content"
className="bg-primary text-primary-content"
```

Tokens disponibles: `base-100`, `base-200`, `base-300`, `base-content`, `primary`, `primary-content`, `secondary`, `accent`

Paleta custom (definida en `@theme`): `blue-50` a `blue-900`

## Imagenes

Usar `next/image` para todas las imagenes. Guardar localmente en `public/images/`.

```tsx
// BIEN — imagen local
<Image src="/images/hero-solar.jpg" alt="Texto descriptivo" fill className="object-cover" priority />

// MAL — URL externa
<Image src="https://images.unsplash.com/..." alt="..." fill className="object-cover" />
```

Para imagenes above-fold agregar `priority`. Con `fill` siempre incluir `className="object-cover"`.

## Responsive — OBLIGATORIO

Todo componente debe funcionar en mobile (320px), tablet (768px) y desktop (1024px+).

```tsx
// Grid que se apila en mobile
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Flex que se apila en mobile
className="flex flex-col sm:flex-row items-center gap-6"

// Texto que escala
className="text-3xl md:text-4xl lg:text-5xl"

// Show/hide por breakpoint
className="hidden lg:flex"     // Nav desktop
className="lg:hidden"          // Hamburger mobile
```

**Testar a 320px minimo.** Sin scroll horizontal. Sin texto cortado. Sin contenido oculto.

## Comentarios

Solo comentarios que expliquen el **por que**, nunca el **que**.

```tsx
// MAL
// Set the state to true
setMobileOpen(true)

// BIEN — explica decision no obvia
{/* Duplicar lista de clientes para loop infinito del marquee */}
{clients.map((client, i) => ( ... ))}
```

## Anti-Patrones a Evitar

1. **`any`** — usar `unknown`, generics, o tipos explicitos
2. **`container mx-auto`** — usar `max-w-6xl mx-auto` (ancho explicito)
3. **Doble opacidad** (`/10/40`) — usar valor unico (`/10`)
4. **URLs de imagenes externas** — descargar a `public/images/`
5. **Opacidades no estandar** (`/55`, `/65`, `/75`) — usar la escala definida
6. **Componentes duplicados** — hacer uno configurable con props
7. **Comentarios obvios** — solo explicar lo no evidente
8. **Arrow function components** — usar function declarations
9. **Condicionales anidados** — usar early returns
10. **Omitir `viewport={{ once: true }}`** — siempre incluir en `whileInView`

## Testing (Vitest)

Config en `vitest.config.ts`. Setup en `vitest.setup.ts`.

```tsx
// Ejemplo de test para un componente
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

test('renderiza el heading principal', () => {
  render(<Page />)
  expect(screen.getByRole('heading', { level: 1 })).toBeDefined()
})
```

Convenciones:
- Archivos de test: `*.test.tsx` junto al componente o en carpeta `__tests__/`
- Nombres descriptivos en español: `'renderiza el heading principal'`
- Testear comportamiento, no implementacion

## Charts (ApexCharts)

Usar `react-apexcharts` con `dynamic import` para evitar SSR (ApexCharts requiere `window`):

```tsx
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })
```

Convenciones de estilo para charts:
- `chart.foreColor: '#9ca3af'` — texto de ejes
- `chart.background: 'transparent'` — fondo transparente
- `tooltip.theme: 'dark'` — tooltips oscuros
- `grid.borderColor: 'rgba(255,255,255,0.06)'` — lineas de grid sutiles
- Colores primarios: `#3b82f6` (blue/primary), `#6366f1` (indigo), `#0ea5e9` (sky)
- `chart.toolbar.show: false` — ocultar toolbar en landing (mostrar en dashboard)

## Validacion (Zod)

Usar Zod para validar inputs en Server Actions y forms:

```tsx
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

type ContactForm = z.infer<typeof contactSchema>
```
