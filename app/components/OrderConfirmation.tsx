"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "../context/CartContext"

interface OrderConfirmationProps {
  onStartNewOrder: () => void
}

export default function OrderConfirmation({ onStartNewOrder }: OrderConfirmationProps) {
  const { cartItems, getTotalPrice } = useCart()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-rose-900 mb-2">Order Confirmed</h2>
          <p className="text-rose-500">We hope you enjoy your food!</p>
        </div>

        <div className="bg-rose-50 rounded-lg p-4 mb-6">
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3 py-2">
                <div className="w-12 h-12 bg-rose-200 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <h4 className="font-semibold text-rose-900 text-sm">{item.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-rose-600 font-bold text-sm">{item.quantity}x</span>
                    <span className="text-rose-400 text-sm">@ ${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <span className="text-rose-600 font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-rose-200 pt-3 mt-3 flex items-center justify-between">
            <span className="text-rose-900 font-medium">Order Total</span>
            <span className="text-xl font-bold text-rose-900">${getTotalPrice().toFixed(2)}</span>
          </div>
        </div>

        <Button
          onClick={onStartNewOrder}
          className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-full font-semibold"
        >
          Start New Order
        </Button>
      </div>
    </div>
  )
}
