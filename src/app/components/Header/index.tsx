"use client";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Monoton } from "next/font/google";
import HeaderLink from "@/app/components/Header/HeaderLink/HeaderLink";
import Link from "next/link";

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  variable: "--monoton-font",
});

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className={styles.container}>
      <Link href={"/"}>
        <div className={`${styles.logo} ${monoton.variable}`}>
          <span>RI0FS</span>
        </div>
      </Link>

      <div
        className={`${styles.right} ${
          isOpen ? styles["right--expanded"] : styles["right--closed"]
        }`}
      >
        <nav className={styles.menu}>
          {/* <HeaderLink url={"team"} title={"Команда"} />
          <HeaderLink url={"team"} title={"Техника"} />
          <HeaderLink url={"team"} title={"Расписание"} /> */}
          <HeaderLink url={"news"} title={"Новости"} setOpen={setOpen} />
          <HeaderLink
            url={"donate"}
            title={"Пожертвования"}
            setOpen={setOpen}
          />
          <HeaderLink url={"qsl"} title={"QSL"} setOpen={setOpen} />
          <HeaderLink url={"log"} title={"Online log"} setOpen={setOpen} />
          <HeaderLink url={"eng"} title={"English"} setOpen={setOpen} />
        </nav>
        <button
          className={`${styles["button--inner"]} ${styles.menuButton}`}
          onClick={() => setOpen(!isOpen)}
        >
          Закрыть
        </button>
      </div>
      <button
        className={`${styles["button--outer"]} ${styles.menuButton}`}
        onClick={() => setOpen(!isOpen)}
      >
        Меню
      </button>
    </header>
  );
};

export default Header;
