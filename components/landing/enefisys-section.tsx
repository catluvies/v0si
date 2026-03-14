'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SearchX, Gauge, AlarmClock, CircleDollarSign } from 'lucide-react'
import { productContent } from '@/lib/content-reference'

const { enefisys } = productContent

const problems = [
  {
    icon: SearchX,
    title: 'Sin Visibilidad',
    description:
      'Muchas empresas desconocen cómo utilizan realmente su energía. Sin datos en tiempo real, es imposible optimizar el consumo o detectar anomalías.',
  },
  {
    icon: Gauge,
    title: 'Pérdidas de Eficiencia',
    description:
      'El consumo descontrolado genera sobrecostos evitables. Sin visibilidad del sistema, cada mes se pierden recursos que podrían reinvertirse en mejoras operacionales.',
  },
  {
    icon: AlarmClock,
    title: 'Tiempo de Respuesta',
    description:
      'Las fallas eléctricas sin monitoreo se detectan tarde. Cada hora sin respuesta significa pérdidas operacionales y riesgo para los equipos.',
  },
  {
    icon: CircleDollarSign,
    title: 'Costos Operativos',
    description:
      'La falta de datos precisos impide negociar mejores tarifas y tomar decisiones de inversión fundamentadas en el uso real de la energía.',
  },
]

const features = [
  {
    title: 'Alertas en Tiempo Real',
    description:
      'El sistema avisa al instante si algo falla o baja el rendimiento. Permite actuar antes de que un problema menor se convierta en una pérdida significativa de dinero.',
  },
  {
    title: 'Balance en Tiempo Real',
    description:
      'Visualiza cuánta energía estás generando, cuánta batería te queda y si tu generación cubre lo que estás consumiendo. Todo en un solo vistazo.',
  },
  {
    title: 'Historial Inteligente',
    description:
      'Entiende los patrones de comportamiento de tu instalación. Descubre cuándo se gasta más energía y en qué momentos conviene ajustar el consumo.',
  },
  {
    title: 'Visión Integral',
    description:
      'Generación, almacenamiento y consumo en un solo lugar. No solo muestra cuánto sol hay — cruza toda la información para darte el panorama completo.',
  },
]

export default function EnefisysSection() {
  return (
    <section>
      {/* Hero fullscreen */}
      <div className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/images/products/enefisys.jpg"
          alt="ENEFISYS®"
          fill
          className="object-cover brightness-[0.35]"
          priority
        />
        <div className="absolute inset-0 bg-primary/25 mix-blend-color" />
        <div className="absolute inset-0 bg-linear-to-b from-base-100/60 via-transparent to-base-100" />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-black tracking-tight text-text-heading uppercase"
          >
            {enefisys.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-text-body leading-relaxed text-pretty"
          >
            {enefisys.tagline}
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">

        {/* 4 servicios con números */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-20">
          {enefisys.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-text-heading mb-4 text-center">
                {String(index + 1).padStart(2, '0')}.
              </p>
              <div className="h-0.5 bg-primary mb-4" />
              <h3 className="font-display text-sm font-bold text-text-heading uppercase tracking-wide mb-3 text-center">{service.title}</h3>
              <p className="text-sm text-text-body leading-relaxed text-justify">{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* ¿Por qué ENEFISYS? — con imagen de fondo */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
        <Image
          src="/images/desafios-bg.jpg"
          alt=""
          fill
          className="object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-primary/25 mix-blend-color" />
        <div className="absolute inset-0 bg-base-100/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">¿Por qué ENEFISYS?</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-text-heading mb-4">
                Los Desafíos Energéticos Actuales
              </h3>
              <p className="text-base text-text-body leading-relaxed text-pretty">
                La mayoría de las empresas operan sin visibilidad real de su consumo energético,
                generando costos innecesarios y perdiendo oportunidades de optimización.
              </p>
            </motion.div>

            <div className="flex flex-col gap-4">
              {problems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-4 py-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary fill-primary/20" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-text-heading mb-2 uppercase tracking-wide">{item.title}</h4>
                    <p className="text-sm text-text-body leading-relaxed text-justify">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* La solución — fondo con gradiente azul */}
      <div
        className="relative overflow-hidden py-20 lg:py-28"
        style={{
          background: 'linear-gradient(to bottom, var(--color-base-100) 0%, color-mix(in srgb, var(--color-blue-900) 15%, var(--color-base-100)) 30%, color-mix(in srgb, var(--color-blue-900) 20%, var(--color-base-100)) 70%, var(--color-base-100) 100%)',
        }}
      >
        {/* Pattern background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, black 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, black 80%)',
          }}
        >
          <svg className="w-full h-full">
            <defs>
              <pattern id="solucion-pattern" patternUnits="userSpaceOnUse" width="12" height="12">
                <rect width="2" height="2" x="0" y="0" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#solucion-pattern)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Cards izquierda */}
            <div className="flex flex-col gap-4 order-2 lg:order-1">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-xl border border-base-300 bg-base-100 p-5 border-l-2 border-l-primary hover:border-primary/35 hover:bg-base-200 transition-all duration-300"
                >
                  <h4 className="font-display text-sm font-bold text-text-heading mb-2 uppercase tracking-wide">{feature.title}</h4>
                  <div className="w-8 h-px bg-primary mb-3" />
                  <p className="text-sm text-text-body leading-relaxed text-justify">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Texto derecha */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 lg:order-2"
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">La solución</p>
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-text-heading mb-4">
                Plataforma de Monitoreo ENEFISYS®
              </h3>
              <p className="text-base text-text-body leading-relaxed text-pretty">
                Una radiografía energética de tu instalación. Generación, almacenamiento en baterías
                y consumo eléctrico real en un solo panel de control. Probado en los entornos más
                extremos de Chile.
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Banner 24/7 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full bg-primary/5 border-y border-primary/10"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 text-center">
          <h3 className="font-display text-lg font-bold text-text-heading uppercase mb-1">
            Acceso <span className="text-primary">24/7</span> desde cualquier dispositivo
          </h3>
          <p className="text-sm text-text-body leading-relaxed">
            Monitoreo continuo con análisis en tiempo real desde cualquier lugar del mundo.
          </p>
        </div>
      </motion.div>

    </section>
  )
}
