import type { Metadata } from 'next'
import EnebombSection from '@/components/landing/enebomb-section'

export const metadata: Metadata = {
  title: 'ENEBOMB® | Lambda Ingenieros',
  description: 'Sistema de alta eficiencia de bombeo de agua. Reduce el consumo energético desde un 30%. Tecnología Made in Chile.',
}

export default function EnebombPage() {
  return (
    <div>
      <EnebombSection />
    </div>
  )
}
