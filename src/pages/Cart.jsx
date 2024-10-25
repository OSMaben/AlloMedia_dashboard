'use client';

import { useState, useEffect } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button, Card, CardHeader, CardBody, CardFooter, Typography, Input } from '@material-tailwind/react'; // Importing Input from Material Tailwind

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const product = {
    productId: '123',
    name: 'Awesome Product',
    price: 29.99
  };

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
    calculateCartTotal(storedCartItems);
  }, []);

  const calculateCartTotal = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setCartTotal(total);
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(item => item.productId === product.productId);

    if (existingItemIndex > -1) {
      // If the item already exists in the cart, update its quantity
      updatedCartItems[existingItemIndex].quantity += quantity;
    } else {
      // Otherwise, add the new item to the cart
      updatedCartItems.push({ ...product, quantity });
    }

    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Save to local storage
    setQuantity(1); // Reset quantity after adding to cart
    calculateCartTotal(updatedCartItems);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <Typography variant="h5">{product.name}</Typography>
        </CardHeader>
        <CardBody className="flex flex-col items-center space-y-4">
          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
          <div className="flex items-center space-x-2">
            <Button
              variant="outlined"
              onClick={decreaseQuantity}
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <Input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-16 text-center"
            />
            <Button
              variant="outlined"
              onClick={increaseQuantity}
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardBody>
        <CardFooter>
          <Button onClick={handleAddToCart} className="w-full bg-blue-500 text-white">
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
  );
}
