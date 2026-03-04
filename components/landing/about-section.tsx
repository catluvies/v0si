'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Quiénes Somos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="badge badge-outline badge-sm text-primary border-primary/30 mb-4 font-medium">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance mb-8">
            ¿Quiénes Somos?
          </h2>
          <p className="text-lg text-foreground/60 leading-relaxed text-pretty">
            Somos una empresa B, integrada por ingenieros chilenos comprometidos con el
            desarrollo sustentable de modelos, productos y herramientas de análisis de datos
            en torno a la eficiencia del uso de la energía.
          </p>
        </motion.div>

        {/* Nuestra Historia */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Historia</h3>
              <p className="text-foreground/70 leading-relaxed">
                El año 2004 comienza a forjarse el sueño compartido de un grupo de
                ingenieros chilenos, quienes, desde sus particulares conocimientos y
                competencias, trabajan hasta el día de hoy para romper los límites de lo
                establecido y asumir el desafío tecnológico de generar modelos y
                herramientas Made in Chile de análisis de datos en torno a la eficiencia del
                uso de la energía.
              </p>
            </div>

            <div>
              <p className="text-foreground/70 leading-relaxed">
                Con presencia desde la frontera norte hasta el Cabo de Hornos, hemos
                desarrollado sistemas de alta eficiencia como SolarTech® y EnergiaPlus®,
                reconocidos por resolver problemas vinculados a la eficiencia en los
                territorios más extremos de nuestro país.
              </p>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">20+</p>
                <p className="text-sm text-foreground/50 mt-1">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-foreground/50 mt-1">Proyectos realizados</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">Made in Chile</p>
                <p className="text-sm text-foreground/50 mt-1">Tecnología propia</p>
              </div>
            </div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative h-96 lg:h-full min-h-96 rounded-3xl overflow-hidden border border-border"
          >
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Equipo Lambda trabajando"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
