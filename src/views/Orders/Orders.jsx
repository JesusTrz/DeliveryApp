import { useState } from 'react'
import { IoReceiptOutline } from 'react-icons/io5'
import BottomNav from '../../componentes/BottomNav/BottomNav'
import './Orders.css'

const activeOrders = [
  {
    id: 1,
    emoji: '🍕',
    name: 'Pizza Margarita',
    restaurant: 'La Napolitana',
    date: 'Hoy, 14:30',
    status: 'En camino',
    statusType: 'transit',
    price: '$129',
  },
]

const historyOrders = [
  {
    id: 2,
    emoji: '🍔',
    name: 'Double Smash Burger',
    restaurant: 'BurguerCraft',
    date: 'Ayer, 20:10',
    status: 'Entregado',
    statusType: 'delivered',
    price: '$115',
  },
  {
    id: 3,
    emoji: '🌮',
    name: 'Tacos de Birria x3',
    restaurant: 'El Güero Taquero',
    date: '15 may, 13:00',
    status: 'Entregado',
    statusType: 'delivered',
    price: '$75',
  },
]

function Orders() {
  const [tab, setTab] = useState('active')
  const orders = tab === 'active' ? activeOrders : historyOrders

  return (
    <div className="orders-page">
      <div className="orders-header">
        <div className="orders-header-title">
          <IoReceiptOutline size={22} className="receipt-icon" />
          <h1>Mis Pedidos</h1>
        </div>
      </div>

      <div className="orders-tabs">
        <button
          className={`tab-btn${tab === 'active' ? ' active' : ''}`}
          onClick={() => setTab('active')}
        >
          Activos
          {activeOrders.length > 0 && (
            <span className="tab-badge">{activeOrders.length}</span>
          )}
        </button>
        <button
          className={`tab-btn${tab === 'history' ? ' active' : ''}`}
          onClick={() => setTab('history')}
        >
          Historial
        </button>
      </div>

      <div className="orders-list">
        {orders.length === 0 ? (
          <div className="orders-empty">
            <IoReceiptOutline size={52} className="empty-receipt-icon" />
            <p>No hay pedidos {tab === 'active' ? 'activos' : 'en el historial'}</p>
          </div>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-thumb">{order.emoji}</div>
              <div className="order-info">
                <p className="order-name">{order.name}</p>
                <p className="order-restaurant">{order.restaurant}</p>
                <p className="order-date">{order.date}</p>
              </div>
              <div className="order-right">
                <span className="order-price">{order.price}</span>
                <span className={`order-status status-${order.statusType}`}>
                  <span className={`status-dot dot-${order.statusType}`} />
                  {order.status}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      <BottomNav />
    </div>
  )
}

export default Orders
