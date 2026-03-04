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
    <section id="capabilities" className="py-24 lg:py-32 bg-foreground/[0.02]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
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

        {/* Capabilities list */}
        <div className="border border-border/30 rounded-2xl overflow-hidden">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group flex items-center gap-6 px-8 py-6 border-b border-border/20 last:border-b-0 bg-background hover:bg-foreground/[0.03] transition-colors duration-200"
            >
              {/* Number */}
              <span className="text-3xl font-bold text-primary/25 tabular-nums w-10 shrink-0 leading-none group-hover:text-primary/50 transition-colors duration-200">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-primary" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground mb-0.5">{item.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed">{item.description}</p>
              </div>

              {/* Arrow */}
              <div className="w-6 h-6 rounded-full border border-border/40 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
