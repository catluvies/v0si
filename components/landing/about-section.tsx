'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, Eye, Clock, MapPin, Cpu, Leaf } from 'lucide-react'

const stats = [
  { value: '20+', label: 'Años de experiencia' },
  { value: '100+', label: 'Proyectos realizados' },
  { value: 'Made in Chile', label: 'Tecnología propia' },
]

const misionItems = [
  { icon: Cpu, text: 'Tecnología Made in Chile' },
  { icon: MapPin, text: 'Soluciones para entornos extremos' },
  { icon: Leaf, text: 'Compromiso con la sostenibilidad' },
]

const visionItems = [
  'Liderazgo en eficiencia energética',
  'Desarrollo sustentable',
  'Cambio cultural hacia la sostenibilidad',
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content text-balance">
            ¿Quienes Somos?
          </h2>
          <p className="mt-4 text-lg text-base-content/60 leading-relaxed max-w-2xl mx-auto text-pretty">
            Somos una empresa B de ingenieros chilenos comprometidos con el desarrollo
            sustentable de soluciones de eficiencia energetica.
          </p>
        </motion.div>

        {/* Historia - Image Left, Text Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
              alt="Paneles solares en Chile"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-300/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <Clock className="w-4 h-4" />
                <span>Desde 2004 innovando en Chile</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-base-content">Nuestra Historia</h3>
            </div>
            <p className="text-base-content/60 leading-relaxed">
              El año 2004 comienza a forjarse el sueño compartido de un grupo de
              ingenieros chilenos, quienes trabajan hasta el dia de hoy para romper los limites
              y asumir el desafio tecnologico de generar modelos y herramientas Made in Chile
              de analisis de datos en torno a la eficiencia del uso de la energia.
            </p>
            <p className="text-base-content/60 leading-relaxed">
              Con presencia desde la frontera norte hasta el Cabo de Hornos, hemos
              desarrollado sistemas como SolarTech® y EnergiaPlus®, reconocidos por resolver
              problemas en los territorios mas extremos del pais.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-base-content/10">
              {stats.map((stat) => (
                <div key={stat.value} className="text-center">
                  <p className="text-2xl font-bold text-primary leading-none mb-1">{stat.value}</p>
                  <p className="text-xs text-base-content/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mision - Text Left, Image Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-base-content">Nuestra Mision</h3>
            </div>
            <p className="text-base-content/60 leading-relaxed">
              Proporcionar desde la ingenieria y el desarrollo tecnologico Made in Chile,
              soluciones innovadoras y sostenibles en proyectos electricos y de eficiencia
              que permitan optimizar el consumo energetico de nuestros clientes.
            </p>

            <div className="flex flex-col gap-3">
              {misionItems.map((item) => (
                <div key={item.text} className="flex items-center gap-4 px-4 py-3 rounded-xl bg-base-200/50 border border-base-content/5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-base-content/70 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden order-1 lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
              alt="Tecnologia e innovacion"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-300/60 to-transparent" />
          </div>
        </motion.div>

        {/* Vision - Image Left, Text Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
              alt="Energia sustentable y vision de futuro"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-300/60 to-transparent" />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-base-content">Nuestra Vision</h3>
            </div>
            <p className="text-base-content/60 leading-relaxed">
              Ser lideres en el desarrollo de sistemas tecnologicos y sustentables en el
              sector de la eficiencia electrica. Aspiramos a impulsar un cambio cultural
              donde la sostenibilidad y la eficiencia sean la norma para contribuir al
              bienestar de la sociedad y el medio ambiente.
            </p>

            <div className="flex flex-col gap-3">
              {visionItems.map((item, index) => (
                <div key={item} className="flex items-center gap-4 px-4 py-3 rounded-xl bg-base-200/50 border border-base-content/5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <span className="text-sm text-base-content/70 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
