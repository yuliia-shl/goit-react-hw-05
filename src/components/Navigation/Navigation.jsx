import { NavLink } from "react-router-dom"
import s from "./Navigation.module.css"
import clsx from "clsx"
import "../App.css"

const buildLinkClass = ({ isActive }) => {
  return clsx("link", isActive && "active")
}

const Navigation = () => {
  return (
    <>
      <nav className={s.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
          Movies
        </NavLink>
      </nav>
    </>
  )
}

export default Navigation
