import Link from 'next/link'
import {
  ArrowUpRight,
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  Sparkles,
  Users,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Reveal } from '@/components/portfolio/reveal'

const PAGES = [
  {
    href: '/about',
    icon: Users,
    title: 'About',
    description:
      'Who I am, what drives me, and the values behind my work for people and the planet.',
  },
  {
    href: '/experience',
    icon: Briefcase,
    title: 'Experience',
    description:
      'Hands-on internships across local government, tropical medicine research, and regulation.',
  },
  {
    href: '/leadership',
    icon: Award,
    title: 'Leadership',
    description:
      'Roles and recognition across student governance, mentorship, and climate advocacy.',
  },
  {
    href: '/skills',
    icon: Sparkles,
    title: 'Skills',
    description:
      'Communication strengths, environmental know-how, and organizational discipline.',
  },
  {
    href: '/education',
    icon: GraduationCap,
    title: 'Education',
    description:
      'My academic journey, from Prempeh College to Environmental Science at KNUST.',
  },
  {
    href: '/contact',
    icon: Mail,
    title: 'Contact',
    description:
      'Let us collaborate on climate advocacy, youth programs, research, or events.',
  },
]

export function ExploreCards() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Explore"
            title="Take a closer look"
            description="Every part of my journey has its own page. Pick one and dive in."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PAGES.map((page, i) => (
            <Reveal key={page.href} delay={0.06 * i}>
              <Link href={page.href} className="group block h-full">
                <Card className="h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <page.icon className="size-6" aria-hidden />
                    </span>
                    <h3 className="font-display text-xl font-semibold">
                      {page.title}
                    </h3>
                    <p className="font-serif text-sm leading-relaxed text-muted-foreground">
                      {page.description}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-primary">
                      Visit page
                      <ArrowUpRight
                        className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
