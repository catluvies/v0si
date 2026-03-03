'use client'

import { motion } from 'framer-motion'
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react'

const problems = [
  {
    problem: 'Sin visibilidad del rendimiento real',
    solution: 'Dashboard con datos en tiempo real de cada panel individual',
  },
  {
    problem: 'Fallas detectadas tarde o nunca',
    solution: 'Sistema de alertas inteligentes con notificacion inmediata',
  },
  {
    problem: 'Reportes manuales y desorganizados',
    solution: 'Reportes automaticos mensuales con metricas claras',
  },
  {
    problem: 'Dependencia del instalador para datos',
    solution: 'Acceso autonomo desde cualquier dispositivo, 24/7',
  },
]

export default function ProblemSolutionSection() {
  return (
    <section id="solution" className="py-24 lg:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="badge badge-outline badge-sm text-primary border-primary/30 mb-4 font-medium">
            El Problema
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            La mayoria de los sistemas solares operan a ciegas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
            Sin monitoreo profesional, pierdes hasta un 25% de la generacion potencial
            de tu planta solar por fallas no detectadas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Problems column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-destructive mb-6">
              Sin Lambda Solar
            </h3>
            <div className="flex flex-col gap-4">
              {problems.map((item) => (
                <div
                  key={item.problem}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                >
                  <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <p className="text-foreground text-sm leading-relaxed">{item.problem}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solutions column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-6">
              Con Lambda Solar
            </h3>
            <div className="flex flex-col gap-4">
              {problems.map((item) => (
                <div
                  key={item.solution}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-primary/20"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground text-sm leading-relaxed">{item.solution}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn btn-primary rounded-lg gap-2 px-6">
            Empieza a monitorear
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
