'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  company: z.string().optional(),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

type ContactForm = z.infer<typeof contactSchema>

type FieldErrors = Partial<Record<keyof ContactForm, string>>

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(field: keyof ContactForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const result = contactSchema.safeParse(form)

    if (!result.success) {
      const fieldErrors: FieldErrors = {}
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactForm
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message
        }
      }
      setErrors(fieldErrors)
      return
    }

    setSubmitted(true)
  }

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-base-content text-balance uppercase mb-4">
            Contáctanos
          </h2>
          <p className="text-base text-base-content/60 leading-relaxed text-pretty">
            ¿Listo para optimizar tu consumo energético? Escríbenos y te contactaremos a la brevedad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="rounded-xl border border-base-content/10 bg-base-content/[0.03] p-10 flex flex-col items-center gap-4 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-base-content">Mensaje enviado</h3>
                <p className="text-sm text-base-content/60">
                  Recibimos tu mensaje. Te contactaremos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-xl border border-base-content/10 bg-base-content/[0.03] p-6 lg:p-8 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    label="Nombre"
                    error={errors.name}
                  >
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Tu nombre"
                      className="input input-bordered w-full"
                    />
                  </FormField>
                  <FormField
                    label="Email"
                    error={errors.email}
                  >
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="tu@empresa.cl"
                      className="input input-bordered w-full"
                    />
                  </FormField>
                </div>

                <FormField label="Empresa (opcional)">
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => handleChange('company', e.target.value)}
                    placeholder="Nombre de tu empresa"
                    className="input input-bordered w-full"
                  />
                </FormField>

                <FormField
                  label="Mensaje"
                  error={errors.message}
                >
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                    rows={5}
                    className="textarea textarea-bordered w-full resize-none"
                  />
                </FormField>

                <button type="submit" className="btn btn-primary gap-2 self-start">
                  <Send className="w-4 h-4" />
                  Enviar Mensaje
                </button>
              </form>
            )}
          </motion.div>

          {/* Info de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="rounded-xl border border-base-content/10 bg-base-content/[0.03] p-6 flex flex-col gap-5">
              <h3 className="text-base font-semibold text-base-content">Información de Contacto</h3>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content">Dirección</p>
                  <p className="text-sm text-base-content/60">Villanelo Alto 180, Of. 606, Viña del Mar. Chile</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content">Teléfono</p>
                  <a href="tel:+56931014289" className="text-sm text-base-content/60 hover:text-base-content transition-colors">
                    +56 9 3101 4289
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-base-content">Email</p>
                  <a href="mailto:contacto@lambdaingenieros.cl" className="text-sm text-base-content/60 hover:text-base-content transition-colors">
                    contacto@lambdaingenieros.cl
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

type FormFieldProps = {
  label: string
  error?: string
  children: React.ReactNode
}

function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-base-content">{label}</label>
      {children}
      {error && <p className="text-xs text-error">{error}</p>}
    </div>
  )
}
