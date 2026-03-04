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
        <div className="space-y-4">
          <p className="text-base text-foreground/70 leading-relaxed">
            El año 2004 comienza a forjarse el sueño compartido de un grupo de
            ingenieros chilenos, quienes trabajan hasta el día de hoy para romper los límites
            y asumir el desafío tecnológico de generar modelos y herramientas Made in Chile
            de análisis de datos en torno a la eficiencia del uso de la energía.
          </p>
          <p className="text-base text-foreground/70 leading-relaxed">
            Con presencia desde la frontera norte hasta el Cabo de Hornos, hemos
            desarrollado sistemas como SolarTech® y EnergiaPlus®, reconocidos por resolver
            problemas en los territorios más extremos del país.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/40">
            <div>
              <p className="text-2xl font-bold text-primary">20+</p>
              <p className="text-xs text-foreground/50 mt-0.5">Años de experiencia</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">100+</p>
              <p className="text-xs text-foreground/50 mt-0.5">Proyectos realizados</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">Made</p>
              <p className="text-xs text-foreground/50 mt-0.5">in Chile</p>
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
        <div className="space-y-4">
          <p className="text-base text-foreground/70 leading-relaxed">
            Proporcionar desde la ingeniería y el desarrollo tecnológico Made in Chile,
            soluciones innovadoras y sostenibles en proyectos eléctricos y de eficiencia
            que permitan optimizar el consumo energético de nuestros clientes.
          </p>
          <ul className="space-y-2.5 pt-2">
            {['Tecnología Made in Chile', 'Soluciones para entornos extremos', 'Compromiso con la sostenibilidad'].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-base text-foreground/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
      image: '/placeholder.svg?height=500&width=600',
    },
    {
      id: 'vision',
      title: 'Nuestra Visión',
      content: (
        <div className="space-y-4">
          <p className="text-base text-foreground/70 leading-relaxed">
            Ser líderes en el desarrollo de sistemas tecnológicos y sustentables en el
            sector de la eficiencia eléctrica. Aspiramos a impulsar un cambio cultural
            donde la sostenibilidad y la eficiencia sean la norma para contribuir al
            bienestar de la sociedad y el medio ambiente.
          </p>
          <ul className="space-y-2.5 pt-2">
            {['Liderazgo en eficiencia energética', 'Desarrollo sustentable', 'Cambio cultural hacia la sostenibilidad'].map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-base text-foreground/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
      image: '/placeholder.svg?height=500&width=600',
    },
  ]

  const handlePrev = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const handleNext = () => setActiveSlide((prev) => (prev + 1) % slides.length)

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="flex min-h-[80vh]">
        {/* Columna izquierda */}
        <div className="w-full lg:w-5/12 px-8 lg:px-16 py-20 flex flex-col justify-center">
          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="badge badge-outline badge-sm text-primary border-primary/30 mb-4 font-medium tracking-widest uppercase text-xs">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              ¿Quiénes Somos?
            </h2>
            <p className="text-base text-foreground/55 leading-relaxed">
              Somos una empresa B de ingenieros chilenos comprometidos con el desarrollo
              sustentable de soluciones de eficiencia energética.
            </p>
          </motion.div>

          {/* Carrusel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-5">
              {slides[activeSlide].title}
            </h3>
            <div className="mb-8">
              {slides[activeSlide].content}
            </div>

            {/* Controles */}
            <div className="flex items-center gap-3 pt-6 border-t border-border/30">
              <button
                onClick={handlePrev}
                aria-label="Anterior"
                className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/30 transition-colors flex-shrink-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1.5">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Slide ${index + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeSlide === index
                        ? 'bg-primary w-6'
                        : 'bg-foreground/20 w-1.5 hover:bg-foreground/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                aria-label="Siguiente"
                className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-foreground/50 hover:text-foreground hover:border-foreground/30 transition-colors flex-shrink-0"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Columna derecha: Imagen */}
        <div className="hidden lg:block w-7/12 relative min-h-[80vh]">
          <Image
            src={slides[activeSlide].image}
            alt={slides[activeSlide].title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>
      </div>
    </section>
  )
}
