import Image from 'next/image'
import { Leaf, Linkedin, Mail, MapPin } from 'lucide-react'

const FOOTER_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border bg-card/60 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 xl:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="relative size-11 overflow-hidden rounded-full ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
                <Image
                  src="/kevin-avatar.jpg"
                  alt="Portrait of Kevin Afriyie"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <span>
                <span className="block font-display text-lg font-semibold">
                  Kevin Afriyie
                </span>
                <span className="block text-xs text-muted-foreground">
                  Environmental Scientist · Climate Advocate
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Empowering young people to participate in decisions around natural
              resources, climate action, and sustainable development.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground/80">
              Explore
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground/80">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:nanakofia15@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="size-4 text-primary" aria-hidden />
                  nanakofia15@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kevin-afriyie-18738431b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="size-4 text-primary" aria-hidden />
                  LinkedIn Profile
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary" aria-hidden />
                Kumasi, Ashanti Region — Ghana
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} Kevin Afriyie. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Leaf className="size-3.5 text-primary" aria-hidden />
            Built with purpose in Kumasi, Ghana
          </p>
        </div>
      </div>
    </footer>
  )
}
