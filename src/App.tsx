import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/atoms/DownloadButton/DownloadButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="app__main">
        <h1>Welcome</h1>
        <p>Example Download Button atom (three variants):</p>
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
