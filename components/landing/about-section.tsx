'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Mail } from 'lucide-react'

const CARD_CLASSES = 'rounded border border-base-content/10 bg-base-100/95 backdrop-blur-sm px-8 py-6 lg:px-12 lg:py-7 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out'

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-base-100" />
      <div className="absolute inset-0 -z-10 [background:radial-gradient(125%_125%_at_50%_10%,var(--color-base-100)_60%,var(--color-blue-900)_100%)]" />
      <div className="absolute inset-0 -z-10 [background:radial-gradient(125%_125%_at_50%_90%,transparent_60%,var(--color-blue-900)_100%)]" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.02em] text-base-content uppercase leading-none mb-5">
            Quiénes <span className="text-primary">Somos</span>
          </h2>
          <p className="text-base text-base-content/70 leading-relaxed">
            Empresa B de ingenieros chilenos comprometidos con el desarrollo
            sustentable de soluciones de <strong className="text-base-content/80">eficiencia energética</strong>.
          </p>
        </motion.div>


        {/* Historia */}
        <ImageCardBlock
          src="/images/prueba-historia.jpg"
          alt="Instalación de paneles solares en Chile"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`${CARD_CLASSES} sm:-mt-12 sm:mx-4 md:absolute md:bottom-[-1rem] md:left-1/2 md:-translate-x-1/2 md:w-[68%] md:mt-0 md:mx-0`}
          >
            <h3 className="font-display text-xl font-bold text-base-content uppercase tracking-[0.08em] text-center mb-2">Nuestra Historia</h3>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
            <p className="text-sm text-base-content/60 leading-relaxed text-justify mb-3">
              El año 2004 comienza a forjarse el sueño compartido de un grupo de
              ingenieros chilenos, quienes trabajan hasta el día de hoy para romper
              los límites y asumir el desafío tecnológico de generar soluciones{' '}
              <strong className="text-base-content/70">Made in Chile</strong> de
              eficiencia energética para los entornos más extremos del país.
            </p>
            <p className="text-sm text-base-content/60 leading-relaxed text-justify">
              Con presencia desde la frontera norte hasta el Cabo de Hornos, hemos
              desarrollado nuestro sistema propio{' '}
              <strong className="text-base-content/70">ENEFISYS®</strong>, reconocido por resolver
              problemas energéticos en los territorios más aislados de Chile, desde
              alcaldías de mar en canales australes hasta zonas dentro de parques
              nacionales y reservas de la biósfera.
            </p>
          </motion.div>
        </ImageCardBlock>

        {/* Misión + Visión */}
        <ImageCardBlock
          src="/images/prueba-mision-vision.jpg"
          alt="Misión y Visión de Lambda Ingenieros"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col md:flex-row md:gap-4 sm:-mt-12 sm:mx-4 md:absolute md:bottom-[-1rem] md:left-8 md:right-8 md:mt-0 md:mx-0"
          >
            <div className={`${CARD_CLASSES} flex-1`}>
              <h3 className="font-display text-lg font-bold text-base-content uppercase tracking-[0.08em] text-center mb-2">Nuestra Misión</h3>
              <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
              <p className="text-sm text-base-content/60 leading-relaxed text-justify">
                Desarrollamos tecnología <strong className="text-base-content/70">Made in Chile</strong> para
                optimizar el consumo energético en zonas aisladas y extremas. Desde la ingeniería,
                creamos soluciones de hibridación energética que integran energías renovables,
                almacenamiento en baterías de litio y sistemas de respaldo, generando impacto real:
                menos combustible fósil, menor huella de carbono, mayor autonomía operativa.
              </p>
            </div>
            <div className={`${CARD_CLASSES} flex-1`}>
              <h3 className="font-display text-lg font-bold text-base-content uppercase tracking-[0.08em] text-center mb-2">Nuestra Visión</h3>
              <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
              <p className="text-sm text-base-content/60 leading-relaxed text-justify">
                Liderar el desarrollo de sistemas de{' '}
                <strong className="text-base-content/70">hibridación energética</strong> sustentables, con soluciones
                propias que resuelvan las necesidades reales de zonas aisladas. Impulsar un cambio
                donde la carbono-neutralidad no sea la excepción, sino el estándar — desde los
                canales australes hasta el resto de Chile y el mundo.
              </p>
            </div>
          </motion.div>
        </ImageCardBlock>

        {/* Fundador */}
        <ImageCardBlock
          src="/images/prueba-fundador.png"
          alt="Rodrigo Oporto, Gerente General"
          lastBlock
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className={`${CARD_CLASSES} sm:-mt-12 sm:mx-4 md:absolute md:bottom-[-1rem] md:left-1/2 md:-translate-x-1/2 md:w-[68%] md:mt-0 md:mx-0`}
          >
            <h3 className="font-display text-xl font-bold text-base-content uppercase tracking-[0.08em] text-center mb-2">Nuestro Fundador</h3>
            <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
            <p className="text-sm text-base-content/60 leading-relaxed text-justify mb-2">
              <strong className="text-base-content/70">Rodrigo Oporto</strong>, Gerente General, es
              Ingeniero Naval Eléctrico y ex-oficial de la Armada de Chile con trayectoria
              en industrias químicas, mineras, astilleros y empresas de ingeniería.
              Especialista en proyectos eléctricos, electrónicos, automatización y supervisión.
            </p>
            <p className="text-sm text-base-content/60 leading-relaxed text-justify mb-2">
              Bajo su liderazgo, Lambda Ingenieros desarrolló el sistema{' '}
              <strong className="text-base-content/70">ENEFISYS</strong> y forjó una alianza
              público-privada con <strong className="text-base-content/70">ASMAR Magallanes</strong> para
              llevar energía limpia a las zonas más remotas del país, logrando reducciones de
              hasta un 95% en el uso de combustibles fósiles.
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
                className="flex items-center gap-1.5 text-base-content/50 hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-xs">LinkedIn</span>
              </a>
              <span className="w-px h-4 bg-base-content/10" />
              <a
                href="mailto:rodrigo@lambda.cl"
                aria-label="Email de Rodrigo Oporto"
                className="flex items-center gap-1.5 text-base-content/50 hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span className="text-xs">Contacto</span>
              </a>
            </div>
          </motion.div>
        </ImageCardBlock>

      </div>
    </section>
  )
}

type ImageCardBlockProps = {
  src: string
  alt: string
  children: React.ReactNode
  lastBlock?: boolean
}

function ImageCardBlock({ src, alt, children, lastBlock }: ImageCardBlockProps) {
  return (
    <div className={`relative ${lastBlock ? 'lg:mb-8' : 'mb-6 lg:mb-10'}`}>
      {/* Imagen — oculta en mobile, banner en tablet, panorámica en desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative hidden sm:block sm:aspect-[3/1] md:aspect-[21/9] rounded overflow-hidden"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover animate-subtle-zoom img-brand"
        />
        <div className="absolute inset-0 img-brand-tint" />
        <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 via-base-100/25 to-transparent" />
      </motion.div>

      {/* Cards */}
      <div className="relative">
        {children}
      </div>
    </div>
  )
}
