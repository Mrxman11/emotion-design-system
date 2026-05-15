import { useEffect, useRef } from 'react'
import './ScrollTracker.css'

export default function ScrollTracker() {
  const barRef = useRef<HTMLDivElement | null>(null)
  const ticking = useRef(false)

  useEffect(() => {
    function update() {
      const doc = document.documentElement
      const scrollTop = window.scrollY || doc.scrollTop
      const scrollHeight = doc.scrollHeight - window.innerHeight
      const pct = scrollHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100)) : 0
      if (barRef.current) barRef.current.style.width = `${pct}%`
      ticking.current = false
    }

    function onScroll() {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    // initial
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="scroll-tracker" aria-hidden="true">
      <div className="scroll-tracker__bar" ref={barRef} />
    </div>
  )
}
