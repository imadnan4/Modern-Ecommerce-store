import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import { Button } from './ui/button';
import { useCartStore } from '../store/cart';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const cartItems = useCartStore((state) => state.items);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-lg bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-900">
            ModernShop
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-8">
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Products
              </Link>
              <Link 
                to="/categories" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Categories
              </Link>
              <Link 
                to="/deals" 
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Deals
              </Link>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden md:block">
              <div
                className={cn(
                  'flex items-center transition-all duration-300 ease-in-out',
                  isSearchOpen ? 'w-64' : 'w-10'
                )}
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  className={cn(
                    'w-full px-4 py-2 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-black/5',
                    'transition-all duration-300 ease-in-out',
                    isSearchOpen ? 'opacity-100' : 'opacity-0 w-0 p-0'
                  )}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    'absolute right-0 transition-transform duration-300',
                    isSearchOpen && 'rotate-90'
                  )}
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* User Profile */}
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Link to="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-black text-xs text-white flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}