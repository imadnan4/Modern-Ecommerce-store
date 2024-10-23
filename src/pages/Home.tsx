import { useQuery } from '@tanstack/react-query';
import { products } from '../lib/api';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';
import { ArrowRight, Sparkles, Truck, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function Home() {
  const { data, isLoading } = useQuery<Product[]>({
    queryKey: ['featured-products'],
    queryFn: () => products.getAll({ featured: true }).then((res) => res.data),
  });

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative -mt-8 bg-gradient-to-r from-black to-gray-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold tracking-tight mb-6">
              Discover Modern Design for Modern Living
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Curated collection of premium products for your lifestyle
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">
              Shop Now
            </Button>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-20"></div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-black/5 p-3 rounded-lg">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $100</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-black/5 p-3 rounded-lg">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Secure Payment</h3>
              <p className="text-sm text-gray-600">100% secure checkout</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-black/5 p-3 rounded-lg">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold">Fast Delivery</h3>
              <p className="text-sm text-gray-600">2-3 business days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <p className="text-gray-600 mt-1">Handpicked products for you</p>
          </div>
          <Link 
            to="/products" 
            className="group flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            View all 
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm p-4 animate-pulse">
                <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data?.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/products?category=furniture" className="group relative h-64 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800" 
              alt="Furniture"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-semibold mb-1">Furniture</h3>
                <p className="text-white/80 text-sm">Modern & Comfortable</p>
              </div>
            </div>
          </Link>
          <Link to="/products?category=lighting" className="group relative h-64 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800" 
              alt="Lighting"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-semibold mb-1">Lighting</h3>
                <p className="text-white/80 text-sm">Illuminate Your Space</p>
              </div>
            </div>
          </Link>
          <Link to="/products?category=electronics" className="group relative h-64 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=800" 
              alt="Electronics"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-xl font-semibold mb-1">Electronics</h3>
                <p className="text-white/80 text-sm">Smart & Connected</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="h-8 w-8 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Subscribe to our newsletter for exclusive offers, new products, and design inspiration.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <Button className="bg-white text-black hover:bg-gray-100">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}