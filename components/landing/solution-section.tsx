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
    <section id="solution" className="bg-base-200 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            Nuestra Solución
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content text-balance mb-4">
            Monitoreo Inteligente con Tecnología Made in Chile
          </h2>
          <p className="text-base text-base-content/70 leading-relaxed text-pretty">
            Sistema de monitoreo y análisis en tiempo real que permite optimizar el consumo energético,
            detectar ineficiencias y tomar decisiones informadas. Más de 20 años de experiencia en
            proyectos eléctricos y eficiencia energética.
          </p>
        </motion.div>

        {/* Main content without card border - content breathes directly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left: text */}
            <div className="border-l-2 border-l-primary pl-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
                La Respuesta que Necesitas
              </span>
              <p className="text-sm text-base-content/70 leading-relaxed mb-4">
                Nuestro sistema SolarTech® combina gestión de energía eléctrica, acumulación en
                baterías de litio y monitoreo en tiempo real. Con presencia desde la frontera norte
                hasta el Cabo de Hornos, operamos en los entornos más extremos de Chile.
              </p>
              <p className="text-sm text-base-content/70 leading-relaxed">
                Especializados en entornos aislados, energías renovables (aerogeneradores,
                turbogeneradores, paneles solares) y sistemas de inversión. Acceso desde cualquier
                dispositivo con análisis en tiempo real de más de 3,200 registros disponibles.
              </p>
            </div>

            {/* Right: highlights as cards */}
            <div className="flex flex-col gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                  className="rounded-lg border border-base-content/10 bg-base-content/[0.03] p-5 flex items-start gap-4 hover:bg-base-content/[0.06] transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-base-content mb-1">{item.label}</p>
                    <p className="text-xs text-base-content/60 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Features as separated cards */}
          <div className="bg-base-content/[0.03] rounded-lg p-6 lg:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + index * 0.06 }}
                  className="rounded-lg border border-base-content/10 bg-base-200 p-4 flex flex-col gap-2 hover:border-primary/40 hover:bg-base-content/[0.06] transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <feature.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                    <p className="text-xs font-semibold text-base-content">{feature.title}</p>
                  </div>
                  <p className="text-[11px] text-base-content/60 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
