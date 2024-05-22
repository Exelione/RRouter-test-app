import { useActionData, useLoaderData, useNavigate, useNavigation, /*useParams*/ } from "react-router-dom"
import { useAuth } from "../hook/useAuth";
import UpdatePost from "../components/UpdatePost";


const EditPost = () => {
    // const {id}=useParams();
    const data = useActionData();
    const { post, id} = useLoaderData();
    const {signOut} = useAuth();
    const navigate = useNavigate();
    const navigation = useNavigation();
    const goBack = () => navigate(-1)

  return (
    
    <div>
      <button onClick={goBack}>go back</button>
      {data?.message && <div style={{color: 'blue'}}>{data.message}</div>}
     <h1> EditPost {id}</h1>
     <UpdatePost {...post} submitting={navigation.state === 'submitting'} />
      <button onClick={()=>signOut(()=>navigate('/',{replace: true}))}>Signout</button>
    </div>
    
  )
}
const updatePost = async (post)=>{
  
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.get('id')}`, {
        method: 'PUT',
        body: post
    })
    console.log(res)
    return res.json()
}
export const updatePostAction = async ({request}) => {
  const formData = await request.formData();
  if(!formData.get('title') || !formData.get('body')){
    return {message: 'All fields are required!'}
  }
  const updatedPost = await updatePost(formData)
  
  return { message: `Post ${updatedPost.id} was successfully updated`}
}

export default EditPost