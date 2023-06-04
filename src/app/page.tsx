import Image from "next/image";
import styles from "./page.module.scss";
import NavCard from "./components/main/nav/card/NavCard";
import { Montserrat, Roboto } from "next/font/google";
import TimetableCard, {
  TimetableCardI,
} from "./components/main/timetable/TimetableCard";
import HeadingCard from "./components/main/HeadingCard/HeadingCard";
import EquipmentCard from "./components/main/EquipmentCard/EquipmentCard";
import MemberCard, {
  MemberCardI,
} from "./components/main/MemberCard/MemberCard";
import fs from "fs";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--montserrat-font",
});
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--roboto-font",
});

export default function Home() {
  const teamMembers: MemberCardI[] = JSON.parse(
    fs.readFileSync(process.cwd() + "/data/team.json", "utf-8")
  );
  const timetable: TimetableCardI[] = JSON.parse(
    fs.readFileSync(process.cwd() + "/data/timetable.json", "utf-8")
  );

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
        <div className={styles.date}>5-18 Августа</div>

        <div className={styles.description}>
          Мы, представляющие команду радиолюбителей, в очередной раз хотим
          анонсировать новую экспедицию на прекрасный остров Шикотан, чтобы
          расширить границы нашей связи и погрузиться в мир приключений!
        </div>
      </section>

      <section className={styles.section3}>
        <h1>Наши предыдущие экспедиции →</h1>

        <div className={styles.expeditions}>
          <div className={styles.expedition}>RI0F</div>
          <div className={styles.expedition}>RI0FS&quot;16</div>
          <div className={styles.expedition}>RI0Z</div>
          <div className={styles.expedition}>RI0FF</div>
        </div>
      </section>

      <section className={styles.nav}>
        <NavCard
          name={"Расписание"}
          imageLink={"/timetable.jpg"}
          imageAlt={"timetable"}
          url={"/#timetable"}
        />

        <NavCard
          name={"Команда"}
          imageLink={"/timetable.jpg"}
          imageAlt={"timetable"}
          url={"/#team"}
        />

        <NavCard
          name={"Оборудование"}
          imageLink={"/equipment.jpg"}
          imageAlt={"equipment"}
          url={"/#equipment"}
        />
      </section>

      <section className={styles.section4}>
        <div className={styles.heading}>
          <HeadingCard title={"Наш опыт"} />
        </div>

        <div className={styles.description1}>
          <p>
            С 2014 года наша команда активно организует экспедиции на Дальнем
            Востоке, включая удивительные Курильские острова, такие как Анучина,
            Шикотан, Итуруп, а также труднодоступный остров Беринга,
            расположенный неподалеку от полуострова Камчатка.
          </p>
        </div>

        <div className={styles.experiences}>
          <div className={styles.experience}>
            <div>
              <h1>9+</h1>
              <p>Лет проводим экспедиции</p>
            </div>
          </div>

          <div className={styles.experience}>
            <h1>5+</h1>
            <p>Экспедиций на дальнем востоке</p>
          </div>

          <div className={styles.experience}>
            <h1>50+</h1>
            <p>Экспедиций по миру</p>
          </div>

          <div className={styles.experience}>
            <h1>2</h1>
            <p>Пострадавшие антенны :D</p>
          </div>
        </div>
      </section>

      <section className={styles.section5} id={"timetable"}>
        <div className={styles.heading}>
          <HeadingCard title={"Расписание"} />
        </div>

        <div className={styles.timetable}>
          {timetable.map((day, i) => (
            <TimetableCard
              title={day.title}
              description={day.description}
              key={i}
            />
          ))}
        </div>
      </section>

      <section className={styles.section6} id={"equipment"}>
        <div className={styles.heading}>
          <HeadingCard title={"Оборудование"} />
        </div>

        <div className={styles.equipment}>
          <EquipmentCard title={"Антенны"}>
            <p>DX-77</p>
            <p>AD-223</p>
            <p>Вертикал 30/40</p>
          </EquipmentCard>

          <EquipmentCard title={"Трансиверы"}>
            <p>icom-3000</p>
            <p>icom-765</p>
          </EquipmentCard>

          <EquipmentCard title={"Усилитель"}>
            <p>acom-1000</p>
          </EquipmentCard>
        </div>
      </section>

      <section className={styles.section7} id={"team"}>
        <div className={styles.heading}>
          <HeadingCard title={"Команда"} />
        </div>

        <div className={styles.goodTeam}>
          <h1>
            Хорошая команда - гордость каждого радиолюбителя, который
            присоединился к нашим захватывающим экспедициям.
          </h1>
        </div>
        <div className={styles.ourMembers}>
          <p>
            Наши участники - настоящие профессионалы, объединенные любовью к
            радиолюбительству. С их помощью каждая экспедиция становится
            незабываемым приключением, которым мы готовы поделиться с вами.
          </p>
        </div>

        <div className={styles.members}>
          {teamMembers.map((member, i) => (
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

      <section className={styles.section8}>
        <div className={styles.heading}>
          <HeadingCard title="Связь с нами" />
        </div>

        <div className={styles.info}>
          <p>
            Вы можете связаться с нашей командой экспедиции, а также следить за
            новостями на сайте и социальных сетях, чтобы узнать больше о нашем
            путешествии. Мы всегда рады общению с единомышленниками и любителями
            радиолюбительства.
          </p>
        </div>
        <div className={styles.info}>
          <p>
            <a href="mailto:das@das.ru">
              <span>das@das.ru</span>
            </a>
          </p>
        </div>

        <div className={styles.socialMedia}>
          <a href="">Telegram ↗</a>
          <a href="">Twitter* ↗</a>

          <span>*Запрещен в РФ</span>
        </div>
      </section>
    </main>
  );
}
