import { createHashRouter, RouterProvider } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import Search from './views/Search/Search'
import Orders from './views/Orders/Orders'
import Profile from './views/Profile/Profile'
import Cart from './views/Cart/Cart'

const router = createHashRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/orders',
    element: <Orders />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
])

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
