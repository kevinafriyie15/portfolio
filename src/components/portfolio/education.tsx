import { Award, BookOpen, GraduationCap, MapPin, School } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Reveal } from '@/components/portfolio/reveal'

const EDUCATION = [
  {
    icon: GraduationCap,
    degree: 'BSc. Environmental Science',
    school: 'Kwame Nkrumah University of Science and Technology (KNUST)',
    period: '2024 to 2027',
    location: 'Kumasi, Ashanti Region, Ghana',
    badges: ['Peer Mentor of the Year 2025', 'General Secretary, ENSSA'],
    highlight: true,
  },
  {
    icon: School,
    degree: 'General Science',
    school: 'Prempeh College',
    period: '2021 to 2023',
    location: 'Kumasi, Ashanti Region, Ghana',
    badges: [],
    highlight: false,
  },
]

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Grounded in science, raised by Kumasi"
          />
        </Reveal>

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {EDUCATION.map((edu, i) => (
            <Reveal key={edu.degree} delay={0.08 * i}>
              <Card
                className={`h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${
                  edu.highlight
                    ? 'border-primary/35 bg-gradient-to-br from-primary/5 via-card to-card'
                    : 'border-border/80 hover:border-primary/40'
                }`}
              >
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <edu.icon className="size-6" aria-hidden />
                    </span>
                    <Badge
                      variant="secondary"
                      className="gap-1.5 rounded-full font-medium"
                    >
                      <BookOpen className="size-3.5" aria-hidden />
                      {edu.period}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium text-primary">
                      {edu.school}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="size-3.5" aria-hidden />
                      {edu.location}
                    </p>
                  </div>
                  {edu.badges.length > 0 && (
                    <ul className="mt-auto flex flex-wrap gap-2 pt-1">
                      {edu.badges.map((badge) => (
                        <li
                          key={badge}
                          className="flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-600 dark:text-amber-400"
                        >
                          <Award className="size-3.5" aria-hidden />
                          {badge}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
