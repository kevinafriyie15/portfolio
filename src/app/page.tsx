import { Hero } from '@/components/portfolio/hero'
import { Affiliations } from '@/components/portfolio/affiliations'
import { ExploreCards } from '@/components/portfolio/explore-cards'
import { Contact } from '@/components/portfolio/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Affiliations />
      <ExploreCards />
      <Contact />
    </>
  )
}
