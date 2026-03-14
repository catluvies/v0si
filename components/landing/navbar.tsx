'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

const productLinks = [
  { href: '/productos/enefisys', label: 'ENEFISYS®' },
  { href: '/productos/enebomb', label: 'ENEBOMB®' },
  { href: '/productos/eneplus', label: 'ENEPLUS' },
]

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [productsOpen, setProductsOpen] = useState(false)

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
            {navLinks.slice(0, 2).map((link) => (
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
              <button
                className="rounded-lg text-text-body hover:text-text-heading flex items-center justify-between w-full"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                Productos y Servicios
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {productsOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="menu gap-1 pl-4"
                  >
                    {productLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="rounded-lg text-text-body hover:text-text-heading" onClick={onClose}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
            <li>
              <Link
                href="/contacto"
                className="rounded-lg text-text-body hover:text-text-heading"
                onClick={onClose}
              >
                Contacto
              </Link>
            </li>
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

function ProductsDropdown() {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  function handleEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpen(true)
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150)
  }

  return (
    <li
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="rounded-lg text-text-body hover:text-text-heading hover:bg-surface-hover transition-colors font-medium flex items-center gap-1"
        onClick={() => setOpen(!open)}
      >
        Productos y Servicios
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-base-100/95 backdrop-blur-xl shadow-lg overflow-hidden"
          >
            <ul className="menu gap-0.5 p-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-lg text-text-body hover:text-text-heading hover:bg-surface-hover text-sm"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
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
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg text-text-body hover:text-text-heading hover:bg-surface-hover transition-colors font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <ProductsDropdown />
          <li>
            <Link
              href="/contacto"
              className="rounded-lg text-text-body hover:text-text-heading hover:bg-surface-hover transition-colors font-medium"
            >
              Contacto
            </Link>
          </li>
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
