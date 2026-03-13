'use client'

import { motion } from 'framer-motion'

export default function BESSDemoSection() {
  return (
    <section id="bess" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-heading text-balance uppercase mb-4">
            Control Total de tu <span className="text-primary">Energía</span>
          </h2>
          <p className="text-base text-text-body leading-relaxed text-pretty">
            Monitoreo del flujo energético entre generación solar,
            almacenamiento en baterías y cargas de consumo en cada instalación.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
