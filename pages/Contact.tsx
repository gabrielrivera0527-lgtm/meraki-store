
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: 'Camisas',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hola Meraki Gift Store! Mi nombre es ${formData.name}. Me interesa el servicio de ${formData.product}. Mensaje: ${formData.message}`;
    window.open(`https://wa.me/50374446720?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
  };

  return (
    <div className="py-24 bg-slate-50 min-h-screen animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Ponte en contacto</span>
            <h1 className="text-5xl font-bold text-slate-900 mt-4 mb-8">Hagamos realidad tus ideas</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              Estamos aquí para ayudarte a crear el regalo perfecto o la imagen que tu negocio necesita. Resolvemos tus dudas en tiempo real.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mr-6 text-2xl shrink-0">
                  📱
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Escríbenos por WhatsApp</h3>
                  <p className="text-slate-500">+503 7444-6720</p>
                </div>
              </div>
              
              <div className="flex items-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mr-6 text-2xl shrink-0">
                  📸
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Síguenos en Instagram</h3>
                  <p className="text-slate-500">@merakigiftstore_sv</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mr-6 text-2xl shrink-0">
                  ⏰
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Horario de Atención</h3>
                  <p className="text-slate-500">Lun - Sáb: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100">
            <h2 className="text-2xl font-bold mb-8">Cuéntanos sobre tu proyecto</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Tu Nombre</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  placeholder="Ej. Juan Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email (Opcional)</label>
                <input 
                  type="email" 
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Servicio de Interés</label>
                <select 
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all appearance-none"
                  value={formData.product}
                  onChange={(e) => setFormData({...formData, product: e.target.value})}
                >
                  <option>Camisas</option>
                  <option>Tazas</option>
                  <option>Sublimados</option>
                  <option>Diseño Gráfico</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">¿Cómo podemos ayudarte?</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all resize-none"
                  placeholder="Describe brevemente tu idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center space-x-3 shadow-xl hover:-translate-y-1 active:translate-y-0"
              >
                <span>Enviar a WhatsApp</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.449-1.271.608-1.445.159-.175.348-.218.463-.218.116 0 .232.001.334.005.109.004.254-.041.399.305.144.347.493 1.203.536 1.29.043.086.072.188.014.304-.058.116-.087.188-.174.289l-.26.304c-.087.101-.177.212-.077.382.1.17.444.733.95 1.186.654.582 1.203.763 1.373.848.17.085.271.07.371-.045.101-.116.434-.506.55-.68.116-.174.232-.145.39-.087s1.011.477 1.184.564c.174.087.289.13.333.203.045.071.045.418-.099.823z"/></svg>
              </button>
            </form>
            
            <p className="mt-8 text-center text-slate-400 text-sm italic">
              Al hacer clic, serás redirigido automáticamente a WhatsApp para finalizar tu consulta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
