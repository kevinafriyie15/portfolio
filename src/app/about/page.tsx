import type { Metadata } from 'next'
import { About } from '@/components/portfolio/about'
import { PagePager } from '@/components/portfolio/page-pager'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Kevin Afriyie is a purpose-driven environmental science professional focused on youth advocacy, environmental governance, and strategic communication.',
}

export default function AboutPage() {
  return (
    <>
      <About />
      <PagePager next={{ href: '/experience', label: 'Experience' }} />
    </>
  )
}
