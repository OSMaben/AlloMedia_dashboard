// app/page.js or wherever your component is
'use client'

import { useState } from 'react'
import { Plus, Minus, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext' // Import the context

export default function Component() {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, cartItems, cartTotal } = useCart(); // Use context for cart state

  const product = {
    productId: '123',
    name: 'Awesome Product',
    price: 29.99
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
        {/* <img
  src="/placeholder.svg"
  alt="Product Image"
  width={200}
  height={200}
  className="rounded-md object-cover"
/> */}
          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={decreaseQuantity} aria-label="Decrease quantity">
              <Minus className="h-4 w-4" />
            </Button>
            <Input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-16 text-center"
            />
            <Button variant="outline" size="icon" onClick={increaseQuantity} aria-label="Increase quantity">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleAddToCart} className="w-full">
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </CardFooter>
      </Card>
      
      <div className="mt-8 text-center">
        <h2 className="text-xl font-bold mb-2">Cart Summary</h2>
        <p>Items in cart: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</p>
        <p>Total: ${cartTotal.toFixed(2)}</p>
      </div>
    </div>
  )
}
