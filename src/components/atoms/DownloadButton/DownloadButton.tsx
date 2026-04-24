import React from 'react'
import './DownloadButton.css'

type Props = {
  /** Direct file URL to download */
  href: string
  /** Optional file name for the download attribute */
  filename?: string
  /** Optional modifier: 'small' | 'large' */
  size?: 'small' | 'large'
  /** Visual variant */
  variant?: 'primary' | 'ghost' | 'icon'
  children?: React.ReactNode
}

/**
 * Atomic level: Atom
 * Reasoning: Single-purpose, self-contained control with no child components.
 * It exposes a simple API and will be reused across the UI as a primitive.
 */
export default function DownloadButton({ href, filename, size = 'large', variant = 'primary', children }: Props) {
  // BEM: `download-button--{size}` and `download-button--{variant}`
  const className = `download-button download-button--${size} download-button--${variant}`

  return (
    <a
      className={className}
      href={href}
      download={filename}
      rel="noopener noreferrer"
      aria-label={variant === 'icon' ? (typeof children === 'string' ? children : 'Download') : undefined}
    >
      {variant === 'icon' ? (
        <span className="download-button__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path d="M12 3v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="19" width="18" height="2" rx="1" fill="currentColor" />
          </svg>
        </span>
      ) : (
        <span className="download-button__label">{children ?? 'Download'}</span>
      )}
    </a>
  )
}

