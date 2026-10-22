import type { Metadata } from 'next'
import { Leadership } from '@/components/portfolio/leadership'
import { PagePager } from '@/components/portfolio/page-pager'

export const metadata: Metadata = {
  title: 'Leadership & Achievements',
  description:
    'Peer Mentor of the Year 2025, General Secretary of ENSSA-KNUST, Organizing Secretary of Youth-NREG, and more leadership roles.',
}

export default function LeadershipPage() {
  return (
    <>
      <Leadership />
      <PagePager
        prev={{ href: '/experience', label: 'Experience' }}
        next={{ href: '/skills', label: 'Skills' }}
      />
    </>
  )
}
