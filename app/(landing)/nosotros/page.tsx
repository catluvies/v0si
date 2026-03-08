import type { Metadata } from 'next'
import AboutSection from '@/components/landing/about-section'

export const metadata: Metadata = {
  title: 'Quiénes Somos | Lambda Solar',
  description: 'Conoce a Lambda Ingenieros: más de 20 años de experiencia en soluciones de eficiencia energética y monitoreo fotovoltaico en Chile.',
}

export default function NosotrosPage() {
  return <AboutSection />
}
