import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Mock data for development
const mockProducts = [
  {
    id: '1',
    name: 'Modern Desk Lamp',
    description: 'A sleek and modern desk lamp perfect for your workspace.',
    price: 79.99,
    category: 'Lighting',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    stock: 15,
  },
  {
    id: '2',
    name: 'Ergonomic Office Chair',
    description: 'Premium office chair with excellent lumbar support.',
    price: 299.99,
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1505797149-0b7e017e7559?auto=format&fit=crop&q=80&w=800',
    stock: 8,
  },
  {
    id: '3',
    name: 'Wireless Keyboard',
    description: 'Compact wireless keyboard with backlit keys.',
    price: 129.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=800',
    stock: 20,
  },
  {
    id: '4',
    name: 'Minimalist Wall Clock',
    description: 'Simple and elegant wall clock for any room.',
    price: 49.99,
    category: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80&w=800',
    stock: 12,
  },
];

// API endpoints with mock data
export const auth = {
  login: async (data: { email: string; password: string }) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      data: {
        user: { id: '1', email: data.email, name: 'Test User' },
        token: 'mock-token',
      },
    };
  },
  register: (data: { name: string; email: string; password: string }) =>
    api.post('/auth/register', data),
  logout: () => api.post('/auth/logout'),
};

export const products = {
  getAll: async (params?: { category?: string; search?: string; featured?: boolean }) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: mockProducts };
  },
  getOne: async (id: string) => {
    const product = mockProducts.find(p => p.id === id);
    if (!product) throw new Error('Product not found');
    return { data: product };
  },
  create: (data: FormData) => api.post('/products', data),
  update: (id: string, data: FormData) => api.put(`/products/${id}`, data),
  delete: (id: string) => api.delete(`/products/${id}`),
};

export const categories = {
  getAll: () => api.get('/categories'),
  create: (data: { name: string; slug: string }) => 
    api.post('/categories', data),
  update: (id: string, data: { name: string; slug: string }) =>
    api.put(`/categories/${id}`, data),
  delete: (id: string) => api.delete(`/categories/${id}`),
};

export const orders = {
  create: (data: { items: Array<{ id: string; quantity: number }> }) =>
    api.post('/orders', data),
  getAll: () => api.get('/orders'),
  getOne: (id: string) => api.get(`/orders/${id}`),
  updateStatus: (id: string, status: string) =>
    api.patch(`/orders/${id}/status`, { status }),
};

export default api;