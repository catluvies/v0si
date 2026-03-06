'use client'

import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'Que datos puedo consultar en el sistema?',
    answer:
      'Puedes consultar datos de generacion solar, estado de baterias, consumo electrico, rendimiento de trackers individuales, y mas de 15 metricas diferentes del sistema fotovoltaico.',
  },
  {
    question: 'Como puedo descargar los datos?',
    answer:
      'El sistema permite exportar los datos en formato CSV desde el dashboard principal. Simplemente selecciona el rango de fechas y las metricas que deseas exportar.',
  },
  {
    question: 'Con que frecuencia se actualizan los datos?',
    answer:
      'El sistema realiza monitoreo continuo 24/7 con actualizacion automatica de metricas. Los datos se registran cada vez que hay cambios significativos en el sistema.',
  },
  {
    question: 'Que informacion muestran los trackers?',
    answer:
      'Cada tracker solar muestra voltaje, potencia generada, rendimiento diario y comparativas de eficiencia. Esto permite identificar rapidamente cualquier problema de rendimiento en paneles especificos.',
  },
  {
    question: 'Puedo ver el historial de datos?',
    answer:
      'Si. El sistema cuenta con miles de registros historicos disponibles. Puedes visualizar series temporales, analizar patrones y generar reportes de cualquier periodo desde que se inicio el monitoreo.',
  },
  {
    question: 'El sistema envia alertas?',
    answer:
      'Si. El dashboard incluye un sistema de alertas que notifica sobre eventos importantes como picos de generacion, estado critico de bateria y anomalias en el sistema. Tambien proporciona recomendaciones automaticas de mantenimiento.',
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content text-balance mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-base text-base-content/60 leading-relaxed text-pretty">
            Tienes dudas sobre el sistema? Aqui encontraras respuestas a las preguntas mas comunes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-2"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse collapse-arrow rounded-xl border border-base-content/10 bg-base-content/[0.03] hover:border-base-content/20 hover:bg-base-content/[0.06] transition-all duration-200"
            >
              <input type="checkbox" />
              <div className="collapse-title font-semibold text-base-content text-sm">
                {faq.question}
              </div>
              <div className="collapse-content text-sm text-base-content/60 leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
