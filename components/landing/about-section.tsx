'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Mail } from 'lucide-react'

const stats = [
  { value: '20+', label: 'Años de experiencia' },
  { value: '100+', label: 'Proyectos realizados' },
  { value: 'Made in Chile', label: 'Tecnología propia' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content text-balance mb-4 uppercase">
            Quiénes Somos
          </h2>
          <p className="text-base text-base-content/60 leading-relaxed text-pretty">
            Empresa B de ingenieros chilenos comprometidos con el desarrollo
            sustentable de soluciones de eficiencia energética.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center justify-center gap-8 sm:gap-16 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={stat.value} className="flex items-center gap-8 sm:gap-16">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary leading-none mb-2 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-base-content/50 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
              {index < stats.length - 1 && (
                <div className="h-10 w-px bg-base-content/10" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Historia — card right, extends below image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative lg:mb-10 mb-6"
        >
          <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden">
            <Image
              src="/images/hero-solar.jpg"
              alt="Instalación de paneles solares en Chile"
              fill
              className="object-cover animate-subtle-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-base-100/70 via-base-100/25 via-45% to-transparent" />
          </div>
          <div className="relative lg:absolute lg:bottom-[-1.5rem] lg:right-8 lg:w-[48%] border border-base-content/10 bg-base-100/95 backdrop-blur-sm p-8 lg:p-10 -mt-16 mx-4 lg:mt-0 lg:mx-0 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            <h3 className="text-xl font-bold text-base-content uppercase tracking-wide text-center w-fit mx-auto pb-2 border-b border-base-content/20 mb-5">Nuestra Historia</h3>
            <p className="text-sm text-base-content/60 leading-loose text-justify mb-4">
              El año 2004 comienza a forjarse el sueño compartido de un grupo de
              ingenieros chilenos, quienes trabajan hasta el día de hoy para romper
              los límites y asumir el desafío tecnológico de generar modelos y
              herramientas <strong className="text-base-content/70">Made in Chile</strong> de
              análisis de datos en torno a la eficiencia del uso de la energía.
            </p>
            <p className="text-sm text-base-content/60 leading-loose text-justify">
              Con presencia desde la frontera norte hasta el Cabo de Hornos, hemos
              desarrollado sistemas como <strong className="text-base-content/70">SolarTech®</strong> y{' '}
              <strong className="text-base-content/70">EnergiaPlus®</strong>, reconocidos por resolver
              problemas en los territorios más extremos del país.
            </p>
          </div>
        </motion.div>

        {/* Misión + Visión — par sobre una imagen, cards extend below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative lg:mb-10 mb-6"
        >
          <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden">
            <Image
              src="/images/hero-solar.jpg"
              alt="Misión y Visión de Lambda Ingenieros"
              fill
              className="object-cover animate-subtle-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 via-base-100/30 to-transparent" />
          </div>

          <div className="relative lg:absolute lg:bottom-[-1.5rem] lg:left-8 lg:right-8 flex flex-col lg:flex-row gap-4 -mt-16 mx-4 lg:mt-0 lg:mx-0">
            {/* Misión */}
            <div className="flex-1 bg-base-100/95 border border-base-content/10 backdrop-blur-sm p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <h3 className="text-lg font-bold text-base-content uppercase tracking-wide text-center w-fit mx-auto pb-2 border-b border-base-content/20 mb-4">Nuestra Misión</h3>
              <p className="text-sm text-base-content/60 leading-loose text-justify">
                Desarrollamos tecnología <strong className="text-base-content/70">Made in Chile</strong> para
                optimizar el consumo energético. Desde la ingeniería, creamos soluciones
                sostenibles en proyectos eléctricos y eficiencia energética que generan
                impacto real: menos consumo, menor huella ambiental, mayor eficiencia operativa.
              </p>
            </div>

            {/* Visión */}
            <div className="flex-1 bg-base-100/95 border border-base-content/10 backdrop-blur-sm p-6 lg:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              <h3 className="text-lg font-bold text-base-content uppercase tracking-wide text-center w-fit mx-auto pb-2 border-b border-base-content/20 mb-4">Nuestra Visión</h3>
              <p className="text-sm text-base-content/60 leading-loose text-justify">
                Liderar el desarrollo de sistemas tecnológicos sustentables en{' '}
                <strong className="text-base-content/70">eficiencia eléctrica</strong>, con soluciones
                propias que resuelvan las necesidades reales del sector. Impulsar un cambio
                donde la sostenibilidad no sea la excepción, sino el estándar.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Fundador — cierre centrado, más presencia */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative lg:mb-8"
        >
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src="/images/hero-solar.jpg"
              alt="Rodrigo Oporto, Gerente General"
              fill
              className="object-cover animate-subtle-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 via-base-100/25 to-transparent" />
          </div>
          <div className="relative lg:absolute lg:bottom-[-2rem] lg:left-1/2 lg:-translate-x-1/2 lg:w-[50%] bg-base-100/95 border border-base-content/10 border-t-2 border-t-primary backdrop-blur-sm p-8 lg:p-10 -mt-16 mx-4 lg:mt-0 lg:mx-0 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            <h3 className="text-2xl font-bold text-base-content uppercase tracking-wide text-center w-fit mx-auto pb-2 border-b border-base-content/20 mb-1">Rodrigo Oporto</h3>
            <span className="block text-center mb-5">
              <span className="inline-block text-xs font-medium bg-primary/10 border border-primary/20 text-primary/80 px-3 py-1 rounded-full">Gerente General</span>
            </span>
            <p className="text-sm text-base-content/60 leading-loose text-justify mb-3">
              Ingeniero Naval Eléctrico y ex-oficial de la Armada de Chile con trayectoria
              en industrias químicas, mineras, astilleros y empresas de ingeniería.
              Especialista en proyectos eléctricos, electrónicos, automatización y supervisión.
            </p>
            <p className="text-sm text-base-content/60 leading-loose text-justify mb-5">
              Combina experiencia <strong className="text-base-content/70">técnica</strong>,{' '}
              <strong className="text-base-content/70">académica</strong>,{' '}
              <strong className="text-base-content/70">comercial</strong> y de{' '}
              <strong className="text-base-content/70">dirección de organizaciones</strong>.
            </p>
            <div className="flex items-center justify-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn de Rodrigo Oporto"
                className="flex items-center gap-1.5 text-base-content/40 hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-xs">LinkedIn</span>
              </a>
              <span className="w-px h-4 bg-base-content/10" />
              <a
                href="mailto:rodrigo@lambda.cl"
                aria-label="Email de Rodrigo Oporto"
                className="flex items-center gap-1.5 text-base-content/40 hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span className="text-xs">Contacto</span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
