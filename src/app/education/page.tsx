import type { Metadata } from 'next'
import { Education } from '@/components/portfolio/education'
import { PagePager } from '@/components/portfolio/page-pager'

export const metadata: Metadata = {
  title: 'Education',
  description:
    'BSc. Environmental Science at KNUST (2024 to 2027) and General Science at Prempeh College (2021 to 2023).',
}

export default function EducationPage() {
  return (
    <>
      <Education />
      <PagePager
        prev={{ href: '/skills', label: 'Skills' }}
        next={{ href: '/contact', label: 'Contact' }}
      />
    </>
  )
}
