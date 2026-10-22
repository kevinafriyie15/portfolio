import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { Affiliations } from '@/components/portfolio/affiliations'
import { About } from '@/components/portfolio/about'
import { Experience } from '@/components/portfolio/experience'
import { Leadership } from '@/components/portfolio/leadership'
import { Skills } from '@/components/portfolio/skills'
import { Education } from '@/components/portfolio/education'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Affiliations />
        <About />
        <Experience />
        <Leadership />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
