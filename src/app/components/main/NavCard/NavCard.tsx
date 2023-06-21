import React from "react";
import styles from "./NavCard.module.scss";
import Image from "next/image";
import Link from "next/link";

interface NavCardI {
  name: string;
  imageLink: string;
  imageAlt: string;
  url: string;
}

const NavCard: React.FC<NavCardI> = ({ name, imageAlt, imageLink, url }) => {
  return (
    <div className={styles.card}>
      <Link href={url} passHref>
        <h1>{name} ↗</h1>
        <div className={styles.imgWrapper}>
          <Image
            src={imageLink}
            alt={imageAlt}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>
    </div>
  );
};

export default NavCard;
