"use client";
import React from "react";
import styles from "./Header.module.scss";
import { Monoton } from "next/font/google";
import HeaderLink from "@/app/components/Header/HeaderLink/HeaderLink";
import EnglishIcon from "@/app/components/Header/Language/EnglishIcon";
import RussianIcon from "@/app/components/Header/Language/RussianIcon";

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  variable: "--monoton-font",
});

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={`${styles.logo} ${monoton.variable}`}>
        <span>RI0FS</span>
      </div>

      <div className={styles.right}>
        <nav className={styles.menu}>
          {/* <HeaderLink url={"team"} title={"Команда"} />
          <HeaderLink url={"team"} title={"Техника"} />
          <HeaderLink url={"team"} title={"Расписание"} /> */}
          <HeaderLink url={"news"} title={"Новости"} />
          <HeaderLink url={"donate"} title={"Пожертвования"} />
          <HeaderLink url={"qsl"} title={"QSL"} />
          <HeaderLink url={"log"} title={"Online log"} />
          <HeaderLink url={"eng"} title={"English"} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
