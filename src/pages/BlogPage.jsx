import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CustomButton } from "../components/CustomButton";
import { BlogFilter } from "../components/BlogFilter";

export const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('post') || '';

    const latest = searchParams.has('latest');
    
    
    const startsFrom = latest ? 80 : 1;
    
    // const handleSubmit = (event)=> {
    //     event.preventDefault();
    //     const form = event.target;
    //     const query = form.search.value;
    //     const isLatest = form.latest.checked;

    //     const params = {}

    //     if(query.length) params.post = query;
    //     if (isLatest) params.latest = true;

    //     setSearchParams(params)
    // }
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1>Lorem ipsum dolor sit amet</h1>
            <BlogFilter setSearchParams={setSearchParams} latest={latest} postQuery={postQuery}/>
            {/* <form autoComplete="off" onSubmit={handleSubmit}>
                <input placeholder={postQuery}type="search" name="search" />
                <label style={{padding: '0 1rem'}}>
                    <input type="checkbox" name="latest" /> New only
                </label>
                <input type="submit" value='Search' />
            </form> */}
            <CustomButton to={'/posts/new'}>add a post</CustomButton>
            {
                posts.filter(
                    post=>post.title.includes(postQuery) && post.id >= startsFrom
                ).map(post => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        
                        <li>{post.title}</li>
                        
                        
                    </Link>
                ))}
        </div>
    )
}
