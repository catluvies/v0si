'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Clock, DollarSign } from 'lucide-react'

const impacts = [
  {
    icon: TrendingDown,
    title: 'Pérdidas de Eficiencia',
    description:
      'El consumo descontrolado genera sobrecostos evitables. Sin visibilidad del sistema, cada mes se pierden recursos que podrían reinvertirse en el negocio.',
  },
  {
    icon: Clock,
    title: 'Tiempo de Respuesta',
    description:
      'Las fallas eléctricas sin monitoreo se detectan tarde. Cada hora sin respuesta significa pérdidas operacionales y riesgo para los equipos.',
  },
  {
    icon: DollarSign,
    title: 'Costos Operativos',
    description:
      'La falta de datos precisos impide negociar mejores tarifas eléctricas y tomar decisiones de inversión fundamentadas en eficiencia energética.',
  },
]

export default function ProblemSolutionSection() {
  return (
    <section id="problem" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-16">

        {/* Header centrado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-base-content text-balance uppercase mb-4">
            El Problema que <span className="text-primary">Abordamos</span>
          </h2>
          <p className="text-base text-base-content/60 leading-relaxed text-pretty">
            Las constantes alzas de tarifas eléctricas han impactado negativamente los costos
            de empresas, industrias, instituciones y condominios. Sin un sistema de monitoreo
            adecuado, se generan pérdidas importantes por uso ineficiente de la energía.
          </p>
        </motion.div>

        {/* Tarjeta situación actual — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded border border-base-content/10 bg-base-content/[0.03] border-l-2 border-l-primary p-8 lg:p-10"
        >
          <h3 className="text-xl font-bold text-base-content mb-4 text-balance">
            La Falta de Visibilidad y Control Energético
          </h3>
          <p className="text-sm text-base-content/60 leading-relaxed mb-4 max-w-3xl">
            Muchas empresas e instituciones desconocen cómo están utilizando realmente su energía.
            Sin datos precisos y análisis en tiempo real, es imposible optimizar el consumo,
            detectar anomalías o tomar decisiones informadas sobre eficiencia energética.
          </p>
          <p className="text-sm text-base-content/60 leading-relaxed max-w-3xl">
            Detectamos que es un error adelantar la instalación de paneles solares sin
            preocuparse de corregir primero la eficiencia en el uso de la energía existente.
            El monitoreo y análisis son fundamentales para cualquier estrategia energética exitosa.
          </p>
        </motion.div>

        {/* Impact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {impacts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded border border-base-content/10 bg-base-content/[0.03] p-6 flex flex-col gap-4 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-base-content mb-1.5">{item.title}</h3>
                <p className="text-sm text-base-content/60 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
