'use client'

import { motion } from 'framer-motion'
import { Mail, Users, Rocket, Cpu } from 'lucide-react'

const selloValues = [
  {
    icon: Users,
    title: 'Orientación al Cliente',
    description:
      'Escuchar los problemas y necesidades de los clientes, desarrollando la empresa a partir de un fuerte componente de realidad, potenciando capacidades tecnológicas y de innovación.',
  },
  {
    icon: Rocket,
    title: 'Desarrollo Continuo',
    description:
      'Respuesta desde la excelencia al vertiginoso avance tecnológico en sistemas eléctricos, reconocido permanentemente por sus clientes.',
  },
  {
    icon: Cpu,
    title: 'Tecnología Made in Chile',
    description:
      'Pensar, desarrollar y producir sistemas eléctricos originales e innovadores que responden a los principales desafíos de la sociedad.',
  },
]


export default function AboutSection() {
  return (
    <>
      <AboutHero />

      {/* Nuestra Historia */}
      <ZigzagSection imageUrl="/images/historia.jpg">
        <h2 className="font-display text-2xl lg:text-3xl font-bold text-text-heading uppercase tracking-[0.08em] mb-3">
          Nuestra Historia
        </h2>
        <div className="w-12 h-0.5 bg-primary mb-6" />
        <p className="text-sm lg:text-base text-text-body leading-relaxed mb-3">
          El año 2004 comienza a forjarse el sueño compartido de un grupo de
          ingenieros chilenos, quienes trabajan hasta el día de hoy para romper
          los límites y asumir el desafío tecnológico de generar soluciones{' '}
          <strong className="text-text-emphasis">Made in Chile</strong> de
          eficiencia energética para los entornos más extremos del país.
        </p>
        <p className="text-sm lg:text-base text-text-body leading-relaxed">
          Con presencia desde la frontera norte hasta el Cabo de Hornos, hemos
          desarrollado nuestro sistema propio{' '}
          <strong className="text-text-emphasis">ENEFISYS®</strong>, reconocido por resolver
          problemas energéticos en los territorios más aislados de Chile, desde
          alcaldías de mar en canales australes hasta zonas dentro de parques
          nacionales y reservas de la biósfera.
        </p>
      </ZigzagSection>

      {/* Nuestra Misión */}
      <ZigzagSection imageUrl="/images/mision.jpg" reverse>
        <h2 className="font-display text-2xl lg:text-3xl font-bold text-text-heading uppercase tracking-[0.08em] mb-3">
          Nuestra Misión
        </h2>
        <div className="w-12 h-0.5 bg-primary mb-6" />
        <p className="text-sm lg:text-base text-text-body leading-relaxed">
          Desarrollamos tecnología <strong className="text-text-emphasis">Made in Chile</strong> para
          optimizar el consumo energético en zonas aisladas y extremas. Desde la ingeniería,
          creamos soluciones de hibridación energética que integran energías renovables,
          almacenamiento en baterías de litio y sistemas de respaldo, generando impacto real:
          menos combustible fósil, menor huella de carbono, mayor autonomía operativa.
        </p>
      </ZigzagSection>

      {/* Nuestra Visión */}
      <ZigzagSection imageUrl="/images/vision.jpg">
        <h2 className="font-display text-2xl lg:text-3xl font-bold text-text-heading uppercase tracking-[0.08em] mb-3">
          Nuestra Visión
        </h2>
        <div className="w-12 h-0.5 bg-primary mb-6" />
        <p className="text-sm lg:text-base text-text-body leading-relaxed">
          Liderar el desarrollo de sistemas de{' '}
          <strong className="text-text-emphasis">hibridación energética</strong> sustentables, con soluciones
          propias que resuelvan las necesidades reales de zonas aisladas. Impulsar un cambio
          donde la carbono-neutralidad no sea la excepción, sino el estándar, desde los
          canales australes hasta el resto de Chile y el mundo.
        </p>
      </ZigzagSection>

      {/* Nuestro Sello */}
      <section className="bg-base-100 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-heading text-balance mb-4">
              NUESTRO <span className="text-primary">SELLO</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selloValues.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-xl border border-base-300 bg-base-200 p-6 hover:border-primary/35 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-text-heading mb-2">{item.title}</h3>
                <p className="text-sm text-text-body leading-relaxed text-justify">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestro Fundador */}
      <ZigzagSection imageUrl="/images/fundador.jpg" reverse>
        <h2 className="font-display text-2xl lg:text-3xl font-bold text-text-heading uppercase tracking-[0.08em] mb-3">
          Nuestro Fundador
        </h2>
        <div className="w-12 h-0.5 bg-primary mb-6" />
        <p className="text-sm lg:text-base text-text-body leading-relaxed mb-3">
          <strong className="text-text-emphasis">Rodrigo Oporto</strong>, Gerente General, es
          Ingeniero Naval Eléctrico y ex-oficial de la Armada de Chile con trayectoria
          en industrias químicas, mineras, astilleros y empresas de ingeniería.
          Especialista en proyectos eléctricos, electrónicos, automatización y supervisión.
        </p>
        <p className="text-sm lg:text-base text-text-body leading-relaxed mb-3">
          Bajo su liderazgo, Lambda Ingenieros desarrolló el sistema{' '}
          <strong className="text-text-emphasis">ENEFISYS</strong> y forjó una alianza
          público-privada con <strong className="text-text-emphasis">ASMAR Magallanes</strong> para
          llevar energía limpia a las zonas más remotas del país, logrando reducciones de
          hasta un 95% en el uso de combustibles fósiles.
        </p>
        <p className="text-sm lg:text-base text-text-body leading-relaxed mb-4">
          Combina experiencia <strong className="text-text-emphasis">técnica</strong>,{' '}
          <strong className="text-text-emphasis">académica</strong>,{' '}
          <strong className="text-text-emphasis">comercial</strong> y de{' '}
          <strong className="text-text-emphasis">dirección de organizaciones</strong>.
        </p>
        <a
          href="mailto:contacto@lambdaingenieros.cl"
          aria-label="Email de Rodrigo Oporto"
          className="inline-flex items-center gap-1.5 text-text-muted hover:text-primary transition-colors duration-200"
        >
          <Mail className="w-4 h-4" />
          <span className="text-xs">Contacto</span>
        </a>
      </ZigzagSection>

    </>
  )
}

function AboutHero() {
  return (
    <section className="bg-base-100 pt-32 pb-12 lg:pt-40 lg:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-6 lg:px-8 text-center"
      >
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-heading uppercase mb-5">
          Quiénes <span className="text-primary">Somos</span>
        </h1>
        <p className="text-base text-text-body leading-relaxed">
          Empresa de ingenieros chilenos comprometidos con el desarrollo
          sustentable de soluciones de <strong className="text-text-heading">eficiencia energética</strong>.
        </p>
      </motion.div>
    </section>
  )
}

type ZigzagSectionProps = {
  imageUrl: string
  reverse?: boolean
  children: React.ReactNode
}

function ZigzagSection({ imageUrl, reverse = false, children }: ZigzagSectionProps) {
  return (
    <section className="group relative min-h-[500px] flex items-end md:items-center overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center img-cool"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Tint azul */}
      <div className="absolute inset-0 z-1 img-cool-tint" />

      {/* Gradiente direccional */}
      <div className={`absolute inset-0 z-10 ${reverse ? 'zigzag-fade-right' : 'zigzag-fade-left'}`} />

      {/* Contenido */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-10 md:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`max-w-full md:max-w-lg ${reverse ? 'md:ml-auto' : ''}`}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
