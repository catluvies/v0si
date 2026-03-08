import HeroSection from '@/components/landing/hero-section'
import LogoCloud from '@/components/landing/logo-cloud'
import ProblemSection from '@/components/landing/problem-section'
import SolutionSection from '@/components/landing/solution-section'
import CTABannerSection from '@/components/landing/cta-banner-section'
import FAQSection from '@/components/landing/faq-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoCloud />
      <ProblemSection />
      <SolutionSection />
      <CTABannerSection
        title="¿Buscas Optimizar tu Consumo Energético?"
        description="Con más de 20 años de experiencia, estamos listos para ayudarte a alcanzar la eficiencia energética con tecnología Made in Chile."
      />
      <FAQSection />
    </>
  )
}
