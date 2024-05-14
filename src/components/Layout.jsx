import { Outlet } from "react-router-dom"
import { CustomLink } from "./CustomLink"

// const setActive = ({ isActive }) => isActive ? 'active-link' : '' 


// const setActive = ({isActive}) => ({color: isActive? 'var(--color-active)':'lightblue'})
export const Layout = () => {
    return (
        <>
            <header>
                <CustomLink to="/">Home</CustomLink >
                <CustomLink  to="/posts">Blog</CustomLink >
                <CustomLink  to="/about">About</CustomLink >



                {/* <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
                <NavLink to="/posts" className={({ isActive }) => isActive ? 'active-link' : ''}>Blog</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink> */}


                {/* <NavLink to="/" style={setActive}>Home</NavLink>
                <NavLink to="/posts" style={setActive}>Blog</NavLink>
                <NavLink to="/about" style={setActive}>About</NavLink> */}
            </header>
            <main className="container">
                <Outlet />
            </main>


            <footer>&copy; Epsilone Lab 2024</footer>
        </>
    )
}