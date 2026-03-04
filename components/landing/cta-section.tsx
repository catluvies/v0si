'use client'

import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-r from-purple-600 to-purple-700 p-8 md:p-16 lg:p-20 text-center overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance max-w-3xl mx-auto">
              ¿Buscas Optimizar tu Consumo Energético?
            </h2>
            <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-2xl mx-auto text-pretty">
              Con más de 20 años de experiencia, estamos listos para ayudarte a
              alcanzar la eficiencia energética con tecnología Made in Chile.
            </p>

            <div className="mt-10">
              <a
                href="mailto:contacto@lambdaingenieroschile.com"
                className="btn bg-white hover:bg-white/90 text-purple-600 border-0 rounded-lg gap-2 px-8"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
