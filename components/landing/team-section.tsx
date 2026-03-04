'use client'

import { motion } from 'framer-motion'
import { Linkedin, Mail, Users, Wrench, FolderKanban, Headset } from 'lucide-react'

const team = [
  {
    name: 'John Doe',
    role: 'Gerente General',
    icon: Users,
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
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
                className="flex flex-col p-5 rounded-xl bg-foreground/5 border border-border/30 hover:border-primary/30 hover:bg-foreground/8 transition-all duration-300 group"
              >
                {/* Icono */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                {/* Info */}
                <h3 className="font-semibold text-foreground text-base mb-1">{member.name}</h3>
                <p className="text-xs text-primary font-medium mb-3">{member.role}</p>
                <p className="text-xs text-foreground/55 leading-relaxed flex-1">{member.bio}</p>

                {/* Links */}
                <div className="flex items-center gap-2 mt-5 pt-4 border-t border-border/30">
                  <a
                    href={member.linkedin}
                    aria-label={`LinkedIn de ${member.name}`}
                    className="w-8 h-8 rounded-lg bg-foreground/5 border border-border/40 flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/30 transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email de ${member.name}`}
                    className="w-8 h-8 rounded-lg bg-foreground/5 border border-border/40 flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/30 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
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
