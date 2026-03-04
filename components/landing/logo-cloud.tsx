'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const clients = [
  { name: 'ASMAR', src: '/images/clients/asmar.png' },
  { name: 'Armada de Chile', src: '/images/clients/armada.avif' },
  { name: 'Enel Green Power', src: '/images/clients/enel.png' },
]

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
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/50 mb-3">
            Nuestros Clientes
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Socios de Confianza en Eficiencia Energética
          </h2>
        </motion.div>

        {/* Carrusel */}
        <div className="relative">
          {/* Fade izquierda */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-neutral-50 dark:from-neutral-900 to-transparent" />
          {/* Fade derecha */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-neutral-50 dark:from-neutral-900 to-transparent" />

          <div className="overflow-hidden">
            {/* Un solo div con las dos copias para el loop continuo */}
            <div className="animate-marquee">
              {/* Copia 1 */}
              {clients.map((client, i) => (
                <div
                  key={`a-${i}`}
                  className="inline-flex items-center justify-center mx-6 h-40 w-56 rounded-2xl bg-foreground/[0.04] backdrop-blur-sm border border-foreground/10 px-8 py-6"
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={200}
                    height={120}
                    className={`object-contain max-h-32 w-auto ${
                      client.name === 'Armada de Chile' ? 'scale-125' : ''
                    }`}
                  />
                </div>
              ))}
              {/* Copia 2 — aria-hidden para accesibilidad */}
              {clients.map((client, i) => (
                <div
                  key={`b-${i}`}
                  aria-hidden="true"
                  className="inline-flex items-center justify-center mx-6 h-40 w-56 rounded-2xl bg-foreground/[0.04] backdrop-blur-sm border border-foreground/10 px-8 py-6"
                >
                  <Image
                    src={client.src}
                    alt=""
                    width={200}
                    height={120}
                    className={`object-contain max-h-32 w-auto ${
                      client.name === 'Armada de Chile' ? 'scale-125' : ''
                    }`}
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
