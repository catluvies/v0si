'use client'

import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'Que tipos de inversores son compatibles?',
    answer:
      'Lambda Solar es compatible con Victron Energy, Fronius, Huawei Solar, SMA, Growatt, Goodwe y otros inversores con protocolo Modbus TCP, MQTT o API REST. Si tu inversor no esta en la lista, contactanos para evaluar la integracion.',
  },
  {
    question: 'Necesito instalar hardware adicional?',
    answer:
      'En la mayoria de los casos, no. Si tu inversor ya tiene conectividad WiFi o Ethernet, solo necesitas configurar la conexion a nuestra plataforma. Para sistemas Victron, usamos el Cerbo GX como gateway. En otros casos, podemos instalar un gateway IoT compacto.',
  },
  {
    question: 'Cuanto cuesta el servicio de monitoreo?',
    answer:
      'Ofrecemos planes desde $15.000 CLP mensuales para sistemas residenciales. Los planes comerciales e industriales se cotizan segun la cantidad de inversores y paneles a monitorear. Todos los planes incluyen alertas, reportes y acceso ilimitado al dashboard.',
  },
  {
    question: 'Mis datos estan seguros?',
    answer:
      'Si. Todos los datos se transmiten con encriptacion TLS y se almacenan en servidores con respaldo automatico. Cumplimos con las normativas de proteccion de datos y los estandares de la SEC Chile.',
  },
  {
    question: 'Puedo integrar Lambda Solar con otros sistemas?',
    answer:
      'Si. Nuestra API REST permite integrar los datos de tu planta solar con sistemas ERP, plataformas de gestion energetica, Home Assistant y otros sistemas de automatizacion. Tambien ofrecemos webhooks para integraciones personalizadas.',
  },
  {
    question: 'Ofrecen servicio de instalacion?',
    answer:
      'Si. Lambda Ingenieros ofrece servicio completo de instalacion, configuracion y puesta en marcha del sistema de monitoreo. Tambien realizamos mantenciones preventivas y optimizacion de plantas existentes en la Region Metropolitana y Valparaiso.',
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge badge-outline badge-sm text-primary border-primary/30 mb-4 font-medium">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
            Respuestas a las consultas mas comunes sobre nuestra plataforma de monitoreo.
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
              className="collapse collapse-arrow bg-card border border-border rounded-xl"
            >
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title font-semibold text-foreground text-sm">
                {faq.question}
              </div>
              <div className="collapse-content text-sm text-muted-foreground leading-relaxed">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
