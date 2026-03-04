'use client'

import { motion } from 'framer-motion'
import { Sun, Battery, LineChart, Scale, BarChart2, Database, Activity, Search, Eye, Download } from 'lucide-react'

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

function CapabilityCard({ item, index }: { item: typeof capabilities[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group relative rounded-xl border border-border/30 bg-foreground/[0.02] p-6 flex flex-col gap-4 cursor-default overflow-hidden transition-all duration-300 hover:border-primary/40 hover:bg-foreground/[0.05] hover:-translate-y-1 hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.15)]"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.07),transparent_70%)]" />
      <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/40">
        <item.icon className="w-4 h-4 text-primary" />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-sm font-semibold text-foreground leading-snug">{item.title}</h3>
        <p className="text-xs text-foreground/50 leading-relaxed">{item.description}</p>
      </div>
      <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-primary/40 transition-all duration-500" />
    </motion.div>
  )
}

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

        {/* Row 1: 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
          {capabilities.slice(0, 4).map((item, index) => (
            <CapabilityCard key={item.title} item={item} index={index} />
          ))}
        </div>
        {/* Row 2: 3 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:w-3/4 lg:mx-auto">
          {capabilities.slice(4).map((item, index) => (
            <CapabilityCard key={item.title} item={item} index={index + 4} />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border/30 my-16" />

        {/* Explora los Datos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance mb-4">
            Explora los Datos
          </h2>
          <p className="text-base text-foreground/55 leading-relaxed text-pretty">
            El sistema te permite explorar y visualizar información del sistema fotovoltaico en tiempo real de manera simple e intuitiva. Más de 3,200 registros disponibles para análisis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Search, title: 'Busca', description: 'Filtra datos por fecha, tracker o tipo de métrica' },
            { icon: Eye, title: 'Visualiza', description: 'Gráficos interactivos y dashboards en tiempo real' },
            { icon: Download, title: 'Analiza', description: 'Descarga datos para análisis avanzados externos' },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="group relative rounded-xl border border-border/30 bg-foreground/[0.02] p-8 flex flex-col items-center text-center gap-4 cursor-default overflow-hidden transition-all duration-300 hover:border-primary/40 hover:bg-foreground/[0.05] hover:-translate-y-1 hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.15)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.07),transparent_70%)]" />
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/40">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">{item.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">{item.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-primary/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
