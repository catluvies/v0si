'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: '¿Qué datos puedo consultar en el sistema?',
    answer:
      'Puedes consultar datos de generación solar, estado de baterías, consumo eléctrico, rendimiento de trackers individuales, y más de 15 métricas diferentes del sistema fotovoltaico.',
  },
  {
    question: '¿Cómo puedo descargar los datos?',
    answer:
      'El sistema permite exportar los datos en formato CSV desde el dashboard principal. Simplemente selecciona el rango de fechas y las métricas que deseas exportar.',
  },
  {
    question: '¿Con qué frecuencia se actualizan los datos?',
    answer:
      'El sistema realiza monitoreo continuo 24/7 con actualización automática de métricas. Los datos se registran cada vez que hay cambios significativos en el sistema.',
  },
  {
    question: '¿Qué información muestran los trackers?',
    answer:
      'Cada tracker solar muestra voltaje, potencia generada, rendimiento diario y comparativas de eficiencia. Esto permite identificar rápidamente cualquier problema de rendimiento en paneles específicos.',
  },
  {
    question: '¿Puedo ver el historial de datos?',
    answer:
      'Sí. El sistema cuenta con miles de registros históricos disponibles. Puedes visualizar series temporales, analizar patrones y generar reportes de cualquier período desde que se inició el monitoreo.',
  },
  {
    question: '¿El sistema envía alertas?',
    answer:
      'Sí. El dashboard incluye un sistema de alertas que notifica sobre eventos importantes como picos de generación, estado crítico de batería y anomalías en el sistema. También proporciona recomendaciones automáticas de mantenimiento.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-heading text-balance uppercase mb-4">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-base text-text-body leading-relaxed text-pretty">
            Resolvemos las consultas más frecuentes sobre nuestros sistemas de monitoreo y eficiencia energética.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto divide-y divide-base-300">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
                >
                  <span className={`text-sm font-medium transition-colors duration-200 ${
                    isOpen ? 'text-primary' : 'text-text-heading group-hover:text-primary'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-text-muted transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-200"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm text-text-body leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
