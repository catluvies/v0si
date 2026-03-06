import Navbar from '@/components/landing/navbar'
import HeroSection from '@/components/landing/hero-section'
import LogoCloud from '@/components/landing/logo-cloud'
import AboutSection from '@/components/landing/about-section'
import ProblemSolutionSection from '@/components/landing/problem-solution-section'
import CTABannerSection from '@/components/landing/cta-banner-section'
import SolutionSection from '@/components/landing/solution-section'
import SolarDemoSection from '@/components/landing/solar-demo-section'
import CapabilitiesSection from '@/components/landing/capabilities-section'
import TeamSection from '@/components/landing/team-section'
import FAQSection from '@/components/landing/faq-section'
import Footer from '@/components/landing/footer'
import DemoFloat from '@/components/landing/demo-float'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoCloud />
        <AboutSection />
        <CTABannerSection
          title="Es Momento de un Cambio"
          description="La tecnología para resolver estos problemas existe y está probada. Con más de 20 años de experiencia, sabemos cómo implementarla correctamente para maximizar la eficiencia energética."
        />
        <ProblemSolutionSection />
        <SolutionSection />
        <SolarDemoSection />
        <CapabilitiesSection />
        <CTABannerSection
          title="¿Buscas Optimizar tu Consumo Energético?"
          description="Con más de 20 años de experiencia, estamos listos para ayudarte a alcanzar la eficiencia energética con tecnología Made in Chile."
        />
        <TeamSection />
        <FAQSection />
      </main>
      <Footer />
      <DemoFloat />
    </>
  )
}
