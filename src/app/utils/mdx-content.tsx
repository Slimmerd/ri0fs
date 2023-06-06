"use client"; // This is required!

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";
import styles from "../mdx.module.scss";
import Link from "next/link";

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} passHref className={styles.a}>
        <a {...props} />
      </Link>
    );
  }

  return <a {...props} className={styles.a} />;
};

const CustomImage = (props: any) => {
  return (
    <div className={styles.img}>
      <img {...props} />
    </div>
  );
};

/** Place your custom MDX components here */
const MdxComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 {...props} className={styles.h1} />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 {...props} className={styles.h2} />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 {...props} className={styles.h3} />
  ),
  h4: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h4 {...props} className={styles.h4} />
  ),
  h5: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h5 {...props} className={styles.h5} />
  ),
  h6: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h6 {...props} className={styles.h6} />
  ),
  p: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <p {...props} className={styles.p} />
  ),
  a: CustomLink,
  img: CustomImage,
};

export function MdxContent({ source }: MdxContentProps) {
  return <MDXRemote {...source} components={MdxComponents} />;
}
