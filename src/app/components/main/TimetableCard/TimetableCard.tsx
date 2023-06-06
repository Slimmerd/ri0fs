import React from "react";
import styles from "./TimetableCard.module.scss";

export interface TimetableCardI {
  title: string;
  description: string;
}

const TimetableCard: React.FC<TimetableCardI> = ({ title, description }) => {
  return (
    <div className={styles.main}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TimetableCard;
