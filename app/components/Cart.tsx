"use client"

import { useState } from "react"
import { Trash2, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "../context/CartContext"
import OrderConfirmation from "./OrderConfirmation"

export default function Cart() {
  const { cartItems, removeFromCart, getTotalPrice, getTotalItems, clearCart } = useCart()
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleConfirmOrder = () => {
    setShowConfirmation(true)
  }

  const handleStartNewOrder = () => {
    clearCart()
    setShowConfirmation(false)
  }

  if (showConfirmation) {
    return <OrderConfirmation onStartNewOrder={handleStartNewOrder} />
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-rose-600 mb-6">Your Cart ({getTotalItems()})</h2>
        <div className="text-center py-8">
          <div className="w-32 h-32 mx-auto mb-4 opacity-20">
            <svg viewBox="0 0 128 128" className="w-full h-full">
              <path
                fill="#C73B0F"
                d="M8.436 110.406c0 1.061.421 2.078 1.172 2.828.751.751 1.767 1.172 2.828 1.172h103.128c1.061 0 2.078-.421 2.828-1.172.751-.75 1.172-1.767 1.172-2.828 0-1.061-.421-2.078-1.172-2.828-.75-.751-1.767-1.172-2.828-1.172H12.436c-1.061 0-2.078.421-2.828 1.172-.751.75-1.172 1.767-1.172 2.828zM8.436 64c0 1.061.421 2.078 1.172 2.828.751.751 1.767 1.172 2.828 1.172h103.128c1.061 0 2.078-.421 2.828-1.172.751-.75 1.172-1.767 1.172-2.828 0-1.061-.421-2.078-1.172-2.828-.75-.751-1.767-1.172-2.828-1.172H12.436c-1.061 0-2.078.421-2.828 1.172-.751.75-1.172 1.767-1.172 2.828zM8.436 17.594c0 1.061.421 2.078 1.172 2.828.751.751 1.767 1.172 2.828 1.172h103.128c1.061 0 2.078-.421 2.828-1.172.751-.75 1.172-1.767 1.172-2.828 0-1.061-.421-2.078-1.172-2.828-.75-.751-1.767-1.172-2.828-1.172H12.436c-1.061 0-2.078.421-2.828 1.172-.751.75-1.172 1.767-1.172 2.828z"
              />
            </svg>
          </div>
          <p className="text-rose-500 font-medium">Your added items will appear here</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-rose-600 mb-6">Your Cart ({getTotalItems()})</h2>

      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between py-3 border-b border-rose-100">
            <div className="flex-1">
              <h4 className="font-semibold text-rose-900">{item.name}</h4>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-rose-600 font-bold">{item.quantity}x</span>
                <span className="text-rose-400">@ ${item.price.toFixed(2)}</span>
                <span className="text-rose-600 font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
            <Button
              onClick={() => removeFromCart(item.id)}
              size="sm"
              variant="ghost"
              className="text-rose-400 hover:text-rose-600 p-1"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between py-4 mb-6">
        <span className="text-rose-900 font-medium">Order Total</span>
        <span className="text-2xl font-bold text-rose-900">${getTotalPrice().toFixed(2)}</span>
      </div>

      <div className="bg-rose-50 rounded-lg p-4 mb-6 flex items-center gap-2">
        <Leaf className="w-4 h-4 text-green-600" />
        <span className="text-sm text-rose-700">
          This is a <strong>carbon-neutral</strong> delivery
        </span>
      </div>

      <Button
        onClick={handleConfirmOrder}
        className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-full font-semibold"
      >
        Confirm Order
      </Button>
    </div>
  )
}
