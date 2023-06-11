import React from "react";
import styles from "./TimetableCard.module.scss";

export interface TimetableCardI {
  day: string;
  description: string;
}

const TimetableCard: React.FC<TimetableCardI> = ({ day, description }) => {
  return (
    <div className={styles.main}>
      <h1>{day}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TimetableCard;
