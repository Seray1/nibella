import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/productSlice'
import { addToFavorites, removeFromFavorites } from '../redux/favouriteSlice'

function Home() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.products)
  const favorites = useSelector((state) => state.favorites)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const toggleFavorite = (product) => {
    const isFavorite = favorites.some(
      (favProduct) => favProduct.id === product.id
    )
    if (isFavorite) {
      dispatch(removeFromFavorites(product))
    } else {
      dispatch(addToFavorites(product))
    }
  }

  if (loading === 'pending') {
    return (
      <div className="spinner-parent">
        <div className="spinner"></div>
      </div>
    )
  }
  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {data.map((product) => {
        const isFavorite = favorites.some(
          (favProduct) => favProduct.id === product.id
        )
        return (
          <li key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <i
              className={`fa${isFavorite ? 's' : 'r'} fa-heart ${
                isFavorite ? 'text-red-500' : 'text-gray-500'
              }`}
              onClick={() => toggleFavorite(product)}
            />

            <img src={product.image} alt="" className="w-32 h-32 mx-auto" />
            <h2 className="text-xl font-semibold mt-2">
              {product.title.slice(0, 20)}
            </h2>
            <p className="text-gray-600 mt-1">Price: ${product.price}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4 mt-4 transition duration-300 ease-in-out">
              Add to Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default Home
