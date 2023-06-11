import React from "react";
import styles from "./NewsCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/app/utils/api-helpers";

export interface NewsCardI {
  article: {
    slug: string;
    img: string;
    date: string;
    title: string;
  };
}

const NewsCard: React.FC<NewsCardI> = ({ article }) => {
  return (
    <div className={styles.main}>
      <Link href={`news/${article.slug}`}>
        <div className={styles.imgWrapper}>
          {article.img ? (
            <Image src={article.img} alt={"Post Image"} fill />
          ) : (
            <Image src={"/assets/stab.jpg"} alt={"stab"} fill />
          )}
        </div>
        <p className="">{formatDate(article.date)}</p>
        <h1 className="">{article.title}</h1>
      </Link>
    </div>
  );
};

export default NewsCard;
