import { getAllPosts } from "@/app/utils/fetch-api";
import styles from "./page.module.scss";
import { montserrat } from "@/app/utils/fonts";
import NewsCard, { NewsCardI } from "@/app/components/news/NewsCard/NewsCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новости",
  description: "Новости из экспедиции",
  openGraph: {
    title: "Новости",
    description: "Новости из экспедиции",
    images: "https://ri0fs.ru/assets/stab.jpg",
    type: "website",
  },
};

export default async function CategoryRoute() {
  const data = await getAllPosts(["title", "slug", "public", "date", "img"]);

  //TODO: CREATE A COMPONENT FOR THIS
  if (data.length === 0) return <div>Not Posts In this category</div>;

  // const {name, description} = data[0]?.attributes.category.data.attributes;

  return (
    <>
      <main className={`${styles.main} ${montserrat.variable}`}>
        {data.map((article, i) => (
          <NewsCard article={article as NewsCardI["article"]} key={i} />
        ))}
      </main>
    </>
  );
}
