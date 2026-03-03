'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl bg-card border border-border p-8 md:p-12 lg:p-16 text-center overflow-hidden"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  'radial-gradient(circle, var(--primary) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          </div>

          <div className="relative z-10">
            <span className="badge badge-outline badge-sm text-primary border-primary/30 mb-6 font-medium">
              Comienza Hoy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance max-w-3xl mx-auto">
              Lleva tu planta solar al siguiente nivel
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto text-pretty">
              Agenda una demo personalizada y descubre como Lambda Solar puede
              optimizar el rendimiento de tu sistema fotovoltaico.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contacto@lambdaingenieroschile.com"
                className="btn btn-primary rounded-lg gap-2 px-8"
              >
                Solicitar Demo Gratuita
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-border text-foreground hover:bg-secondary rounded-lg gap-2"
              >
                Contactar por WhatsApp
              </a>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Sin compromiso. Respuesta en menos de 24 horas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
