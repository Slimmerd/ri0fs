import React from "react";
import styles from "./MemberCard.module.scss";

export interface MemberCardI {
  call: string;
  name: string;
  role: string;
  description: string;
}

const MemberCard: React.FC<MemberCardI> = ({
  call,
  name,
  role,
  description,
}) => {
  return (
    <div className={styles.member}>
      <div className={styles.small}>{call}</div>
      <div className={styles.small}>{name}</div>
      <div className={styles.small}>{role}</div>
      <div className={styles.large}>{description}</div>
    </div>
  );
};

export default MemberCard;
