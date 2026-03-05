'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="flex items-stretch">

        {/* Columna izquierda: todo el contenido en vertical */}
        <div className="w-full lg:w-1/2 px-8 lg:px-14 py-16 flex flex-col gap-10">

          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
              Sobre Nosotros
            </span>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-base-content mb-3">
              ¿Quiénes Somos?
            </h2>
            <p className="text-sm text-base-content/55 leading-relaxed">
              Somos una empresa B de ingenieros chilenos comprometidos con el desarrollo
              sustentable de soluciones de eficiencia energética.
            </p>
          </motion.div>

          {/* Historia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-base font-semibold text-base-content">Nuestra Historia</h3>
            <p className="text-sm text-base-content/65 leading-relaxed">
              El año 2004 comienza a forjarse el sueño compartido de un grupo de
              ingenieros chilenos, quienes trabajan hasta el día de hoy para romper los límites
              y asumir el desafío tecnológico de generar modelos y herramientas Made in Chile
              de análisis de datos en torno a la eficiencia del uso de la energía.
            </p>
            <p className="text-sm text-base-content/65 leading-relaxed">
              Con presencia desde la frontera norte hasta el Cabo de Hornos, hemos
              desarrollado sistemas como SolarTech® y EnergiaPlus®, reconocidos por resolver
              problemas en los territorios más extremos del país.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-base-content/10/30">
              {[
                { value: '20+', label: 'Años de experiencia' },
                { value: '100+', label: 'Proyectos realizados' },
                { value: 'Made in Chile', label: 'Tecnología propia' },
              ].map((stat) => (
                <div key={stat.value} className="text-center">
                  <p className="text-2xl font-bold text-primary leading-none mb-1">{stat.value}</p>
                  <p className="text-xs text-base-content/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-base font-semibold text-base-content">Nuestra Misión</h3>
            <p className="text-sm text-base-content/65 leading-relaxed">
              Proporcionar desde la ingeniería y el desarrollo tecnológico Made in Chile,
              soluciones innovadoras y sostenibles en proyectos eléctricos y de eficiencia
              que permitan optimizar el consumo energético de nuestros clientes.
            </p>
            <div className="flex flex-col gap-2">
              {['Tecnología Made in Chile', 'Soluciones para entornos extremos', 'Compromiso con la sostenibilidad'].map((item) => (
                <div key={item} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-base-content/[0.03] border border-base-content/10/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-base-content/65">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-base font-semibold text-base-content">Nuestra Visión</h3>
            <p className="text-sm text-base-content/65 leading-relaxed">
              Ser líderes en el desarrollo de sistemas tecnológicos y sustentables en el
              sector de la eficiencia eléctrica. Aspiramos a impulsar un cambio cultural
              donde la sostenibilidad y la eficiencia sean la norma para contribuir al
              bienestar de la sociedad y el medio ambiente.
            </p>
            <div className="flex flex-col gap-2">
              {['Liderazgo en eficiencia energética', 'Desarrollo sustentable', 'Cambio cultural hacia la sostenibilidad'].map((item) => (
                <div key={item} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-base-content/[0.03] border border-base-content/10/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm text-base-content/65">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Columna derecha: imagen que ocupa todo el alto del contenido izquierdo */}
        <div className="hidden lg:block w-1/2 relative self-stretch">
          <Image
            src="/placeholder.svg?height=900&width=700"
            alt="Sobre Lambda Ingeniería"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-base-100 via-base-100/20 to-transparent" />
        </div>

      </div>
    </section>
  )
}
