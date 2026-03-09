# CLAUDE.md — Lambda Ingenieros Landing Page

## Stack

- **Next.js 16.1.6** (App Router) / **React 19** / **TypeScript 5.7 strict**
- **Tailwind CSS v4.2** (CSS-first config en `app/globals.css`, sin `tailwind.config.js`)
- **DaisyUI v5** (plugin en CSS via `@plugin "daisyui"`)
- **Framer Motion** para animaciones scroll/entrada
- **Lucide React** para iconos
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
  globals.css         # Tailwind v4 config, @theme, @plugin, animaciones
  (landing)/          # Route group — landing pages
    layout.tsx        # Navbar + Footer wrapper
    page.tsx          # Home — compone secciones
    nosotros/         # /nosotros
    solucion/         # /solucion
    contacto/         # /contacto
  (dashboard)/        # Route group — dashboard (no existe aún)
components/
  landing/            # Un archivo por seccion del landing
  dashboard/          # (no existe aún)
  ui/                 # (no existe aún)
hooks/                # (no existe aún)
lib/                  # (vacío — futuras utilidades, helpers, constantes)
services/             # (no existe aún)
types/                # (no existe aún)
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

### Escala de Texto

Tokens definidos en `globals.css` (`@theme`). Usar SOLO estos:

| Token | Color | Uso |
|---|---|---|
| `text-text-heading` | #ffffff | Títulos, headings, texto prominente |
| `text-text-emphasis` | #d4d4d8 | Texto enfatizado dentro de body (`<strong>`) |
| `text-text-body` | #a1a1aa | Texto de cuerpo, descripciones |
| `text-text-muted` | #71717a | Footnotes, disclaimers, texto sutil |

```tsx
// BIEN — tokens semánticos
<h2 className="text-text-heading">Título</h2>
<p className="text-text-body">Descripción</p>
<p className="text-text-muted">* Nota al pie</p>

// MAL — colores hardcodeados
<h2 className="text-white">Título</h2>
<p className="text-zinc-400">Descripción</p>
```

### Superficies y Bordes

Tokens DaisyUI + custom (definidos en `globals.css`):

| Token | Color | Uso |
|---|---|---|
| `bg-base-100` | #000000 | Fondo principal |
| `bg-base-200` | #0A0A0A | Fondo de cards |
| `bg-base-300` | #262626 | Fondo de CTA, divisores |
| `bg-surface-hover` | #171717 | Hover en cards |
| `border-base-300` | #262626 | Bordes estándar |

**Nunca** usar colores raw de Tailwind (`text-white`, `text-zinc-400`, `bg-zinc-800`) para elementos temáticos. Usar los tokens definidos.

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
  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-heading text-balance mb-4">
    Titulo de Seccion
  </h2>
  <p className="text-base text-text-body leading-relaxed text-pretty">
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
className="rounded-xl border border-base-300 bg-base-200 p-6"

{/* Card con hover */}
className="rounded-xl border border-base-300 bg-base-200 p-6 hover:border-primary/35 transition-all duration-300"
```

### CSS Utilities Custom

Definidas en `globals.css`:

```css
.img-brand        /* Imagen desaturada (grayscale 100%, opacity 40%) */
.img-brand-tint   /* Imagen con tint de marca (sepia + hue-rotate a blue) */
.zigzag-fade-left /* Gradiente fade hacia la izquierda para layouts alternados */
.zigzag-fade-right /* Gradiente fade hacia la derecha */
```

## ESLint

Config en `eslint.config.mjs` (flat config, `defineConfig`). Reglas custom:

- `@typescript-eslint/no-explicit-any: 'error'`
- `complexity: ['warn', { max: 10 }]`
- `max-lines: ['warn', { max: 300 }]`

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
| Accordion (custom) | React `useState` + `grid-template-rows` | FAQ — no usar DaisyUI collapse |
| Form | `input`, `input-bordered`, `input-error`, `textarea`, `textarea-bordered`, `textarea-error` | Formularios |

### Regla de customización DaisyUI

**Se puede customizar:** colores, bordes, fondo, márgenes, shadows del contenedor.
**NO tocar:** `display`, `padding`, `position`, `border-radius` de sub-elementos internos (`collapse-title`, `collapse-content`, padding de `btn`, etc.).

```tsx
// MAL — sobreescribe layout interno de DaisyUI
<div className="collapse-title flex items-center pr-12">
<button className="btn btn-ghost rounded-xl px-6">

// BIEN — solo customiza lo externo
<div className="collapse collapse-arrow rounded-xl border border-base-300 bg-base-200">
<button className="btn btn-ghost border border-base-300">
```

### Colores

Usar tokens semánticos. Nunca colores raw de Tailwind para elementos temáticos.

```tsx
// MAL
className="bg-gray-900 text-white"
className="text-zinc-400"

// BIEN
className="bg-base-100 text-text-heading"
className="text-text-body"
```

Tokens de texto: `text-heading`, `text-emphasis`, `text-body`, `text-muted` (definidos en `@theme`)
Tokens DaisyUI: `base-100`, `base-200`, `base-300`, `primary`, `primary-content`, `secondary`, `accent`
Paleta custom: `blue-50` a `blue-900`, `surface-hover`

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
3. **Colores raw** (`text-white`, `text-zinc-400`, `bg-zinc-800`) — usar tokens (`text-text-heading`, `text-text-body`, `bg-base-300`)
4. **URLs de imagenes externas** — descargar a `public/images/`
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

Validaciones chilenas (futuro — mover a `lib/validations.ts`):
- `isValidChileanPhone()` — valida formato +56 9 XXXX XXXX
- `formatChileanPhone()` — input mask para teléfono
- `isValidName()` — min 2 chars, no solo números/espacios
- Usar con `.refine()` en schemas Zod

## Decisiones Arquitectónicas

| Decisión | Razón | Alternativa descartada |
|---|---|---|
| DaisyUI v5 sobre shadcn/ui | Plugin CSS puro, sin JS runtime. Más liviano para landing. | shadcn requiere copiar componentes |
| Tailwind v4 CSS-first | Sin tailwind.config.js, config en CSS. Estándar 2025. | v3 con config JS |
| App Router con route groups | `(landing)` y `(dashboard)` comparten root layout pero tienen nav/footer distintos | Pages Router (legacy) |
| Framer Motion sobre CSS animations | API declarativa, viewport detection, AnimatePresence para exit animations | CSS animations (limitado) |
| Zod sobre yup/joi | Type inference nativa con TypeScript, tree-shakeable, estándar en Next.js | yup (menos type-safe) |
| Server Components por defecto | Reduce JS bundle. Client solo cuando hay hooks/interactividad | Todo client (innecesario) |
| Imágenes locales sobre CDN | Control total, no depender de servicios externos, Next.js optimiza | Unsplash/Cloudinary URLs |
| ESLint flat config | Estándar Next.js 16+, defineConfig nativo | Legacy .eslintrc (deprecated) |
| color-mix() en gradientes | Aplica opacidad a CSS variables sin hardcodear colores | rgba() hardcodeado (no respeta temas) |
| Validaciones como funciones puras en lib/ | Testeable, reutilizable entre forms y server actions (pendiente de extraer) | Inline en componentes |
| FAQ accordion custom sobre DaisyUI collapse | DaisyUI collapse era inestable con Framer Motion y transition-all | DaisyUI collapse (descartado) |
