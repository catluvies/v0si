'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/solucion', label: 'Nuestra Solución' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/#faq', label: 'FAQ' },
]

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 bg-base-100/95 backdrop-blur-xl border-b border-base-300 p-4 lg:hidden"
        >
          <ul className="menu gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg text-text-body hover:text-text-heading"
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contacto"
                className="btn btn-ghost border border-base-300 btn-sm mt-2"
                onClick={onClose}
              >
                Iniciar sesión
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`navbar fixed top-0 z-50 transition-all duration-300 px-6 lg:px-12 min-h-24 ${
        scrolled
          ? 'bg-base-100/80 backdrop-blur-xl shadow-sm border-b border-base-300'
          : 'bg-transparent'
      }`}
    >
      <div className="navbar-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/lambdalogo-solo.svg"
            alt="Lambda Ingenieros"
            width={38}
            height={44}
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
            priority
          />
        </Link>
      </div>

      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1 text-base">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg text-text-body hover:text-text-heading hover:bg-surface-hover transition-colors font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="navbar-end gap-2">
        <Link href="/contacto" className="btn btn-primary hidden lg:inline-flex">
          Iniciar sesión
        </Link>

        <button
          className="btn btn-ghost btn-circle lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
