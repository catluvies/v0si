import type { Metadata } from 'next'
import ContactSection from '@/components/landing/contact-section'

export const metadata: Metadata = {
  title: 'Contacto | Lambda Ingenieros',
  description: 'Contáctanos para optimizar tu consumo energético. Soluciones de monitoreo fotovoltaico con tecnología Made in Chile.',
}

export default function ContactoPage() {
  return (
    <div className="pt-24">
      <ContactSection />
    </div>
  )
}
