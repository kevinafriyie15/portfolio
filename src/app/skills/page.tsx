import type { Metadata } from 'next'
import { Skills } from '@/components/portfolio/skills'
import { PagePager } from '@/components/portfolio/page-pager'

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Core strengths in communication, data entry, and event management, plus environmental governance, laboratory work, and stakeholder coordination.',
}

export default function SkillsPage() {
  return (
    <>
      <Skills />
      <PagePager
        prev={{ href: '/leadership', label: 'Leadership' }}
        next={{ href: '/education', label: 'Education' }}
      />
    </>
  )
}
