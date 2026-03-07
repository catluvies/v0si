import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

const footerLinks = {
  Producto: [
    { label: 'Funcionalidades', href: '#features' },
    { label: 'Dashboard', href: '#data' },
    { label: 'Integraciones', href: '#solution' },
    { label: 'Precios', href: '#contact' },
  ],
  Empresa: [
    { label: 'Equipo', href: '#team' },
    { label: 'Blog', href: '#' },
    { label: 'Carreras', href: '#' },
    { label: 'FAQ', href: '#faq' },
  ],
  Legal: [
    { label: 'Politica de privacidad', href: '#' },
    { label: 'Terminos de servicio', href: '#' },
    { label: 'Politica de cookies', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-base-content/10 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand + contact */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center">
              <Image
                src="/images/lambda-logo.png"
                alt="Lambda Ingenieros"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </a>
            {/* TODO: agregar frase descriptiva de Lambda o quitar este párrafo */}
            <div className="mt-6 flex flex-col gap-3">
              <span className="flex items-start gap-2 text-sm text-base-content/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Villanelo Alto 180, Of. 606, Viña del Mar. Chile
              </span>
              <a
                href="tel:+56931014289"
                className="flex items-center gap-2 text-sm text-base-content/60 hover:text-base-content transition-colors"
              >
                <Phone className="w-4 h-4" />
                +56 9 3101 4289
              </a>
              <a
                href="mailto:contacto@lambdaingenieros.cl"
                className="flex items-center gap-2 text-sm text-base-content/60 hover:text-base-content transition-colors"
              >
                <Mail className="w-4 h-4" />
                contacto@lambdaingenieros.cl
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-base-content mb-4">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-base-content/60 hover:text-base-content transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-base-content/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col items-center gap-1 text-center">
          <p className="text-xs text-base-content/60">
            © 2026 Sistema Fotovoltaico RadioTumbes. Todos los derechos reservados.
          </p>
          <p className="text-xs text-base-content/60">
            © 2026 Lambda Ingenieros · Tecnología Made in Chile
          </p>
        </div>
      </div>
    </footer>
  )
}
