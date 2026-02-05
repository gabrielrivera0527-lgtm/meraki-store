
import React from 'react';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <div className="py-12 bg-white min-h-screen animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nuestros Trabajos</h1>
            <p className="text-slate-600 max-w-2xl mx-auto italic">Una muestra de la pasión y creatividad que ponemos en cada proyecto de nuestros clientes.</p>
        </header>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {PORTFOLIO.map((item) => (
                <div key={item.id} className="relative group overflow-hidden rounded-2xl break-inside-avoid shadow-sm hover:shadow-xl transition-all">
                    <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-pink-400 text-[10px] font-bold uppercase tracking-widest mb-1">{item.category}</span>
                        <h3 className="text-white text-xl font-bold leading-tight">{item.title}</h3>
                        <Link to="/contacto" className="mt-4 text-white text-sm font-bold flex items-center hover:text-pink-300 transition-colors">
                            Cotizar similar <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                        </Link>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-20 text-center bg-pink-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Te gusta lo que ves?</h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">Cada trabajo es 100% personalizado. Podemos adaptar cualquier idea al producto que elijas.</p>
            <a 
              href="https://wa.me/50374446720?text=Hola%20Meraki,%20vi%20tu%20portafolio%20y%20me%20gustaría%20hacer%20un%20pedido." 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-pink-700 transition-all shadow-lg hover:-translate-y-1"
            >
              Hablemos por WhatsApp
            </a>
        </div>
      </div>
    </div>
  );
};

// Helper for portfolio links since we need react-router in this context
import { Link } from 'react-router-dom';

export default Portfolio;
