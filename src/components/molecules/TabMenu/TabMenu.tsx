import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import './TabMenu.css'

type Item = {
  id: string
  label: string
  options?: string[]
}

type Props = {
  items?: Item[]
  initialActive?: string | null
  onChange?: (id: string | null) => void
}

export default function TabMenu({ items, initialActive = null, onChange }: Props) {
  const defaultItems: Item[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products', options: ['Overview', 'Pricing', 'Docs'] },
    { id: 'resources', label: 'Resources', options: ['Blog', 'Guides', 'Support'] },
    { id: 'about', label: 'About' },
  ]

  const list = items ?? defaultItems
  const [active, setActive] = useState<string | null>(initialActive)
  const buttonsRef = useRef<Array<HTMLButtonElement | null>>([])

  useEffect(() => onChange?.(active), [active])

  const focusIndex = (idx: number) => {
    const btn = buttonsRef.current[idx]
    btn?.focus()
  }

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      focusIndex((idx + 1) % list.length)
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      focusIndex((idx - 1 + list.length) % list.length)
    }
    if (e.key === 'Home') {
      e.preventDefault()
      focusIndex(0)
    }
    if (e.key === 'End') {
      e.preventDefault()
      focusIndex(list.length - 1)
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setActive((prev) => (prev === list[idx].id ? null : list[idx].id))
    }
  }

  return (
    <nav className="tab-menu" aria-label="Primary tabs">
      <ul className="tab-menu__list" role="tablist">
        {list.map((it, i) => {
          const hasOptions = !!(it.options && it.options.length)
          const isActive = active === it.id

          return (
            <li key={it.id} className="tab-menu__item">
              <button
                ref={(el) => { buttonsRef.current[i] = el }}
                className={`tab ${isActive ? 'tab--active' : ''}`}
                role="tab"
                aria-selected={isActive}
                aria-expanded={hasOptions ? isActive : undefined}
                onClick={() => setActive(isActive ? null : it.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
                type="button"
              >
                {it.label}
              </button>

              {hasOptions ? (
                <div className="tab-menu__dropdown" role="menu" aria-hidden={!isActive}>
                  <ul>
                    {it.options!.map((opt) => (
                      <li key={opt} role="none">
                        <button className="tab-menu__dropdown-item" role="menuitem" type="button">{opt}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
