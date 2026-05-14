import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/atoms/DownloadButton/DownloadButton'
import Card from './components/atoms/Card/Card'
import NeutralButton from './components/atoms/NeutralButton/NeutralButton'
import PillMenu from './components/molecules/PillMenu/PillMenu'
import StarRating from './components/atoms/StarRating/StarRating'
import CarouselCard from './components/organisms/CarouselCard/CarouselCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="app__main">
        <PillMenu />
        <div style={{ height: 'var(--space-md)' }} />
        <h1>Welcome</h1>
        <p>Example card variations and Download Button atom (three variants):</p>

        <div className="card-examples">
          <Card title="Vertical (default)" imageSrc={heroImg}>
            Vertical card with image above the content.
          </Card>

          <Card className="" title="Horizontal" imageSrc={heroImg} variant="horizontal">
            Horizontal card with media on the left.
          </Card>

          <Card title="No image" variant="no-image">
            Card variant without an image; useful for text-only content.
          </Card>
        </div>

        <div style={{ height: 'var(--space-lg)' }} />

        <div className="download-examples">
          <DownloadButton href="/assets/hero.png" filename="hero.png" variant="primary">Download</DownloadButton>
          <DownloadButton href="/assets/hero.png" filename="hero.png" variant="ghost">Download</DownloadButton>
          <DownloadButton href="/assets/hero.png" filename="hero.png" variant="icon" size="small">Download</DownloadButton>
        </div>

        <div style={{ height: 'var(--space-lg)' }} />

        <section aria-labelledby="neutral-demo">
          <h2 id="neutral-demo">Neutral Button — States</h2>
          <div className="neutral-examples" style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center' }}>
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
        </section>

        <div style={{ height: 'var(--space-lg)' }} />

        <section aria-labelledby="rating-demo">
          <h2 id="rating-demo">Star Rating — Default + Hover Preview</h2>
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
        </section>

        <div style={{ height: 'var(--space-lg)' }} />

        <section aria-labelledby="carousel-demo">
          <h2 id="carousel-demo">Carousel Card — Click or swipe through images</h2>
          <CarouselCard images={[heroImg, heroImg, heroImg]} autoPlay={false} />
        </section>
      </main>
    </>
  )
}

export default App
