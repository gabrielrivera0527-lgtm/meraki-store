
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Portfolio from './pages/Portfolio';
import HowToOrder from './pages/HowToOrder';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans selection:bg-pink-100 selection:text-pink-600">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/portafolio" element={<Portfolio />} />
            <Route path="/como-ordenar" element={<HowToOrder />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp Action Button for Mobile */}
        <a
          href="https://wa.me/50374446720?text=Hola%20Meraki%20Gift%20Store,%20necesito%20ayuda%20con%20un%20pedido."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 md:hidden flex items-center justify-center"
          aria-label="WhatsApp Contact"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.449-1.271.608-1.445.159-.175.348-.218.463-.218.116 0 .232.001.334.005.109.004.254-.041.399.305.144.347.493 1.203.536 1.29.043.086.072.188.014.304-.058.116-.087.188-.174.289l-.26.304c-.087.101-.177.212-.077.382.1.17.444.733.95 1.186.654.582 1.203.763 1.373.848.17.085.271.07.371-.045.101-.116.434-.506.55-.68.116-.174.232-.145.39-.087s1.011.477 1.184.564c.174.087.289.13.333.203.045.071.045.418-.099.823z" />
          </svg>
        </a>
      </div>
    </HashRouter>
  );
};

export default App;
