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

export default function TeamSection() {
  return (
    <section id="team" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Encabezado centrado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="badge badge-outline badge-sm text-primary border-primary/30 mb-4 font-medium tracking-widest uppercase text-xs">
            Equipo
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
              Nuestro Equipo
            </h2>
            <p className="text-sm text-foreground/50 leading-relaxed lg:max-w-sm text-pretty">
              Ingenieros chilenos con experiencia en industrias químicas, mineras,
              astilleros y proyectos de especialidad eléctrica, electrónica y automatización.
            </p>
          </div>
        </motion.div>

        {/* Lista de equipo */}
        <div className="divide-y divide-border/30">
          {team.map((member, index) => {
            const Icon = member.icon
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 py-6 hover:bg-foreground/[0.03] px-4 -mx-4 rounded-lg transition-colors duration-200"
              >
                {/* Icono */}
                <div className="w-10 h-10 rounded-lg bg-foreground/5 border border-border/40 flex items-center justify-center flex-shrink-0 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-200">
                  <Icon className="w-4 h-4 text-primary" />
                </div>

                {/* Nombre + rol */}
                <div className="sm:w-56 flex-shrink-0">
                  <p className="font-semibold text-foreground text-sm">{member.name}</p>
                  <p className="text-xs text-primary/80 mt-0.5">{member.role}</p>
                </div>

                {/* Divisor vertical solo en desktop */}
                <div className="hidden sm:block w-px h-8 bg-border/30 flex-shrink-0" />

                {/* Bio */}
                <p className="text-sm text-foreground/50 leading-relaxed flex-1">
                  {member.bio}
                </p>

                {/* Links */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={member.linkedin}
                    aria-label={`LinkedIn de ${member.name}`}
                    className="w-8 h-8 rounded-md border border-border/40 flex items-center justify-center text-foreground/35 hover:text-primary hover:border-primary/40 transition-all duration-200"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Email de ${member.name}`}
                    className="w-8 h-8 rounded-md border border-border/40 flex items-center justify-center text-foreground/35 hover:text-primary hover:border-primary/40 transition-all duration-200"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
