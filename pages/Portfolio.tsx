import React, { useState, useEffect } from 'react';

const Portfolio: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const loadPortfolio = async () => {
      const modules = import.meta.glob('../content/portafolio/*.json');
      const loaded = [];
      for (const path in modules) {
        const content: any = await modules[path]();
        loaded.push(content);
      }
      setItems(loaded);
    };
    loadPortfolio();
  }, []);

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Nuestros Trabajos</h1>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-sm">
              <img src={item.imageUrl} alt={item.title} className="w-full h-auto object-cover" />
              <div className="p-4 bg-slate-900/80 text-white">
                <h3 className="font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
