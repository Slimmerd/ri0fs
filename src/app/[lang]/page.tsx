import Image from "next/image";
import styles from "./page.module.scss";
import NavCard from "@/app/components/main/NavCard/NavCard";
import TimetableCard, {
  TimetableCardI,
} from "@/app/components/main/TimetableCard/TimetableCard";
import HeadingCard from "@/app/components/main/HeadingCard/HeadingCard";
import EquipmentCard from "@/app/components/main/EquipmentCard/EquipmentCard";
import MemberCard, {
  MemberCardI,
} from "@/app/components/main/MemberCard/MemberCard";
import fs from "fs";
import { montserrat, roboto } from "@/app/utils/fonts";
import { useTranslation } from "../i18n";

const Home = async ({ params: { lang } }: { params: { lang: string } }) => {
  const { t } = await useTranslation(lang, "main");

  /* @ts-ignore */
  const nTimetable: TimetableCardI[] = t("block5.dates", {
    returnObjects: true,
  });
  const nTeam: MemberCardI[] = t("block7.members", { returnObjects: true });

  const nAntennas: string[] = t("block6.antennas.equipment", {
    returnObjects: true,
  });
  const nAmplifiers: string[] = t("block6.amplifier.equipment", {
    returnObjects: true,
  });
  const nTransceivers: string[] = t("block6.transceivers.equipment", {
    returnObjects: true,
  });

  return (
    <main
      className={`${styles.main} ${montserrat.variable} ${roboto.variable}`}
    >
      <section>
        <div className={styles.block}>
          <div>
            <h2>IOTA AS-062</h2>
            <div className={styles.innerBlock}>
              <div className={styles.animated}>
                <h1>RI0FS</h1>
                <h1>AS-062</h1>
                <h1>RR-15-06</h1>
                <h1>SL-25</h1>
                <h1>RI0FS</h1>
                <h1>AS-062</h1>
                <h1>RR-15-06</h1>
                <h1>SL-25</h1>
                <h1>RI0FS</h1>
                <h1>AS-062</h1>
                <h1>RR-15-06</h1>
                <h1>SL-25</h1>
                <h1>RI0FS</h1>
                <h1>AS-062</h1>
                <h1>RR-15-06</h1>
                <h1>SL-25</h1>
              </div>
            </div>
          </div>

          <div className={styles.floatingImages}>
            <div className={styles.img1}>
              <Image src={"/kunashir.png"} alt={""} height={311} width={329} />
            </div>
            <div className={styles.img2}>
              <Image src={"/shikotan.png"} alt={""} width={108} height={88} />
            </div>
            <div className={styles.img3}>
              <Image src={"/iturup.png"} alt={""} width={561} height={442} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section2}>
        <div className={styles.iota}>
          <p>AS-062</p>
          <p>RR-15-06</p>
          <p>SL-25</p>
        </div>
        <div className={styles.date}>{t("block1.dates")}</div>

        <div className={styles.description}>{t("block1.intro")}</div>
      </section>

      <section className={styles.section3}>
        <h1>{t("block2.previous")} →</h1>

        <div className={`${styles.expeditions} ${styles.row}`}>
          <div className={styles.expedition}>RI0F&quot;14</div>
          <div className={styles.expedition}>RI0FS&quot;16</div>
          <div className={styles.expedition}>RI0FF&quot;21</div>
        </div>
      </section>

      <section className={styles.nav}>
        <NavCard
          name={t("block3.timetable")}
          imageLink={"/timetable.jpg"}
          imageAlt={"timetable"}
          url={"/#timetable"}
        />

        <NavCard
          name={t("block3.team")}
          imageLink={"/team.jpg"}
          imageAlt={"team"}
          url={"/#team"}
        />

        <NavCard
          name={t("block3.equipment")}
          imageLink={"/equipment.jpg"}
          imageAlt={"equipment"}
          url={"/#equipment"}
        />
      </section>

      <section className={`${styles.section4} ${styles.row}`}>
        <div className={styles.heading}>
          <HeadingCard title={t("block4.heading")} />
        </div>

        <div className={styles.description1}>
          <p>{t("block4.intro")}</p>
        </div>

        <div className={styles.experiences}>
          <div className={styles.experience}>
            <div>
              <h1>9+</h1>
              <p>{t("block4.exp")}</p>
            </div>
          </div>

          <div className={styles.experience}>
            <h1>5+</h1>
            <p>{t("block4.farEast")}</p>
          </div>

          <div className={styles.experience}>
            <h1>50+</h1>
            <p>{t("block4.world")}</p>
          </div>

          <div className={styles.experience}>
            <h1>2</h1>
            <p>{t("block4.dmg")}</p>
          </div>
        </div>
      </section>

      <section className={`${styles.section5} ${styles.row}`} id={"timetable"}>
        <div className={styles.heading}>
          <HeadingCard title={t("block5.heading")} />
        </div>

        <div className={`${styles.timetable} ${styles.row}`}>
          {nTimetable.map((day, i) => (
            <TimetableCard
              day={day.day}
              description={day.description}
              key={i}
            />
          ))}
        </div>
      </section>

      <section className={`${styles.section6} ${styles.row}`} id={"equipment"}>
        <div className={styles.heading}>
          <HeadingCard title={t("block6.heading")} />
        </div>

        <div className={`${styles.equipment} ${styles.row}`}>
          <EquipmentCard title={t("block6.antennas.title")}>
            {nAntennas.map((antenna, i) => (
              <p key={i}>{antenna}</p>
            ))}
          </EquipmentCard>

          <EquipmentCard title={t("block6.transceivers.title")}>
            {nTransceivers.map((tranciever, i) => (
              <p key={i}>{tranciever}</p>
            ))}
          </EquipmentCard>

          <EquipmentCard title={t("block6.amplifier.title")}>
            {nAmplifiers.map((amplifier, i) => (
              <p key={i}>{amplifier}</p>
            ))}
          </EquipmentCard>
        </div>
      </section>

      <section className={`${styles.section7} ${styles.row}`} id={"team"}>
        <div className={styles.heading}>
          <HeadingCard title={t("block7.heading")} />
        </div>

        <div className={styles.goodTeam}>
          <h1>{t("block7.description")}</h1>
        </div>
        <div className={styles.ourMembers}>
          <p>{t("block7.description2")}</p>
        </div>

        <div className={styles.members}>
          {nTeam.map((member, i) => (
            <MemberCard
              call={member.call}
              name={member.name}
              role={member.role}
              description={member.description}
              key={i}
            />
          ))}
        </div>
      </section>

      <section className={`${styles.section8} ${styles.row}`}>
        <div className={styles.heading}>
          <HeadingCard title={t("block8.heading")} />
        </div>

        <div className={styles.info}>
          <p>{t("block8.description")}</p>
        </div>
        <div className={styles.info}>
          <p>
            <a href="mailto:ra6mg@mail.ru">
              <span>ra6mg@mail.ru</span>
            </a>
          </p>
        </div>

        <div className={styles.socialMedia}>
          <a href="">Telegram ↗</a>
          <a href="">Twitter* ↗</a>
        </div>
      </section>
    </main>
  );
};

export default Home;
