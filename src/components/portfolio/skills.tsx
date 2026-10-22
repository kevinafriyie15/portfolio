import {
  Briefcase,
  CalendarDays,
  ClipboardList,
  Dna,
  Globe2,
  Handshake,
  Leaf,
  Megaphone,
  MessagesSquare,
  ScrollText,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Reveal } from '@/components/portfolio/reveal'

const SKILL_GROUPS = [
  {
    icon: Star,
    title: 'Core Strengths',
    description: 'Recognized top skills from my professional profile.',
    skills: [
      { label: 'Communication', icon: MessagesSquare },
      { label: 'Data Entry', icon: ClipboardList },
      { label: 'Event Management', icon: CalendarDays },
    ],
  },
  {
    icon: Leaf,
    title: 'Environmental & Technical',
    description: 'Science and advocacy capabilities built through study and fieldwork.',
    skills: [
      { label: 'Climate Action Advocacy', icon: Megaphone },
      { label: 'Environmental Governance', icon: Globe2 },
      { label: 'Policy Engagement', icon: ScrollText },
      { label: 'Laboratory Work · DNA Extraction', icon: Dna },
      { label: 'Youth Programming', icon: Users },
    ],
  },
  {
    icon: Briefcase,
    title: 'Professional Toolkit',
    description: 'The everyday skills that make teams and events work.',
    skills: [
      { label: 'Stakeholder Coordination', icon: Handshake },
      { label: 'Administrative Support', icon: ClipboardList },
      { label: 'Media Engagement', icon: Megaphone },
      { label: 'Compliance', icon: ShieldCheck },
      { label: 'Mentorship & Coaching', icon: Users },
    ],
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-border bg-muted/40 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="What I bring to the table"
            description="A blend of communication strengths, environmental know-how, and organizational discipline."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={0.08 * i}>
              <Card className="h-full transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="flex h-full flex-col gap-5 p-6">
                  <div>
                    <span className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <group.icon className="size-6" aria-hidden />
                    </span>
                    <h3 className="font-display text-xl font-semibold">
                      {group.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {group.description}
                    </p>
                  </div>
                  <ul className="mt-auto flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.label}
                        className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground/90 transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        <skill.icon className="size-3.5 text-primary" aria-hidden />
                        {skill.label}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
