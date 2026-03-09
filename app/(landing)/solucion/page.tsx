import type { Metadata } from 'next'
import SolutionSection from '@/components/landing/solution-section'
import BESSDemoSection from '@/components/landing/bess-demo-section'
import CapabilitiesSection from '@/components/landing/capabilities-section'
import ProductsSection from '@/components/landing/products-section'
import CTABannerSection from '@/components/landing/cta-banner-section'

export const metadata: Metadata = {
  title: 'Nuestra Solución | Lambda Ingenieros',
  description: 'Sistema de monitoreo y análisis en tiempo real para optimizar el consumo energético. Tecnología Made in Chile con más de 20 años de experiencia.',
}

export default function SolucionPage() {
  return (
    <div className="pt-24">
      <SolutionSection />
      <ProductsSection />
      <BESSDemoSection />
      <CapabilitiesSection />
      <CTABannerSection
        title="¿Buscas optimizar tu consumo energético?"
        description="Con más de 20 años de experiencia, estamos listos para ayudarte a alcanzar la eficiencia energética con tecnología Made in Chile."
      />
    </div>
  )
}
