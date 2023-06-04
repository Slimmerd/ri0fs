import React from "react";
import styles from "./HeadingCard.module.scss";

interface HeadingCardI {
  title: string;
}

const HeadingCard: React.FC<HeadingCardI> = ({ title }) => {
  return (
    <div className={styles.heading}>
      <span>{title}</span>
    </div>
  );
};

export default HeadingCard;
