import Image from 'next/image'
import {
  GraduationCap,
  Globe2,
  Mail,
  MapPin,
  MessagesSquare,
  Sprout,
  Target,
  Users,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Reveal } from '@/components/portfolio/reveal'

const FOCUS_AREAS = [
  {
    icon: Users,
    title: 'Youth Advocacy',
    description:
      'Empowering young people to take part in decisions about natural resources, climate policy, and their own future.',
  },
  {
    icon: Globe2,
    title: 'Environmental Governance',
    description:
      'Working with Youth-NREG on policy engagement and stakeholder coordination for sustainable resource management.',
  },
  {
    icon: MessagesSquare,
    title: 'Strategic Communication',
    description:
      'Turning science and policy into clear, compelling messages that move communities and institutions to act.',
  },
]

const QUICK_FACTS = [
  { icon: MapPin, label: 'Based in', value: 'Kumasi, Ashanti Region, Ghana' },
  {
    icon: GraduationCap,
    label: 'Studying',
    value: 'BSc. Environmental Science, KNUST (2024 to 2027)',
  },
  {
    icon: Target,
    label: 'Focus',
    value: 'Youth advocacy, climate action & governance',
  },
  { icon: Sprout, label: 'Also', value: 'Peer mentor, organizer & Enactus Fellow' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About Me"
            title="Purpose-driven, for people and the planet"
          />
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <Reveal delay={0.05}>
            <div className="space-y-5 font-serif text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I am an organized and purpose-driven environmental science
                professional with strong interests in youth advocacy,
                environmental governance, and strategic communication. I am
                passionate about empowering young people to actively participate
                in decision-making processes around natural resources, climate
                action, and sustainable development.
              </p>
              <p>
                I currently serve as a member of Youth in Natural Resources and
                Environmental Governance (Youth-NREG), where I have gained
                hands-on experience in advocacy, youth programming, policy
                engagement, and stakeholder coordination. In recognition of my
                commitment to mentorship and leadership, I was awarded{' '}
                <span className="font-semibold text-foreground">
                  Peer Mentor of the Year (2025)
                </span>{' '}
                for Environmental Science.
              </p>
              <p>
                My professional experience also spans administrative support,
                compliance-related tasks, media engagement, and laboratory work,
                including DNA extraction. These diverse experiences have
                strengthened my organizational abilities, attention to detail,
                communication skills, and my capacity to work effectively across
                multidisciplinary environments.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card to-secondary/60">
              <CardContent className="p-6">
                <h3 className="font-display text-lg font-semibold">Quick facts</h3>
                <ul className="mt-5 space-y-5">
                  {QUICK_FACTS.map((fact) => (
                    <li key={fact.label} className="flex items-start gap-3.5">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <fact.icon className="size-4.5" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {fact.label}
                        </span>
                        <span className="block text-sm font-medium text-foreground">
                          {fact.value}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-border pt-5">
                  <a
                    href="mailto:nanakofia15@gmail.com"
                    className="group flex items-center justify-between gap-3 rounded-xl border border-primary/25 bg-primary/5 px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                  >
                    <span className="flex min-w-0 items-center gap-2.5">
                      <Mail className="size-4 shrink-0" aria-hidden />
                      <span className="truncate">nanakofia15@gmail.com</span>
                    </span>
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
          {FOCUS_AREAS.map((area, i) => (
            <Reveal key={area.title} delay={0.08 * i}>
              <Card className="group h-full border-border/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <area.icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="font-display text-xl font-semibold">
                    {area.title}
                  </h3>
                  <p className="font-serif text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
