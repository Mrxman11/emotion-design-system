import React from 'react'
import './DownloadButton.css'

type Props = {
  /** Direct file URL to download */
  href: string
  /** Optional file name for the download attribute */
  filename?: string
  /** Optional modifier: 'small' | 'large' */
  size?: 'small' | 'large'
  children?: React.ReactNode
}

/**
 * Atomic level: Atom
 * Reasoning: Single-purpose, self-contained control with no child components.
 * It exposes a simple API and will be reused across the UI as a primitive.
 */
export default function DownloadButton({ href, filename, size = 'large', children }: Props) {
  const className = `download-button download-button--${size}`

  return (
    <a
      className={className}
      href={href}
      download={filename}
      rel="noopener noreferrer"
    >
      <span className="download-button__label">{children ?? 'Download'}</span>
    </a>
  )
}
