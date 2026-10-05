import React from "react";

import styles from "./Card.module.css";

export interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const { children, onClick, className } = props;
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <div className={`${styles.card} ${className || ""}`}>
        {children}
      </div>
    </div>
  );
}