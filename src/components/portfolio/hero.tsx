'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Award, Leaf, MapPin, ScrollText } from 'lucide-react'
import { Button } from '@/components/ui/button'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.21, 0.47, 0.32, 0.98] as const },
  }),
}

const STATS = [
  { value: '3', label: 'Internships across government, research & regulatory bodies' },
  { value: '6+', label: 'Leadership & service roles on campus and beyond' },
  { value: '2025', label: 'Peer Mentor of the Year, Environmental Science' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="absolute -top-32 right-[-10%] size-[480px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-8%] size-[420px] rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 pb-16 pt-14 sm:px-6 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-24 xl:px-8">
        {/* Left, intro */}
        <div className="flex flex-col items-start gap-6">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1.5 text-sm font-medium text-primary">
              <Leaf className="size-4" aria-hidden />
              Environmental Scientist · Climate Advocate
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-[4.25rem]"
          >
            Kevin <span className="text-primary">Afriyie</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="max-w-xl font-serif text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            General Secretary of Environmental Science at KNUST, organizing youth
            voices for natural resources, climate action, and sustainable
            development, one initiative at a time.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/contact">Get in touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-6"
            >
              <Link href="/experience">Explore my journey</Link>
            </Button>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="size-4 text-primary" aria-hidden />
            Kumasi, Ashanti Region, Ghana
          </motion.p>

          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-2 grid w-full grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-card/60 py-5 backdrop-blur"
          >
            {STATS.map((stat) => (
              <div key={stat.value} className="px-4 first:pl-5 last:pr-5 sm:px-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold text-primary sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right, portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div
            aria-hidden
            className="absolute -top-8 -right-4 size-44 rounded-full bg-primary/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-10 -left-6 size-52 rounded-full bg-amber-300/25 blur-3xl"
          />

          <div className="relative rotate-2 rounded-[2.25rem] border border-border bg-card p-3 shadow-2xl shadow-primary/10 transition-transform duration-500 hover:rotate-0">
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <Image
                src="/kevin-portrait.jpg"
                alt="Kevin Afriyie, Environmental Scientist and Climate Advocate"
                width={420}
                height={810}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Floating badge, award */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-3 top-8 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur sm:-right-8"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-amber-400/15 text-amber-500">
              <Award className="size-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold">Peer Mentor of the Year</span>
              <span className="block text-xs text-muted-foreground">
                2025 · Environmental Science
              </span>
            </span>
          </motion.div>

          {/* Floating badge, leadership */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -left-3 bottom-14 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur sm:-left-10"
          >
            <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ScrollText className="size-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold">7th General Secretary</span>
              <span className="block text-xs text-muted-foreground">
                ENSSA · KNUST
              </span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
