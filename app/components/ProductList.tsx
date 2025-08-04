"use client"

import { useCart } from "../context/CartContext"
import ProductCard from "./ProductCard"
import { products } from "../data/products"

export default function ProductList() {
  const { cartItems, addToCart, updateQuantity } = useCart()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => {
        const cartItem = cartItems.find((item) => item.id === product.id)
        const quantity = cartItem?.quantity || 0

        return (
          <ProductCard
            key={product.id}
            product={product}
            quantity={quantity}
            onAddToCart={() => addToCart(product)}
            onUpdateQuantity={(newQuantity) => updateQuantity(product.id, newQuantity)}
          />
        )
      })}
    </div>
  )
}
