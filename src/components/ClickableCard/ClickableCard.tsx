import React from 'react'

import styles from './ClickableCard.module.css'

export interface ClickableCardProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

export const ClickableCard: React.FC<ClickableCardProps> = (props) => {
  const { children, onClick, className } = props

  return (
    <button
      type='button'
      className={`${styles.clickableCard} ${className ?? ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
