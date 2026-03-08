import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-base-100 px-6">
      <div className="text-center max-w-md">
        <h1 className="font-display text-8xl font-black text-primary mb-4">404</h1>
        <h2 className="text-xl font-semibold text-text-heading mb-2">Página no encontrada</h2>
        <p className="text-sm text-text-body mb-8">
          La página que buscas no existe o fue movida.
        </p>
        <Link href="/" className="btn btn-primary">
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
