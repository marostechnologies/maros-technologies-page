"use client";

import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/components/ui/intersection-observer';
import { CheckCircle2, DollarSign, Instagram, Mail } from 'lucide-react';
import React from 'react';

const pricingData = [
  {
    type: "E-commerce / Tienda en línea",
    projectPrice: "$15,000 - $40,000",
    monthlySupport: "$3,000 - $6,000",
    projectIncludes: ["Catálogo de productos", "Carrito de compras", "Pasarela de pago", "Gestión de inventario", "Diseño responsivo"],
    supportIncludes: ["Actualización de productos", "Seguridad", "Optimización de velocidad", "Soporte de pagos", "Resolución de errores"]
  },
  {
    type: "Sitio Web Corporativo / Empresarial",
    projectPrice: "$6,000 - $12,000",
    monthlySupport: "$1,500 - $3,000",
    projectIncludes: ["Secciones de servicios", "Contacto", "Blog opcional", "Diseño responsivo", "Optimización básica"],
    supportIncludes: ["Actualización de contenido", "Seguridad", "Mejoras menores", "Corrección de errores"]
  },
  {
    type: "Web con Backend Funcional",
    projectPrice: "$12,000 - $30,000",
    monthlySupport: "$2,500 - $5,000",
    projectIncludes: ["Sistemas personalizados (reservas, paneles, bases de datos)", "Integración backend y frontend"],
    supportIncludes: ["Mantenimiento de base de datos", "Soporte de funcionalidades", "Optimización", "Resolución de errores"]
  },
  {
    type: "Blogs o Portales de Contenido",
    projectPrice: "$5,000 - $10,000",
    monthlySupport: "$1,500 - $3,000",
    projectIncludes: ["Publicación de artículos", "Categorías", "Comentarios", "Suscripciones", "Integración con redes sociales"],
    supportIncludes: ["Actualización de contenido", "Seguridad", "Soporte de plugins", "Mejora de rendimiento"]
  },
  {
    type: "Landing Pages / Páginas de Captación",
    projectPrice: "$3,000 - $7,000",
    monthlySupport: "$1,000 - $2,500",
    projectIncludes: ["Página única optimizada para conversión", "Formulario de contacto", "Llamadas a la acción", "Diseño atractivo"],
    supportIncludes: ["Optimización de conversiones", "Corrección de errores", "Actualizaciones menores"]
  },
  {
    type: "Marketplace / Multi-vendedores",
    projectPrice: "$25,000 - $50,000",
    monthlySupport: "$4,000 - $8,000",
    projectIncludes: ["Plataforma para varios vendedores", "Catálogo compartido", "Pagos integrados", "Gestión de pedidos"],
    supportIncludes: ["Gestión de vendedores", "Soporte de pagos", "Resolución de problemas", "Optimización de plataforma"]
  }
];

const PricingSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleQuoteClick = (planType: string) => {
    setSelectedPlan(planType);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPlan("");
  };

  const handleEmailClick = () => {
    const subject = `Solicitud de Cotización: ${selectedPlan}`;
    const body = `Hola equipo de MAROS Technologies,\n\nMe gustaría solicitar una cotización para mi proyecto de ${selectedPlan}.\n\nEspero su respuesta, ¡gracias!`;
    window.location.href = `mailto:marostechnologies@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    handleCloseModal();
  };

  const handleInstagramClick = () => {
    const instagramUrl = `https://ig.me/m/marostechnologies`;
    window.open(instagramUrl, "_blank");
    handleCloseModal();
  };

  return (
    <>
      <style jsx>{`
        /* Animación de entrada para toda la sección */
        .section-container {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .section-container.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Animación para los elementos del encabezado */
        .header-item {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .section-container.is-visible .header-item {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Retrasos secuenciales para los elementos del encabezado */
        .section-container.is-visible .header-item:nth-child(1) { transition-delay: 0s; }
        .section-container.is-visible .header-item:nth-child(2) { transition-delay: 0.1s; }
        .section-container.is-visible .header-item:nth-child(3) { transition-delay: 0.2s; }
        
        /* Animación para las tarjetas de precios */
        .grid-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .section-container.is-visible .grid-item {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Retrasos secuenciales para las tarjetas */
        .section-container.is-visible .grid-item:nth-child(1) { transition-delay: 0.3s; }
        .section-container.is-visible .grid-item:nth-child(2) { transition-delay: 0.4s; }
        .section-container.is-visible .grid-item:nth-child(3) { transition-delay: 0.5s; }
        .section-container.is-visible .grid-item:nth-child(4) { transition-delay: 0.6s; }
        .section-container.is-visible .grid-item:nth-child(5) { transition-delay: 0.7s; }
        .section-container.is-visible .grid-item:nth-child(6) { transition-delay: 0.8s; }
        
        /* Estilos del modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 999;
        }
        .modal-content {
          background: white;
          padding: 2.5rem;
          border-radius: 1rem;
          text-align: center;
          max-width: 400px;
          width: 90%;
          position: relative;
        }
        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          cursor: pointer;
          font-size: 1.5rem;
          color: #888;
        }
      `}</style>
      <section 
        ref={ref}
        className={`relative py-16 bg-white md:py-24 section-container ${isIntersecting ? 'is-visible' : ''}`}
        id="pricing"
      >
        <div className="container px-6 mx-auto relative z-10">
          {/* Encabezado */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="header-item inline-flex items-center gap-2 px-4 py-2 bg-[#013467]/10 rounded-full text-[#013467] font-medium mb-6">
              <DollarSign className="w-4 h-4" />
              Precios y Planes
            </div>
            <h2 className="header-item text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Encuentra el plan <span className="text-[#013467]">perfecto</span> para ti
            </h2>
            <p className="header-item text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Consulta nuestros precios transparentes para el desarrollo y soporte de tus proyectos.
            </p>
          </div>

          {/* Tarjetas de precios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {pricingData.map((plan, index) => (
              <div
                key={index}
                className="grid-item group bg-gray-50 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex flex-col flex-grow">
                  <div>
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">
                      {plan.type}
                    </h3>
                    <p className="text-sm text-center text-gray-600 mb-6">
                      Solución completa para tu negocio.
                    </p>
                    
                    {/* Precios */}
                    <div className="text-center mb-6">
                      <p className="text-lg text-gray-700 font-semibold">Precio del Proyecto</p>
                      <p className="text-3xl font-extrabold text-[#013467]">{plan.projectPrice}</p>
                      <p className="text-sm text-gray-500 mt-2">Soporte Mensual</p>
                      <p className="text-xl font-bold text-gray-900">{plan.monthlySupport}</p>
                    </div>
                  </div>
                  
                  {/* Beneficios */}
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        Incluye en el Proyecto:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {plan.projectIncludes.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        Incluye en el Soporte:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {plan.supportIncludes.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Botón de acción */}
                <button
                  onClick={() => handleQuoteClick(plan.type)}
                  className="mt-8 block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-[#013467] group-hover:bg-yellow-400 group-hover:text-gray-900 transition-colors duration-300"
                >
                  Solicitar Cotización
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Los precios son aproximados. El costo final se define en base a la complejidad, funcionalidad y alcance de cada proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>&times;</button>
            <h3 className="text-xl font-bold mb-4">¡Listo para iniciar tu proyecto!</h3>
            <p className="text-gray-600 mb-6">
              ¿Cómo te gustaría enviarnos la solicitud de cotización para tu proyecto de **{selectedPlan}**?
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={handleEmailClick}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-[#013467] text-base font-medium rounded-full text-[#013467] hover:bg-yellow-400 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Enviar correo electrónico
              </button>
              <button
                onClick={handleInstagramClick}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-[#013467] text-base font-medium rounded-full text-[#013467] hover:bg-yellow-400 hover:text-gray-900 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Enviar mensaje por Instagram
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PricingSection;