"use client";

import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/components/ui/intersection-observer';
import { CheckCircle2, DollarSign, Instagram, Mail } from 'lucide-react';
import { gsap } from 'gsap';
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

  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Definimos la línea de tiempo de GSAP
    const tl = gsap.timeline({ paused: true });

    // Animación de entrada de todo el contenedor para un efecto más suave
    tl.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
      
    // Animación del encabezado
    tl.fromTo(
      headerRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out' },
      "<0.2" // Inicia 0.2 segundos después del inicio de la línea de tiempo
    );
    
    // Animación de las tarjetas con un efecto de "pop-up"
    tl.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 0.8, ease: 'back.out(1.7)' },
      "<0.1" // Inicia 0.1 segundos después de la animación del encabezado
    );

    if (isIntersecting) {
      tl.play();
    } else {
      tl.reverse();
    }

  }, [isIntersecting, ref]);

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
    const body = `Hola equipo de MAROS Technology,\n\nMe gustaría solicitar una cotización para mi proyecto de ${selectedPlan}.\n\nEspero su respuesta, ¡gracias!`;
    window.location.href = `mailto:marostechnologies@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    handleCloseModal();
  };

  const handleInstagramClick = () => {
    const instagramUrl = "https://www.instagram.com/marostechnology?igsh=bXljbTl0NTN5OWMx&utm_source=qr";
    window.open(instagramUrl, "_blank");
    handleCloseModal();
  };

  return (
    <>
      <section 
        ref={ref}
        className={`relative py-16 bg-white md:py-24`}
        id="pricing"
      >
        <div className="container px-6 mx-auto relative z-10">
          {/* Encabezado */}
          <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#013467]/10 rounded-full text-[#013467] font-medium mb-6">
              <DollarSign className="w-4 h-4" />
              Precios y Planes
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Encuentra el plan <span className="text-[#013467]">perfecto</span> para ti
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Consulta nuestros precios transparentes para el desarrollo y soporte de tus proyectos.
            </p>
          </div>

          {/* Tarjetas de precios */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {pricingData.map((plan, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="group bg-gray-50 rounded-2xl p-6 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
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

      {/* Modal (sin cambios) */}
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
                <Instagram className="w-5 h-h5" />
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