import React, { useState } from 'react'
import './PillMenu.css'

type Item = {
  id: string
  label: string
  options?: string[]
}

type Props = {
  items?: Item[]
}

export default function PillMenu({ items }: Props) {
  const defaultItems: Item[] = [
    { id: 'all', label: 'All' },
    { id: 'work', label: 'Work', options: ['Tasks', 'Projects', 'Files'] },
    { id: 'personal', label: 'Personal', options: ['Notes', 'Photos'] },
    { id: 'archive', label: 'Archive' },
  ]

  const list = items ?? defaultItems
  const [active, setActive] = useState<string | null>(null)

  return (
    <nav className="pill-menu" aria-label="Pill menu">
      <div className="pill-menu__inner">
        <ul className="pill-menu__list">
          {list.map((it) => (
            <li key={it.id} className="pill-menu__item">
              <button
                className={`pill ${active === it.id ? 'pill--active' : ''}`}
                onClick={() => setActive(active === it.id ? null : it.id)}
                aria-expanded={active === it.id}
                aria-haspopup={it.options && it.options.length ? 'menu' : undefined}
                type="button"
              >
                <span className="pill__label">{it.label}</span>
              </button>

              {it.options && it.options.length ? (
                <div className="pill-menu__dropdown" role="menu" aria-hidden={active !== it.id}>
                  <ul>
                    {it.options.map((opt) => (
                      <li key={opt} role="menuitem">
                        <button className="pill-menu__dropdown-item" type="button">{opt}</button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
