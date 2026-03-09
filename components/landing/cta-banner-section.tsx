'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
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
  href = '/contacto',
}: CTABannerProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full bg-base-300"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="border-t border-base-300" />
      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-text-heading uppercase mb-1">
            {title}
          </h3>
          <p className="text-sm text-text-body leading-relaxed max-w-xl text-pretty">
            {description}
          </p>
        </div>
        <Link
          href={href}
          className="btn btn-primary shrink-0 gap-2 whitespace-nowrap"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="border-t border-base-300" />
      </div>
    </motion.section>
  )
}
