'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navLinks = [
  { href: '#solution', label: 'Nuestra Solución' },
  { href: '#capabilities', label: 'Capacidades' },
  { href: '#team', label: 'Equipo' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme')
    setIsDark(theme === 'dark')
  }, [])

  function toggleTheme() {
    const next = isDark ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    setIsDark(!isDark)
  }

  return (
    <header
      className={`navbar fixed top-0 z-50 transition-all duration-300 px-6 lg:px-12 min-h-24 ${
        scrolled
          ? 'bg-base-100/80 backdrop-blur-xl shadow-sm border-b border-base-content/10'
          : 'bg-transparent'
      }`}
    >
      <div className="navbar-start">
        <a href="#" className="flex items-center">
          <Image
            src="/images/lambda-logo.png"
            alt="Lambda Ingenieros"
            width={220}
            height={73}
            className="h-16 w-auto object-contain"
            priority
          />
        </a>
      </div>

      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1 text-base">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg text-base-content/60 hover:text-base-content hover:bg-base-200 transition-colors font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="navbar-end gap-2">
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle btn-sm"
          aria-label="Cambiar tema"
        >
          {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        <a href="#contact" className="btn btn-ghost border border-base-content/10 hover:border-base-content/20 hidden lg:inline-flex rounded-xl text-base px-6">
          Iniciar sesión
        </a>

        <button
          className="btn btn-ghost btn-circle lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-base-100/95 backdrop-blur-xl border-b border-base-content/10 p-4 lg:hidden"
          >
            <ul className="menu gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-lg text-base-content/60 hover:text-base-content"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="btn btn-ghost border border-base-content/10 btn-sm mt-2 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  Iniciar sesión
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
