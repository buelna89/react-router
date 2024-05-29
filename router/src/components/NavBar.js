import { useState } from "react"
import { Link, Outlet } from "react-router-dom"
import darkletters from "../assets/darkletters.png"

const NavBar = () => {
    
    //I am declaring a state variable being menuOpen
    //1st variable(menuOPEN) is initialized to false
    //2nd variable(setMenuOpen) is to Update the state later
    const[menuOpen, setMenuOpen] = useState(false)
    
    //used to Update/Switch the State of menuOpen
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return(
    <>
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <Link to="/"className="logo">
                Mangata&Gallo
            </Link>
        <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"/>
            <div className="bar"/>
            <div className="bar"/>
        </div>
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <Link to="/Home">Home</Link>                    
                </li>
                <li>
                    <Link to="/About">About Us</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>
    )
}

export default NavBar;
