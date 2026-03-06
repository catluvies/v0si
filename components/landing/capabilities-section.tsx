'use client'

import { motion } from 'framer-motion'

const capabilities = [
  {
    number: '01',
    title: 'Generación Solar',
    description:
      'Monitoreo en tiempo real de 4 trackers solares con datos de voltaje, potencia y rendimiento.',
  },
  {
    number: '02',
    title: 'Sistema de Baterías',
    description:
      'Control completo del estado de carga, voltaje, corriente y temperatura de las baterías.',
  },
  {
    number: '03',
    title: 'Análisis Temporal',
    description:
      'Visualización de series temporales con patrones de generación y consumo horario.',
  },
  {
    number: '04',
    title: 'Balance Energético',
    description:
      'Seguimiento detallado del equilibrio entre generación solar y consumo eléctrico.',
  },
  {
    number: '05',
    title: 'Comparativas',
    description:
      'Análisis comparativo del rendimiento de cada tracker y métricas de eficiencia del sistema.',
  },
  {
    number: '06',
    title: 'Base de Datos',
    description:
      'Más de 3,200 registros históricos disponibles para análisis y procesamiento.',
  },
  {
    number: '07',
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
    <section id="capabilities" className="bg-base-200 py-20 lg:py-28">
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content text-balance mb-4">
            Capacidades del Sistema
          </h2>
          <p className="text-base text-base-content/70 leading-relaxed text-pretty">
            Explora todas las funcionalidades de monitoreo y análisis del sistema fotovoltaico RadioTumbes.
          </p>
        </motion.div>

        {/* Capabilities Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="relative group rounded-lg border border-base-content/10 bg-base-content/[0.03] p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Number background */}
              <div className="absolute -top-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <span className="text-9xl font-bold text-primary">{item.number}</span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 mb-4">
                  <span className="text-sm font-bold text-primary">{item.number}</span>
                </div>
                <h3 className="text-base font-semibold text-base-content mb-2">{item.title}</h3>
                <p className="text-sm text-base-content/60 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-base-content/10 my-16" />

        {/* Explora los Datos */}
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content text-balance mb-4">
            Explora los Datos
          </h2>
          <p className="text-base text-base-content/70 leading-relaxed text-pretty">
            El sistema te permite explorar y visualizar información del sistema fotovoltaico en tiempo real de manera simple e intuitiva. Más de 3,200 registros disponibles para análisis.
          </p>
        </motion.div>

        {/* 3 steps with connecting line */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden sm:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-base-content/10" />

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
                <div className="relative z-10 w-16 h-16 rounded-full border-2 border-primary/40 bg-base-200 flex items-center justify-center mb-5 hover:border-primary/60 hover:shadow-lg transition-all duration-300">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-base font-semibold text-base-content mb-1.5">{step.title}</h3>
                <p className="text-sm text-base-content/60 leading-relaxed max-w-[220px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
