import React from 'react';
import Post from '@/app/views/post';
import type {Metadata} from 'next';
import {getAllPosts, getPostBySlug, Items} from "@/app/utils/fetch-api";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemoteSerializeResult} from "next-mdx-remote";

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
    const data = await getAllPosts(['title', 'slug', 'public', 'date']);

    return data.map((post) => ({
        slug: post.slug,
    }));
}


export type PostT = {
    slug: string,
    title: string,
    date: string,
    content: MDXRemoteSerializeResult;
};

async function getPost(data: Items)
    : Promise<PostT> {

    const serialized = await serialize(data.content, {});

    return {
        date: data.date, slug: data.slug, title: data.title,
        content: serialized
    };
}


export default async function PostRoute({params}: { params: { slug: string } }) {
    const {slug} = params;
    const data = await getPostBySlug(slug, ['title',
        'date',
        'slug',
        'public',
        'content',]);

    const newData = await getPost(data);


    if (data === null) return <h2>no post found</h2>;
    return <Post data={newData}/>;
}