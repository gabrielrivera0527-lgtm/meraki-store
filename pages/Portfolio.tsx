import React, { useState, useEffect } from 'react';

const Portfolio: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPortfolio = async () => {
      const modules = import.meta.glob('../content/portafolio/*.json');
      const loaded = [];
      for (const path in modules) {
        const content: any = await modules[path]();
        loaded.push(content);
      }
      setItems(loaded);
      setLoading(false);
    };
    loadPortfolio();
  }, []);

  if (loading) return <div className="text-center py-20">Cargando portafolio...</div>;

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-slate-900">Nuestros Trabajos</h1>
        
        {items.length === 0 ? (
          <p className="text-center text-slate-500">Aún no hay trabajos en el portafolio.</p>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {items.map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-sm break-inside-avoid">
                <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <h3 className="text-white font-bold text-xl p-4 text-center">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
