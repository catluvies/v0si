import Navbar from '@/components/landing/navbar'
import Footer from '@/components/landing/footer'
import DemoFloat from '@/components/landing/demo-float'

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <DemoFloat />
    </>
  )
}
