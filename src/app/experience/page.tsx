import type { Metadata } from 'next'
import { Experience } from '@/components/portfolio/experience'
import { PagePager } from '@/components/portfolio/page-pager'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Internships at Kumasi Metropolitan Assembly, KCCR, and the Environmental Protection Authority, spanning administration, laboratory research, and compliance.',
}

export default function ExperiencePage() {
  return (
    <>
      <Experience />
      <PagePager
        prev={{ href: '/about', label: 'About' }}
        next={{ href: '/leadership', label: 'Leadership' }}
      />
    </>
  )
}
