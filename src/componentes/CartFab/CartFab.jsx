import { useNavigate } from 'react-router-dom'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { useCart } from '../../context/CartContext'
import './CartFab.css'

function CartFab() {
  const { totalItems, subtotal } = useCart()
  const navigate = useNavigate()

  if (totalItems === 0) return null

  return (
    <button className="cart-fab" onClick={() => navigate('/cart')}>
      <HiOutlineShoppingBag size={20} className="fab-bag-icon" />
      <span className="fab-text">${subtotal} · Ver carrito</span>
      <span className="fab-badge">{totalItems}</span>
    </button>
  )
}

export default CartFab
