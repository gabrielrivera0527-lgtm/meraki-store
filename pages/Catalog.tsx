import React, { useState } from 'react';
import { PRODUCTS, WHATSAPP_NUMBER } from '../constants';

const Catalog: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Camisas', 'Tazas', 'Sublimados', 'Otros'];

  const filteredProducts = filter === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  // FUNCIÓN PARA WHATSAPP INTELIGENTE
  const handleOrder = (productName: string, price: number) => {
    const message = `Hola Meraki Gift Store! 👋 Me interesa el producto: *${productName}* con precio de *$${price.toFixed(2)}*. ¿Me dan más información?`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nuestro Catálogo</h1>
            <p className="text-slate-600 max-w-2xl">Explora nuestra colección. Cada detalle es personalizado para ti.</p>
        </header>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                filter === cat ? 'bg-pink-600 text-white shadow-lg' : 'bg-white text-slate-600 hover:bg-pink-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="relative overflow-hidden h-80">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl font-bold text-pink-600 shadow-sm">
                  ${product.price.toFixed(2)}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">{product.description}</p>
                <button
                  onClick={() => handleOrder(product.name, product.price)}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-pink-600 transition-colors"
                >
                  <span>Pedir por WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
