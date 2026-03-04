'use client'

import { motion } from 'framer-motion'

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

        {/* Two-column header layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
              El Problema
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground text-balance leading-tight">
              El Problema que Abordamos
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base text-foreground/55 leading-relaxed text-pretty lg:pb-1"
          >
            Las constantes alzas de tarifas eléctricas han impactado negativamente los costos
            de empresas, industrias, instituciones y condominios. Sin un sistema de monitoreo
            adecuado, se generan pérdidas importantes por uso ineficiente de la energía.
          </motion.p>
        </div>

        {/* Main content: text left + stats right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Left: problem text — takes 3 of 5 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3 rounded-2xl bg-foreground/[0.04] border border-border/30 p-8 lg:p-10 flex flex-col justify-between gap-8"
          >
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-6">
                Situación Actual
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-5 text-balance leading-snug">
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
            <div className="h-px bg-border/30" />
          </motion.div>

          {/* Right: stats — takes 2 of 5 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex-1 rounded-xl border border-border/30 bg-foreground/[0.03] px-6 py-5 flex flex-col justify-center gap-1.5"
              >
                <p className="text-5xl font-bold text-primary leading-none tracking-tight">{stat.value}</p>
                <p className="text-xs text-foreground/50 leading-relaxed">{stat.description}</p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
