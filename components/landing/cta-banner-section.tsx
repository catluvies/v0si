'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTABannerSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full bg-primary"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-primary-content mb-1">
            Es Momento de un Cambio
          </h3>
          <p className="text-sm text-primary-content/75 leading-relaxed max-w-xl text-pretty">
            La tecnología para resolver estos problemas existe y está probada. Con más de 20 años de experiencia, sabemos cómo implementarla correctamente para maximizar la eficiencia energética.
          </p>
        </div>
        <a
          href="#contact"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-base-100 text-base-content text-sm font-semibold hover:bg-base-100/90 transition-all duration-200 whitespace-nowrap"
        >
          Contáctanos
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.section>
  )
}
