import Navbar from '@/components/landing/navbar'
import HeroSection from '@/components/landing/hero-section'
import LogoCloud from '@/components/landing/logo-cloud'
import FeaturesSection from '@/components/landing/features-section'
import ProblemSolutionSection from '@/components/landing/problem-solution-section'
import DataVisualizationSection from '@/components/landing/data-visualization-section'
import TeamSection from '@/components/landing/team-section'
import FAQSection from '@/components/landing/faq-section'
import CTASection from '@/components/landing/cta-section'
import Footer from '@/components/landing/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoCloud />
        <FeaturesSection />
        <ProblemSolutionSection />
        <DataVisualizationSection />
        <TeamSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
