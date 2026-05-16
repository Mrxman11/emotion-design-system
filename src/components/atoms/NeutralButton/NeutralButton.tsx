import type { ReactNode, MouseEventHandler } from 'react'
import './NeutralButton.css'

type Props = {
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  size?: 'small' | 'large'
  ariaLabel?: string
}

export default function NeutralButton({ children, onClick, disabled = false, size = 'large', ariaLabel }: Props) {
  const className = `neutral-button neutral-button--${size}`

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      <span className="neutral-button__label">{children ?? 'Button'}</span>
    </button>
  )
}
