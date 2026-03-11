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
      'Auditoría, análisis y recomendaciones sobre el uso y la eficiencia energética. Orientado a clientes con consumos desde 350 kW: condominios en altura, centros comerciales, colegios y hospitales.',
  },
]

export default function ProductsSection() {
  return (
    <section className="bg-base-100 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-heading text-balance mb-4">
            NUESTROS <span className="text-primary">PRODUCTOS</span>
          </h2>
          <p className="text-base text-text-body leading-relaxed text-pretty">
            Soluciones propias de ingeniería eléctrica y eficiencia energética,
            diseñadas y fabricadas en Chile.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        {/* Fade top */}
        <div
          className="absolute inset-x-0 top-0 h-2/5 z-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, var(--color-base-100) 0%, color-mix(in srgb, var(--color-base-100) 80%, transparent) 30%, color-mix(in srgb, var(--color-base-100) 40%, transparent) 60%, transparent 100%)',
          }}
        />
        {/* Fade bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-3/5 z-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, var(--color-base-100) 0%, color-mix(in srgb, var(--color-base-100) 85%, transparent) 25%, color-mix(in srgb, var(--color-base-100) 50%, transparent) 50%, color-mix(in srgb, var(--color-base-100) 20%, transparent) 75%, transparent 100%)',
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="min-w-0 md:-mx-[1px]"
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
    <div className="group relative aspect-[5/4] md:aspect-[4/3]">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover img-cool"
      />

      {/* Tint azul */}
      <div className="absolute inset-0 img-cool-tint" />

      {/* Texto sobre gradiente inferior (z-20 lo pone encima de los fades de sección) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-30">
        <h3 className="font-display text-xl font-bold text-text-heading mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-text-body leading-relaxed text-justify">
          {product.description}
        </p>
      </div>
    </div>
  )
}
