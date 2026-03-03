'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Zap } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-solar.jpg"
          alt="Paneles solares en instalacion fotovoltaica"
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8 pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left - Copy */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge badge-outline badge-sm text-primary border-primary/30 mb-6 font-medium">
                Monitoreo Solar Inteligente
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance text-foreground"
            >
              Controla tu energia{' '}
              <span className="text-primary">solar</span> en tiempo real
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty"
            >
              Plataforma integral de monitoreo fotovoltaico que te permite visualizar,
              analizar y optimizar la generacion de cada uno de tus paneles solares.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a href="#contact" className="btn btn-primary rounded-lg gap-2 px-6">
                Solicitar Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#features" className="btn btn-ghost rounded-lg text-muted-foreground gap-2">
                Ver funcionalidades
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">+150</p>
                  <p className="text-xs text-muted-foreground">Sistemas monitoreados</p>
                </div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">99.8%</p>
                  <p className="text-xs text-muted-foreground">Uptime del servicio</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 w-full max-w-lg lg:max-w-none"
          >
            <div className="relative rounded-2xl bg-card border border-border p-4 shadow-2xl shadow-primary/5">
              {/* Fake dashboard header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-chart-2" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">dashboard.lambda.cl</span>
              </div>

              {/* Fake dashboard content */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <DashboardStat label="Generacion Hoy" value="42.8 kWh" change="+12%" />
                <DashboardStat label="Potencia Actual" value="5.2 kW" change="+8%" />
                <DashboardStat label="Ahorro Mensual" value="$185.000" change="+15%" />
              </div>

              {/* Fake chart area */}
              <div className="h-40 rounded-xl bg-secondary/50 flex items-end gap-1 p-4">
                {[35, 45, 60, 80, 70, 90, 85, 95, 75, 65, 50, 40].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm bg-primary/70 transition-all"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Generacion de energia - Ultimas 12 horas
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function DashboardStat({
  label,
  value,
  change,
}: {
  label: string
  value: string
  change: string
}) {
  return (
    <div className="rounded-xl bg-secondary/50 p-3">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-base font-bold text-foreground mt-1">{value}</p>
      <p className="text-xs text-primary mt-1">{change}</p>
    </div>
  )
}
