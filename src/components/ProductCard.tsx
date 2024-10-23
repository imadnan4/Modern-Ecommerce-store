import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../store/cart';
import { Button } from './ui/button';
import { formatPrice } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
    toast.success('Added to cart!');
  };

  return (
    <div className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <Link to={`/products/${product.id}`} className="relative block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </Link>
      <div className="p-4">
        <div className="mb-2">
          <span className="text-sm text-gray-500">{product.category}</span>
        </div>
        <Link
          to={`/products/${product.id}`}
          className="text-lg font-semibold text-gray-900 hover:text-gray-700"
        >
          {product.name}
        </Link>
        <p className="mt-1 text-gray-500 text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(product.price)}
          </span>
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="flex items-center gap-2 bg-black text-white hover:bg-black/90"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}