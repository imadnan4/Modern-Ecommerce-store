import { useCartStore } from '../store/cart';
import { Button } from '../components/ui/button';
import { Trash2, Plus, Minus } from 'lucide-react';
import { formatPrice } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { items, removeItem, updateQuantity } = useCartStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some products to your cart to get started</p>
        <Link to="/products">
          <Button>Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow">
        <ul className="divide-y divide-gray-200">
          {items.map((item) => (
            <li key={item.id} className="flex items-center gap-4 p-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 object-cover rounded"
              />
              
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">{formatPrice(item.price)}</p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </li>
          ))}
        </ul>

        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-bold">{formatPrice(total)}</span>
          </div>
          <Button className="w-full">Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  );
}