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
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-base-100 [background:radial-gradient(125%_125%_at_50%_10%,var(--color-base-100)_40%,var(--color-teal-700)_100%)]" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header — two columns: title left, description right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-base-content uppercase leading-none mb-5">
            Quiénes <span className="text-primary">Somos</span>
          </h2>
          <p className="text-base text-base-content/70 leading-relaxed">
            Empresa B de ingenieros chilenos comprometidos con el desarrollo
            sustentable de soluciones de <strong className="text-base-content/80">eficiencia energética</strong>.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-3 max-w-2xl mx-auto mb-14"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className={`text-center hover:-translate-y-0.5 transition-transform duration-300 ease-out cursor-default py-2 ${index < stats.length - 1 ? 'border-r border-base-content/10' : ''}`}
            >
              <p className="text-3xl sm:text-4xl font-bold text-primary leading-none mb-2 tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-base-content/50 font-medium uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Historia */}
        <div className="relative lg:mb-10 mb-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/prueba-historia.jpg"
              alt="Instalación de paneles solares en Chile"
              fill
              className="object-cover animate-subtle-zoom img-brand"
            />
            <div className="absolute inset-0 img-brand-tint" />
            <div className="absolute inset-0 bg-gradient-to-t from-base-100/70 via-base-100/20 via-40% to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:absolute lg:bottom-[-1rem] lg:left-1/2 lg:-translate-x-1/2 lg:w-[68%] border border-base-content/10 bg-base-100/95 backdrop-blur-sm px-8 lg:px-12 py-6 lg:py-7 -mt-16 mx-4 lg:mt-0 lg:mx-0 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out"
          >
            <h3 className="text-xl font-bold text-base-content uppercase tracking-wide text-center w-fit mx-auto pb-2 border-b border-base-content/20 mb-4">Nuestra Historia</h3>
            <p className="text-sm text-base-content/60 leading-relaxed text-justify mb-3">
              El año 2004 comienza a forjarse el sueño compartido de un grupo de
              ingenieros chilenos, quienes trabajan hasta el día de hoy para romper
              los límites y asumir el desafío tecnológico de generar modelos y
              herramientas <strong className="text-base-content/70">Made in Chile</strong> de
              análisis de datos en torno a la eficiencia del uso de la energía.
            </p>
            <p className="text-sm text-base-content/60 leading-relaxed text-justify">
              Con presencia desde la frontera norte hasta el Cabo de Hornos, hemos
              desarrollado sistemas como <strong className="text-base-content/70">SolarTech®</strong> y{' '}
              <strong className="text-base-content/70">EnergiaPlus®</strong>, reconocidos por resolver
              problemas en los territorios más extremos del país.
            </p>
          </motion.div>
        </div>

        {/* Misión + Visión */}
        <div className="relative lg:mb-10 mb-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/prueba-mision-vision.jpg"
              alt="Misión y Visión de Lambda Ingenieros"
              fill
              className="object-cover animate-subtle-zoom img-brand"
            />
            <div className="absolute inset-0 img-brand-tint" />
            <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 via-base-100/30 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:absolute lg:bottom-[-1rem] lg:left-8 lg:right-8 flex flex-col lg:flex-row gap-4 -mt-16 mx-4 lg:mt-0 lg:mx-0"
          >
            {/* Misión */}
            <div className="flex-1 bg-base-100/95 border border-base-content/10 backdrop-blur-sm px-8 lg:px-10 py-7 lg:py-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out">
              <h3 className="text-lg font-bold text-base-content uppercase tracking-wide text-center w-fit mx-auto pb-2 border-b border-base-content/20 mb-4">Nuestra Misión</h3>
              <p className="text-sm text-base-content/60 leading-relaxed text-justify">
                Desarrollamos tecnología <strong className="text-base-content/70">Made in Chile</strong> para
                optimizar el consumo energético. Desde la ingeniería, creamos soluciones
                sostenibles en proyectos eléctricos y eficiencia energética que generan
                impacto real: menos consumo, menor huella ambiental, mayor eficiencia operativa.
              </p>
            </div>

            {/* Visión */}
            <div className="flex-1 bg-base-100/95 border border-base-content/10 backdrop-blur-sm px-8 lg:px-10 py-7 lg:py-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out">
              <h3 className="text-lg font-bold text-base-content uppercase tracking-wide text-center w-fit mx-auto pb-2 border-b border-base-content/20 mb-4">Nuestra Visión</h3>
              <p className="text-sm text-base-content/60 leading-relaxed text-justify">
                Liderar el desarrollo de sistemas tecnológicos sustentables en{' '}
                <strong className="text-base-content/70">eficiencia eléctrica</strong>, con soluciones
                propias que resuelvan las necesidades reales del sector. Impulsar un cambio
                donde la sostenibilidad no sea la excepción, sino el estándar.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Fundador */}
        <div className="relative lg:mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/prueba-fundador.png"
              alt="Rodrigo Oporto, Gerente General"
              fill
              className="object-cover animate-subtle-zoom img-brand"
            />
            <div className="absolute inset-0 img-brand-tint" />
            <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 via-base-100/25 to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:absolute lg:bottom-[-1rem] lg:left-1/2 lg:-translate-x-1/2 lg:w-[68%] bg-base-100/95 border border-base-content/10 backdrop-blur-sm px-8 lg:px-12 py-6 lg:py-7 -mt-16 mx-4 lg:mt-0 lg:mx-0 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out"
          >
            <h3 className="text-xl font-bold text-base-content uppercase tracking-wide text-center w-fit mx-auto pb-2 border-b border-base-content/20 mb-4">Nuestro Fundador</h3>
            <p className="text-sm text-base-content/60 leading-relaxed text-justify mb-2">
              <strong className="text-base-content/70">Rodrigo Oporto</strong>, Gerente General, es
              Ingeniero Naval Eléctrico y ex-oficial de la Armada de Chile con trayectoria
              en industrias químicas, mineras, astilleros y empresas de ingeniería.
              Especialista en proyectos eléctricos, electrónicos, automatización y supervisión.
            </p>
            <p className="text-sm text-base-content/60 leading-relaxed text-justify mb-4">
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
          </motion.div>
        </div>

      </div>
    </section>
  )
}
