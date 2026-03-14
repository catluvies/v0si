'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { productContent } from '@/lib/content-reference'

const { eneplus } = productContent

export default function EneplusSection() {
  return (
    <section>
      {/* Hero fullscreen */}
      <div className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/images/products/eneplus.jpg"
          alt="ENEPLUS"
          fill
          className="object-cover brightness-[0.35]"
          priority
        />
        <div className="absolute inset-0 bg-primary/25 mix-blend-color" />
        <div className="absolute inset-0 bg-linear-to-b from-base-100/60 via-transparent to-base-100" />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-black tracking-tight text-text-heading uppercase"
          >
            {eneplus.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-text-body leading-relaxed text-pretty"
          >
            {eneplus.tagline}
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        {/* Numbers summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {eneplus.stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <p className="font-display text-4xl md:text-5xl font-bold text-text-heading mb-4 text-center">
                {String(index + 1).padStart(2, '0')}.
              </p>
              <div className="h-0.5 bg-primary mb-4" />
              <h3 className="font-display text-sm font-bold text-text-heading uppercase tracking-wide mb-3 text-center">{stage.title}</h3>
              <p className="text-sm text-text-body leading-relaxed text-justify">{stage.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
