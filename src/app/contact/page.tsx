import type { Metadata } from 'next'
import { Contact } from '@/components/portfolio/contact'
import { PagePager } from '@/components/portfolio/page-pager'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Kevin Afriyie for collaborations on climate advocacy, youth programs, research support, and event organization.',
}

export default function ContactPage() {
  return (
    <>
      <Contact />
      <PagePager prev={{ href: '/education', label: 'Education' }} />
    </>
  )
}
