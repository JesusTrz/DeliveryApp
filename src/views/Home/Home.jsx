import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  HiOutlineMapPin,
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
  HiOutlineStar,
  HiOutlineClock,
  HiPlus,
} from 'react-icons/hi2'
import BottomNav from '../../componentes/BottomNav/BottomNav'
import CartFab from '../../componentes/CartFab/CartFab'
import { useCart } from '../../context/CartContext'
import './Home.css'

const categories = [
  { emoji: '🍕', name: 'Pizza', active: true },
  { emoji: '🍔', name: 'Burger' },
  { emoji: '🍣', name: 'Sushi' },
  { emoji: '🌮', name: 'Tacos' },
  { emoji: '🍜', name: 'Ramen' },
  { emoji: '🥗', name: 'Ensalada' },
]

const promos = [
  {
    id: 1,
    gradient: 'linear-gradient(120deg, #FF6B35 0%, #FF3C00 100%)',
    emoji: '🍕',
    badge: 'Oferta del día',
    title: '2x1 en Pizzas',
    sub: 'Solo hoy hasta las 9pm',
  },
  {
    id: 2,
    gradient: 'linear-gradient(120deg, #7C3AED 0%, #4F46E5 100%)',
    emoji: '🍔',
    badge: 'Nuevo',
    title: 'Smash Burger Especial',
    sub: 'Desde $89',
  },
  {
    id: 3,
    gradient: 'linear-gradient(120deg, #059669 0%, #10B981 100%)',
    emoji: '🥗',
    badge: 'Saludable',
    title: 'Bowl Verde · Envío gratis',
    sub: 'Sin costo de envío',
  },
]

const dishes = [
  { id: 1, emoji: '🍕', name: 'Pizza Margarita',    restaurant: 'La Napolitana',    rating: '4.8', time: '25 min', price: '$129' },
  { id: 2, emoji: '🍔', name: 'Double Smash Burger', restaurant: 'BurguerCraft',    rating: '4.9', time: '20 min', price: '$115' },
  { id: 3, emoji: '🌮', name: 'Tacos de Birria',    restaurant: 'El Güero Taquero', rating: '4.7', time: '15 min', price: '$75' },
  { id: 4, emoji: '🍣', name: 'Sushi Roll Especial', restaurant: 'Sakura Sushi',    rating: '4.6', time: '35 min', price: '$185' },
  { id: 5, emoji: '🍜', name: 'Ramen Tonkotsu',     restaurant: 'Noodle House',     rating: '4.8', time: '30 min', price: '$145' },
]

function Home() {
  const { addItem } = useCart()
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('Pizza')

  return (
    <div className="home-page">
      <div className="home-header">
        <div className="location-block">
          <span className="location-label">Entregar en</span>
          <div className="location-value">
            <HiOutlineMapPin size={16} className="pin-icon" />
            <span>Col. Centro, CDMX</span>
          </div>
        </div>
        <button className="bell-btn">
          <HiOutlineBell size={22} />
          <span className="bell-dot" />
        </button>
      </div>

      <div className="home-greeting">
        <h1>¡Hola! 👋</h1>
        <p>¿Qué se te antoja hoy?</p>
      </div>

      <div className="home-search" onClick={() => navigate('/search')}>
        <div className="search-bar-btn">
          <HiOutlineMagnifyingGlass size={18} className="search-icon" />
          <span className="search-placeholder">Busca platillos, restaurantes…</span>
        </div>
      </div>

      <div className="section">
        <p className="section-title">Categorías</p>
        <div className="categories-scroll">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.name
            return (
              <button
                key={cat.name}
                className={`category-pill${isActive ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat.name)}
              >
                <span className="cat-emoji">{cat.emoji}</span>
                <span className="cat-name">{cat.name}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="section">
        <p className="section-title">Ofertas del día</p>
        <div className="promos-scroll">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="promo-card"
              style={{ background: promo.gradient }}
            >
              <span className="promo-emoji">{promo.emoji}</span>
              <div className="promo-content">
                <span className="promo-badge">{promo.badge}</span>
                <p className="promo-title">{promo.title}</p>
                <p className="promo-sub">{promo.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section dishes-section">
        <p className="section-title">Populares cerca de ti</p>
        <div className="dishes-list">
          {dishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              <div className="dish-thumb">{dish.emoji}</div>
              <div className="dish-info">
                <p className="dish-name">{dish.name}</p>
                <p className="dish-restaurant">{dish.restaurant}</p>
                <div className="dish-meta">
                  <span className="meta-item">
                    <HiOutlineStar size={12} className="meta-icon star" />
                    {dish.rating}
                  </span>
                  <span className="meta-sep">·</span>
                  <span className="meta-item">
                    <HiOutlineClock size={12} className="meta-icon" />
                    {dish.time}
                  </span>
                </div>
              </div>
              <div className="dish-right">
                <span className="dish-price">{dish.price}</span>
                <button className="dish-add-btn" onClick={() => addItem(dish)}>
                  <HiPlus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CartFab />
      <BottomNav />
    </div>
  )
}

export default Home
