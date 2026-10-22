import {
  CalendarDays,
  ChevronRight,
  FlaskConical,
  Landmark,
  MapPin,
  ShieldCheck,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Reveal } from '@/components/portfolio/reveal'

const EXPERIENCE = [
  {
    icon: Landmark,
    organization: 'Kumasi Metropolitan Assembly',
    role: 'Environmental Health Intern (Administrative)',
    period: 'Nov 2025 to Dec 2025',
    location: 'Adum, Kumasi, Ghana',
    highlights: [
      'Performed administrative tasks, including data entry and records management supporting environmental health services.',
      'Engaged directly with community members during health campaigns such as “Low Salt, Low Risk of Hypertension” across Kumasi communities.',
      'Assisted in issuing certificates to food vendors as part of public health compliance efforts.',
    ],
    tags: ['Data Entry', 'Community Outreach', 'Public Health'],
  },
  {
    icon: FlaskConical,
    organization:
      'Kumasi Centre for Collaborative Research in Tropical Medicine (KCCR)',
    role: 'Research Assistant Intern',
    period: 'Sep 2025 to Oct 2025',
    location: 'Kumasi, Ashanti Region, Ghana',
    highlights: [
      'Gained hands-on laboratory experience at a leading tropical medicine research centre, including DNA extraction.',
      'Strengthened precision, documentation, and attention to detail in a rigorous research environment.',
    ],
    tags: ['Laboratory Work', 'DNA Extraction', 'Research'],
  },
  {
    icon: ShieldCheck,
    organization: 'Environmental Protection Authority',
    role: 'Health Intern (Administrative & Compliance)',
    period: 'Oct 2024 to Dec 2024',
    location: 'Ahodwo, Ghana',
    highlights: [
      'Supported administrative and compliance-related tasks in a national environmental regulatory institution.',
      'Built a solid grounding in how environmental policy is implemented and enforced on the ground.',
    ],
    tags: ['Compliance', 'Administration', 'Policy'],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-border bg-muted/40 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I have worked and learned"
            description="Hands-on roles across local government, tropical medicine research, and environmental regulation."
          />
        </Reveal>

        <ol className="relative mx-auto max-w-3xl space-y-8 border-s border-primary/25 ps-6 sm:ps-10">
          {EXPERIENCE.map((job, i) => (
            <li key={job.organization} className="relative">
              <span
                aria-hidden
                className="absolute -start-[31px] top-6 flex size-[22px] items-center justify-center rounded-full border-[3px] border-background bg-primary sm:-start-[43px]"
              >
                <job.icon className="size-3 text-primary-foreground" />
              </span>
              <Reveal delay={0.08 * i}>
                <Card className="group transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                      <div>
                        <p className="text-sm font-medium text-primary">
                          {job.organization}
                        </p>
                        <h3 className="mt-1 font-display text-xl font-semibold leading-snug">
                          {job.role}
                        </h3>
                      </div>
                      <div className="flex flex-col items-start gap-1.5 sm:items-end">
                        <Badge
                          variant="secondary"
                          className="gap-1.5 rounded-full font-medium"
                        >
                          <CalendarDays className="size-3.5" aria-hidden />
                          {job.period}
                        </Badge>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="size-3.5" aria-hidden />
                          {job.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {job.highlights.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 font-serif text-sm leading-relaxed text-muted-foreground"
                        >
                          <ChevronRight
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden
                          />
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-primary/25 bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
