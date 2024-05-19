import { Await, Link, defer, useLoaderData, useSearchParams } from "react-router-dom";
import { CustomButton } from "../components/CustomButton";
import { BlogFilter } from "../components/BlogFilter";
import { Suspense } from "react";

const BlogPage = () => {
    const { posts } = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('post') || '';

    const latest = searchParams.has('latest');


    const startsFrom = latest ? 80 : 1;

    return (
        <div>
            <h1>Lorem ipsum dolor sit amet</h1>
            <BlogFilter setSearchParams={setSearchParams} latest={latest} postQuery={postQuery} />
            <CustomButton to={'/posts/new'}>add a post</CustomButton>

            <Suspense fallback={<h2>Loading...</h2>}>
                <Await resolve={posts}>
                    {
                        (resolvedPosts) => (
                            <>
                                {
                                    resolvedPosts.filter(
                                        post => post.title.includes(postQuery) && post.id >= startsFrom
                                    ).map(post => (
                                        <Link key={post.id} to={`/posts/${post.id}`}>

                                            <li>{post.title}</li>


                                        </Link>
                                    ))}
                            </>
                        )
                    }
                </Await>
            </Suspense>


        </div>
    )
}
async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json()
}
const BlogLoader = async () => {
    return defer({
        posts: getPosts()
    })


}
export { BlogPage, BlogLoader }