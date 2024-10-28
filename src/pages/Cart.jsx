import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Trash2 } from 'lucide-react';

const Cart = () => {
  const navigate = useNavigate();
  
  // Initialize cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('restaurantCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('restaurantCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (itemId, newQuantity) => {
    setCartItems(prevItems => {
      if (newQuantity < 1) {
        return prevItems.filter(item => item.id !== itemId);
      }
      return prevItems.map(item =>
        item.id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      );
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('restaurantCart');
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  // Group items by restaurant
  const restaurantGroups = cartItems.reduce((acc, item) => {
    if (!acc[item.restaurantId]) {
      acc[item.restaurantId] = {
        name: item.restaurantName,
        items: []
      };
    }
    acc[item.restaurantId].items.push(item);
    return acc;
  }, {});

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="bg-white rounded-lg shadow-lg p-6">
        {Object.entries(restaurantGroups).map(([restaurantId, restaurant]) => (
          <div key={restaurantId} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{restaurant.name}</h3>
            {restaurant.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between py-4 border-b">
                <div className="flex-1">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-600">${item.price} each</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    
                    <span className="w-8 text-center">{item.quantity}</span>
                    
                    <button
                      className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <span className="w-24 text-right font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}

        <div className="mt-6 flex justify-between items-center">
          <div className="text-xl font-bold">
            Total: ${getCartTotal().toFixed(2)}
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
            >
              Continue Shopping
            </button>
            
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Clear Cart
            </button>
            
            <button
              onClick={() => navigate('/checkout')}
              className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;