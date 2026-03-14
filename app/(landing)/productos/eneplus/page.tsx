import type { Metadata } from 'next'
import EneplusSection from '@/components/landing/eneplus-section'

export const metadata: Metadata = {
  title: 'ENEPLUS | Lambda Ingenieros',
  description: 'Auditoría, análisis y recomendaciones sobre el uso y la eficiencia energética. Tecnología Made in Chile.',
}

export default function EneplusPage() {
  return (
    <div>
      <EneplusSection />
    </div>
  )
}
