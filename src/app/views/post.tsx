import {MdxContent} from "@/app/utils/mdx-content";
import {PostT} from "@/app/news/[slug]/page";

export default function Home({data}: { data: PostT }) {

    return (
        <div style={{maxWidth: 600, margin: "auto"}}>
            <h1>{data.title}</h1>
            <p>Published {data.date}</p>
            <hr/>
            <MdxContent source={data.content}/>
        </div>
    );
}
