'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const clients = [
  { name: 'ASMAR', src: '/images/clients/asmar.avif', width: 140, height: 80 },
  { name: 'Armada de Chile', src: '/images/clients/armada.avif', width: 90, height: 90 },
  { name: 'Enel Green Power', src: '/images/clients/enel.avif', width: 160, height: 70 },
  { name: 'ASMAR', src: '/images/clients/asmar.avif', width: 140, height: 80 },
  { name: 'Armada de Chile', src: '/images/clients/armada.avif', width: 90, height: 90 },
  { name: 'Enel Green Power', src: '/images/clients/enel.avif', width: 160, height: 70 },
]

export default function LogoCloud() {
  return (
    <section className="py-20 border-y border-border bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Encabezado dos columnas */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60">
              Nuestros Clientes
            </p>
            <div className="flex items-center gap-3">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                className="text-foreground/40 shrink-0"
              >
                <path
                  d="M6 6h24M30 6v24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M6 6l24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <p className="text-2xl md:text-3xl font-semibold text-foreground/85 text-balance max-w-xs text-right leading-snug">
            Socios de Confianza en Eficiencia Energética
          </p>
        </motion.div>

        {/* Divisor */}
        <div className="w-full h-px bg-border mb-0" />

        {/* Carrusel */}
        <div className="relative">
          {/* Fade izquierda y derecha */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent" />

          <div className="flex overflow-hidden">
            <div className="flex animate-marquee items-center">
              {clients.map((client, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center mx-12 shrink-0 h-28"
                  style={{ minWidth: '180px' }}
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="object-contain max-h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
            {/* Copia para loop infinito */}
            <div className="flex animate-marquee items-center" aria-hidden>
              {clients.map((client, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center mx-12 shrink-0 h-28"
                  style={{ minWidth: '180px' }}
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="object-contain max-h-20 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divisor inferior */}
        <div className="w-full h-px bg-border mt-0" />
      </div>
    </section>
  )
}
