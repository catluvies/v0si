'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Clock, DollarSign, ArrowRight } from 'lucide-react'

const stats = [
  { value: '30%', description: 'Ahorro potencial detectando ineficiencias operacionales' },
  { value: '20+', description: 'Años desarrollando soluciones de eficiencia energética' },
  { value: '24/7', description: 'Monitoreo continuo para identificar problemas en tiempo real' },
]

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
    <section id="problem" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-16">

        {/* Header centrado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            El Problema
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance mb-4">
            El Problema que Abordamos
          </h2>
          <p className="text-base text-foreground/55 leading-relaxed text-pretty">
            Las constantes alzas de tarifas eléctricas han impactado negativamente los costos
            de empresas, industrias, instituciones y condominios. Sin un sistema de monitoreo
            adecuado, se generan pérdidas importantes por uso ineficiente de la energía.
          </p>
        </motion.div>

        {/* Tarjeta situación actual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border/40 bg-foreground/[0.03] p-8 lg:p-10 border-l-2 border-l-primary"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            Situación Actual
          </span>
          <h3 className="text-xl font-bold text-foreground mb-4 text-balance">
            La Falta de Visibilidad y Control Energético
          </h3>
          <p className="text-sm text-foreground/60 leading-relaxed mb-4 max-w-3xl">
            Muchas empresas e instituciones desconocen cómo están utilizando realmente su energía.
            Sin datos precisos y análisis en tiempo real, es imposible optimizar el consumo,
            detectar anomalías o tomar decisiones informadas sobre eficiencia energética.
          </p>
          <p className="text-sm text-foreground/60 leading-relaxed max-w-3xl">
            Detectamos que es un error adelantar la instalación de paneles solares sin
            preocuparse de corregir primero la eficiencia en el uso de la energía existente.
            El monitoreo y análisis son fundamentales para cualquier estrategia energética exitosa.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/30 rounded-2xl overflow-hidden border border-border/30">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-background px-8 py-10 flex flex-col gap-2"
            >
              <p className="text-6xl font-bold text-primary leading-none tracking-tight">{stat.value}</p>
              <p className="text-sm text-foreground/50 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider with label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-border/30" />
          <span className="text-xs font-semibold tracking-widest uppercase text-foreground/30">
            Consecuencias
          </span>
          <div className="h-px flex-1 bg-border/30" />
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
              className="rounded-2xl border border-border/30 bg-foreground/[0.03] p-7 flex flex-col gap-5 hover:border-primary/40 hover:bg-foreground/[0.05] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-4xl font-bold text-foreground/8 tabular-nums">0{index + 1}</span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/55 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl bg-primary px-10 py-12 lg:px-14 lg:py-14 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
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
        </motion.div>

      </div>
    </section>
  )
}
