import { Await, Link, defer, useAsyncValue, useLoaderData, useNavigate } from "react-router-dom"
import { CustomButton } from "../components/CustomButton";
import { Suspense } from "react";

const Post =  () => {
    const post = useAsyncValue()
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>

            <h5>{post.comments}</h5>
        </>
    )
}
const Comments = () => {
    const comments = useAsyncValue();
    return(
        <div>
            <h2>Comments</h2>
            {comments.map(comment =>(
                <>
                <h3>{comment.email}</h3>
                <h4>{comment.name}</h4>
                <p>{comment.body}</p>
                </>
            ))}
        </div>
    )
}

const SinglePage = () => {

    const navigate = useNavigate();
    const { post, id, comments } = useLoaderData()

    const goBack = () => navigate(-1)



    return (
        <div>
            <button onClick={goBack}>go back</button>

            <CustomButton to={'/'}>go home</CustomButton>
            <Suspense fallback={<h2>Post is loading...</h2>}>
                <Await resolve={post}>
                    <Post/>
                </Await>
            </Suspense>
            <Suspense fallback={<h2>Comments is loading...</h2>}>
                <Await resolve={comments}>
                    <Comments/>
                </Await>
            </Suspense>
            <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </div>

    )

}
async function getSinglePostById(id) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}
async function getCommentsByPost(id) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    return res.json()
}

const SinglePostLoader = async ({ params }) => {
    const id = params.id
    return defer ({ post: await getSinglePostById(id), id, comments:  getCommentsByPost(id) })



}
export { SinglePage, SinglePostLoader }