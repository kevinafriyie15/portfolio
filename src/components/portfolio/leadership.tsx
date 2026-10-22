import {
  Award,
  CalendarCheck,
  GraduationCap,
  Handshake,
  Leaf,
  Lightbulb,
  ScrollText,
  Sprout,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Reveal } from '@/components/portfolio/reveal'

const ROLES = [
  {
    icon: ScrollText,
    role: 'General Secretary (7th)',
    org: 'ENSSA, KNUST',
    description:
      'Leading the Environmental Science Students’ Association as its 7th General Secretary, coordinating communication and student affairs.',
    badge: '2025/26',
  },
  {
    icon: CalendarCheck,
    role: 'Organizing Secretary',
    org: 'Youth-NREG, KNUST',
    description:
      'Planning and coordinating youth programmes, events, and stakeholder engagement on natural resources and environmental governance.',
    badge: 'Current',
  },
  {
    icon: Handshake,
    role: 'Head, Mentorship Committee',
    org: 'Environmental Science Association',
    description:
      'Heading the committee that pairs and supports students through structured peer mentorship.',
    badge: '2025/26',
  },
  {
    icon: Sprout,
    role: 'Member, Petal',
    org: 'Youth-NREG Climate Change Adaptation & Financing',
    description:
      'Contributing to a dedicated group focused on climate change adaptation and climate financing solutions.',
    badge: 'Current',
  },
  {
    icon: GraduationCap,
    role: 'Member, IAESTE HelpDesk',
    org: 'IAESTE, KNUST',
    description:
      'Supporting fellow students in accessing international internships and exchange opportunities.',
    badge: '2025/26',
  },
  {
    icon: Lightbulb,
    role: 'Enactus Fellow',
    org: 'Enactus',
    description:
      'Applying entrepreneurial action and innovation to create positive, sustainable community impact.',
    badge: 'Fellow',
  },
]

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Leadership & Achievements"
            title="Leading with purpose, serving with heart"
            description="Roles and recognition across student governance, mentorship, and environmental advocacy."
          />
        </Reveal>

        {/* Featured award */}
        <Reveal>
          <Card className="relative mb-8 overflow-hidden border-amber-400/40 bg-gradient-to-br from-amber-400/15 via-card to-card md:mb-10">
            <div
              aria-hidden
              className="absolute -right-10 -top-10 size-48 rounded-full bg-amber-400/20 blur-3xl"
            />
            <CardContent className="relative flex flex-col items-start gap-5 p-6 sm:flex-row sm:items-center sm:gap-7 md:p-8">
              <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-amber-400/20 text-amber-500 shadow-inner md:size-20">
                <Award className="size-8 md:size-10" aria-hidden />
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  Featured Recognition
                </span>
                <h3 className="mt-1.5 font-display text-2xl font-semibold md:text-3xl">
                  Peer Mentor of the Year 2025
                </h3>
                <p className="mt-2 max-w-2xl font-serif text-sm leading-relaxed text-muted-foreground md:text-base">
                  Awarded in recognition of outstanding commitment to mentorship
                  and leadership in Environmental Science at KNUST, a reflection
                  of a genuine belief in lifting others while climbing.
                </p>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map((item, i) => (
            <Reveal key={item.role} delay={0.06 * i}>
              <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon className="size-5" aria-hidden />
                    </span>
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
                      {item.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-snug">
                      {item.role}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-primary">
                      {item.org}
                    </p>
                  </div>
                  <p className="font-serif text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto flex max-w-2xl items-center justify-center gap-2.5 text-center font-serif text-sm text-muted-foreground">
            <Leaf className="size-4 shrink-0 text-primary" aria-hidden />
            Every role, one thread: creating room for young people to lead on
            climate and environment.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
