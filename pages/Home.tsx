import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);

  useEffect(() => {
    const loadFeatured = async () => {
      const modules = import.meta.glob('../content/productos/*.json');
      const loaded = [];
      // Solo tomamos los últimos 3 para mostrar en la home
      for (const path in modules) {
        const content: any = await modules[path]();
        loaded.push(content);
        if (loaded.length === 3) break; 
      }
      setFeaturedProducts(loaded);
    };
    loadFeatured();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-pink-50 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Meraki Gift Store</h1>
        <p className="text-xl mb-8 text-slate-600">Creatividad en cada detalle</p>
        <Link to="/catalogo" className="bg-pink-600 text-white px-8 py-3 rounded-full font-bold">Ver Catálogo</Link>
      </section>

      {/* Sección de Productos Recientes (Dinámica) */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Lo más nuevo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((p, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md">
              <img src={p.image} className="w-full h-72 object-cover" alt={p.name} />
              <div className="p-4 bg-white">
                <h3 className="font-bold">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
