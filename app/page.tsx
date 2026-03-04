import Navbar from '@/components/landing/navbar'
import HeroSection from '@/components/landing/hero-section'
import LogoCloud from '@/components/landing/logo-cloud'
import AboutSection from '@/components/landing/about-section'
import ProblemSolutionSection from '@/components/landing/problem-solution-section'
import CTABannerSection from '@/components/landing/cta-banner-section'
import SolutionSection from '@/components/landing/solution-section'
import CTASection from '@/components/landing/cta-section'
import TeamSection from '@/components/landing/team-section'
import FAQSection from '@/components/landing/faq-section'
import Footer from '@/components/landing/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoCloud />
        <AboutSection />
        <ProblemSolutionSection />
        <CTABannerSection />
        <SolutionSection />
        <CTASection />
        <TeamSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
