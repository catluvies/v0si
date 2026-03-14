import HeroSection from '@/components/landing/hero-section'
import CTABannerSection from '@/components/landing/cta-banner-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CTABannerSection
        title="¿Buscas optimizar tu consumo energético?"
        description="Con más de 20 años de experiencia, estamos listos para ayudarte a alcanzar la eficiencia energética con tecnología Made in Chile."
      />
    </>
  )
}
