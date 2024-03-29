import React from "react";
import styles from "./page.module.scss";
import { useTranslation } from "@/app/i18n";
import HeadingCard from "@/app/components/main/HeadingCard/HeadingCard";
import { montserrat } from "@/app/utils/fonts";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lang, "donate");

  return {
    /* @ts-ignore */
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      images: "https://ri0fs.ru/assets/stab.jpg",
      type: "website",
    },
  };
}

const DonatePage = async ({
  params: { lang },
}: {
  params: { lang: string };
}) => {
  const { t } = await useTranslation(lang, "donate");

  return (
    <>
      <main className={`${styles.main} ${montserrat.variable}`}>
        <section className={styles.block}>
          {/* @ts-ignore */}
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
        </section>
        <section className={styles.block2}>
          <HeadingCard title={t("methods")} />

          <div className={styles.cards}>
            <div className={styles.card}>
              <h1>{t("card")}</h1>
              <p>4276 1609 9540 7435</p>
            </div>

            <div className={styles.card}>
              <h1>PayPal</h1>
              <p>
                <a href="https://www.paypal.com/paypalme/ri0fs">Paypal Me</a>
              </p>
            </div>
          </div>
        </section>
        <section>
          <HeadingCard title={t("sponsors")} />
          <h1>R2DXU</h1>
          <h1>ON8AH</h1>
          <h1>HB9KOG</h1>
          <h1>DL1AXX</h1>
          <h1>RA1WU</h1>
          <h1>RX3AEX</h1>
          <h1>DL1BWU</h1>
          <h1>UI4F</h1>
          <h1>R1BMF</h1>
          <h1>DM2HK</h1>
          <h1>RU3FS</h1>
        </section>
      </main>
    </>
  );
};

export default DonatePage;
