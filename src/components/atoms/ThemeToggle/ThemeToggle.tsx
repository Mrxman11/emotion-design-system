import { useEffect, useState } from 'react'
import './ThemeToggle.css'

const THEME_KEY = 'eds:theme'

function applyTheme(theme: 'light' | 'dark') {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-theme', theme)
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const stored = localStorage.getItem(THEME_KEY)
      if (stored === 'dark' || stored === 'light') return stored
    } catch (e) {}
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    return 'light'
  })

  useEffect(() => {
    applyTheme(theme)
    try { localStorage.setItem(THEME_KEY, theme) } catch (e) {}
  }, [theme])

  function toggle() {
    setTheme(t => (t === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={`theme-toggle theme-toggle--${theme}`} aria-hidden={false}>
      <span className="theme-toggle__icon" aria-hidden="true">
        {theme === 'light' ? (
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.2" y1="4.2" x2="5.6" y2="5.6" />
              <line x1="18.4" y1="18.4" x2="19.8" y2="19.8" />
              <line x1="4.2" y1="19.8" x2="5.6" y2="18.4" />
              <line x1="18.4" y1="5.6" x2="19.8" y2="4.2" />
            </g>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
          </svg>
        )}
      </span>

      <button
        className="theme-toggle__control"
        onClick={toggle}
        aria-pressed={theme === 'dark'}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <span className="theme-toggle__knob" />
      </button>
    </div>
  )
}
