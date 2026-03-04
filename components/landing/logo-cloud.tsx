'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const clients = [
  { name: 'ASMAR', src: '/images/clients/asmar.avif' },
  { name: 'Armada de Chile', src: '/images/clients/armada.avif' },
  { name: 'Enel Green Power', src: '/images/clients/enel.avif' },
]

export default function LogoCloud() {
  return (
    <section className="py-20 border-y border-border bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60">
            Nuestros Clientes
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-foreground/85 text-balance max-w-xs sm:text-right leading-snug">
            Socios de Confianza en Eficiencia Energética
          </p>
        </motion.div>

        <div className="w-full h-px bg-border" />

        {/* Carrusel */}
        <div className="relative py-10">
          {/* Fade izquierda y derecha */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

          {/* Un solo contenedor con dos copias dentro para loop infinito */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee shrink-0 items-center gap-24">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center h-20 w-48 shrink-0"
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={160}
                    height={80}
                    className="object-contain h-full w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
              {/* Copia para loop continuo */}
              {clients.map((client) => (
                <div
                  key={`${client.name}-copy`}
                  aria-hidden
                  className="flex items-center justify-center h-20 w-48 shrink-0"
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={160}
                    height={80}
                    className="object-contain h-full w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-border" />
      </div>
    </section>
  )
}
