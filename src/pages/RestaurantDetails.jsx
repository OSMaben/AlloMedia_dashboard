import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Plus, Minus } from "lucide-react";

const RestaurantDetails = () => {
  const { id: restaurantId } = useParams();
//   const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('restaurantCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8080/api/v1/client/${restaurantId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch restaurant details');
        }
        const data = await response.json();
        setRestaurant(data);
      } catch (err) {
        setError('Failed to load restaurant details');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurantDetails();
  }, [restaurantId]);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('restaurantCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (menuItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === menuItem._id);
      if (existingItem) {
        const updatedItems = prevItems.map(item =>
          item.id === menuItem._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return updatedItems;
      }
      const newItem = {
        id: menuItem._id,
        name: menuItem.name,
        price: menuItem.price,
        quantity: 1,
        restaurantId: restaurantId,
        restaurantName: restaurant.restoname
      };
      return [...prevItems, newItem];
    });
  };

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

  const getItemQuantity = (itemId) => {
    return cartItems.find(item => item.id === itemId)?.quantity || 0;
  };

//   const navigateToCart = () => {
//     navigate('/cart');
//   };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600">
        {error}
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Restaurant not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Cart Summary Button */}
      {/* <div className="fixed top-4 right-4 z-50">
        <button
          onClick={navigateToCart}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="bg-white text-orange-600 rounded-full w-6 h-6 flex items-center justify-center">
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </span>
        </button>
      </div> */}

      {/* Restaurant Header */}
      <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={restaurant.image_banner?.url || "/api/placeholder/800/400"} 
            alt={restaurant.restoname}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{restaurant.restoname}</h1>
          <p className="text-gray-600 mb-2">{restaurant.bio}</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>{restaurant.address}</span>
            <span>{restaurant.type}</span>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurant.menu?.map((item) => (
          <div key={item._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                src={item.image || "/api/placeholder/400/300"}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <span className="text-green-600 font-semibold">${item.price}</span>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-3">
                  <button 
                    className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                    onClick={() => updateQuantity(item._id, getItemQuantity(item._id) - 1)}
                    disabled={!getItemQuantity(item._id)}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  
                  <span className="w-8 text-center">
                    {getItemQuantity(item._id)}
                  </span>
                  
                  <button 
                    className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                    onClick={() => updateQuantity(item._id, getItemQuantity(item._id) + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button 
                  className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;