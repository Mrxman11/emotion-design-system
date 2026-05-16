import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import './StarRating.css'

type Props = {
  /** maximum number of stars (default 5) */
  max?: number
  /** controlled value (0..max) */
  value?: number
  /** initial uncontrolled value */
  defaultValue?: number
  /** called when value changes */
  onChange?: (value: number) => void
  /** visual size */
  size?: 'small' | 'medium' | 'large'
  readOnly?: boolean
}

export default function StarRating({ max = 5, value, defaultValue = 0, onChange, size = 'medium', readOnly = false }: Props) {
  const [rating, setRating] = useState<number>(value ?? defaultValue)
  const [hover, setHover] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof value === 'number') setRating(value)
  }, [value])

  const commit = (v: number) => {
    if (readOnly) return
    if (value === undefined) setRating(v)
    onChange?.(v)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (readOnly) return
    const current = hover ?? rating
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(max, current + 1)
      commit(next)
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault()
      const prev = Math.max(0, current - 1)
      commit(prev)
    }
    if (e.key === 'Home') {
      e.preventDefault()
      commit(0)
    }
    if (e.key === 'End') {
      e.preventDefault()
      commit(max)
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      commit(current)
    }
  }

  return (
    <div
      className={`star-rating star-rating--${size}`}
      role="radiogroup"
      aria-label="Star rating"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={containerRef}
      onBlur={() => setHover(null)}
    >
      {Array.from({ length: max }, (_, i) => i + 1).map((n) => {
        const filled = hover !== null ? n <= hover : n <= rating

        return (
          <button
            key={n}
            type="button"
            className={`star ${filled ? 'star--filled' : ''}`}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover(n)}
            onBlur={() => setHover(null)}
            onClick={() => commit(n)}
            role="radio"
            aria-checked={rating === n}
            aria-label={`${n} star${n > 1 ? 's' : ''}`}
            disabled={readOnly}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
              <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.173L12 18.896l-7.336 3.87 1.402-8.173L.132 9.21l8.2-1.192L12 .587z" />
            </svg>
          </button>
        )
      })}
    </div>
  )
}
