import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent, TouchEvent } from 'react'
import './CarouselCard.css'

type Props = {
  images: string[]
  alt?: string[]
  /** auto rotate slides */
  autoPlay?: boolean
  /** ms */
  interval?: number
  /** demo: force hover visuals */
  hover?: boolean
  /** disable interactions and dim visuals */
  disabled?: boolean
}

export default function CarouselCard({ images, alt = [], autoPlay = false, interval = 4000, hover = false, disabled = false }: Props) {
  const [index, setIndex] = useState(0)
  const max = images.length
  const timer = useRef<number | null>(null)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    if (!autoPlay) return
    timer.current = window.setInterval(() => setIndex((i) => (i + 1) % max), interval)
    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [autoPlay, interval, max])

  useEffect(() => {
    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [])

  const prev = () => setIndex((i) => (i - 1 + max) % max)
  const next = () => setIndex((i) => (i + 1) % max)
  const goTo = (n: number) => setIndex(((n % max) + max) % max)

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (disabled) return
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (disabled) return
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 30) {
      if (delta > 0) prev()
      else next()
    }
    touchStartX.current = null
  }

  if (!images || images.length === 0) return null

  const rootClass = `carousel-card ${hover ? 'is-hover' : ''} ${disabled ? 'is-disabled' : ''}`

  return (
    <div className={rootClass} onKeyDown={onKeyDown} tabIndex={disabled ? -1 : 0} aria-roledescription="carousel" aria-disabled={disabled}>
      <div
        className="carousel-card__frame"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {images.map((src, i) => (
          <figure
            key={i}
            className={`carousel-card__slide ${i === index ? 'is-active' : ''}`}
            aria-hidden={i === index ? 'false' : 'true'}
          >
            <img src={src} alt={alt[i] ?? `Slide ${i + 1}`} />
          </figure>
        ))}

        <button className="carousel-card__nav carousel-card__nav--prev" onClick={() => !disabled && prev()} aria-label="Previous slide" disabled={disabled} aria-disabled={disabled}>‹</button>
        <button className="carousel-card__nav carousel-card__nav--next" onClick={() => !disabled && next()} aria-label="Next slide" disabled={disabled} aria-disabled={disabled}>›</button>
      </div>
      <div className="carousel-card__indicators" role="tablist" aria-label="Slides" aria-hidden={disabled}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel-card__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => !disabled && goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            role="tab"
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  )
}
