import { cn } from '@/lib/utils'

const PATTERN = [1, 3, 2, 1, 4, 1, 1, 2, 3, 1, 2, 1, 4, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1]

export function Barcode({
  className,
  scanning = false,
}: {
  className?: string
  scanning?: boolean
}) {
  return (
    <div
      aria-hidden="true"
      className={cn('relative flex h-10 items-stretch gap-[3px] overflow-hidden', className)}
    >
      {PATTERN.map((width, index) => (
        <span
          key={index}
          className="bg-primary"
          style={{ width: `${width * 2}px`, opacity: index % 5 === 4 ? 0 : 1 }}
        />
      ))}
      {scanning && (
        <span className="animate-scan absolute inset-y-0 left-0 w-[10%] bg-foreground/70 mix-blend-difference" />
      )}
    </div>
  )
}
