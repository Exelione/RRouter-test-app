import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { CustomButton } from "../components/CustomButton";




const SinglePage = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [post, setPost] = useState([]);

    const goBack = () => navigate(-1)


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])
    return (

        <div>
            {post && (
                <>
                    <button onClick={goBack}>go back</button>
                    <CustomButton to={'/'}>go home</CustomButton>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>Edit this post</Link>
                    
                </>
            )}
        </div>

    )
}
export { SinglePage }