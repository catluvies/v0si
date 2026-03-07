'use client'

import { motion } from 'framer-motion'
import { Activity, Zap, TrendingUp, Sun } from 'lucide-react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`)

function solarCurve(hour: number): number {
  if (hour < 6 || hour > 20) return 0
  const peak = 13
  const spread = 4.5
  const base = Math.exp(-((hour - peak) ** 2) / (2 * spread ** 2))
  return Math.round(base * 85 + Math.random() * 8)
}

function consumptionCurve(hour: number): number {
  const base = 15 + Math.random() * 5
  if (hour >= 8 && hour <= 12) return Math.round(base + 25 + Math.random() * 10)
  if (hour >= 13 && hour <= 18) return Math.round(base + 35 + Math.random() * 12)
  if (hour >= 19 && hour <= 22) return Math.round(base + 20 + Math.random() * 8)
  return Math.round(base)
}

const productionData = hours.map((_, i) => solarCurve(i))
const consumptionData = hours.map((_, i) => consumptionCurve(i))

const weekDays = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
const weeklyProduction = [320, 345, 310, 360, 355, 370, 340]
const weeklyConsumption = [280, 295, 270, 310, 300, 250, 230]

const sparkData = {
  efficiency: [65, 68, 72, 70, 75, 78, 82, 80, 85, 83, 87, 89],
  savings: [12, 15, 14, 18, 20, 22, 19, 24, 26, 25, 28, 30],
  production: [45, 52, 48, 55, 60, 58, 62, 65, 63, 68, 70, 72],
}

type StatCardProps = {
  icon: React.ReactNode
  label: string
  value: string
  unit: string
  data: number[]
  color: string
}

function StatCard({ icon, label, value, unit, data, color }: StatCardProps) {
  return (
    <div className="rounded-xl border border-base-content/10 bg-base-content/[0.03] p-4 flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-base-content/50">{label}</p>
        <p className="text-lg font-bold text-base-content">{value}<span className="text-xs text-base-content/50 ml-1">{unit}</span></p>
      </div>
      <div className="w-20 h-8 flex-shrink-0">
        <Chart
          type="line"
          height={32}
          width={80}
          series={[{ data }]}
          options={{
            chart: { sparkline: { enabled: true }, animations: { enabled: false } },
            stroke: { width: 2, curve: 'smooth' },
            colors: [color],
            tooltip: { enabled: false },
          }}
        />
      </div>
    </div>
  )
}

export default function SolarDemoSection() {
  return (
    <section className="py-24 bg-base-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-base-content text-balance mb-4">
            Monitoreo Solar en Tiempo Real
          </h2>
          <p className="text-base text-base-content/60 leading-relaxed text-pretty">
            Visualiza la produccion y consumo energetico de tus instalaciones fotovoltaicas con datos precisos y graficos interactivos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6"
        >
          <StatCard
            icon={<Activity className="w-5 h-5 text-primary" />}
            label="Eficiencia del Sistema"
            value="87.3"
            unit="%"
            data={sparkData.efficiency}
            color="#3b82f6"
          />
          <StatCard
            icon={<Zap className="w-5 h-5 text-primary" />}
            label="Ahorro Mensual"
            value="$2.4M"
            unit="CLP"
            data={sparkData.savings}
            color="#6366f1"
          />
          <StatCard
            icon={<TrendingUp className="w-5 h-5 text-primary" />}
            label="Produccion Hoy"
            value="72.1"
            unit="kWh"
            data={sparkData.production}
            color="#0ea5e9"
          />
        </motion.div>

        {/* Main area chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-base-content/10 bg-base-content/[0.03] p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sun className="w-5 h-5 text-primary" />
            <h3 className="text-sm font-semibold text-base-content">Produccion vs Consumo — Hoy</h3>
          </div>
          <Chart
            type="area"
            height={320}
            series={[
              { name: 'Produccion Solar (kWh)', data: productionData },
              { name: 'Consumo (kWh)', data: consumptionData },
            ]}
            options={{
              chart: {
                toolbar: { show: false },
                foreColor: '#9ca3af',
                background: 'transparent',
                fontFamily: 'inherit',
              },
              colors: ['#3b82f6', '#6366f1'],
              stroke: { width: 2.5, curve: 'smooth' },
              fill: {
                type: 'gradient',
                gradient: {
                  shadeIntensity: 1,
                  opacityFrom: 0.4,
                  opacityTo: 0.05,
                  stops: [0, 95, 100],
                },
              },
              dataLabels: { enabled: false },
              grid: {
                borderColor: 'rgba(255,255,255,0.06)',
                strokeDashArray: 4,
                xaxis: { lines: { show: false } },
              },
              xaxis: {
                categories: hours,
                axisBorder: { show: false },
                axisTicks: { show: false },
                labels: {
                  style: { fontSize: '11px' },
                  rotate: 0,
                  hideOverlappingLabels: true,
                },
              },
              yaxis: {
                labels: {
                  style: { fontSize: '11px' },
                  formatter: (val: number) => `${val} kWh`,
                },
              },
              legend: {
                position: 'top',
                horizontalAlign: 'right',
                fontSize: '12px',
                markers: { size: 6, shape: 'circle' as const },
              },
              tooltip: { theme: 'dark' },
            }}
          />
        </motion.div>

        {/* Weekly bar chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-xl border border-base-content/10 bg-base-content/[0.03] p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="text-sm font-semibold text-base-content">Resumen Semanal</h3>
          </div>
          <Chart
            type="bar"
            height={240}
            series={[
              { name: 'Produccion (kWh)', data: weeklyProduction },
              { name: 'Consumo (kWh)', data: weeklyConsumption },
            ]}
            options={{
              chart: {
                toolbar: { show: false },
                foreColor: '#9ca3af',
                background: 'transparent',
                fontFamily: 'inherit',
              },
              colors: ['#3b82f6', '#6366f1'],
              plotOptions: {
                bar: { borderRadius: 6, columnWidth: '55%' },
              },
              dataLabels: { enabled: false },
              grid: {
                borderColor: 'rgba(255,255,255,0.06)',
                strokeDashArray: 4,
                xaxis: { lines: { show: false } },
              },
              xaxis: {
                categories: weekDays,
                axisBorder: { show: false },
                axisTicks: { show: false },
              },
              yaxis: {
                labels: {
                  style: { fontSize: '11px' },
                  formatter: (val: number) => `${val}`,
                },
              },
              legend: {
                position: 'top',
                horizontalAlign: 'right',
                fontSize: '12px',
                markers: { size: 6, shape: 'circle' as const },
              },
              tooltip: { theme: 'dark' },
            }}
          />
        </motion.div>

      </div>
    </section>
  )
}
