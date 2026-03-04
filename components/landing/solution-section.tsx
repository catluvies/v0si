'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Clock, ShieldCheck, BarChart2, History, BellRing } from 'lucide-react'

const highlights = [
  {
    icon: TrendingUp,
    label: '+30% Ahorro',
    description: 'Reducción comprobada en consumo eléctrico mediante detección de ineficiencias',
  },
  {
    icon: Clock,
    label: 'Tiempo Real',
    description: 'Monitoreo continuo 24/7 con datos actualizados instantáneamente',
  },
  {
    icon: ShieldCheck,
    label: '20+ Años',
    description: 'Experiencia desarrollando soluciones tecnológicas Made in Chile',
  },
]

const features = [
  {
    icon: BellRing,
    title: 'Alertas Inteligentes',
    description:
      'Notificaciones automáticas ante anomalías, desviaciones de rendimiento o condiciones críticas del sistema.',
  },
  {
    icon: BarChart2,
    title: 'Análisis Avanzado',
    description:
      'Reportes detallados, análisis de tendencias y recomendaciones basadas en más de 3,200 registros históricos.',
  },
  {
    icon: TrendingUp,
    title: 'Optimización Continua',
    description:
      'Recomendaciones automáticas basadas en análisis de datos para mejorar continuamente el rendimiento del sistema.',
  },
  {
    icon: History,
    title: 'Historial Completo',
    description:
      'Acceso completo a históricos, series temporales y análisis de patrones para toma de decisiones informadas.',
  },
]

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col gap-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            Nuestra Solución
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance mb-4">
            Monitoreo Inteligente con Tecnología Made in Chile
          </h2>
          <p className="text-base text-foreground/55 leading-relaxed text-pretty">
            Sistema de monitoreo y análisis en tiempo real que permite optimizar el consumo energético,
            detectar ineficiencias y tomar decisiones informadas. Más de 20 años de experiencia en
            proyectos eléctricos y eficiencia energética.
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
            <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border/30 border-l-2 border-l-primary">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
                La Respuesta que Necesitas
              </span>
              <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                Nuestro sistema SolarTech® combina gestión de energía eléctrica, acumulación en
                baterías de litio y monitoreo en tiempo real. Con presencia desde la frontera norte
                hasta el Cabo de Hornos, operamos en los entornos más extremos de Chile.
              </p>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Especializados en entornos aislados, energías renovables (aerogeneradores,
                turbogeneradores, paneles solares) y sistemas de inversión. Acceso desde cualquier
                dispositivo con análisis en tiempo real de más de 3,200 registros disponibles.
              </p>
            </div>

            {/* Right: highlights */}
            <div className="flex flex-col divide-y divide-border/30">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                  className="flex items-start gap-4 p-6 lg:p-7"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-0.5">{item.label}</p>
                    <p className="text-xs text-foreground/50 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8 text-center"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
              Características
            </span>
            <h3 className="text-2xl font-bold text-foreground text-balance">
              Características Principales
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="rounded-xl border border-border/30 bg-foreground/[0.03] p-6 flex flex-col gap-4 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-1.5">{feature.title}</h4>
                  <p className="text-sm text-foreground/55 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
