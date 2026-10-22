import { ArrowUpRight, Linkedin, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/portfolio/reveal'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pb-20 pt-4 md:pb-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-emerald-800 px-6 py-14 text-primary-foreground shadow-2xl shadow-primary/25 sm:px-10 md:px-14 md:py-20">
            {/* Decorative circles */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border-[26px] border-white/10"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-28 -left-20 size-80 rounded-full border-[30px] border-white/10"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm font-medium">
                  <MapPin className="size-4" aria-hidden />
                  Kumasi, Ghana · Open to opportunities
                </span>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.15]">
                  Let’s build a sustainable future together.
                </h2>
                <p className="mt-4 max-w-xl font-serif text-base leading-relaxed text-primary-foreground/85 md:text-lg">
                  Whether it is climate advocacy, youth programs, research
                  support, or event organization, I would love to hear how we
                  can collaborate.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-white px-6 text-emerald-900 hover:bg-emerald-50"
                  >
                    <a href="mailto:nanakofia15@gmail.com">
                      <Mail className="size-4.5" aria-hidden />
                      Email me
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/40 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
                  >
                    <a
                      href="https://www.linkedin.com/in/kevin-afriyie-18738431b"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="size-4.5" aria-hidden />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>

              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:nanakofia15@gmail.com"
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur transition-colors hover:bg-white/15"
                  >
                    <span className="flex items-center gap-3.5">
                      <Mail className="size-5 shrink-0" aria-hidden />
                      <span>
                        <span className="block text-xs uppercase tracking-wide text-primary-foreground/70">
                          Email
                        </span>
                        <span className="block text-sm font-medium">
                          nanakofia15@gmail.com
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kevin-afriyie-18738431b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur transition-colors hover:bg-white/15"
                  >
                    <span className="flex items-center gap-3.5">
                      <Linkedin className="size-5 shrink-0" aria-hidden />
                      <span>
                        <span className="block text-xs uppercase tracking-wide text-primary-foreground/70">
                          LinkedIn
                        </span>
                        <span className="block text-sm font-medium">
                          kevin-afriyie-18738431b
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </a>
                </li>
                <li className="flex items-center gap-3.5 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">
                  <MapPin className="size-5 shrink-0" aria-hidden />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-primary-foreground/70">
                      Location
                    </span>
                    <span className="block text-sm font-medium">
                      Kumasi, Ashanti Region, Ghana
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
