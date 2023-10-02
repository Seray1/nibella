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
          <NavLink to="/notification">
            <i className="fa-solid fa-bell"></i>
          </NavLink>
          <NavLink to="cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
          <NavLink to="favourite">
            <i className="fa-solid fa-heart"></i>
          </NavLink>
          <NavLink to="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </NavLink>
          <NavLink to="navbar">
            <i className="fa-solid fa-bars"></i>
          </NavLink>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default HeaderLayout
