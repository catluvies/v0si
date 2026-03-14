import type { Metadata } from 'next'
import EnefisysSection from '@/components/landing/enefisys-section'
import FAQSection from '@/components/landing/faq-section'
import CTABannerSection from '@/components/landing/cta-banner-section'

export const metadata: Metadata = {
  title: 'ENEFISYS® | Lambda Ingenieros',
  description: 'Sistema de alta eficiencia y ahorro de energía eléctrica. Monitoreo en tiempo real, control energético y análisis avanzado. Tecnología Made in Chile.',
}

export default function EnefisysPage() {
  return (
    <div>
      <EnefisysSection />
      <FAQSection />
      <CTABannerSection
        title="¿Quieres implementar ENEFISYS® en tu proyecto?"
        description="Nuestro equipo técnico puede asesorarte sobre la mejor configuración para tu instalación."
      />
    </div>
  )
}
