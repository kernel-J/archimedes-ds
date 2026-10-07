import React from 'react'

import styles from './Card.module.css'

export interface CardProps {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> = (props) => {
  const { children, className } = props

  return (
    <div className={styles.cardContainer}>
      <div className={`${styles.card} ${className || ''}`}>{children}</div>
    </div>
  )
}
