import {getAllPosts} from '@/app/utils/fetch-api';
import BlogList from '@/app/views/blog-list';

export default async function CategoryRoute() {
    const data = await getAllPosts(['title', 'slug', 'public', 'date']);

    //TODO: CREATE A COMPONENT FOR THIS
    if (data.length === 0) return <div>Not Posts In this category</div>;

    // const {name, description} = data[0]?.attributes.category.data.attributes;

    return (
        <div>
            <BlogList data={data}/>
        </div>
    );
}