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
    <footer className="border-t border-border bg-card">
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
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Ingenieria solar fotovoltaica y monitoreo inteligente para hogares
              y empresas en Chile.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:contacto@lambdaingenieroschile.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                contacto@lambdaingenieroschile.com
              </a>
              <a
                href="tel:+56912345678"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +56 9 1234 5678
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Santiago, Chile
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {'2024 Lambda Ingenieros Chile. Todos los derechos reservados.'}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.lambdaingenieroschile.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              lambdaingenieroschile.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
