import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from '../../redux/cartSlice'

function Cart() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleRemoveCart = (product) => {
    dispatch(removeFromCart(product))
  }
  const handleIncreaseQuantity = (product) => {
    dispatch(increaseQuantity(product))
  }

  const handleDecreaseQuantity = (product) => {
    dispatch(decreaseQuantity(product))
  }

  const total = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  )

  return (
    <div>
      <div>
        <Link to="/">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        {cart.length === 0 ? (
          <p>No items in your cart.</p>
        ) : (
          <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {cart.map((product) => (
                <li
                  key={product.id}
                  className="bg-gray-100 rounded-lg shadow-md p-4 flex gap-4"
                >
                  <img
                    src={product.image}
                    alt=""
                    className="w-40 h-40 mx-auto"
                  />
                  <div className="flex flex-col gap-2">
                    <i
                      className="fa-solid fa-times self-end cursor-pointer"
                      onClick={() => handleRemoveCart(product)}
                    ></i>
                    <div>{product.title.slice(0, 20)}</div>
                    <div>Price: ${product.price}</div>
                    <div className=" flex justify-between">
                      <button
                        className="  rounded-full shadow-lg shadow-black p-1 "
                        onClick={() => handleIncreaseQuantity(product)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <div className="flex flex-col">
                        <span className="self-center">{product.quantity}</span>
                        <span>quantity</span>
                      </div>
                      <button
                        className="  rounded-full shadow-lg shadow-black p-1 "
                        onClick={() => handleDecreaseQuantity(product)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="grid justify-center items-center mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4 transition duration-300 ease-in-out">
                Proceed to Checkout Total Price: ${total.toFixed(2)}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
