'use client'

import { motion } from 'framer-motion'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts'
import { Activity, TrendingUp, Battery, Sun } from 'lucide-react'

const hourlyData = [
  { hour: '06:00', generacion: 0.2, consumo: 1.1 },
  { hour: '07:00', generacion: 0.8, consumo: 1.3 },
  { hour: '08:00', generacion: 2.1, consumo: 1.5 },
  { hour: '09:00', generacion: 3.8, consumo: 1.8 },
  { hour: '10:00', generacion: 4.9, consumo: 2.0 },
  { hour: '11:00', generacion: 5.5, consumo: 1.7 },
  { hour: '12:00', generacion: 5.8, consumo: 2.3 },
  { hour: '13:00', generacion: 5.6, consumo: 2.1 },
  { hour: '14:00', generacion: 5.2, consumo: 1.9 },
  { hour: '15:00', generacion: 4.3, consumo: 2.0 },
  { hour: '16:00', generacion: 3.1, consumo: 1.8 },
  { hour: '17:00', generacion: 1.5, consumo: 2.4 },
  { hour: '18:00', generacion: 0.4, consumo: 2.8 },
  { hour: '19:00', generacion: 0, consumo: 3.1 },
]

const monthlyData = [
  { mes: 'Ene', kwh: 920 },
  { mes: 'Feb', kwh: 870 },
  { mes: 'Mar', kwh: 780 },
  { mes: 'Abr', kwh: 620 },
  { mes: 'May', kwh: 430 },
  { mes: 'Jun', kwh: 320 },
  { mes: 'Jul', kwh: 350 },
  { mes: 'Ago', kwh: 450 },
  { mes: 'Sep', kwh: 580 },
  { mes: 'Oct', kwh: 710 },
  { mes: 'Nov', kwh: 840 },
  { mes: 'Dic', kwh: 950 },
]

const stats = [
  { icon: Sun, label: 'Generacion Diaria', value: '42.8 kWh', sub: 'Promedio ultimos 30 dias' },
  { icon: TrendingUp, label: 'Eficiencia', value: '94.2%', sub: 'Rendimiento vs. capacidad nominal' },
  { icon: Battery, label: 'Bateria', value: '87%', sub: 'Estado de carga actual' },
  { icon: Activity, label: 'Autoconsumo', value: '68%', sub: 'Energia usada directamente' },
]

export default function DataVisualizationSection() {
  return (
    <section id="data" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="badge badge-outline badge-sm text-primary border-primary/30 mb-4 font-medium">
            Dashboard
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            Datos claros para decisiones inteligentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
            Visualiza el comportamiento de tu planta solar con graficos interactivos
            y metricas en tiempo real.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="card bg-card border border-border p-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">{stat.label}</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
              </div>
            )
          })}
        </motion.div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Area Chart - Generacion vs Consumo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 card bg-card border border-border p-6"
          >
            <h3 className="text-sm font-semibold text-foreground mb-1">
              Generacion vs. Consumo
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              Curva diaria de generacion solar y consumo del hogar (kW)
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={hourlyData}>
                  <defs>
                    <linearGradient id="colorGen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorCons" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#a38668" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#a38668" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis
                    dataKey="hour"
                    tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }}
                    axisLine={{ stroke: 'var(--border)' }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }}
                    axisLine={{ stroke: 'var(--border)' }}
                    tickLine={false}
                    unit=" kW"
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      color: 'var(--foreground)',
                      fontSize: '12px',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="generacion"
                    stroke="#14b8a6"
                    fillOpacity={1}
                    fill="url(#colorGen)"
                    strokeWidth={2}
                    name="Generacion"
                  />
                  <Area
                    type="monotone"
                    dataKey="consumo"
                    stroke="#a38668"
                    fillOpacity={1}
                    fill="url(#colorCons)"
                    strokeWidth={2}
                    name="Consumo"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Bar Chart - Monthly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 card bg-card border border-border p-6"
          >
            <h3 className="text-sm font-semibold text-foreground mb-1">
              Generacion Anual
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              kWh generados por mes
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                  <XAxis
                    dataKey="mes"
                    tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }}
                    axisLine={{ stroke: 'var(--border)' }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }}
                    axisLine={{ stroke: 'var(--border)' }}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--card)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      color: 'var(--foreground)',
                      fontSize: '12px',
                    }}
                  />
                  <Bar
                    dataKey="kwh"
                    fill="#14b8a6"
                    radius={[4, 4, 0, 0]}
                    name="kWh"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
