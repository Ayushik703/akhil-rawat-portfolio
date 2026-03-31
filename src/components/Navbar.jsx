import { NavLink } from "react-router-dom"
import "./navbar.css"

export const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="nav-pill">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  )
}