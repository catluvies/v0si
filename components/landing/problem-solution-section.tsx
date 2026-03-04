'use client'

import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

const stats = [
  {
    value: '30%',
    description: 'Ahorro potencial en consumo eléctrico detectando ineficiencias operacionales',
  },
  {
    value: '20+',
    description: 'Años de experiencia desarrollando soluciones de eficiencia energética',
  },
  {
    value: '24/7',
    description: 'Monitoreo continuo para identificar problemas en tiempo real',
  },
]

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance mb-4">
            El Problema que Abordamos
          </h2>
          <p className="text-base text-foreground/55 leading-relaxed text-pretty">
            Las constantes alzas de tarifas eléctricas han impactado negativamente los costos
            de empresas, industrias, instituciones y condominios. Sin un sistema de monitoreo
            adecuado, se generan pérdidas importantes por uso ineficiente de la energía.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border/40 bg-foreground/[0.03] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: text */}
            <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border/30">
              <span className="inline-block text-xs font-medium text-primary border border-primary/25 bg-primary/10 rounded-full px-3 py-1 mb-6">
                Situación Actual
              </span>
              <h3 className="text-xl font-bold text-foreground mb-4 text-balance leading-snug">
                La Falta de Visibilidad y Control Energético
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                Muchas empresas e instituciones desconocen cómo están utilizando realmente su energía.
                Sin datos precisos y análisis en tiempo real, es imposible optimizar el consumo,
                detectar anomalías o tomar decisiones informadas sobre eficiencia energética.
              </p>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Detectamos que es un error adelantar la instalación de paneles solares sin
                preocuparse de corregir primero la eficiencia en el uso de la energía existente.
                El monitoreo y análisis son fundamentales para cualquier estrategia energética exitosa.
              </p>
            </div>

            {/* Right: stats */}
            <div className="flex flex-col divide-y divide-border/30">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                  className="flex items-start gap-5 p-7 lg:p-8"
                >
                  <p className="text-3xl font-bold text-primary shrink-0 w-16">{stat.value}</p>
                  <p className="text-sm text-foreground/55 leading-relaxed pt-1">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
