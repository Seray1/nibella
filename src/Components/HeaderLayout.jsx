import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function HeaderLayout() {
  return (
    <>
      <header className="flex justify-between p-4">
        <div>
          <Link className="text-xl font-bold" to="/">
            Nibella
          </Link>
        </div>
        <div className="flex gap-8 text-xl">
          <NavLink
            to="/notification"
            className={({ isActive }) => (isActive ? 'text-purple-500' : null)}
          >
            <div className="flex">
              <i className="fa-solid fa-bell self-end"></i>
              <span className="hidden lg:flex">notification</span>
            </div>
          </NavLink>
          <NavLink
            to="cart"
            className={({ isActive }) => (isActive ? 'text-purple-500' : null)}
          >
            <div className="flex">
              <i className="fa-solid fa-cart-shopping self-end"></i>
              <span className="hidden lg:flex">cart</span>
            </div>
          </NavLink>
          <NavLink
            to="favourite"
            className={({ isActive }) => (isActive ? 'text-purple-500' : null)}
          >
            <div className="flex">
              <i className="fa-solid fa-heart self-end"></i>
              <span className="hidden lg:flex">favourite</span>
            </div>
          </NavLink>
          <NavLink
            to="search"
            className={({ isActive }) => (isActive ? 'text-purple-500' : null)}
          >
            <div className="flex">
              <i className="fa-solid fa-magnifying-glass self-end"></i>
              <span className="hidden lg:flex">search</span>
            </div>
          </NavLink>
          <NavLink
            to="navbar"
            className={({ isActive }) => (isActive ? 'text-purple-500' : null)}
          >
            <i className="fa-solid fa-bars"></i>
          </NavLink>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default HeaderLayout
