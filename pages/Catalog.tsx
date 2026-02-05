import React, { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const modules = import.meta.glob('../content/productos/*.json');
        const loadedProducts = [];
        for (const path in modules) {
          const content: any = await modules[path]();
          loadedProducts.push({ ...content, id: path });
        }
        setProducts(loadedProducts);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const categories = ['Todos', 'Camisas', 'Tazas', 'Sublimados', 'Otros'];
  const filteredProducts = filter === 'Todos' ? products : products.filter(p => p.category === filter);

  if (loading) return <div className="text-center py-20">Cargando...</div>;

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-10">Catálogo</h1>
        {products.length === 0 ? (
          <p>No hay productos registrados en el panel de CloudCannon aún.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden border">
                <img src={p.image} className="w-full h-64 object-cover" alt={p.name} />
                <div className="p-6">
                  <h3 className="font-bold text-xl">{p.name}</h3>
                  <p className="text-pink-600 font-bold">${Number(p.price).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Catalog;
