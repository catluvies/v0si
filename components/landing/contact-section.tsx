'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: 'linear-gradient(to bottom, var(--color-base-100) 0%, color-mix(in srgb, var(--color-blue-900) 15%, var(--color-base-100)) 30%, color-mix(in srgb, var(--color-blue-900) 20%, var(--color-base-100)) 70%, var(--color-base-100) 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-heading text-balance uppercase mb-4">
            Contáctanos
          </h2>
          <p className="text-base text-text-body leading-relaxed text-pretty">
            Cuéntanos sobre tu proyecto energético y nuestro equipo técnico evaluará la mejor solución para tu caso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form className="rounded-xl border border-base-300 bg-base-100 p-6 lg:p-8 flex flex-col gap-5 border-l-2 border-l-primary">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-nombre" className="text-sm font-medium text-text-heading">Nombre</label>
                  <input id="contact-nombre" type="text" placeholder="Tu nombre" className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-apellido" className="text-sm font-medium text-text-heading">Apellido</label>
                  <input id="contact-apellido" type="text" placeholder="Tu apellido" className="input input-bordered w-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="text-sm font-medium text-text-heading">Email</label>
                  <input id="contact-email" type="email" placeholder="tu@empresa.cl" className="input input-bordered w-full" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-telefono" className="text-sm font-medium text-text-heading">Teléfono</label>
                  <input id="contact-telefono" type="tel" placeholder="+56 9 1234 5678" className="input input-bordered w-full" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-asunto" className="text-sm font-medium text-text-heading">Asunto</label>
                <input id="contact-asunto" type="text" placeholder="Motivo de tu consulta" className="input input-bordered w-full" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-mensaje" className="text-sm font-medium text-text-heading">Mensaje</label>
                <textarea
                  id="contact-mensaje"
                  placeholder="Describe tu proyecto o necesidad energética..."
                  rows={5}
                  className="textarea textarea-bordered w-full resize-none"
                />
              </div>

              <button type="button" className="btn btn-primary gap-2 self-start">
                <Send className="w-4 h-4" />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>

          <ContactInfo />
        </div>
      </div>
    </section>
  )
}

function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="lg:col-span-2 flex flex-col gap-6"
    >
      <div className="rounded-xl border border-base-300 bg-base-100 p-6 flex flex-col gap-5 border-l-2 border-l-primary">
        <h3 className="text-base font-semibold text-text-heading">Información de Contacto</h3>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-text-heading">Dirección</p>
            <p className="text-sm text-text-body">Villanelo Alto 180, Of. 606, Viña del Mar. Chile</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-text-heading">Teléfono</p>
            <a href="tel:+56931014289" className="text-sm text-text-body hover:text-text-heading transition-colors">
              +56 9 3101 4289
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Mail className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-text-heading">Email</p>
            <a href="mailto:contacto@lambdaingenieros.cl" className="text-sm text-text-body hover:text-text-heading transition-colors">
              contacto@lambdaingenieros.cl
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
