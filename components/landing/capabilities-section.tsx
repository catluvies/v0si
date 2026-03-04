'use client'

import { motion } from 'framer-motion'

const capabilities = [
  {
    title: 'Generación Solar',
    description:
      'Monitoreo en tiempo real de 4 trackers solares con datos de voltaje, potencia y rendimiento.',
  },
  {
    title: 'Sistema de Baterías',
    description:
      'Control completo del estado de carga, voltaje, corriente y temperatura de las baterías.',
  },
  {
    title: 'Análisis Temporal',
    description:
      'Visualización de series temporales con patrones de generación y consumo horario.',
  },
  {
    title: 'Balance Energético',
    description:
      'Seguimiento detallado del equilibrio entre generación solar y consumo eléctrico.',
  },
  {
    title: 'Comparativas',
    description:
      'Análisis comparativo del rendimiento de cada tracker y métricas de eficiencia del sistema.',
  },
  {
    title: 'Base de Datos',
    description:
      'Más de 3,200 registros históricos disponibles para análisis y procesamiento.',
  },
  {
    title: '24/7 Monitoring',
    description:
      'Monitoreo continuo con actualización automática de métricas y alertas del sistema.',
  },
]

const steps = [
  { number: '01', title: 'Busca', description: 'Filtra datos por fecha, tracker o tipo de métrica' },
  { number: '02', title: 'Visualiza', description: 'Gráficos interactivos y dashboards en tiempo real' },
  { number: '03', title: 'Analiza', description: 'Descarga datos para análisis avanzados externos' },
]

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="pt-16 pb-24 lg:pb-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
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

        {/* Capabilities as structured 2-column list */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl border border-border/30 overflow-hidden">
          {capabilities.map((item, index) => {
            const isLast = index === capabilities.length - 1
            const isLastAndOdd = isLast && capabilities.length % 2 !== 0
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className={`flex items-start gap-4 px-6 py-5 border-b border-border/20 ${
                  index % 2 === 0 ? 'md:border-r' : ''
                } ${isLastAndOdd ? 'md:col-span-2 md:border-r-0' : ''} ${
                  // Remove bottom border from last row
                  (isLastAndOdd || index >= capabilities.length - 2) ? 'md:border-b-0' : ''
                } ${index === capabilities.length - 1 ? 'border-b-0' : ''}`}
              >
                <span className="text-primary font-mono text-xs font-semibold mt-0.5 shrink-0 w-5 opacity-50">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                  <p className="text-xs text-foreground/50 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-border/30 my-16" />

        {/* Explora los Datos — 3-step process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            Acceso a la Plataforma
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance mb-4">
            Explora los Datos
          </h2>
          <p className="text-base text-foreground/55 leading-relaxed text-pretty">
            El sistema te permite explorar y visualizar información del sistema fotovoltaico en tiempo real de manera simple e intuitiva. Más de 3,200 registros disponibles para análisis.
          </p>
        </motion.div>

        {/* 3 steps with connecting line */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden sm:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-border/40" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* Number circle */}
                <div className="relative z-10 w-16 h-16 rounded-full border-2 border-primary/30 bg-background flex items-center justify-center mb-5">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">{step.title}</h3>
                <p className="text-sm text-foreground/50 leading-relaxed max-w-[220px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
