import React, { useEffect, useRef, useState } from 'react'
import './CarouselCard.css'

type Props = {
  images: string[]
  alt?: string[]
  /** auto rotate slides */
  autoPlay?: boolean
  /** ms */
  interval?: number
}

export default function CarouselCard({ images, alt = [], autoPlay = false, interval = 4000 }: Props) {
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

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 30) {
      if (delta > 0) prev()
      else next()
    }
    touchStartX.current = null
  }

  if (!images || images.length === 0) return null

  return (
    <div className="carousel-card" onKeyDown={onKeyDown} tabIndex={0} aria-roledescription="carousel">
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

        <button className="carousel-card__nav carousel-card__nav--prev" onClick={prev} aria-label="Previous slide">‹</button>
        <button className="carousel-card__nav carousel-card__nav--next" onClick={next} aria-label="Next slide">›</button>
      </div>

      <div className="carousel-card__indicators" role="tablist" aria-label="Slides">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel-card__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === index}
            role="tab"
          />
        ))}
      </div>
    </div>
  )
}
