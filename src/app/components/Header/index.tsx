"use client";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Monoton } from "next/font/google";
import HeaderLink from "@/app/components/Header/HeaderLink/HeaderLink";
import Link from "next/link";
import LanguageButton from "./Language";
import { useTranslation } from "@/app/i18n/client";

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  variable: "--monoton-font",
});

const Header = ({ lang }: { lang: string }) => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation(lang, "header");

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
            <HeaderLink
                url={""}
                title={t("main")}
                setOpen={setOpen}
                locale={lang}
            />
          <HeaderLink
            url={"news"}
            title={t("news")}
            setOpen={setOpen}
            locale={lang}
          />
          <HeaderLink
            url={"donate"}
            title={t("donate")}
            setOpen={setOpen}
            locale={lang}
          />
          <HeaderLink
            url={"qsl"}
            title={"QSL"}
            setOpen={setOpen}
            locale={lang}
          />
          <HeaderLink
            url={"news/log"}
            title={"Online log"}
            setOpen={setOpen}
            locale={lang}
          />
          <LanguageButton lang={lang} />
        </nav>
        <button
          className={`${styles["button--inner"]}`}
          onClick={() => setOpen(!isOpen)}
        >
          {t("close")}
        </button>
      </div>
      <button
        className={`${styles["button--outer"]}`}
        onClick={() => setOpen(!isOpen)}
      >
        {t("menu")}
      </button>
    </header>
  );
};

export default Header;
