import { cn } from '@/lib/utils'

export function SectionLabel({
  index,
  children,
  className,
}: {
  index?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground',
        className,
      )}
    >
      {index && <span className="text-primary">{index}</span>}
      <span className="h-px w-8 bg-primary" aria-hidden="true" />
      {children}
    </p>
  )
}
