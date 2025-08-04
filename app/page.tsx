"use client"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import { CartProvider } from "./context/CartContext"

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-rose-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold text-rose-900 mb-8">Desserts</h1>
              <ProductList />
            </div>
            <div className="lg:col-span-1">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </CartProvider>
  )
}
