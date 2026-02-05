import React, { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Todos'); // Faltaba esto

  useEffect(() => {
    const loadProducts = async () => {
      try {
        // 1. Intentamos cargar archivos locales (para cuando estás programando)
        const modules = import.meta.glob('/public/content/productos/*.json');
        let loaded: any[] = [];
        
        for (const path in modules) {
          const content: any = await modules[path]();
          loaded.push(content.default || content);
        }

        // 2. Si estamos en Vercel (donde lo anterior falla), usamos GitHub directamente
        // IMPORTANTE: Cambia 'TU_USUARIO' y 'TU_REPO' por tus datos de GitHub
        if (loaded.length === 0) {
          const user = "TU_USUARIO_AQUI"; 
          const repo = "NOMBRE_DE_TU_REPO_AQUI";
          
          const response = await fetch(`https://api.github.com/repos/${user}/${repo}/contents/public/content/productos`);
          
          if (response.ok) {
            const files = await response.json();
            const fetchPromises = files
              .filter((file: any) => file.name.endsWith('.json'))
              .map(async (file: any) => {
                const contentRes = await fetch(file.download_url);
                return contentRes.json();
              });
            loaded = await Promise.all(fetchPromises);
          }
        }

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

  if (loading) return <div className="text-center py-20 font-bold text-pink-600">Cargando catálogo Meraki...</div>;

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

        {products.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl text-center shadow-sm border">
            <p className="text-slate-500">Aún no hay productos en esta sección.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProducts.map((p, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-sm overflow-hidden border border-slate-100 flex flex-col">
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
        )}
      </div>
    </div>
  );
};

export default Catalog;
