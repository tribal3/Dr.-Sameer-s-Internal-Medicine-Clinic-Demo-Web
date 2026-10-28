import { Star } from 'lucide-react'
import { cx } from '../../lib/cx'

interface StarsProps {
  /** Rating to render, e.g. 4.5. */
  value?: number
  /** Total number of stars shown. */
  count?: number
  className?: string
}

/** Star row that supports a half-filled final star. */
export function Stars({ value = 5, count = 5, className }: StarsProps) {
  return (
    <span
      aria-hidden="true"
      className={cx('inline-flex items-center gap-0.5', className)}
    >
      {Array.from({ length: count }).map((_, index) => {
        const fill = Math.min(Math.max(value - index, 0), 1)
        return (
          <span
            key={index}
            className="relative inline-block h-3.5 w-3.5 align-middle"
          >
            <Star
              className="absolute inset-0 h-3.5 w-3.5 text-sand/40"
              strokeWidth={1}
            />
            <span
              className="absolute inset-y-0 start-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                className="h-3.5 w-3.5 shrink-0 fill-sand text-sand"
                strokeWidth={1}
              />
            </span>
          </span>
        )
      })}
    </span>
  )
}
