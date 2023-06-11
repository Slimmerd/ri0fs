import React from "react";
import styles from "./page.module.scss";
import { useTranslation } from "@/app/i18n";
import { montserrat } from "@/app/utils/fonts";
import HeadingCard from "@/app/components/main/HeadingCard/HeadingCard";

const QSLPage = async ({ params: { lang } }: { params: { lang: string } }) => {
  const { t } = await useTranslation(lang, "qsl");

  return (
    <main className={`${styles.main} ${montserrat.variable}`}>
      <section className={styles.block}>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </section>

      <section className={styles.block2}>
        <HeadingCard title={t("methods")} />

        <div className={styles.cards}>
          <div className={styles.card}>
            <h1>Direct</h1>
            <p>{t("manager")}</p>
          </div>

          <div className={styles.card}>
            <h1>Bureau</h1>
            <p>{t("bureau")}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QSLPage;
