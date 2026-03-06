'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, Mail, Wrench, FolderKanban, Headset, User } from 'lucide-react'

const stats = [
  { value: '20+', label: 'Años de experiencia' },
  { value: '100+', label: 'Proyectos realizados' },
  { value: 'Made in Chile', label: 'Tecnología propia' },
]

const team = [
  {
    name: 'John Doe',
    role: 'Gerente General',
    icon: User,
    linkedin: '#',
    email: 'john@empresa.cl',
    bio: 'Ingeniero Naval Eléctrico y ex-oficial de la Armada de Chile. Líder en innovación, negociación y desarrollo tecnológico.',
  },
  {
    name: 'Equipo Técnico',
    role: 'Ingeniería y Desarrollo',
    icon: Wrench,
    linkedin: '#',
    email: 'tecnico@empresa.cl',
    bio: 'Especialistas en diseño, construcción y programación de sistemas tecnológicos de control y gestión energética.',
  },
  {
    name: 'Equipo de Proyectos',
    role: 'Implementación',
    icon: FolderKanban,
    linkedin: '#',
    email: 'proyectos@empresa.cl',
    bio: 'Expertos en montaje eléctrico, mecánico y civil. Experiencia en entornos extremos desde Arica al Cabo de Hornos.',
  },
  {
    name: 'Soporte y Mantención',
    role: 'Post Venta',
    icon: Headset,
    linkedin: '#',
    email: 'soporte@empresa.cl',
    bio: 'Equipo dedicado a monitoreo continuo, soporte remoto y mantención de sistemas en todo Chile.',
  },
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
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content text-balance mb-4">
            Quiénes Somos
          </h2>
          <p className="text-base text-base-content/60 leading-relaxed text-pretty">
            Somos una empresa B de ingenieros chilenos comprometidos con el desarrollo
            sustentable de soluciones de eficiencia energetica.
          </p>
        </motion.div>

        {/* Stats — centered, prominent */}
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

        {/* Historia — image behind, card overlapping bottom-right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 lg:pb-12"
        >
          <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden">
            <Image
              src="/images/hero-solar.jpg"
              alt="Instalacion de paneles solares en Chile"
              fill
              className="object-cover animate-subtle-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-base-100/90 via-base-100/40 via-40% to-transparent" />
          </div>
          <div className="relative lg:absolute lg:bottom-8 lg:right-8 lg:w-[55%] border border-base-content/10 bg-base-100/95 backdrop-blur-sm p-8 lg:p-10 -mt-16 mx-4 lg:mt-0 lg:mx-0 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            <h3 className="text-xl font-bold text-base-content mb-5 uppercase tracking-wide text-center">Nuestra Historia</h3>
            <p className="text-sm text-base-content/60 leading-relaxed text-justify mb-4">
              El año 2004 comienza a forjarse el sueño compartido de un grupo de
              ingenieros chilenos, quienes trabajan hasta el dia de hoy para romper los limites
              y asumir el desafio tecnologico de generar modelos y herramientas Made in Chile
              de analisis de datos en torno a la eficiencia del uso de la energia.
            </p>
            <p className="text-sm text-base-content/60 leading-relaxed text-justify">
              Con presencia desde la frontera norte hasta el Cabo de Hornos, hemos
              desarrollado sistemas como SolarTech® y EnergiaPlus®, reconocidos por resolver
              problemas en los territorios mas extremos del pais.
            </p>
          </div>
        </motion.div>

        {/* Equipo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
              Nuestro Equipo
            </span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-base-content text-balance mb-3">
              Ingenieros que conocen el terreno
            </h3>
            <p className="text-sm text-base-content/60 leading-relaxed text-pretty">
              Liderados por John Doe, nuestro equipo está compuesto por ingenieros chilenos
              con experiencia en industrias químicas, mineras, astilleros y proyectos de
              especialidad eléctrica, electrónica, automatización y supervisión.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team.map((member, index) => {
              const Icon = member.icon
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative flex flex-col gap-4 p-6 rounded-xl border border-base-content/10 bg-base-content/[0.03] hover:bg-base-content/[0.06] hover:border-base-content/20 transition-all duration-200"
                >
                  <div className="absolute top-0 left-6 right-6 h-px bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 rounded-full" />

                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Icon className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary/70 border border-primary/20 bg-primary/5 px-2.5 py-1 rounded-full">
                      {member.role}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-base-content">{member.name}</h4>
                    <p className="text-sm text-base-content/50 leading-relaxed mt-1">{member.bio}</p>
                  </div>

                  <div className="flex items-center gap-2 mt-auto pt-4 border-t border-base-content/10">
                    <a
                      href={member.linkedin}
                      aria-label={`LinkedIn de ${member.name}`}
                      className="w-7 h-7 rounded-md flex items-center justify-center text-base-content/40 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      aria-label={`Email de ${member.name}`}
                      className="w-7 h-7 rounded-md flex items-center justify-center text-base-content/40 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Mision — inverted, image behind, card overlapping bottom-left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 lg:pb-12"
        >
          <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden">
            <Image
              src="/images/hero-solar.jpg"
              alt="Mision de Lambda Ingenieros"
              fill
              className="object-cover animate-subtle-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-base-100/90 via-base-100/40 via-40% to-transparent" />
          </div>
          <div className="relative lg:absolute lg:bottom-8 lg:left-8 lg:w-[55%] bg-base-100/95 border border-base-content/10 backdrop-blur-sm p-8 lg:p-10 -mt-16 mx-4 lg:mt-0 lg:mx-0 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            <h3 className="text-xl font-bold text-base-content mb-4 uppercase tracking-wide text-center">Nuestra Mision</h3>
            <p className="text-base text-base-content/60 leading-relaxed text-justify">
              Desarrollamos tecnología Made in Chile para optimizar el consumo energético.
              Desde la ingeniería, creamos soluciones sostenibles en proyectos eléctricos y
              eficiencia energética que generan impacto real: menos consumo, menor huella, mejor futuro.
            </p>
          </div>
        </motion.div>

        {/* Vision — image behind, card overlapping bottom-right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative lg:pb-12"
        >
          <div className="relative aspect-[16/9] lg:aspect-[21/9] rounded-xl overflow-hidden">
            <Image
              src="/images/hero-solar.jpg"
              alt="Vision de Lambda Ingenieros"
              fill
              className="object-cover animate-subtle-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-base-100/90 via-base-100/40 via-40% to-transparent" />
          </div>
          <div className="relative lg:absolute lg:bottom-8 lg:right-8 lg:w-[55%] border border-base-content/10 bg-base-100/95 backdrop-blur-sm p-8 lg:p-10 -mt-16 mx-4 lg:mt-0 lg:mx-0 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            <h3 className="text-xl font-bold text-base-content mb-4 uppercase tracking-wide text-center">Nuestra Vision</h3>
            <p className="text-base text-base-content/60 leading-relaxed text-justify">
              Liderar el desarrollo de sistemas tecnológicos sustentables en eficiencia
              eléctrica, con soluciones propias que resuelvan las necesidades reales del sector.
              Impulsar un cambio donde la sostenibilidad no sea la excepción, sino el estándar.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
