'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Clock, DollarSign, ArrowRight } from 'lucide-react'

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

export default function ImpactSection() {
  return (
    <section id="impact" className="py-20 lg:py-28 bg-foreground/[0.02] border-y border-border/25">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block text-xs font-medium text-primary border border-primary/25 bg-primary/10 rounded-full px-3 py-1 mb-4">
            Consecuencias
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance max-w-xl">
            El Costo Real de No Actuar
          </h2>
        </motion.div>

        {/* Impact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {impacts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-xl border border-border/40 bg-background p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-foreground/55 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl bg-primary px-8 py-10 text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-primary-content mb-3 text-balance">
            Es Momento de un Cambio
          </h3>
          <p className="text-sm text-primary-content/80 leading-relaxed max-w-lg mx-auto text-pretty">
            La tecnología para resolver estos problemas existe y está probada. Con más de 20
            años de experiencia, sabemos cómo implementarla correctamente para maximizar
            la eficiencia energética.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-lg bg-background/15 hover:bg-background/25 text-primary-content text-sm font-medium transition-all duration-200 border border-background/20"
          >
            Contáctanos
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
