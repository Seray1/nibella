import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromFavorites, clearFavorites } from '../../redux/favouriteSlice'
import {
  addToCart,
  removeFromCart,
  increaseQuantity,
} from '../../redux/cartSlice'

function Favourite() {
  const favorites = useSelector((state) => state.favorites)
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  const handleRemoveFavorite = (product) => {
    dispatch(removeFromFavorites(product)) // Dispatch action to remove from favorites
  }
  const handleClearFavorites = () => {
    dispatch(clearFavorites()) // Dispatch action to clear favorites
  }
  const handleAddToCart = (product) => {
    const cartProduct = cart.find((item) => item.id === product.id)
    if (cartProduct) {
      // If the product is already in the cart, increase the quantity
      dispatch(increaseQuantity(cartProduct))
    } else {
      // If not, add the product to the cart with a quantity of 1
      dispatch(addToCart({ ...product, quantity: 1 }))
    }
  }

  return (
    <div className="pt-32">
      {/* <h2>Your Favorites</h2> */}
      <div>
        <Link to="/">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        {favorites.length === 0 ? (
          <p>No items in your favorites.</p>
        ) : (
          <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {favorites.map((product) => (
                <li
                  key={product.id}
                  className="bg-gray-100 rounded-lg shadow-md p-4 flex gap-4"
                >
                  <img
                    src={product.image}
                    alt=""
                    className="w-40 h-40 mx-auto md:w-1/3 md:h-1/3"
                  />
                  <div className="flex flex-col gap-2">
                    {/* Use a different icon for "X" or customize it */}
                    <i
                      className="fa-solid fa-times self-end cursor-pointer"
                      onClick={() => handleRemoveFavorite(product)}
                    ></i>
                    <div className="text-purple-500">
                      {product.title.slice(0, 20)}
                    </div>
                    <div>Price: ${product.price}</div>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4 mt-4 transition duration-300 ease-in-out"
                      onClick={() => handleAddToCart(product)}
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="grid justify-center items-center mt-4">
              <button
                className="bg-red-500 rounded-lg p-2 text-white"
                onClick={handleClearFavorites}
              >
                clear favourites
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Favourite
