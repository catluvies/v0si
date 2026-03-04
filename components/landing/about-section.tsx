'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function AboutSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      id: 'historia',
      title: 'Nuestra Historia',
      content: (
        <div className="space-y-6">
          <div>
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
        </div>
      ),
      image: '/placeholder.svg?height=500&width=600',
    },
    {
      id: 'mision',
      title: 'Nuestra Misión',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Proporcionar desde la ingeniería y el desarrollo tecnológico Made in Chile,
            soluciones innovadoras y sostenibles en proyectos eléctricos y de eficiencia
            que permitan optimizar el consumo energético de nuestros clientes, contribuyendo
            a un futuro más verde y sustentable.
          </p>

          <div className="space-y-3 pt-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>
              <p className="text-foreground/70">Tecnología Made in Chile</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>
              <p className="text-foreground/70">Soluciones para entornos extremos</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>
              <p className="text-foreground/70">Compromiso con la sostenibilidad</p>
            </div>
          </div>
        </div>
      ),
      image: '/placeholder.svg?height=500&width=600',
    },
    {
      id: 'vision',
      title: 'Nuestra Visión',
      content: (
        <div className="space-y-6">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Ser líderes en el desarrollo de sistemas tecnológicos y sustentables en el
            sector de la eficiencia eléctrica, reconocidos por nuestra original capacidad de
            generar soluciones a las principales necesidades de este sector. Aspiramos a
            impulsar un cambio cultural donde la sostenibilidad y la eficiencia sean la norma
            para contribuir al bienestar de la sociedad y el medio ambiente.
          </p>

          <div className="space-y-3 pt-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>
              <p className="text-foreground/70">Liderazgo en eficiencia energética</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>
              <p className="text-foreground/70">Desarrollo sustentable</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>
              <p className="text-foreground/70">Cambio cultural hacia la sostenibilidad</p>
            </div>
          </div>
        </div>
      ),
      image: '/placeholder.svg?height=500&width=600',
    },
  ]

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Encabezado */}
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

        {/* Carrusel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Contenido del slide */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              {slides[activeSlide].title}
            </h3>
            {slides[activeSlide].content}

            {/* Controles de navegación */}
            <div className="flex items-center gap-4 pt-6">
              <button
                onClick={handlePrev}
                className="btn btn-circle btn-ghost btn-sm"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots indicadores */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeSlide === index
                        ? 'bg-primary w-8'
                        : 'bg-foreground/20 hover:bg-foreground/40'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="btn btn-circle btn-ghost btn-sm"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-3xl overflow-hidden border border-border">
            <Image
              src={slides[activeSlide].image}
              alt={slides[activeSlide].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
