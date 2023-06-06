import { getAllPosts } from "@/app/utils/fetch-api";
import styles from "./page.module.scss";
import { montserrat } from "../utils/fonts";
import NewsCard, { NewsCardI } from "../components/news/NewsCard/NewsCard";

export default async function CategoryRoute() {
  const data = await getAllPosts(["title", "slug", "public", "date", "img"]);

  //TODO: CREATE A COMPONENT FOR THIS
  if (data.length === 0) return <div>Not Posts In this category</div>;

  // const {name, description} = data[0]?.attributes.category.data.attributes;

  return (
    <div className={`${styles.main} ${montserrat.variable}`}>
      {data.map((article, i) => (
        <NewsCard article={article as NewsCardI["article"]} key={i} />
      ))}
    </div>
  );
}
