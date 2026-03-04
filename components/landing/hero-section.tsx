'use client'

import { motion } from 'framer-motion'
import { BarChart3, Zap, Activity } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-solar.jpg"
          alt="Paneles solares en instalación fotovoltaica"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-40 pb-28">
        <div className="flex flex-col items-start max-w-2xl">

          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="badge badge-outline text-primary border-primary/40 font-medium px-4 py-3 text-sm mb-8"
          >
            Sistema Fotovoltaico RadioTumbes
          </motion.span>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground text-balance"
          >
            Más de 20 Años{' '}
            <br className="hidden md:block" />
            Mejorando la{' '}
            <span className="text-primary">Eficiencia Energética</span>
          </motion.h1>

          {/* Párrafo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 text-lg text-foreground/60 leading-relaxed max-w-md"
          >
            Especialistas en proyectos eléctricos y eficiencia energética.
            Tecnología Made in Chile para la gestión inteligente de sistemas
            fotovoltaicos.
          </motion.p>

          {/* Stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-16 w-full"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <StatCard
                icon={<BarChart3 className="w-5 h-5" />}
                value="3,203"
                label="Lecturas del Sistema"
              />
              <StatCard
                icon={<Zap className="w-5 h-5" />}
                value="4"
                label="Trackers Solares"
              />
              <StatCard
                icon={<Activity className="w-5 h-5" />}
                value="24/7"
                label="Monitoreo Continuo"
              />
            </div>
            <p className="mt-4 text-xs text-foreground/35 italic">
              * Datos actualizados a diciembre de 2024
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode
  value: string
  label: string
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-foreground/[0.07] backdrop-blur-sm border border-foreground/10 px-6 py-5 hover:bg-foreground/[0.11] transition-colors">
      <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-foreground tracking-tight leading-none">{value}</p>
        <p className="text-sm text-foreground/50 mt-1">{label}</p>
      </div>
    </div>
  )
}
