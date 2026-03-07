'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

type CTABannerProps = {
  title: string
  description: string
  buttonText?: string
  href?: string
}

export default function CTABannerSection({
  title,
  description,
  buttonText = 'Contáctanos',
  href = '#contact',
}: CTABannerProps) {
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
            {title}
          </h3>
          <p className="text-sm text-primary-content/70 leading-relaxed max-w-xl text-pretty">
            {description}
          </p>
        </div>
        <a
          href={href}
          className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded bg-base-100 text-base-content text-sm font-semibold hover:bg-base-100/90 transition-all duration-200 whitespace-nowrap"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.section>
  )
}
