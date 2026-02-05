
import React from 'react';
import { Link } from 'react-router-dom';
import { REVIEWS, PRODUCTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 -right-24 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-sm font-bold tracking-wider uppercase">
              Diseño Gráfico & Sublimación
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1]">
              Tu imaginación, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 italic">nuestra creación.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Personalizamos camisas, tazas y más con diseños que cuentan tu historia. Hechos con alma para personas especiales.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Link 
                to="/catalogo" 
                className="bg-slate-900 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1"
              >
                Ver Catálogo
              </Link>
              <a 
                href="https://wa.me/50374446720?text=Hola%20quiero%20hacer%20un%20pedido" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-slate-200 text-slate-900 px-10 py-4 rounded-xl text-lg font-bold hover:border-pink-500 hover:text-pink-600 transition-all flex items-center justify-center space-x-2"
              >
                <span>WhatsApp</span>
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.449-1.271.608-1.445.159-.175.348-.218.463-.218.116 0 .232.001.334.005.109.004.254-.041.399.305.144.347.493 1.203.536 1.29.043.086.072.188.014.304-.058.116-.087.188-.174.289l-.26.304c-.087.101-.177.212-.077.382.1.17.444.733.95 1.186.654.582 1.203.763 1.373.848.17.085.271.07.371-.045.101-.116.434-.506.55-.68.116-.174.232-.145.39-.087s1.011.477 1.184.564c.174.087.289.13.333.203.045.071.045.418-.099.823z"/></svg>
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-3xl rotate-3 scale-95 opacity-20 blur-xl"></div>
            <img 
              src="https://picsum.photos/seed/meraki-hero/800/1000" 
              alt="Custom Design Preview" 
              className="relative w-full h-[600px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* Categories / Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Lo que hacemos</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Ofrecemos una amplia gama de productos personalizables con la más alta calidad en impresión y diseño.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                { title: 'Camisas', desc: 'Diseños únicos en textiles de alta calidad.', icon: '👕', bg: 'bg-blue-50' },
                { title: 'Tazas', desc: 'Tu café matutino ahora con tu diseño favorito.', icon: '☕', bg: 'bg-amber-50' },
                { title: 'Sublimados', desc: 'Gorras, termos y accesorios personalizados.', icon: '✨', bg: 'bg-pink-50' },
            ].map((item, idx) => (
              <div key={idx} className={`${item.bg} p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group`}>
                <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform">{item.icon}</span>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 mb-6">{item.desc}</p>
                <Link to="/catalogo" className="text-pink-600 font-bold flex items-center group-hover:translate-x-2 transition-transform">
                  Ver opciones <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl font-bold mb-4">Favoritos de la Tienda</h2>
                    <p className="text-slate-600">Nuestros productos más pedidos por la comunidad.</p>
                </div>
                <Link to="/catalogo" className="hidden md:block text-pink-600 font-bold hover:underline">Ver todo el catálogo →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {PRODUCTS.slice(0, 3).map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                        <img src={product.image} alt={product.name} className="w-full h-72 object-cover" />
                        <div className="p-6">
                            <span className="text-xs font-bold text-pink-600 uppercase tracking-widest">{product.category}</span>
                            <h3 className="text-xl font-bold my-2">{product.name}</h3>
                            <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
                                <a 
                                    href={`https://wa.me/50374446720?text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(product.name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl shadow-lg transition-colors"
                                >
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.449-1.271.608-1.445.159-.175.348-.218.463-.218.116 0 .232.001.334.005.109.004.254-.041.399.305.144.347.493 1.203.536 1.29.043.086.072.188.014.304-.058.116-.087.188-.174.289l-.26.304c-.087.101-.177.212-.077.382.1.17.444.733.95 1.186.654.582 1.203.763 1.373.848.17.085.271.07.371-.045.101-.116.434-.506.55-.68.116-.174.232-.145.39-.087s1.011.477 1.184.564c.174.087.289.13.333.203.045.071.045.418-.099.823z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-slate-600">Nuestra mayor recompensa es tu satisfacción.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-slate-50 p-8 rounded-3xl relative">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 font-bold mr-3">
                    {review.user.charAt(0)}
                  </div>
                  <span className="font-bold text-slate-900">{review.user}</span>
                </div>
                <div className="absolute top-8 right-8 text-slate-200">
                    <svg className="w-12 h-12 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H3.017V21H5.017Z"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-600 to-purple-700 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <h2 className="text-4xl font-bold mb-6">¿Tienes una idea en mente?</h2>
            <p className="text-xl text-pink-100 mb-10 max-w-2xl mx-auto">
              Hagámosla realidad hoy mismo. Envíanos un mensaje y te ayudamos con el diseño y la personalización de tu pedido.
            </p>
            <a 
              href="https://wa.me/50374446720?text=Hola%20Meraki%20Gift%20Store,%20quiero%20cotizar%20un%20pedido%20especial." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-pink-600 px-10 py-4 rounded-xl text-xl font-bold hover:bg-pink-50 transition-all shadow-lg hover:scale-105 active:scale-95"
            >
              ¡Comenzar Pedido!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
