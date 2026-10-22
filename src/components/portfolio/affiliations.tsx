import { Sprout } from 'lucide-react'

const AFFILIATIONS = [
  'ENSSA, KNUST',
  'Youth-NREG',
  'Enactus Fellow',
  'IAESTE HelpDesk',
  'KCCR',
  'EPA Ghana',
  'Kumasi Metropolitan Assembly',
  'Petal · Climate Adaptation & Financing',
]

export function Affiliations() {
  return (
    <div className="border-y border-border bg-secondary/50 py-5">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-10 pr-10 hover:[animation-play-state:paused]">
          {[...AFFILIATIONS, ...AFFILIATIONS].map((item, i) => (
            <div key={`${item}-${i}`} className="flex items-center gap-10">
              <span className="whitespace-nowrap font-display text-lg font-medium text-foreground/70">
                {item}
              </span>
              <Sprout className="size-4 shrink-0 text-primary/50" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
