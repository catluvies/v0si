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
        <div className="absolute inset-0 bg-linear-to-r from-base-100/80 via-base-100/70 to-base-100/35" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-96 z-5 bg-linear-to-t from-base-100 via-base-100/80 via-40% to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 pt-40 pb-28">
        <div className="flex flex-col items-start max-w-4xl">

          {/* Badge */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-[-0.02em] text-text-heading text-balance"
          >
            Más de 20 Años Mejorando la{' '}
            <span className="text-primary">Eficiencia Energética</span>
          </motion.h1>

          {/* Párrafo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 max-w-2xl space-y-2"
          >
            <p className="text-xl text-text-heading font-medium leading-snug">
              Especialistas en proyectos eléctricos y eficiencia energética.
            </p>
            <p className="text-base text-text-muted leading-relaxed">
              Desarrollamos tecnología Made in Chile para la gestión inteligente
              de sistemas fotovoltaicos.
            </p>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 w-full"
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
            <p className="mt-4 text-xs text-text-muted italic">
              * Datos actualizados a diciembre de 2024
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

type StatCardProps = {
  icon: React.ReactNode
  value: string
  label: string
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-base-200 backdrop-blur-sm border border-base-300 px-6 py-5 hover:bg-surface-hover transition-colors">
      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-text-heading tracking-tight leading-none">{value}</p>
        <p className="text-sm text-text-muted mt-1">{label}</p>
      </div>
    </div>
  )
}
