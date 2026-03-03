'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'

const team = [
  {
    name: 'Andres Gutierrez',
    role: 'Director de Ingenieria',
    image: '/images/team-1.jpg',
    linkedin: '#',
    bio: 'Ingeniero electrico con 12 anos de experiencia en sistemas fotovoltaicos.',
  },
  {
    name: 'Catalina Rojas',
    role: 'Ingeniera de Energia',
    image: '/images/team-2.jpg',
    linkedin: '#',
    bio: 'Especialista en diseno y optimizacion de plantas solares residenciales.',
  },
  {
    name: 'Felipe Torres',
    role: 'Desarrollador Full-Stack',
    image: '/images/team-3.jpg',
    linkedin: '#',
    bio: 'Arquitecto de software detras de la plataforma de monitoreo Lambda.',
  },
  {
    name: 'Maria Paz Herrera',
    role: 'Project Manager',
    image: '/images/team-4.jpg',
    linkedin: '#',
    bio: 'Coordinacion de proyectos y relacion con clientes corporativos.',
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
    <section id="team" className="py-24 lg:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="badge badge-outline badge-sm text-primary border-primary/30 mb-4 font-medium">
            Equipo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Ingenieros chilenos comprometidos con la energia limpia
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
            Un equipo multidisciplinario que combina ingenieria electrica,
            desarrollo de software y gestion de proyectos solares.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="card bg-card border border-border group hover:border-primary/20 transition-all duration-300"
            >
              <figure className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </figure>
              <div className="card-body p-5 gap-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <a
                    href={member.linkedin}
                    className="btn btn-ghost btn-xs btn-circle text-muted-foreground hover:text-primary"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-primary font-medium">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
