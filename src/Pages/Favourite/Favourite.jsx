import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link } from 'react-router-dom'

function Favourite() {
  const favorites = useSelector((state) => state.favorites)

  return (
    <div>
      <h2>Your Favorites</h2>
      <div>
        <Link to="/">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {favorites.map((product) => (
            <li
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 flex gap-4"
            >
              <img src={product.image} alt="" className="w-40 h-40 mx-auto" />
              <div className="flex flex-col gap-2">
                <i className="fa-solid fa-x self-end"></i>
                <div>{product.title.slice(0, 20)}</div>
                <div>Price: ${product.price}</div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4 mt-4 transition duration-300 ease-in-out">
                  Add to Cart <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Favourite
