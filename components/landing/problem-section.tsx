'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    title: 'Sin Visibilidad',
    description:
      'Muchas empresas desconocen cómo utilizan realmente su energía. Sin datos en tiempo real, es imposible optimizar el consumo o detectar anomalías.',
  },
  {
    title: 'Pérdidas de Eficiencia',
    description:
      'El consumo descontrolado genera sobrecostos evitables. Sin visibilidad del sistema, cada mes se pierden recursos que podrían reinvertirse.',
  },
  {
    title: 'Tiempo de Respuesta',
    description:
      'Las fallas eléctricas sin monitoreo se detectan tarde. Cada hora sin respuesta significa pérdidas operacionales y riesgo para los equipos.',
  },
  {
    title: 'Costos Operativos',
    description:
      'La falta de datos precisos impide negociar mejores tarifas y tomar decisiones de inversión fundamentadas en el uso real de la energía.',
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-10">

        {/* Header centrado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-heading text-balance uppercase mb-4">
            El Problema que <span className="text-primary">Abordamos</span>
          </h2>
          <p className="text-base text-text-body leading-relaxed text-pretty">
            La falta de visibilidad energética genera pérdidas evitables.
          </p>
        </motion.div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-xl border border-base-300 bg-base-200 p-6 flex flex-col hover:border-primary/35 transition-all duration-300"
            >
              <h3 className="font-display text-sm font-bold text-text-heading uppercase tracking-wide mb-2">{item.title}</h3>
              <div className="w-8 h-px bg-primary mb-3" />
              <p className="text-sm text-text-body leading-relaxed text-justify">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
