'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, Wrench, FolderKanban, Headset, User } from 'lucide-react'

const team = [
  {
    name: 'John Doe',
    role: 'Gerente General',
    icon: User,
    linkedin: '#',
    email: 'john@empresa.cl',
    bio: 'Ingeniero Naval Eléctrico y ex-oficial de la Armada de Chile. Líder en innovación, negociación y desarrollo tecnológico.',
    featured: true,
  },
  {
    name: 'Equipo Técnico',
    role: 'Ingeniería y Desarrollo',
    icon: Wrench,
    linkedin: '#',
    email: 'tecnico@empresa.cl',
    bio: 'Especialistas en diseño, construcción y programación de sistemas tecnológicos de control y gestión energética.',
    featured: false,
  },
  {
    name: 'Equipo de Proyectos',
    role: 'Implementación',
    icon: FolderKanban,
    linkedin: '#',
    email: 'proyectos@empresa.cl',
    bio: 'Expertos en montaje eléctrico, mecánico y civil. Experiencia en entornos extremos desde Arica al Cabo de Hornos.',
    featured: false,
  },
  {
    name: 'Soporte y Mantención',
    role: 'Post Venta',
    icon: Headset,
    linkedin: '#',
    email: 'soporte@empresa.cl',
    bio: 'Equipo dedicado a monitoreo continuo, soporte remoto y mantención de sistemas en todo Chile.',
    featured: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="badge badge-outline badge-sm text-primary border-primary/30 mb-4 font-medium tracking-widest uppercase text-xs">
            Equipo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance mb-4">
            Nuestro Equipo
          </h2>
          <p className="text-base text-foreground/55 leading-relaxed text-pretty">
            Liderados por John Doe, nuestro equipo está compuesto por ingenieros chilenos con experiencia
            en industrias químicas, mineras, astilleros y proyectos de especialidad eléctrica,
            electrónica, automatización y supervisión.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {team.map((member) => {
            const Icon = member.icon
            return (
              <motion.div
                key={member.name}
                variants={itemVariants}
                className={`relative flex flex-col p-5 rounded-xl border transition-all duration-300 group overflow-hidden
                  ${member.featured
                    ? 'bg-primary/10 border-primary/30 hover:border-primary/60 sm:col-span-2 lg:col-span-1'
                    : 'bg-foreground/5 border-border/30 hover:border-primary/30 hover:bg-foreground/8'
                  }`}
              >
                {/* Barra de acento superior al hover */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 transition-all duration-300
                  ${member.featured ? 'bg-primary' : 'bg-primary/0 group-hover:bg-primary/60'}`}
                />

                {/* Icono + rol en la misma fila */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0
                    ${member.featured ? 'bg-primary/20 border border-primary/40' : 'bg-foreground/8 border border-border/40'}`}
                  >
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs text-primary font-medium tracking-wide">{member.role}</span>
                </div>

                {/* Nombre */}
                <h3 className="font-semibold text-foreground text-base mb-2">{member.name}</h3>

                {/* Bio */}
                <p className="text-xs text-foreground/55 leading-relaxed flex-1">{member.bio}</p>

                {/* Links */}
                <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border/20">
                  <a
                    href={member.linkedin}
                    aria-label={`LinkedIn de ${member.name}`}
                    className="w-7 h-7 rounded-md bg-foreground/5 border border-border/40 flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/30 transition-all"
                  >
                    <Linkedin className="w-3 h-3" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email de ${member.name}`}
                    className="w-7 h-7 rounded-md bg-foreground/5 border border-border/40 flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/30 transition-all"
                  >
                    <Mail className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
