import { useNavigate, useLocation } from 'react-router-dom'
import {
  HiOutlineHome,
  HiOutlineMagnifyingGlass,
  HiOutlineUser,
} from 'react-icons/hi2'
import { IoReceiptOutline } from 'react-icons/io5'
import './BottomNav.css'

const navItems = [
  { icon: HiOutlineHome,             label: 'Inicio',   path: '/home' },
  { icon: HiOutlineMagnifyingGlass,  label: 'Explorar', path: '/search' },
  { icon: IoReceiptOutline,          label: 'Pedidos',  path: '/orders' },
  { icon: HiOutlineUser,             label: 'Perfil',   path: '/profile' },
]

function BottomNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const isActive = pathname === item.path
        const Icon = item.icon
        return (
          <button
            key={item.path}
            className={`nav-item${isActive ? ' active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            <Icon size={24} className="nav-icon" />
            <span className="nav-label">{item.label}</span>
            {isActive && <span className="nav-dot" />}
          </button>
        )
      })}
    </nav>
  )
}

export default BottomNav
