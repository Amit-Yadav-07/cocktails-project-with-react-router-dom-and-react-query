import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-center">
                <div className="logo">
                    <h2>Cocktails.</h2>
                </div>
                <ul className="link-container">
                    <NavLink to={'/'} className="nav-link">home</NavLink>
                    <NavLink to={'/about'} className="nav-link">about</NavLink>
                    <NavLink to={'/newsletter'} className="nav-link">newsletter</NavLink>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar;