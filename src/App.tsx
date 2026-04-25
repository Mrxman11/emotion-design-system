import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/atoms/DownloadButton/DownloadButton'
import Card from './components/atoms/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="app__main">
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
      </main>
    </>
  )
}

export default App
