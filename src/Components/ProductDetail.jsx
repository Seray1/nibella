import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
// import { getProducts } from '../api'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [id])

  if (!product) {
    // You can render a loading indicator here while fetching data
    return <div>Loading...</div>
  }

  console.log(id)
  console.log(product)
  return (
    <div>
      {product ? (
        <div className="flex flex-col w-full pt-32">
          <div>
            <Link to="/">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
          <div className="self-center w-1/2 justify-self-center">
            <img src={product.image} alt="" className="w-1/2" />
          </div>
          <div className="p-16">
            <div className="flex justify-between">
              <h1>{product.title}</h1>
              <p>Price: ${product.price}</p>
            </div>
            <p>Description: {product.description}</p>
          </div>
          <div>
            <button
              //   onClick={() => toggleCart(product)}
              className="px-4 py-2 mt-4 text-white transition duration-300 ease-in-out bg-blue-500 rounded-full hover:bg-blue-600"
            >
              <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default ProductDetail
