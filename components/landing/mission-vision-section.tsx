'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const mission = {
  title: 'Nuestra Misión',
  icon: 'target',
  description:
    'Proporcionar desde la ingeniería y el desarrollo tecnológico Made in Chile, soluciones innovadoras y sostenibles en proyectos eléctricos y de eficiencia que permitan optimizar el consumo energético de nuestros clientes, contribuyendo a un futuro más verde y sustentable.',
  points: [
    'Tecnología Made in Chile',
    'Soluciones para entornos extremos',
    'Compromiso con la sostenibilidad',
  ],
}

const vision = {
  title: 'Nuestra Visión',
  icon: 'eye',
  description:
    'Ser líderes en el desarrollo de sistemas tecnológicos y sustentables en el sector de la eficiencia eléctrica, reconocidos por nuestra original capacidad de generar soluciones a las principales necesidades de este sector. Aspiramos a impulsar un cambio cultural donde la sostenibilidad y la eficiencia sean la norma para contribuir al bienestar de la sociedad y el medio ambiente.',
  points: [
    'Liderazgo en eficiencia energética',
    'Desarrollo sustentable',
    'Cambio cultural hacia la sostenibilidad',
  ],
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function MissionVisionSection() {
  return (
    <section id="mission-vision" className="py-24 lg:py-32 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Misión */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="rounded-3xl bg-foreground/[0.04] backdrop-blur-sm border border-foreground/10 p-10 lg:p-12 space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9" strokeWidth="2" />
                  <path d="M12 8v4l3 2" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {mission.title}
                </h3>
              </div>
            </div>

            <p className="text-foreground/70 leading-relaxed text-lg">
              {mission.description}
            </p>

            <div className="space-y-3 pt-6 border-t border-foreground/10">
              {mission.points.map((point) => (
                <motion.div
                  key={point}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visión */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl bg-primary/10 backdrop-blur-sm border border-primary/20 p-10 lg:p-12 space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9" strokeWidth="2" />
                  <circle cx="12" cy="12" r="3" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  {vision.title}
                </h3>
              </div>
            </div>

            <p className="text-foreground/70 leading-relaxed text-lg">
              {vision.description}
            </p>

            <div className="space-y-3 pt-6 border-t border-primary/20">
              {vision.points.map((point) => (
                <motion.div
                  key={point}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
