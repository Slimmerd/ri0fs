import React, { Dispatch, SetStateAction } from "react";
import styles from "./HeaderLink.module.scss";
import Link from "next/link";

interface HeaderLinkI {
  url: string;
  title: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const HeaderLink: React.FC<HeaderLinkI> = ({ url, title, setOpen }) => {
  return (
    <div className={styles.link}>
      <Link href={`/${url}`} onClick={() => setOpen(false)}>
        <span>{title}</span>
      </Link>
    </div>
  );
};

export default HeaderLink;
