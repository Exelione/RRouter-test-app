import { Link, Outlet } from "react-router-dom"

export const AboutPage = () => {
    return (
        <div>
            <h1>About us</h1>
            
            <p>This is a demo website about React-router-dom library.</p>
            <ul>
                <li><Link to={'team'}>Our team</Link></li>
                <li><Link to={'contacts'}>Contacts</Link></li>
            </ul>
            <Outlet/>
            {/* <Routes>
                <Route path="contacts" element={<p>Our contact</p>} />
                <Route path="team" element={<h1>Our team</h1>}/>
            </Routes> */}

        </div>
    )
}
