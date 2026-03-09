import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Solución: [
    { label: 'Monitoreo Solar', href: '/solucion' },
    { label: 'Control BESS', href: '/solucion#bess' },
    { label: 'Capacidades', href: '/solucion#capabilities' },
    { label: 'Preguntas Frecuentes', href: '/#faq' },
  ],
  Empresa: [
    { label: 'Quiénes Somos', href: '/nosotros' },
    { label: 'Nuestro Equipo', href: '/nosotros#team' },
    { label: 'Contacto', href: '/contacto' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 items-start">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 flex items-start">
            <Link href="/" className="block">
              <Image
                src="/images/lambda-logoletra.svg"
                alt="Lambda Ingenieros"
                width={240}
                height={120}
                className="w-full max-w-[180px] h-auto object-contain"
              />
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-text-heading mb-4">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-body hover:text-text-heading transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="text-sm font-semibold text-text-heading mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <span className="flex items-start gap-2 text-sm text-text-body">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Villanelo Alto 180, Of. 606, Viña del Mar. Chile
              </span>
              <a
                href="tel:+56931014289"
                className="flex items-center gap-2 text-sm text-text-body hover:text-text-heading transition-colors"
              >
                <Phone className="w-4 h-4" />
                +56 9 3101 4289
              </a>
              <a
                href="mailto:contacto@lambdaingenieros.cl"
                className="flex items-center gap-2 text-sm text-text-body hover:text-text-heading transition-colors"
              >
                <Mail className="w-4 h-4" />
                contacto@lambdaingenieros.cl
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-base-300">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-6 flex flex-col items-center gap-1 text-center">
          <p className="text-xs text-text-body">
            © 2026 Sistema Fotovoltaico RadioTumbes. Todos los derechos reservados.
          </p>
          <p className="text-xs text-text-body">
            © 2026 Lambda Ingenieros · Tecnología Made in Chile.
          </p>
        </div>
      </div>
    </footer>
  )
}
