'use client'

import { motion } from 'framer-motion'
import {
  BarChart3,
  Bell,
  Shield,
  Smartphone,
  Cloud,
  Settings,
} from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Monitoreo en Tiempo Real',
    description:
      'Visualiza la generacion, consumo y estado de cada panel con datos actualizados cada 30 segundos.',
  },
  {
    icon: Bell,
    title: 'Alertas Inteligentes',
    description:
      'Recibe notificaciones inmediatas ante caidas de rendimiento, fallas de inversor o desconexiones.',
  },
  {
    icon: Shield,
    title: 'Seguridad y Respaldo',
    description:
      'Datos encriptados con respaldo automatico en la nube. Cumplimiento con normativas SEC Chile.',
  },
  {
    icon: Smartphone,
    title: 'Acceso Multiplataforma',
    description:
      'Controla tu sistema desde cualquier dispositivo. Interfaz optimizada para mobile y desktop.',
  },
  {
    icon: Cloud,
    title: 'Integracion IoT',
    description:
      'Compatible con Victron, Fronius, Huawei, SMA y mas. Conecta via MQTT, Modbus o API REST.',
  },
  {
    icon: Settings,
    title: 'Reportes Automaticos',
    description:
      'Genera reportes PDF mensuales con metricas de rendimiento, ahorro economico y huella de carbono.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="badge badge-outline badge-sm text-primary border-primary/30 mb-4 font-medium">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Todo lo que necesitas para gestionar tu energia solar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
            Una plataforma disenada por ingenieros chilenos para las necesidades reales
            del mercado fotovoltaico nacional.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="card bg-card border border-border hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="card-body gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="card-title text-lg text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
