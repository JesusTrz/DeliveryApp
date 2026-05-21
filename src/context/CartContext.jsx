import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addItem(food) {
    setItems(prev => {
      const existing = prev.find(i => i.id === food.id)
      if (existing) {
        return prev.map(i => i.id === food.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...food, qty: 1 }]
    })
  }

  function removeItem(id) {
    setItems(prev => {
      const item = prev.find(i => i.id === id)
      if (item.qty === 1) return prev.filter(i => i.id !== id)
      return prev.map(i => i.id === id ? { ...i, qty: i.qty - 1 } : i)
    })
  }

  function clearCart() {
    setItems([])
  }

  const totalItems = items.reduce((sum, i) => sum + i.qty, 0)
  const subtotal   = items.reduce((sum, i) => sum + (Number(i.price.replace('$', '')) * i.qty), 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, totalItems, subtotal }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
