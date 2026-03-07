'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, X, Send, CheckCircle } from 'lucide-react'

export default function DemoFloat() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  const show = visible && !dismissed

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-40 rounded-t border-t border-base-content/10 bg-base-200/95 backdrop-blur-xl shadow-2xl p-5 sm:bottom-6 sm:right-6 sm:left-auto sm:w-80 sm:rounded sm:border"
        >
          <button
            onClick={() => setDismissed(true)}
            className="btn btn-ghost btn-circle btn-sm absolute top-3 right-3"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-3 py-2 text-center"
            >
              <div className="w-10 h-10 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm font-semibold text-base-content">
                Recibimos tu solicitud
              </p>
              <p className="text-xs text-base-content/60">
                Te contactaremos pronto.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-base font-semibold text-base-content">
                    Solicita un Demo
                  </p>
                  <p className="text-sm text-base-content/60">
                    Nos integramos a tus datos
                  </p>
                </div>
              </div>
              <input
                type="email"
                placeholder="tu@empresa.cl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input input-bordered input-sm w-full"
              />
              <button type="submit" className="btn btn-primary btn-sm w-full gap-2">
                <Send className="w-3.5 h-3.5" />
                Solicitar Demo
              </button>
            </form>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
