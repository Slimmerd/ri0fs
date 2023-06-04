import React, { ReactNode } from "react";
import styles from "./EquipmentCard.module.scss";

interface EquipmentCardI {
  title: string;
  children: ReactNode;
}

const EquipmentCard: React.FC<EquipmentCardI> = ({ title, children }) => {
  return (
    <div className={styles.main}>
      <h1>{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default EquipmentCard;
