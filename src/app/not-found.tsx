import Link from 'next/link'
import { Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-4 py-24 text-center md:py-32">
      <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Leaf className="size-7" aria-hidden />
      </span>
      <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="max-w-md font-serif text-base leading-relaxed text-muted-foreground">
        The page you are looking for does not exist or may have been moved.
        Let us get you back on track.
      </p>
      <Button asChild size="lg" className="rounded-full px-6">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  )
}
