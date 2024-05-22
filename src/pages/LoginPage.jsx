import {useLocation, useNavigate} from 'react-router-dom';
import { useAuth } from '../hook/useAuth';



export const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signIn} = useAuth();
    const fromPage = location.state?.from?.pathname || '/';
    const goBack = () => navigate(-1)
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;
        signIn(user, ()=>navigate(fromPage, {replace: true}))
    }

  return (
    <div>
        <button onClick={goBack}>go back</button>
        <h1>Login page</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input name='username'/>
            </label>
            <button type="submit">Login</button>

        </form>
    </div>
  )
}
