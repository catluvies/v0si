'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Zap, Activity } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-solar.jpg"
          alt="Paneles solares en instalación fotovoltaica"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 lg:px-12 pt-36 pb-24">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge badge-outline badge-md text-primary border-primary/40 mb-8 font-medium px-4 py-3 text-sm">
              Sistema Fotovoltaico RadioTumbes
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-balance text-foreground"
          >
            Más de 20 Años Mejorando la{' '}
            <span className="text-primary">Eficiencia Energética</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl space-y-1"
          >
            <p className="text-lg md:text-xl text-foreground/65 leading-relaxed text-balance">
              Especialistas en proyectos eléctricos y eficiencia energética.
              Desarrollamos tecnología Made in Chile para la gestión inteligente
              de sistemas fotovoltaicos.
            </p>
          </motion.div>

          {/* Divisor */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-12 w-16 h-px bg-primary/50"
          />

          {/* Stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 w-full max-w-3xl"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard
                icon={<BarChart3 className="w-6 h-6" />}
                value="3,203"
                label="Lecturas del Sistema"
              />
              <StatCard
                icon={<Zap className="w-6 h-6" />}
                value="4"
                label="Trackers Solares"
              />
              <StatCard
                icon={<Activity className="w-6 h-6" />}
                value="24/7"
                label="Monitoreo Continuo"
              />
            </div>
            <p className="mt-4 text-xs text-foreground/35 italic text-center">
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
    <div className="rounded-2xl bg-foreground/[0.06] backdrop-blur-sm border border-foreground/10 px-6 py-7 flex flex-col items-center gap-3 hover:bg-foreground/[0.09] transition-colors">
      <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
        {icon}
      </div>
      <p className="text-4xl font-bold text-foreground tracking-tight">{value}</p>
      <p className="text-sm text-foreground/50 font-medium">{label}</p>
    </div>
  )
}
