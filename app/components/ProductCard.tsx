"use client"

import Image from "next/image"
import { Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
}

interface ProductCardProps {
  product: Product
  quantity: number
  onAddToCart: () => void
  onUpdateQuantity: (quantity: number) => void
}

export default function ProductCard({ product, quantity, onAddToCart, onUpdateQuantity }: ProductCardProps) {
  const handleDecrease = () => {
    if (quantity > 1) {
      onUpdateQuantity(quantity - 1)
    } else {
      onUpdateQuantity(0)
    }
  }

  const handleIncrease = () => {
    onUpdateQuantity(quantity + 1)
  }

  return (
    <div className="group">
      <div className="relative mb-4">
        <Image
          src={product.image.desktop || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={240}
          className="w-full h-60 object-cover rounded-lg"
        />

        {quantity === 0 ? (
          <Button
            onClick={onAddToCart}
            className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white border-2 border-rose-400 text-rose-900 hover:bg-rose-50 hover:border-rose-500 rounded-full px-6 py-2 font-semibold shadow-lg"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        ) : (
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-rose-600 text-white rounded-full px-4 py-2 flex items-center gap-3 shadow-lg">
            <Button
              onClick={handleDecrease}
              size="sm"
              variant="ghost"
              className="h-6 w-6 p-0 rounded-full border border-white hover:bg-white hover:text-rose-600"
            >
              <Minus className="w-3 h-3" />
            </Button>
            <span className="font-semibold min-w-[20px] text-center">{quantity}</span>
            <Button
              onClick={handleIncrease}
              size="sm"
              variant="ghost"
              className="h-6 w-6 p-0 rounded-full border border-white hover:bg-white hover:text-rose-600"
            >
              <Plus className="w-3 h-3" />
            </Button>
          </div>
        )}
      </div>

      <div className="mt-8">
        <p className="text-rose-500 text-sm font-medium">{product.category}</p>
        <h3 className="text-rose-900 font-semibold text-lg">{product.name}</h3>
        <p className="text-rose-600 font-bold text-lg">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}
