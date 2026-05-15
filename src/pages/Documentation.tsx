import React from 'react'
import Card from '../components/atoms/Card/Card'
import { NavLink } from 'react-router-dom'

export default function Documentation() {
  return (
    <div className="doc-page">
      <h2>Documentation</h2>
      <p>Core tokens, usage guidelines and quick links for the design system.</p>

      <div className="doc-cards">
        <Card title="Colors">
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <div style={{ width: 48, height: 48, background: 'var(--color-bg-paper)', border: '1px solid var(--color-border-main)' }} title="bg-paper" />
            <div style={{ width: 48, height: 48, background: 'var(--color-bg-pink)' }} title="bg-pink" />
            <div style={{ width: 48, height: 48, background: 'var(--color-bg-blue)' }} title="bg-blue" />
            <div style={{ width: 48, height: 48, background: 'var(--color-bg-green)' }} title="bg-green" />
            <div style={{ width: 48, height: 48, background: 'var(--color-accent-lime)' }} title="accent-lime" />
            <div style={{ width: 48, height: 48, background: 'var(--color-accent-hotpink)' }} title="accent-hotpink" />
            <div style={{ width: 48, height: 48, background: 'var(--color-text-main)' }} title="text-main" />
          </div>
          <p style={{ marginTop: '0.75rem' }}>Palette tokens: use these via CSS variables for consistent theming.</p>
        </Card>

        <Card title="Typography">
          <p style={{ marginBottom: '0.5rem' }}>Font families and scale</p>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <div style={{ fontFamily: 'var(--font-family-serif)', fontSize: 'var(--text-xl)' }}>Heading sample — Playfair Display</div>
            <div style={{ fontFamily: 'var(--font-family-sans-display)', fontSize: 'var(--text-lg)' }}>Display sample — Anton/Impact</div>
            <div style={{ fontFamily: 'var(--font-family-body)', fontSize: 'var(--text-base)' }}>Body sample — Inter</div>
          </div>
        </Card>

        <Card title="Spacing">
          <p style={{ marginBottom: '0.5rem' }}>Design spacing scale (tokens)</p>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ padding: 'var(--space-xs)', background: 'color-mix(in srgb, var(--color-border-main) 4%, transparent)' }}>--space-xs</div>
            <div style={{ padding: 'var(--space-sm)', background: 'color-mix(in srgb, var(--color-border-main) 6%, transparent)' }}>--space-sm</div>
            <div style={{ padding: 'var(--space-md)', background: 'color-mix(in srgb, var(--color-border-main) 8%, transparent)' }}>--space-md</div>
            <div style={{ padding: 'var(--space-lg)', background: 'color-mix(in srgb, var(--color-border-main) 10%, transparent)' }}>--space-lg</div>
          </div>
        </Card>

        <Card title="Accessibility & Tokens">
          <p>Contrast, ARIA patterns, and recommended token usage.</p>
        </Card>

        <Card title="Components">
          <p>Quick links to previews:</p>
          <nav style={{ display: 'flex', gap: 'var(--space-sm)', marginTop: '0.5rem' }}>
            <NavLink to="/atoms">Atoms</NavLink>
            <NavLink to="/molecules">Molecules</NavLink>
            <NavLink to="/organisms">Organisms</NavLink>
          </nav>
        </Card>
      </div>
      
      <div style={{ marginTop: 'var(--space-lg)' }}>
        <Card title="Repository">
          <p>Source code and issues:</p>
          <a href="https://github.com/Mrxman11/emotion-design-system.git" target="_blank" rel="noopener noreferrer">https://github.com/Mrxman11/emotion-design-system.git</a>
        </Card>
      </div>
    </div>
  )
}
