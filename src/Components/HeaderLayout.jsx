import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

import { useSelector } from 'react-redux'

function HeaderLayout() {
  const favoritesItems = useSelector((state) => state.favorites)
  const cartItems = useSelector((state) => state.cart)
  return (
    <>
      <header className="fixed flex justify-between w-full p-4 bg-white shadow-sm z-9999 shadow-black">
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
              <i className="self-end fa-solid fa-bell"></i>
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
                <div className="absolute flex items-center justify-center w-6 h-6 p-1 text-xs text-white bg-red-700 rounded-full lg:-left-5 lg:top-0 -top-3 -left-4">
                  <div>{cartItems.length}</div>
                </div>
              )}
              <i className="self-end fa-solid fa-cart-shopping"></i>
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
                <div className="absolute flex items-center justify-center w-6 h-6 p-1 text-xs text-white bg-red-700 rounded-full lg:-left-5 lg:top-0 -top-3 -left-4">
                  <div>{favoritesItems.length}</div>
                </div>
              )}
              <i className="self-end fa-solid fa-heart"></i>
              <span className="hidden lg:flex">favourite</span>
            </div>
          </NavLink>
          <NavLink
            to="search"
            className={({ isActive }) => (isActive ? 'text-purple-500' : null)}
          >
            <div className="flex">
              <i className="self-end fa-solid fa-magnifying-glass"></i>
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
