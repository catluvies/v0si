'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    name: 'ENEFISYS®',
    image: '/images/products/enefisys.jpg',
    description:
      'Sistema de alta eficiencia de energía eléctrica para entornos aislados. Diseño, construcción e implementación de sistemas híbridos que integran aerogeneradores, paneles solares, turbinas hídricas y baterías de litio, con automatización y monitoreo de desarrollo propio. Cobertura desde la frontera norte hasta el Cabo de Hornos.',
  },
  {
    name: 'ENEBOMB®',
    image: '/images/products/enebomb.jpg',
    description:
      'Sistema de alta eficiencia de bombeo de agua. Diseño, fabricación y programación de sistemas digitales de control de bombeo para sectores industriales, comerciales y habitacionales. Permite alcanzar la eficiencia energética disminuyendo los consumos desde un 30%.',
  },
  {
    name: 'ENEPLUS',
    image: '/images/products/eneplus.jpg',
    description:
      'Auditoría, análisis y recomendaciones sobre el uso y la eficiencia energética. Orientado a clientes con consumos desde 350 kW: condominios en altura, centros comerciales, colegios y hospitales. Evaluación inicial gratuita en 48 a 96 horas.',
  },
]

export default function ProductsSection() {
  return (
    <section className="bg-base-100 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-heading text-balance mb-4">
            NUESTROS <span className="text-primary">PRODUCTOS</span>
          </h2>
          <p className="text-base text-text-body leading-relaxed text-pretty">
            Soluciones propias de ingeniería eléctrica y eficiencia energética,
            diseñadas y fabricadas en Chile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="h-full"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

type Product = (typeof products)[number]

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative h-full rounded-xl overflow-hidden">
      {/* Borde animado */}
      <div className="absolute inset-0 -z-10 rounded-xl bg-[conic-gradient(from_var(--border-angle),transparent_40%,var(--color-primary)_50%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-spin scale-[1.02]" />

      <div className="h-full flex flex-col rounded-xl border border-base-300 bg-base-200 overflow-hidden group-hover:border-transparent transition-colors duration-500">
        <div className="relative h-44 w-full shrink-0 bg-base-300 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover img-cool"
          />
          <div className="absolute inset-0 img-cool-tint" />
        </div>
        <div className="flex flex-col flex-1 p-5">
          <h3 className="font-display text-base font-bold text-text-heading text-center mb-2">{product.name}</h3>
          <p className="text-xs text-text-body leading-relaxed text-justify">{product.description}</p>
        </div>
      </div>
    </div>
  )
}
