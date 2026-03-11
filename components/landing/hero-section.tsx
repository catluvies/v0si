'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import LogoCloud from './logo-cloud'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-base-100">
      {/* Imagen arriba — absolute para que se superponga con el contenido */}
      <div className="absolute top-0 left-0 right-0 h-[55vh] z-[0]">
        <Image
          src="/images/hero-energy.jpg"
          alt="Infraestructura eléctrica"
          fill
          className="object-cover object-bottom grayscale brightness-[0.25]"
          priority
        />
        {/* Tint azul */}
        <div className="absolute inset-0 bg-primary/30 mix-blend-color" />
        {/* Fade inferior al fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-100/10 to-base-100" />
      </div>

      {/* Contenido con wireframe mesh */}
      <div className="relative flex-1 flex items-center z-[1]">
        <WireframeMesh />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-16 py-20">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-[-0.02em] text-text-heading text-balance"
          >
            Tecnología <span className="text-primary">Made in Chile</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 max-w-2xl space-y-2"
          >
            <p className="text-xl text-text-heading font-medium leading-snug">
              Diseñamos y fabricamos soluciones eléctricas inteligentes en Chile, con monitoreo y control de desarrollo propio.
            </p>
            <p className="text-base text-text-muted leading-relaxed">
              Más de 20 años creando sistemas que operan en los entornos más extremos del país.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 w-full"
          >
            <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
              <StatCard value="31" label="Proyectos Completados" />
              <StatCard value="20+" label="Años de Experiencia" />
              <StatCard value="24/7" label="Monitoreo Continuo" />
            </div>
            <p className="mt-4 text-xs text-text-muted italic">
              * Datos acumulados desde 2004
            </p>
          </motion.div>

        </div>
      </div>
      </div>

      {/* Logo cloud integrado en la parte inferior del hero */}
      <div className="relative z-[2]">
        <LogoCloud />
      </div>
    </section>
  )
}

type StatCardProps = {
  value: string
  label: string
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-xl bg-base-200/80 backdrop-blur-sm border border-base-300 px-4 py-4 text-center hover:border-primary/30 transition-all duration-300">
      <p className="font-display text-2xl font-bold text-text-heading tracking-tight leading-none">{value}</p>
      <p className="text-xs text-text-muted mt-1.5">{label}</p>
    </div>
  )
}

const COLS = 45
const ROWS = 22
const LINE_COLOR = 'rgba(90, 142, 200, 0.18)'
const DOT_COLOR_BASE = [90, 142, 200]
const WAVE_SPEED = 0.0009
const WAVE_AMP = 14

function WireframeMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animId = 0

    function resize() {
      const dpr = window.devicePixelRatio || 1
      const w = window.innerWidth
      const h = window.innerHeight
      canvas!.width = w * dpr
      canvas!.height = h * dpr
      canvas!.style.width = `${w}px`
      canvas!.style.height = `${h}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    function getDeformed(col: number, row: number, t: number) {
      const w = window.innerWidth
      const h = window.innerHeight
      const baseX = (col / COLS) * w
      const baseY = (row / ROWS) * h
      const dx = Math.sin(row * 0.4 + t * 1.2) * WAVE_AMP
      const dy = Math.cos(col * 0.3 + t) * WAVE_AMP * 0.7
      return { x: baseX + dx, y: baseY + dy }
    }

    function draw(t: number) {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx!.clearRect(0, 0, w, h)

      ctx!.strokeStyle = LINE_COLOR
      ctx!.lineWidth = 0.5

      for (let r = 0; r <= ROWS; r++) {
        ctx!.beginPath()
        for (let c = 0; c <= COLS; c++) {
          const { x, y } = getDeformed(c, r, t)
          if (c === 0) ctx!.moveTo(x, y)
          else ctx!.lineTo(x, y)
        }
        ctx!.stroke()
      }

      for (let c = 0; c <= COLS; c++) {
        ctx!.beginPath()
        for (let r = 0; r <= ROWS; r++) {
          const { x, y } = getDeformed(c, r, t)
          if (r === 0) ctx!.moveTo(x, y)
          else ctx!.lineTo(x, y)
        }
        ctx!.stroke()
      }

      const [dr, dg, db] = DOT_COLOR_BASE
      for (let r = 2; r <= ROWS; r += 4) {
        for (let c = 3; c <= COLS; c += 7) {
          const { x, y } = getDeformed(c, r, t)
          const pulse = 0.15 + 0.2 * Math.sin(t * 1.5 + c * 0.5 + r * 0.7)
          ctx!.beginPath()
          ctx!.arc(x, y, 2, 0, Math.PI * 2)
          ctx!.fillStyle = `rgba(${dr}, ${dg}, ${db}, ${pulse})`
          ctx!.fill()
        }
      }
    }

    resize()

    if (prefersReduced) {
      draw(0)
    } else {
      function loop(time: number) {
        draw(time * WAVE_SPEED)
        animId = requestAnimationFrame(loop)
      }
      animId = requestAnimationFrame(loop)
    }

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[1] pointer-events-none"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 30%, black 55%, transparent 95%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 30%, black 55%, transparent 95%)',
      }}
    />
  )
}
