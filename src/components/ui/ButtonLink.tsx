import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cx } from '../../lib/cx'

export type ButtonVariant =
  | 'primary'
  | 'outline'
  | 'soft'
  | 'onDark'
  | 'ghostOnDark'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: 'md' | 'lg'
  fullWidth?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-midnight text-ivory hover:bg-teal-dark shadow-[0_18px_36px_-24px_rgba(16,63,67,0.9)]',
  outline:
    'border border-midnight/20 text-midnight hover:border-midnight/40 hover:bg-white',
  soft: 'bg-mint text-midnight hover:bg-[#cfe9e1]',
  onDark: 'bg-ivory text-midnight hover:bg-white',
  ghostOnDark:
    'border border-white/25 text-ivory hover:border-white/45 hover:bg-white/10',
}

export function ButtonLink({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cx(
        'group/btn inline-flex items-center justify-center gap-2.5 rounded-full text-[13.5px] font-semibold tracking-[0.01em] transition-all duration-300',
        size === 'lg' ? 'px-7 py-4 text-sm' : 'px-6 py-3.5',
        variants[variant],
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}
