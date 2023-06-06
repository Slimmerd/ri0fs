import React from "react";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug, Items } from "@/app/utils/fetch-api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import styles from "./page.module.scss";
import { MdxContent } from "@/app/utils/mdx-content";
import { montserrat } from "@/app/utils/fonts";
import { formatDate } from "@/app/utils/api-helpers";
import remarkUnwrapImages from "remark-unwrap-images";
// async function getMetaData(slug: string) {
//     const response = await fetchAPI(path, urlParamsObject, options);
//     return response.data;
// }
//
// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//     const meta = await getMetaData(params.slug);
//     const metadata = meta[0].attributes.seo;
//
//     return {
//         title: metadata.metaTitle,
//         description: metadata.metaDescription,
//     };
// }

export async function generateStaticParams() {
  const data = await getAllPosts(["title", "slug", "public", "date", "author"]);

  return data.map((post) => ({
    slug: post.slug,
  }));
}

export type PostT = {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: MDXRemoteSerializeResult;
};

async function getPost(data: Items): Promise<PostT> {
  const serialized = await serialize(data.content, {
    mdxOptions: {
      remarkPlugins: [remarkUnwrapImages],
    },
  });

  return {
    date: data.date,
    slug: data.slug,
    title: data.title,
    author: data.author,
    content: serialized,
  };
}

export default async function PostRoute({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const data = await getPostBySlug(slug, [
    "title",
    "date",
    "author",
    "slug",
    "public",
    "content",
  ]);

  const newData = await getPost(data);

  if (data === null) return <h2>no post found</h2>;
  return (
    <div className={`${styles.main} ${montserrat.variable}`}>
      <section className={styles.heading}>
        <h1>{newData.title}</h1>

        <div className={styles.newsFooter}>
          <p>{formatDate(newData.date)}</p>
          <span>•</span>
          <p>{newData.author}</p>
        </div>
      </section>
      <section className={styles.content}>
        <MdxContent source={newData.content} />
      </section>
    </div>
  );
}
