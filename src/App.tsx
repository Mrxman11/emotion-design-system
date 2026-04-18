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
      <main style={{padding: '2rem'}}>
        <h1>Welcome</h1>
        <p>Example Download Button atom:</p>
        <DownloadButton href="/assets/hero.png" filename="hero.png">Download Hero Image</DownloadButton>
      </main>
    </>
  )
}

export default App
