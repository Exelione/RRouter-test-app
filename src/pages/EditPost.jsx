import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../hook/useAuth";


const EditPost = () => {
    const {id}=useParams();
    const {signOut} = useAuth();
    const navigate = useNavigate();

  return (
    <div>
      EditPost {id}
      <button onClick={()=>signOut(()=>navigate('/',{replace: true}))}>Signout</button>
    </div>
    
  )
}

export default EditPost