"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { setCookie } from "cookies-next";
import styles from "./Language.module.scss";

const LanguageButton = ({ lang }: { lang: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguageHandler = (lang: string) => {
    const newLang = lang === "en" ? "ru" : "en";
    const oldLang = lang;

    setCookie("i18next", newLang);

    const newRoute = pathname.replace(`${oldLang}`, `${newLang}`);

    router.push(newRoute);
  };

  return (
    <button onClick={() => changeLanguageHandler(lang)} className={styles.main}>
      {lang == "en" ? <span>Русский</span> : <span>English</span>}
    </button>
  );
};

export default LanguageButton;
