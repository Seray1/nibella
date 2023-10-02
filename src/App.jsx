import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import HeaderLayout from './Components/HeaderLayout'
import Home from './Components/Home'
import Notification from './Pages/Notifications/Notification'
import Cart from './Pages/Cart/Cart'
import Favourite from './Pages/Favourite/Favourite'
import Search from './Pages/Search/Search'
import Navbar from './Pages/Navbar/Navbar'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HeaderLayout />}>
      <Route index element={<Home />} />
      <Route path="notification" element={<Notification />} />
      <Route path="cart" element={<Cart />} />
      <Route path="favourite" element={<Favourite />} />
      <Route path="search" element={<Search />} />
      <Route path="navbar" element={<Navbar />} />
    </Route>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App
