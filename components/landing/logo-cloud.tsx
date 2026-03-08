import Image from 'next/image'

const clients = [
  { name: 'ASMAR', src: '/images/clients/asmar.png' },
  { name: 'Armada de Chile', src: '/images/clients/armada.avif' },
  { name: 'Enel Green Power', src: '/images/clients/enel.png' },
  { name: 'Ministerio de Obras Públicas', src: '/images/clients/ministerio_obras_publicas.png' },
]

export default function LogoCloud() {
  return (
    <section className="relative py-14 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Marquee */}
        <div className="relative">
          {/* Fade left */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-32 z-10 bg-linear-to-r from-base-100 to-transparent" />
          {/* Fade right */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-32 z-10 bg-linear-to-l from-base-100 to-transparent" />

          <div className="overflow-hidden">
            <div className="animate-marquee">
              {/* 4 copies for seamless loop */}
              {[0, 1, 2].map((copy) =>
                clients.map((client, i) => (
                  <div
                    key={`${copy}-${i}`}
                    aria-hidden={copy > 0}
                    className="inline-flex flex-col items-center justify-center mx-10 sm:mx-14 lg:mx-16 w-44 sm:w-48 lg:w-56 shrink-0"
                  >
                    <div className="h-16 sm:h-20 lg:h-24 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                      <Image
                        src={client.src}
                        alt={copy === 0 ? client.name : ''}
                        width={240}
                        height={96}
                        className="object-contain max-h-full w-auto"
                      />
                    </div>
                    <span className="text-xs text-base-content/35 mt-3 font-medium">
                      {client.name}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
