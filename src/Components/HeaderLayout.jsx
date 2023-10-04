import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

import { useSelector } from 'react-redux'

function HeaderLayout() {
  const favoritesItems = useSelector((state) => state.favorites)
  const cartItems = useSelector((state) => state.cart)
  return (
    <>
      <header className="flex justify-between p-4 fixed w-full bg-white z-9999">
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
            className={({ isActive }) =>
              isActive ? 'text-purple-500 relative' : 'relative'
            }
          >
            <div className="flex">
              {cartItems.length < 1 ? null : (
                <div className="bg-red-700 text-white p-1 h-6 text-xs w-6 rounded-full flex justify-center absolute lg:-left-5 lg:top-0 -top-3 -left-4  items-center">
                  <div>{cartItems.length}</div>
                </div>
              )}
              <i className="fa-solid fa-cart-shopping self-end"></i>
              <span className="hidden lg:flex">cart</span>
            </div>
          </NavLink>
          <NavLink
            to="favourite"
            className={({ isActive }) =>
              isActive ? 'text-purple-500 relative' : 'relative'
            }
          >
            <div className="flex ">
              {favoritesItems.length < 1 ? null : (
                <div className="bg-red-700 text-white p-1 h-6 text-xs w-6 rounded-full flex justify-center absolute lg:-left-5 lg:top-0 -top-3 -left-4  items-center">
                  <div>{favoritesItems.length}</div>
                </div>
              )}
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
