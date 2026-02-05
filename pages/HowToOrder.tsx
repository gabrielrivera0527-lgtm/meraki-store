
import React from 'react';

const HowToOrder: React.FC = () => {
  const steps = [
    {
      title: 'Elige tu producto',
      description: 'Navega por nuestro catálogo y elige el artículo que deseas personalizar (camisas, tazas, gorras, etc.).',
      icon: '🔎',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Envíanos tu idea',
      description: 'Escríbenos por WhatsApp con el diseño, foto o frase que quieres. Si no tienes diseño, ¡nosotros te ayudamos!',
      icon: '💡',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Cotización y Pago',
      description: 'Te enviamos el costo total y acordamos el método de pago (transferencia o efectivo según zona).',
      icon: '💰',
      color: 'bg-green-50 text-green-600'
    },
    {
      title: 'Aprobación de Diseño',
      description: 'Te enviaremos un boceto digital para que lo apruebes antes de pasar a producción.',
      icon: '🎨',
      color: 'bg-pink-50 text-pink-600'
    },
    {
      title: 'Entrega de Magia',
      description: 'Una vez listo, coordinamos la entrega o envío de tu pedido para que empieces a disfrutarlo.',
      icon: '📦',
      color: 'bg-amber-50 text-amber-600'
    }
  ];

  return (
    <div className="py-24 bg-white min-h-screen animate-in zoom-in-95 duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 italic">¿Cómo hacer tu pedido?</h1>
          <p className="text-lg text-slate-600">Es muy fácil y rápido. Te acompañamos en todo el proceso creativo.</p>
        </header>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-100 top-0"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2 flex justify-center md:justify-start">
                  <div className={`p-8 rounded-3xl shadow-sm border border-slate-50 transition-all hover:shadow-md max-w-sm ${index % 2 !== 0 ? 'md:ml-12' : 'md:mr-12'}`}>
                    <span className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${step.color} mb-6 text-2xl`}>
                      {step.icon}
                    </span>
                    <h3 className="text-xl font-bold mb-3">{index + 1}. {step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white border-4 border-pink-100 z-10 flex items-center justify-center shadow-sm">
                        <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                    </div>
                </div>

                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">¿Listo para empezar?</h2>
            <p className="text-slate-400 mb-10 max-w-md mx-auto">No hay pedido pequeño para Meraki. Cuéntanos tu idea hoy mismo.</p>
            <a 
              href="https://wa.me/50374446720?text=Hola%20Meraki,%20estoy%20listo%20para%20mi%20primer%20pedido." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-600 text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-pink-700 transition-all shadow-xl hover:-translate-y-1 active:translate-y-0"
            >
              Iniciar Chat de WhatsApp
            </a>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;
