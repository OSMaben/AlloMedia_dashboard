import  { useState, useCallback, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { isLogin, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Update cart whenever localStorage changes
  useEffect(() => {
    const updateCartFromStorage = () => {
      try {
        // Try to get items from restaurantCart first
        let items = JSON.parse(localStorage.getItem('restaurantCart')) || [];
        
        // If empty, try cartItems as fallback
        if (!items.length) {
          items = JSON.parse(localStorage.getItem('cartItems')) || [];
        }
        
        setCartItems(items);
        const count = items.reduce((total, item) => total + (item.quantity || 0), 0);
        setCartCount(count);
      } catch (error) {
        console.error('Error parsing cart data:', error);
        setCartItems([]);
        setCartCount(0);
      }
    };

    // Initial load
    updateCartFromStorage();

    // Setup storage event listener
    const handleStorageChange = (e) => {
      if (e.key === 'restaurantCart' || e.key === 'cartItems') {
        updateCartFromStorage();
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Check for changes every second as backup
    const interval = setInterval(updateCartFromStorage, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const navigateToCart = () => {
    navigate('/cart');
  };

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
    navigate("/");
  }, [dispatch, navigate]);

  const CartButton = () => (
    <button
      onClick={navigateToCart}
      className="bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-700 transition-colors"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
        />
      </svg>
      <span className="bg-white text-orange-600 rounded-full w-6 h-6 flex items-center justify-center">
        {cartCount}
      </span>
    </button>
  );

  return (
    <div className="px-4 md:px-10 sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto container">
        <nav className="flex items-center justify-between py-4">
          <NavLink to="/" className="text-2xl font-medium text-gray-600">
            AlloMedia
          </NavLink>

          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </NavLink>
            {isLogin && (
              <NavLink to="/profile" className="text-gray-600 hover:text-gray-900">
                Profile
              </NavLink>
            )}
            {isLogin &&(
                <CartButton />
            )}
          
            {!isLogin ? (
              <>
                <NavLink to="/signin" className="text-gray-600 hover:text-gray-900">
                  Sign in
                </NavLink>
                <NavLink to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                  Sign up
                </NavLink>
              </>
            ) : (
              <button 
                onClick={logout}
                className="text-gray-600 hover:text-gray-900"
              >
                Log out
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center gap-4">
            <CartButton />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600"
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <NavLink to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </NavLink>
              {isLogin && (
                <NavLink to="/profile" className="text-gray-600 hover:text-gray-900">
                  Profile
                </NavLink>
              )}
              {!isLogin ? (
                <>
                  <NavLink to="/signin" className="text-gray-600 hover:text-gray-900">
                    Sign in
                  </NavLink>
                  <NavLink to="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-center hover:bg-indigo-700">
                    Sign up
                  </NavLink>
                </>
              ) : (
                <button 
                  onClick={logout}
                  className="text-gray-600 hover:text-gray-900 text-left"
                >
                  Log out
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;