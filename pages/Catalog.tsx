
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';

const Catalog: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Camisas', 'Tazas', 'Sublimados', 'Otros'];

  const filteredProducts = filter === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="py-12 bg-slate-50 min-h-screen animate-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nuestro Catálogo</h1>
            <p className="text-slate-600 max-w-2xl">Explora nuestra colección de productos listos para ser personalizados. Si no encuentras lo que buscas, ¡escríbenos!</p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                filter === cat 
                  ? 'bg-pink-600 text-white shadow-lg shadow-pink-200' 
                  : 'bg-white text-slate-600 hover:bg-pink-50 hover:text-pink-600 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-pink-600 uppercase tracking-widest border border-pink-100">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-pink-600 transition-colors">{product.name}</h3>
                </div>
                <p className="text-slate-500 mb-8 text-sm leading-relaxed flex-grow">{product.description}</p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                  <div className="flex flex-col">
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Precio Base</span>
                    <span className="text-3xl font-black text-slate-900">${product.price.toFixed(2)}</span>
                  </div>
                  <a 
                    href={`https://wa.me/50374446720?text=Hola%20Meraki,%20me%20gustaría%20personalizar:%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-4 rounded-2xl font-bold flex items-center space-x-2 hover:bg-green-600 transition-all hover:shadow-lg active:scale-95"
                  >
                    <span>Pedir</span>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.449-1.271.608-1.445.159-.175.348-.218.463-.218.116 0 .232.001.334.005.109.004.254-.041.399.305.144.347.493 1.203.536 1.29.043.086.072.188.014.304-.058.116-.087.188-.174.289l-.26.304c-.087.101-.177.212-.077.382.1.17.444.733.95 1.186.654.582 1.203.763 1.373.848.17.085.271.07.371-.045.101-.116.434-.506.55-.68.116-.174.232-.145.39-.087s1.011.477 1.184.564c.174.087.289.13.333.203.045.071.045.418-.099.823z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
            <div className="py-24 text-center">
                <p className="text-slate-400 text-xl italic">No encontramos productos en esta categoría por ahora.</p>
                <button onClick={() => setFilter('Todos')} className="mt-4 text-pink-600 font-bold hover:underline">Ver todos los productos</button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
