import { useIntersectionObserver } from '@/components/ui/intersection-observer';

const ObjectiveSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const objectives = [
    {
      img: '/soluciones/desarrollo.PNG',
      title: "Desarrollo Personalizado",
      description: "Creamos soluciones de software únicas adaptadas a cada cliente"
    },
    {
      img: '/soluciones/gestion.PNG',
      title: "Gestión Completa",
      description: "Sistemas que permiten administrar toda la información de manera eficiente"
    },
    {
      img: '/soluciones/seguridad.PNG',
      title: "Sitios Web Robustos",
      description: "Plataformas web seguras y escalables para cualquier tipo de negocio"
    },
    {
      img: '/soluciones/autonomia.PNG',
      title: "Autonomía Total",
      description: "Entregamos herramientas que dan control completo sobre los sistemas"
    }
  ];

  return (
    <>
      <style jsx>{`
        .section-container {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .section-container.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-container .item {
          opacity: 0;
          transform: translateY(10px);
        }

        .section-container.is-visible .item {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        /* Retardos para los elementos del encabezado */
        .section-container.is-visible .header-item:nth-child(1) { transition-delay: 0s; }
        .section-container.is-visible .header-item:nth-child(2) { transition-delay: 0.1s; }
        .section-container.is-visible .header-item:nth-child(3) { transition-delay: 0.2s; }
        
        /* Retardos para las tarjetas */
        .section-container.is-visible .grid-item:nth-child(1) { transition-delay: 0.3s; }
        .section-container.is-visible .grid-item:nth-child(2) { transition-delay: 0.4s; }
        .section-container.is-visible .grid-item:nth-child(3) { transition-delay: 0.5s; }
        .section-container.is-visible .grid-item:nth-child(4) { transition-delay: 0.6s; }

      `}</style>
      <section 
        ref={ref}
        className={`py-12 bg-white md:py-16 section-container ${isIntersecting ? 'is-visible' : ''}`} 
        id="objective"
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="header-item inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-[#013467] font-semibold mb-3 shadow-sm">
              Nuestro Objetivo
            </div>
            <h2 className="header-item text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
              Desarrollar Soluciones que <span className="text-[#013467]">Transformen Negocios</span>
            </h2>
            <p className="header-item text-base md:text-lg text-gray-600 leading-relaxed">
              Creamos soluciones de software y sitios web personalizados que permiten la creación, gestión y administración completa de la información y sistemas de cada cliente.
            </p>
          </div>

          {/* Objectives Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="grid-item group relative cursor-pointer flex flex-col items-center text-center"
              >
                {/* Card */}
                <div
                  className="relative bg-white/0 rounded-2xl p-4 sm:p-6 w-full min-h-[220px] flex flex-col justify-between items-center overflow-hidden shadow-md hover:shadow-lg transition-all duration-400"
                >
                  {/* Icon y Title & Description */}
                  <div className="flex flex-col items-center flex-grow">
                      {/* Icon */}
                      <div
                        className="w-14 h-14 sm:w-16 sm:h-16 mb-3 flex items-center justify-center bg-white/5 rounded-xl shadow-inner"
                      >
                        <img src={objective.img} alt={objective.title} className="w-full h-full object-contain" />
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-1">
                        <h3 className="text-sm sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {objective.title}
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm leading-tight">
                          {objective.description}
                        </p>
                      </div>
                  </div>

                  {/* Bottom Hover Line */}
                  <div
                    className="mt-3 h-1 w-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full origin-left"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ObjectiveSection;