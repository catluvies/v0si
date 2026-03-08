import type { Metadata } from 'next'
import SolutionSection from '@/components/landing/solution-section'
import BESSDemoSection from '@/components/landing/bess-demo-section'
import CapabilitiesSection from '@/components/landing/capabilities-section'
import CTABannerSection from '@/components/landing/cta-banner-section'

export const metadata: Metadata = {
  title: 'Nuestra Solución | Lambda Solar',
  description: 'Sistema de monitoreo y análisis en tiempo real para optimizar el consumo energético. Tecnología Made in Chile con más de 20 años de experiencia.',
}

export default function SolucionPage() {
  return (
    <>
      <SolutionSection />
      <BESSDemoSection />
      <CapabilitiesSection />
      <CTABannerSection
        title="¿Buscas Optimizar tu Consumo Energético?"
        description="Con más de 20 años de experiencia, estamos listos para ayudarte a alcanzar la eficiencia energética con tecnología Made in Chile."
      />
    </>
  )
}
