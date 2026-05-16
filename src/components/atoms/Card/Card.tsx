import type { FC, ReactNode } from 'react'
import './Card.css'

export interface CardProps {
  title?: string
  children?: ReactNode
  imageSrc?: string
  variant?: 'vertical' | 'horizontal' | 'no-image'
  className?: string
}
const Card: FC<CardProps> = ({ title, children, imageSrc, variant = 'vertical', className = '' }) => {
  const variantClass = `card--${variant}`

  return (
    <article className={`card ${variantClass} ${className}`.trim()}>
      {variant !== 'no-image' && imageSrc && (
        <div className="card__media">
          <img src={imageSrc} alt="" />
        </div>
      )}

      <div className="card__content">
        {title && <h3 className="card__title">{title}</h3>}
        <div className="card__body">{children}</div>
      </div>
    </article>
  )
}

export default Card
