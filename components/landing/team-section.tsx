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
    <section id="team" className="py-20 lg:py-28 bg-base-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content text-balance mb-4">
            Ingenieros que conocen el terreno
          </h2>
          <p className="text-base text-base-content/60 leading-relaxed text-pretty">
            Liderados por John Doe, nuestro equipo está compuesto por ingenieros chilenos
            con experiencia en industrias químicas, mineras, astilleros y proyectos de
            especialidad eléctrica, electrónica, automatización y supervisión.
          </p>
        </motion.div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {team.map((member, index) => {
            const Icon = member.icon
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex flex-col gap-4 p-6 rounded-xl border border-base-content/10 bg-base-content/[0.03] hover:bg-base-content/[0.06] hover:border-base-content/20 transition-all duration-200"
              >
                {/* Acento superior al hacer hover */}
                <div className="absolute top-0 left-6 right-6 h-px bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 rounded-full" />

                {/* Header: icono + rol */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary/70 border border-primary/20 bg-primary/5 px-2.5 py-1 rounded-full">
                    {member.role}
                  </span>
                </div>

                {/* Nombre */}
                <div>
                  <h3 className="text-base font-semibold text-base-content">{member.name}</h3>
                  <p className="text-sm text-base-content/50 leading-relaxed mt-1">{member.bio}</p>
                </div>

                {/* Links */}
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
      </div>
    </section>
  )
}
