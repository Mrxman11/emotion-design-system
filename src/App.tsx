import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
const IMAGE_URL = 'https://images.unsplash.com/photo-1777034707514-d5fd29adba97?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
import './App.css'
import DownloadButton from './components/atoms/DownloadButton/DownloadButton'
import Card from './components/atoms/Card/Card'
import NeutralButton from './components/atoms/NeutralButton/NeutralButton'
import PillMenu from './components/molecules/PillMenu/PillMenu'
import StarRating from './components/atoms/StarRating/StarRating'
import CarouselCard from './components/organisms/CarouselCard/CarouselCard'
import Textarea from './components/atoms/Textarea/Textarea'
import ThemeToggle from './components/atoms/ThemeToggle/ThemeToggle'
import ScrollTracker from './components/atoms/ScrollTracker/ScrollTracker'
import Documentation from './pages/Documentation'
import Releases from './pages/Releases'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollTracker />
      <ThemeToggle />
      <main className="app__main">
        <header className="app__nav">
          <h1>Mike's Components</h1>
          <nav>
            <NavLink to="/" end style={({isActive}) => ({ marginRight: '1rem', textDecoration: isActive ? 'underline' : 'none' })}>Home</NavLink>
            <NavLink to="/atoms" style={({isActive}) => ({ marginRight: '1rem', textDecoration: isActive ? 'underline' : 'none' })}>Atoms</NavLink>
            <NavLink to="/molecules" style={({isActive}) => ({ marginRight: '1rem', textDecoration: isActive ? 'underline' : 'none' })}>Molecules</NavLink>
            <NavLink to="/organisms" style={({isActive}) => ({ marginRight: '1rem', textDecoration: isActive ? 'underline' : 'none' })}>Organisms</NavLink>
            <NavLink to="/documentation" style={({isActive}) => ({ marginRight: '1rem', textDecoration: isActive ? 'underline' : 'none' })}>Documentation</NavLink>
            <NavLink to="/releases" style={({isActive}) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Releases</NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<div>
            <p>Welcome — choose a category from the nav to view components.</p>
          </div>} />

          <Route path="/atoms" element={<section aria-labelledby="atoms-section">
            <h2 id="atoms-section">Atoms</h2>

            <div className="atoms__group">
              <h3>Cards</h3>
              <div className="atoms__cards" style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center', flexWrap: 'wrap' }}>
                <Card title="Vertical (default)" imageSrc={IMAGE_URL}>
                  Vertical card with image above the content.
                </Card>

                <Card title="Horizontal" imageSrc={IMAGE_URL} variant="horizontal">
                  Horizontal card with media on the left.
                </Card>

                <Card title="No image" variant="no-image">
                  Card variant without an image; useful for text-only content.
                </Card>
              </div>
            </div>

            <div className="atoms__group">
              <h3>Download Buttons</h3>
              <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
                <DownloadButton href={IMAGE_URL} filename="hero.png" variant="primary">Download</DownloadButton>
                <DownloadButton href={IMAGE_URL} filename="hero.png" variant="ghost">Download</DownloadButton>
                <DownloadButton href={IMAGE_URL} filename="hero.png" variant="icon" size="small">Download</DownloadButton>
              </div>
            </div>

            <div className="atoms__group">
              <h3>Neutral Button — States</h3>
              <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
                <div>
                  <p>Default</p>
                  <NeutralButton>Neutral</NeutralButton>
                </div>

                <div>
                  <p>Hover (simulated)</p>
                  <button className="neutral-button is-hover" aria-label="Simulated hover">Neutral</button>
                </div>

                <div>
                  <p>Disabled</p>
                  <NeutralButton disabled>Disabled</NeutralButton>
                </div>
              </div>
            </div>

            <div className="atoms__group">
              <h3>Star Rating</h3>
              <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
                <div>
                  <p>Uncontrolled (click to set)</p>
                  <StarRating />
                </div>

                <div>
                  <p>Controlled (value = 3)</p>
                  <StarRating value={3} />
                </div>
              </div>
            </div>

            <div className="atoms__group">
              <h3>Textarea — Validation States</h3>
              <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ minWidth: 220 }}>
                  <p>Neutral</p>
                  <Textarea placeholder="Write something..." rows={5} helperText="Optional helper text" />
                </div>

                <div style={{ minWidth: 220 }}>
                  <p>Error</p>
                  <Textarea state="error" errorMessage="Please provide at least 10 characters" defaultValue="short" rows={5} />
                </div>

                <div style={{ minWidth: 220 }}>
                  <p>Validated</p>
                  <Textarea state="validated" defaultValue="Looks good to me." rows={5} />
                </div>
              </div>
            </div>
          </section>} />

          <Route path="/molecules" element={<section aria-labelledby="molecules-section">
            <h2 id="molecules-section">Molecules</h2>
            <div className="molecules__group">
              <h3>Pill Menu</h3>
              <PillMenu />
            </div>
          </section>} />

          <Route path="/organisms" element={<section aria-labelledby="organism-section">
            <h2 id="organism-section">Organism</h2>
            <div className="organism__group">
              <h3>Carousel</h3>
              <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ minWidth: 300 }}>
                  <p>Default</p>
                  <CarouselCard images={[IMAGE_URL, IMAGE_URL, IMAGE_URL]} autoPlay={false} />
                </div>

                <div style={{ minWidth: 300 }}>
                  <p>Hover (simulated)</p>
                  <CarouselCard images={[IMAGE_URL, IMAGE_URL, IMAGE_URL]} hover />
                </div>

                <div style={{ minWidth: 300 }}>
                  <p>Disabled</p>
                  <CarouselCard images={[IMAGE_URL, IMAGE_URL, IMAGE_URL]} disabled />
                </div>
              </div>
            </div>
          </section>} />

          <Route path="/documentation" element={<Documentation />} />
          <Route path="/releases" element={<Releases />} />
        </Routes>
      </main>
    </>
  )
}

export default App
