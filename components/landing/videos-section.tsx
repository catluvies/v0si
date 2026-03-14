'use client'

import { motion } from 'framer-motion'

export default function VideosSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-heading text-balance mb-4">
            Nuestros Videos
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-4" />
          <p className="text-base text-text-body leading-relaxed text-pretty">
            Conoce nuestros proyectos y soluciones a través de nuestro canal de YouTube.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
