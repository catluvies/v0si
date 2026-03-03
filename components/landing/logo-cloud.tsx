'use client'

import { motion } from 'framer-motion'

const brands = [
  { name: 'Victron Energy', width: 'w-28' },
  { name: 'Pylontech', width: 'w-24' },
  { name: 'Huawei Solar', width: 'w-24' },
  { name: 'SMA', width: 'w-16' },
  { name: 'Fronius', width: 'w-24' },
  { name: 'Growatt', width: 'w-24' },
]

export default function LogoCloud() {
  return (
    <section className="py-16 border-y border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-10 font-medium uppercase tracking-widest"
        >
          Compatible con las principales marcas del mercado
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8"
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`${brand.width} flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity`}
            >
              <span className="text-base font-semibold text-muted-foreground tracking-tight whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
