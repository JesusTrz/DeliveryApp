import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  HiArrowLeft,
  HiPlus,
  HiMinus,
  HiCheckCircle,
  HiOutlineCreditCard,
  HiOutlineDevicePhoneMobile,
} from 'react-icons/hi2'
import { IoBagCheckOutline } from 'react-icons/io5'
import { useCart } from '../../context/CartContext'
import './Cart.css'

const DELIVERY_FEE = 25
const PAYMENT_METHODS = [
  { id: 'card',   icon: <HiOutlineCreditCard size={22} />,        label: 'Tarjeta de crédito/débito' },
  { id: 'wallet', icon: <HiOutlineDevicePhoneMobile size={22} />, label: 'Pago móvil' },
  { id: 'cash',   icon: <span style={{ fontSize: '20px' }}>💵</span>, label: 'Efectivo' },
]

const ERROR_ID   = 'req_7x2Kp9mNqA3dR'
const ERROR_TIME = new Date().toISOString()

function Cart() {
  const navigate = useNavigate()
  const { items, addItem, removeItem, clearCart, totalItems, subtotal } = useCart()
  const [step, setStep]   = useState('cart')
  const [method, setMethod] = useState('card')
  const [fixed, setFixed]   = useState(false)

  const total = subtotal + DELIVERY_FEE

  function handleConfirm() {
    setStep('processing')
    if (fixed) {
      setTimeout(() => setStep('success'), 2000)
    } else {
      setTimeout(() => setStep('error'), 2000)
    }
  }

  function handleBackHome() {
    clearCart()
    navigate('/home')
  }

  if (step === 'success') {
    return (
      <div className="cart-page">
        <div className="success-screen">
          <HiCheckCircle size={80} className="success-icon" />
          <h2>¡Pedido confirmado!</h2>
          <p>Tu pedido está siendo preparado y llegará pronto a tu puerta.</p>
          <div className="success-eta">
            <span className="eta-label">Tiempo estimado de entrega</span>
            <span className="eta-time">30–40 min</span>
          </div>
          <button className="btn-back-home" onClick={handleBackHome}>
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  if (step === 'processing') {
    return (
      <div className="cart-page">
        <div className="processing-screen">
          <div className="spinner" />
          <p>Procesando tu pago…</p>
        </div>
      </div>
    )
  }

  if (step === 'error') {
    return (
      <div className="cart-page">
        <div className="error-screen">
          <div className="error-browser-bar">
            <span className="browser-dot red" />
            <span className="browser-dot yellow" />
            <span className="browser-dot green" />
            <span className="browser-url">api.quickdrop.mx/v1/payments/checkout</span>
          </div>
          <div className="error-body">
            <p className="error-code">404</p>
            <h2 className="error-title">Payment Endpoint Not Found</h2>
            <p className="error-subtitle">
              The requested payment gateway could not be located on this server.
            </p>
            <div className="error-trace">
              <p className="trace-line"><span className="trace-key">Status:</span> <span className="trace-red">404 Not Found</span></p>
              <p className="trace-line"><span className="trace-key">Request ID:</span> {ERROR_ID}</p>
              <p className="trace-line"><span className="trace-key">Timestamp:</span> {ERROR_TIME}</p>
              <p className="trace-line"><span className="trace-key">Method:</span> POST</p>
              <p className="trace-line"><span className="trace-key">Path:</span> /v1/payments/checkout</p>
              <p className="trace-line trace-divider" />
              <p className="trace-line"><span className="trace-key">Error:</span> <span className="trace-red">ROUTE_NOT_REGISTERED</span></p>
              <p className="trace-line"><span className="trace-key">Detail:</span> No handler matched the route pattern</p>
              <p className="trace-line"><span className="trace-key">Suggestion:</span> Verify endpoint configuration</p>
            </div>
            <button className="btn-retry" onClick={() => setStep('paying')}>
              ← Reintentar pago
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-header">
          <button className="cart-back" onClick={() => navigate(-1)}>
            <HiArrowLeft size={20} />
          </button>
          <h1>Mi carrito</h1>
        </div>
        <div className="cart-empty">
          <IoBagCheckOutline size={64} className="empty-bag-icon" />
          <h2>Tu carrito está vacío</h2>
          <p>Agrega platillos desde la sección de explorar</p>
          <button className="btn-explore" onClick={() => navigate('/search')}>
            Explorar comidas
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <button className="cart-back" onClick={() => navigate(-1)}>
          <HiArrowLeft size={20} />
        </button>
        <h1>Mi carrito</h1>
        <span className="cart-count">{totalItems} {totalItems === 1 ? 'item' : 'items'}</span>
      </div>

      <div className="cart-items">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-thumb">{item.emoji}</div>
            <div className="item-info">
              <p className="item-name">{item.name}</p>
              <p className="item-restaurant">{item.restaurant}</p>
              <p className="item-unit-price">{item.price} c/u</p>
            </div>
            <div className="item-controls">
              <button className="qty-btn minus" onClick={() => removeItem(item.id)}>
                <HiMinus size={14} />
              </button>
              <span className="item-qty">{item.qty}</span>
              <button className="qty-btn plus" onClick={() => addItem(item)}>
                <HiPlus size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="summary-row">
          <span>Envío</span>
          <span>${DELIVERY_FEE}</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      <div className="cart-footer">
        <button className="btn-pay" onClick={() => setStep('paying')}>
          Proceder al pago · ${total}
        </button>
      </div>

      {step === 'paying' && (
        <div className="payment-overlay" onClick={() => setStep('cart')}>
          <div className="payment-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-handle" />
            <h2>¿Cómo quieres pagar?</h2>

            <div className="payment-methods">
              {PAYMENT_METHODS.map((m) => (
                <div
                  key={m.id}
                  className={`payment-method${method === m.id ? ' selected' : ''}`}
                  onClick={() => setMethod(m.id)}
                >
                  <span className="method-icon">{m.icon}</span>
                  <span className="method-label">{m.label}</span>
                  <span className={`method-check${method === m.id ? ' checked' : ''}`}>
                    {method === m.id ? '✓' : ''}
                  </span>
                </div>
              ))}
            </div>

            <div className="payment-total">
              <span>Total a pagar</span>
              <span>${total}</span>
            </div>

            <label className="fix-checkbox">
              <input
                type="checkbox"
                checked={fixed}
                onChange={(e) => setFixed(e.target.checked)}
              />
              <span className="fix-checkmark">{fixed ? '✓' : ''}</span>
              <div className="fix-label">
                <span className="fix-title">Solución: Activar gateway alternativo</span>
                <span className="fix-desc">Registra la ruta <code>/v1/payments/checkout</code> en el servidor</span>
              </div>
            </label>

            <button className="btn-confirm" onClick={handleConfirm}>
              Confirmar pedido
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
