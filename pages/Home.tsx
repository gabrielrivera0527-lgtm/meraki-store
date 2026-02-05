import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        const user = "gabrielrivera0527-lgtm"; // CAMBIA ESTO
        const repo = "meraki-store";   // CAMBIA ESTO
        
        const response = await fetch(`https://api.github.com/repos/${user}/${repo}/contents/public/productos`);
        
        if (response.ok) {
          const files = await response.json();
          // Tomamos solo los últimos 3 archivos
          const lastThree = files
            .filter((f: any) => f.name.endsWith('.json'))
            .slice(-3);

          const loaded = await Promise.all(
            lastThree.map(async (file: any) => {
              const res = await fetch(file.download_url);
              return res.json();
            })
          );
          setFeaturedProducts(loaded);
        }
      } catch (error) {
        console.error("Error en Home:", error);
      } finally {
        setLoading(false);
      }
    };
    loadFeatured();
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-gradient-to-br from-pink-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">Meraki Gift Store</h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg">Creatividad en cada detalle. Personalizamos tus ideas con amor y alma.</p>
            <Link to="/catalogo" className="bg-pink-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-pink-700 transition-all">
              Explorar Catálogo
            </Link>
          </div>
          <div className="hidden lg:block relative">
             <div className="w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob absolute -top-10 -left-10"></div>
             <div className="w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 absolute -bottom-10 -right-10"></div>
             <img src="https://picsum.photos/seed/meraki/800/800" className="relative rounded-3xl shadow-2xl" alt="Featured" />
          </div>
        </div>
      </section>

      {/* Sección Dinámica */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-slate-900">Lo más nuevo</h2>
        
        {loading ? (
          <div className="text-center py-10">Cargando novedades...</div>
        ) : featuredProducts.length === 0 ? (
          <p className="text-center text-slate-500">Pronto tendremos nuevas sorpresas para ti.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map((p, i) => (
              <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="h-80 overflow-hidden">
                  <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={p.name} />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-slate-900">{p.name}</h3>
                  <Link to="/catalogo" className="text-pink-600 font-semibold mt-4 inline-block hover:underline">Ver detalles →</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
