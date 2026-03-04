'use client'

import { motion } from 'framer-motion'
import { Sun, Battery, LineChart, Scale, BarChart2, Database, Activity } from 'lucide-react'

const capabilities = [
  {
    icon: Sun,
    title: 'Generación Solar',
    description:
      'Monitoreo en tiempo real de 4 trackers solares con datos de voltaje, potencia y rendimiento.',
  },
  {
    icon: Battery,
    title: 'Sistema de Baterías',
    description:
      'Control completo del estado de carga, voltaje, corriente y temperatura de las baterías.',
  },
  {
    icon: LineChart,
    title: 'Análisis Temporal',
    description:
      'Visualización de series temporales con patrones de generación y consumo horario.',
  },
  {
    icon: Scale,
    title: 'Balance Energético',
    description:
      'Seguimiento detallado del equilibrio entre generación solar y consumo eléctrico.',
  },
  {
    icon: BarChart2,
    title: 'Comparativas',
    description:
      'Análisis comparativo del rendimiento de cada tracker y métricas de eficiencia del sistema.',
  },
  {
    icon: Database,
    title: 'Base de Datos',
    description:
      'Más de 3,200 registros históricos disponibles para análisis y procesamiento.',
  },
  {
    icon: Activity,
    title: '24/7 Monitoring',
    description:
      'Monitoreo continuo con actualización automática de métricas y alertas del sistema.',
  },
]

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            Capacidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance mb-4">
            Capacidades del Sistema
          </h2>
          <p className="text-base text-foreground/55 leading-relaxed text-pretty">
            Explora todas las funcionalidades de monitoreo y análisis del sistema fotovoltaico RadioTumbes.
          </p>
        </motion.div>

        {/* Grid: 6 cards uniform 3-col, last card full-width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {capabilities.map((item, index) => {
            const isLast = index === capabilities.length - 1
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className={`group relative rounded-xl border border-border/30 bg-foreground/[0.02] p-6 flex flex-col gap-4 cursor-default overflow-hidden transition-all duration-300 hover:border-primary/40 hover:bg-foreground/[0.05] hover:-translate-y-0.5 hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.15)] ${isLast ? 'md:col-span-3 md:flex-row md:items-center md:gap-10' : ''}`}
              >
                {/* Glow accent on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.07),transparent_70%)]" />

                {/* Icon */}
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/40">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-semibold text-foreground leading-snug">{item.title}</h3>
                  <p className="text-xs text-foreground/50 leading-relaxed">{item.description}</p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-primary/40 transition-all duration-500" />
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
