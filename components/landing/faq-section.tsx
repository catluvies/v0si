'use client'

import { motion } from 'framer-motion'

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
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white text-balance uppercase mb-4">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed text-pretty">
            ¿Tienes dudas sobre el sistema? Aquí encontrarás respuestas a las preguntas más comunes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="collapse collapse-arrow rounded-xl border border-base-300 bg-base-200 hover:border-primary/35 transition-all duration-300"
            >
              <input type="checkbox" />
              <div className="collapse-title flex items-center gap-3 pr-12">
                <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-xs font-bold text-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-semibold text-white text-sm">{faq.question}</span>
              </div>
              <div className="collapse-content text-sm text-zinc-400 leading-relaxed pl-[calc(0.75rem+1.75rem+0.75rem)]">
                <p>{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
