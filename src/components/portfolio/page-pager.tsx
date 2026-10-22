import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PageLink {
  href: string
  label: string
}

interface PagePagerProps {
  prev?: PageLink
  next?: PageLink
}

export function PagePager({ prev, next }: PagePagerProps) {
  if (!prev && !next) return null

  return (
    <nav
      aria-label="Page navigation"
      className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 pb-20 sm:px-6 md:pb-28 lg:px-8 xl:px-8"
    >
      {prev ? (
        <Button
          asChild
          variant="outline"
          className="rounded-full font-medium"
        >
          <Link href={prev.href}>
            <ArrowLeft className="size-4" aria-hidden />
            {prev.label}
          </Link>
        </Button>
      ) : (
        <span aria-hidden />
      )}
      {next ? (
        <Button asChild className="rounded-full font-medium">
          <Link href={next.href}>
            {next.label}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Button>
      ) : (
        <span aria-hidden />
      )}
    </nav>
  )
}
