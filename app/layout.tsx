import type { Metadata, Viewport } from 'next'
import { DM_Sans, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lambda Ingenieros | Monitoreo Fotovoltaico Inteligente',
  description:
    'Plataforma de monitoreo en tiempo real para sistemas solares fotovoltaicos. Visualiza, analiza y optimiza tu generacion de energia con Lambda Ingenieros.',
  generator: 'v0.app',
  keywords: ['solar', 'fotovoltaico', 'monitoreo', 'dashboard', 'energia', 'Chile', 'Lambda Ingenieros'],
  icons: {
    icon: [
      { url: '/icon-dark-32x32.png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" data-theme="dark" className={`${dmSans.variable} ${montserrat.variable} motion-safe:scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
