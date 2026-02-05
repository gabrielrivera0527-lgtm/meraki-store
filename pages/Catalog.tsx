import React, { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Todos');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const user = "gabrielrivera0527-lgtm"; 
        const repo = "meraki-store";
        
        // Llamamos a la API de GitHub para listar los archivos en public/productos
        const response = await fetch(`https://api.github.com/repos/${user}/${repo}/contents/public/productos`);
        
        if (!response.ok) throw new Error("No se pudo conectar con GitHub");

        const files = await response.json();
        
        const loaded = await Promise.all(
          files
            .filter((file: any) => file.name.endsWith('.json'))
            .map(async (file: any) => {
              const res = await fetch(file.download_url);
              return res.json();
            })
        );

        setProducts(loaded);
      } catch (e) {
        console.error("Error cargando productos:", e);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const categories = ['Todos', 'Camisas', 'Tazas', 'Sublimados', 'Otros'];
  
  // Filtrado de productos
  const filteredProducts = filter === 'Todos' 
    ? products 
    : products.filter(p => p.category === filter);

  const handleOrder = (productName: string, price: number) => {
    const message = `Hola Meraki! 👋 Me interesa: *${productName}* ($${Number(price).toFixed(2)}).`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-600 mb-4"></div>
      <p className="font-bold text-pink-600">Cargando catálogo Meraki...</p>
    </div>
  );

  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-slate-900">Catálogo</h1>
        
        {/* Botones de Filtro */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                filter === cat ? 'bg-pink-600 text-white shadow-md' : 'bg-white text-slate-600 border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Lógica de visualización */}
        {products.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl text-center shadow-sm border">
            <p className="text-slate-500">No hay productos registrados en el panel de CloudCannon aún.</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map((p, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100 flex flex-col hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                   <img src={p.image} className="w-full h-full object-cover" alt={p.name} />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-bold text-xl text-slate-900">{p.name}</h3>
                  <p className="text-slate-500 text-sm mt-2 line-clamp-2">{p.description}</p>
                  <p className="text-pink-600 font-black text-2xl mt-4">${Number(p.price).toFixed(2)}</p>
                  <button 
                    onClick={() => handleOrder(p.name, p.price)}
                    className="w-full mt-6 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-pink-600 transition-colors"
                  >
                    Pedir por WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* MENSAJE CUANDO LA CATEGORÍA ESTÁ VACÍA */
          <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-slate-300">
            <div className="text-6xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-slate-900">¡Próximamente más productos!</h3>
            <p className="text-slate-500 mt-2">
              Actualmente no hay artículos en la categoría <span className="font-bold text-pink-600">{filter}</span>.
            </p>
            <button 
              onClick={() => setFilter('Todos')} 
              className="mt-6 bg-pink-50 text-pink-600 px-6 py-2 rounded-full font-bold hover:bg-pink-100 transition-colors"
            >
              Ver todo el catálogo
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
