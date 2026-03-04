'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const clients = [
  { name: 'ASMAR', src: '/images/clients/asmar.avif' },
  { name: 'Armada de Chile', src: '/images/clients/armada.avif' },
  { name: 'Enel Green Power', src: '/images/clients/enel.avif' },
]

// Duplicamos varias veces para que el carrusel se vea lleno
const loopClients = [...clients, ...clients, ...clients, ...clients]

export default function LogoCloud() {
  return (
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/50 mb-3">
            Nuestros Clientes
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
            Socios de Confianza en Eficiencia Energética
          </h2>
        </motion.div>

        {/* Carrusel */}
        <div className="relative">
          {/* Fade izquierda */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-neutral-50 dark:from-neutral-900 to-transparent" />
          {/* Fade derecha */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-neutral-50 dark:from-neutral-900 to-transparent" />

          <div className="flex overflow-hidden">
            <div className="animate-marquee flex shrink-0 items-center gap-16">
              {loopClients.map((client, i) => (
                <div
                  key={`${client.name}-${i}`}
                  aria-hidden={i >= clients.length}
                  className="flex items-center justify-center h-24 w-44 shrink-0 rounded-xl bg-white dark:bg-white/5 border border-border px-5 py-4"
                >
                  <Image
                    src={client.src}
                    alt={i < clients.length ? client.name : ''}
                    width={140}
                    height={70}
                    className="object-contain h-full w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
