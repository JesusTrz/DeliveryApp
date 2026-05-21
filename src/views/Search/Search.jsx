import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  HiArrowLeft,
  HiOutlineMagnifyingGlass,
  HiOutlineStar,
  HiPlus,
} from 'react-icons/hi2'
import { IoFastFoodOutline } from 'react-icons/io5'
import BottomNav from '../../componentes/BottomNav/BottomNav'
import CartFab from '../../componentes/CartFab/CartFab'
import { useCart } from '../../context/CartContext'
import './Search.css'

const allFoods = [
  { id: 1,  emoji: '🍕', bg: '#FFF0EB', name: 'Pizza Margarita',      restaurant: 'La Napolitana',    category: 'Pizza',    price: '$129', rating: '4.8' },
  { id: 2,  emoji: '🍕', bg: '#FFF0EB', name: 'Pizza Pepperoni',      restaurant: 'La Napolitana',    category: 'Pizza',    price: '$145', rating: '4.7' },
  { id: 3,  emoji: '🍔', bg: '#FFF7ED', name: 'Double Smash Burger',  restaurant: 'BurguerCraft',     category: 'Burger',   price: '$115', rating: '4.9' },
  { id: 4,  emoji: '🍔', bg: '#FFF7ED', name: 'Bacon Crispy Burger',  restaurant: 'BurguerCraft',     category: 'Burger',   price: '$125', rating: '4.6' },
  { id: 5,  emoji: '🌮', bg: '#FFFBEB', name: 'Tacos de Birria',      restaurant: 'El Güero Taquero', category: 'Tacos',    price: '$75',  rating: '4.7' },
  { id: 6,  emoji: '🌮', bg: '#FFFBEB', name: 'Tacos al Pastor',      restaurant: 'El Güero Taquero', category: 'Tacos',    price: '$65',  rating: '4.8' },
  { id: 7,  emoji: '🍣', bg: '#F0FEFF', name: 'Sushi Roll Especial',  restaurant: 'Sakura Sushi',     category: 'Sushi',    price: '$185', rating: '4.6' },
  { id: 8,  emoji: '🍣', bg: '#F0FEFF', name: 'Nigiri Salmón x8',     restaurant: 'Sakura Sushi',     category: 'Sushi',    price: '$165', rating: '4.9' },
  { id: 9,  emoji: '🍜', bg: '#FDF4FF', name: 'Ramen Tonkotsu',       restaurant: 'Noodle House',     category: 'Ramen',    price: '$145', rating: '4.8' },
  { id: 10, emoji: '🍜', bg: '#FDF4FF', name: 'Ramen Miso',           restaurant: 'Noodle House',     category: 'Ramen',    price: '$135', rating: '4.5' },
  { id: 11, emoji: '🥗', bg: '#F0FDF4', name: 'Bowl Verde Detox',     restaurant: 'Green Bowl',       category: 'Ensalada', price: '$95',  rating: '4.4' },
  { id: 12, emoji: '🥗', bg: '#F0FDF4', name: 'Ensalada César Pollo', restaurant: 'Green Bowl',       category: 'Ensalada', price: '$89',  rating: '4.6' },
  { id: 13, emoji: '🌯', bg: '#F5F3FF', name: 'Wrap de Pollo',        restaurant: 'Wrap & Go',        category: 'Otros',    price: '$85',  rating: '4.3' },
  { id: 14, emoji: '🍗', bg: '#FFF7ED', name: 'Alitas BBQ x10',       restaurant: 'WingZone',         category: 'Otros',    price: '$110', rating: '4.7' },
  { id: 15, emoji: '🥪', bg: '#FFFBEB', name: 'Torta Cubana',         restaurant: 'La Tortería',      category: 'Otros',    price: '$79',  rating: '4.5' },
  { id: 16, emoji: '🍟', bg: '#FFF7ED', name: 'Papas Gigantes',       restaurant: 'BurguerCraft',     category: 'Otros',    price: '$55',  rating: '4.4' },
]

const filters = ['Todos', 'Pizza', 'Burger', 'Tacos', 'Sushi', 'Ramen', 'Ensalada', 'Otros']

function Search() {
  const [query, setQuery]         = useState('')
  const [activeFilter, setFilter] = useState('Todos')
  const { addItem, items }        = useCart()
  const navigate                  = useNavigate()
  const inputRef                  = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function getQty(id) {
    return items.find(i => i.id === id)?.qty ?? 0
  }

  const visible = allFoods.filter((food) => {
    const matchFilter = activeFilter === 'Todos' || food.category === activeFilter
    const matchQuery  = food.name.toLowerCase().includes(query.toLowerCase()) ||
                        food.restaurant.toLowerCase().includes(query.toLowerCase())
    return matchFilter && matchQuery
  })

  return (
    <div className="search-page">
      <div className="search-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <HiArrowLeft size={20} />
        </button>
        <h1>Explorar</h1>
      </div>

      <div className="search-bar-wrap">
        <HiOutlineMagnifyingGlass size={18} className="s-icon" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar platillo o restaurante…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="filter-scroll">
        {filters.map((f) => (
          <button
            key={f}
            className={`filter-chip${activeFilter === f ? ' active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="results-bar">
        <span className="results-title">Resultados</span>
        <span className="results-count">{visible.length} platillos</span>
      </div>

      {visible.length > 0 ? (
        <div className="food-grid">
          {visible.map((food) => {
            const qty = getQty(food.id)
            return (
              <div key={food.id} className="food-card">
                <div className="food-thumb" style={{ background: food.bg }}>
                  <span>{food.emoji}</span>
                </div>
                <div className="food-body">
                  <p className="food-name">{food.name}</p>
                  <p className="food-restaurant">{food.restaurant}</p>
                  <div className="food-footer">
                    <div>
                      <p className="food-price">{food.price}</p>
                      <p className="food-rating">
                        <HiOutlineStar size={11} className="star-icon" />
                        {food.rating}
                      </p>
                    </div>
                    <button className="add-btn" onClick={() => addItem(food)}>
                      {qty > 0 ? <span className="qty-num">{qty}</span> : <HiPlus size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="no-results">
          <IoFastFoodOutline size={56} className="no-icon" />
          <p>No encontramos platillos{query ? ` para "${query}"` : ''}</p>
        </div>
      )}

      <CartFab />
      <BottomNav />
    </div>
  )
}

export default Search
