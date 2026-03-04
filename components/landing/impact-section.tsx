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
    <section id="impact" className="py-20 lg:py-28 bg-foreground/[0.03] border-y border-border/25">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
              Consecuencias
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance leading-tight max-w-md">
              El Costo Real de No Actuar
            </h2>
          </div>
        </motion.div>

        {/* Impact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {impacts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group rounded-2xl border border-border/30 bg-background p-7 flex flex-col gap-4 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-3xl font-bold text-foreground/10 group-hover:text-foreground/15 transition-colors">
                  0{index + 1}
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/55 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl bg-primary overflow-hidden"
        >
          <div className="px-8 py-12 lg:px-14 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-content mb-3 text-balance">
                Es Momento de un Cambio
              </h3>
              <p className="text-sm text-primary-content/75 leading-relaxed text-pretty">
                La tecnología para resolver estos problemas existe y está probada. Con más de 20
                años de experiencia, sabemos cómo implementarla correctamente para maximizar
                la eficiencia energética.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-background text-foreground text-sm font-semibold hover:bg-background/90 transition-all duration-200 whitespace-nowrap"
            >
              Contáctanos
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
