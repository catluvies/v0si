'use client'

import { motion } from 'framer-motion'
import { Fuel, Leaf, BatteryCharging, Activity } from 'lucide-react'

const fleetKpis = [
  {
    icon: Fuel,
    value: '75.2',
    unit: 'M Litros',
    label: 'Diesel Evitado',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Leaf,
    value: '198',
    unit: 'k Ton CO₂',
    label: 'Emisiones Evitadas',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
  },
  {
    icon: BatteryCharging,
    value: '73',
    unit: '% SoC',
    label: 'Promedio Flota',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: Activity,
    value: '87.2',
    unit: '%',
    label: 'Disponibilidad',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
]

export default function BESSDemoSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content text-balance mb-4">
            Control Total de tu Energia
          </h2>
          <p className="text-base text-base-content/60 leading-relaxed text-pretty">
            Monitoreo del flujo energetico entre generacion solar,
            almacenamiento en baterias y cargas de consumo en cada instalacion.
          </p>
        </motion.div>

        {/* Energy Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-base-content/10 bg-base-content/[0.03] p-4 sm:p-6 lg:p-8 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-semibold text-base-content">
                Flujo Energetico — Instalacion BESS
              </h3>
              <p className="text-xs text-base-content/50 mt-0.5">
                Zona Norte · Chile
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-green-500 font-medium">En linea</span>
            </div>
          </div>
          <EnergyFlowDiagram />
        </motion.div>

        {/* Fleet KPIs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8"
        >
          {fleetKpis.map((kpi, index) => {
            const Icon = kpi.icon
            return (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-xl border ${kpi.border} bg-base-content/[0.03] p-4 sm:p-5`}
              >
                <div className={`w-9 h-9 rounded-lg ${kpi.bg} flex items-center justify-center mb-3`}>
                  <Icon className={`w-4.5 h-4.5 ${kpi.color}`} />
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl sm:text-2xl font-bold text-base-content">{kpi.value}</span>
                  <span className={`text-xs font-medium ${kpi.color}`}>{kpi.unit}</span>
                </div>
                <p className="text-xs text-base-content/50 mt-1">{kpi.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Subtle CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-sm text-base-content/35">
            100 instalaciones BESS monitoreadas en tiempo real a lo largo de Chile
          </p>
        </motion.div>

      </div>
    </section>
  )
}

/* ─── Energy Flow Diagram (sub-component) ─── */

function EnergyFlowDiagram() {
  return (
    <svg viewBox="0 0 800 380" className="w-full h-auto" aria-label="Diagrama de flujo energetico">
      <defs>
        <linearGradient id="inverterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ===== SOLAR PANELS (left) ===== */}
      <g transform="translate(20, 60)">
        <rect width="180" height="130" rx="12"
          fill="rgba(245,158,11,0.06)" stroke="rgba(245,158,11,0.25)" strokeWidth="1.5" />
        <g transform="translate(65, 18)">
          <rect width="50" height="32" rx="4" fill="none" stroke="#f59e0b" strokeWidth="2" />
          <line x1="0" y1="16" x2="50" y2="16" stroke="#f59e0b" strokeWidth="1" opacity="0.6" />
          <line x1="17" y1="0" x2="17" y2="32" stroke="#f59e0b" strokeWidth="1" opacity="0.6" />
          <line x1="33" y1="0" x2="33" y2="32" stroke="#f59e0b" strokeWidth="1" opacity="0.6" />
        </g>
        <text x="90" y="75" textAnchor="middle" fill="#fbbf24" fontSize="11" fontWeight="600">
          Paneles Solares
        </text>
        <text x="90" y="100" textAnchor="middle" fill="#f59e0b" fontSize="24" fontWeight="bold">
          350 kW
        </text>
        <text x="90" y="118" textAnchor="middle" fill="rgba(245,158,11,0.45)" fontSize="10">
          Generacion actual
        </text>
      </g>

      {/* ===== INVERTER (center) ===== */}
      <g transform="translate(300, 40)">
        <rect width="200" height="170" rx="16"
          fill="url(#inverterGrad)" filter="url(#glow)" />
        <g transform="translate(70, 30)">
          <path
            d="M0,25 Q15,0 30,25 Q45,50 60,25"
            fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"
          >
            <animate
              attributeName="d"
              values="M0,25 Q15,0 30,25 Q45,50 60,25;M0,25 Q15,50 30,25 Q45,0 60,25;M0,25 Q15,0 30,25 Q45,50 60,25"
              dur="2s" repeatCount="indefinite"
            />
          </path>
        </g>
        <text x="100" y="90" textAnchor="middle" fill="white" fontSize="15" fontWeight="700">
          Inversor
        </text>
        <text x="100" y="115" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="11">
          Operando
        </text>
        {/* Status indicator */}
        <circle cx="100" cy="145" r="4" fill="#22c55e">
          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* ===== AC LOADS (right) ===== */}
      <g transform="translate(600, 60)">
        <rect width="180" height="130" rx="12"
          fill="rgba(167,139,250,0.06)" stroke="rgba(167,139,250,0.25)" strokeWidth="1.5" />
        <g transform="translate(72, 18)">
          <path d="M18,0 L36,16 L32,16 L32,32 L4,32 L4,16 L0,16 Z"
            fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinejoin="round" />
          <rect x="14" y="20" width="8" height="12" rx="1" fill="none" stroke="#a78bfa" strokeWidth="1.5" />
        </g>
        <text x="90" y="75" textAnchor="middle" fill="#c4b5fd" fontSize="11" fontWeight="600">
          Cargas AC
        </text>
        <text x="90" y="100" textAnchor="middle" fill="#a78bfa" fontSize="24" fontWeight="bold">
          280 kW
        </text>
        <text x="90" y="118" textAnchor="middle" fill="rgba(167,139,250,0.45)" fontSize="10">
          Consumo actual
        </text>
      </g>

      {/* ===== BATTERY (bottom center) ===== */}
      <g transform="translate(300, 270)">
        <rect width="200" height="95" rx="12"
          fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.25)" strokeWidth="1.5" />
        <text x="100" y="30" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="600">
          78% SoC · Cargando
        </text>
        <text x="100" y="58" textAnchor="middle" fill="#93c5fd" fontSize="22" fontWeight="bold">
          1,500 kWh
        </text>
        <text x="100" y="78" textAnchor="middle" fill="rgba(59,130,246,0.4)" fontSize="10">
          Banco de Baterias
        </text>
      </g>

      {/* ===== FLOW LINES + ANIMATED DOTS ===== */}

      {/* Solar -> Inverter */}
      <path id="flowSolarInv" d="M200,125 L300,125"
        fill="none" stroke="rgba(245,158,11,0.2)" strokeWidth="2" />
      {[0, 1, 2].map(i => (
        <circle key={`si${i}`} r="4" fill="#f59e0b" opacity="0.85">
          <animateMotion dur="1.5s" repeatCount="indefinite" begin={`${i * 0.5}s`}>
            <mpath href="#flowSolarInv" />
          </animateMotion>
        </circle>
      ))}

      {/* Inverter -> Loads */}
      <path id="flowInvLoad" d="M500,125 L600,125"
        fill="none" stroke="rgba(34,197,94,0.2)" strokeWidth="2" />
      {[0, 1, 2].map(i => (
        <circle key={`il${i}`} r="4" fill="#22c55e" opacity="0.85">
          <animateMotion dur="1.5s" repeatCount="indefinite" begin={`${i * 0.5}s`}>
            <mpath href="#flowInvLoad" />
          </animateMotion>
        </circle>
      ))}

      {/* Inverter -> Battery (charging) */}
      <path id="flowInvBat" d="M400,210 L400,270"
        fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="2" />
      {[0, 1].map(i => (
        <circle key={`ib${i}`} r="3.5" fill="#3b82f6" opacity="0.85">
          <animateMotion dur="1.2s" repeatCount="indefinite" begin={`${i * 0.6}s`}>
            <mpath href="#flowInvBat" />
          </animateMotion>
        </circle>
      ))}

      {/* Flow labels on lines */}
      <g transform="translate(250, 110)">
        <rect x="-28" y="-11" width="56" height="22" rx="6"
          fill="rgba(0,0,0,0.5)" />
        <text x="0" y="4" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="600">
          350 kW
        </text>
      </g>

      <g transform="translate(550, 110)">
        <rect x="-28" y="-11" width="56" height="22" rx="6"
          fill="rgba(0,0,0,0.5)" />
        <text x="0" y="4" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="600">
          280 kW
        </text>
      </g>

      <g transform="translate(415, 240)">
        <rect x="-24" y="-11" width="48" height="22" rx="6"
          fill="rgba(0,0,0,0.5)" />
        <text x="0" y="4" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="600">
          70 kW
        </text>
      </g>
    </svg>
  )
}
