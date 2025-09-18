import { useIntersectionObserver } from '@/components/ui/intersection-observer';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import React from 'react';

const ObjectiveSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

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

  useEffect(() => {
    if (isIntersecting) {
      // Create a single GSAP Timeline for all animations
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        }
      });
      
      // Animate the header elements with a staggered fly-in effect
      tl.fromTo(headerRef.current.children, {
        opacity: 0,
        y: 40,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
      });

      // Animate the cards with a subtle 3D flip-in after the header animation is done
      tl.fromTo(cardsRef.current, {
        opacity: 0,
        y: 60,
        rotationX: 30,
        transformOrigin: "50% 50% -50px",
      }, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.2,
      }, "-=0.2"); // Overlap with the header animation for a smoother flow

      // Animate the icons popping in after their respective cards
      tl.fromTo(".card-content img", {
        opacity: 0,
        scale: 0.5,
      }, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.2,
      }, "<0.1"); // Overlap with the cards animation
    }
  }, [isIntersecting]);

  return (
    <>
      <style jsx>{`
        /* Minimal CSS for hover effect, relying on GSAP for entry animations */
        .card-content {
           transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
           box-shadow: 0 4px 15px -1px rgba(0, 0, 0, 0.1), 0 2px 8px -1px rgba(0, 0, 0, 0.06);
           background: linear-gradient(145deg, #ffffff, #f0f8ff);
        }
        
        .grid-item:hover .card-content {
           transform: translateY(-8px) scale(1.02); /* Simplified hover, no complex 3D rotation */
           box-shadow: 0 12px 20px -3px rgba(1, 52, 103, 0.2), 0 6px 10px -2px rgba(1, 52, 103, 0.1), inset 0 0 20px rgba(1, 52, 103, 0.1);
        }
      `}</style>
      <section  
        ref={ref}
        className={`py-12 bg-white md:py-16`}  
        id="objective"
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-[#013467] font-semibold mb-3 shadow-sm">
              Nuestro Objetivo
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
              Desarrollar Soluciones que <span className="text-[#013467]">Transformen Negocios</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Creamos soluciones de software y sitios web personalizados que permiten la creación, gestión y administración completa de la información y sistemas de cada cliente.
            </p>
          </div>

          {/* Objectives Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="group relative cursor-pointer flex flex-col items-center text-center"
              >
                {/* Card */}
                <div
                  className="relative bg-white rounded-2xl p-4 sm:p-6 w-full min-h-[220px] flex flex-col justify-between items-center overflow-hidden shadow-md transition-all duration-400 card-content"
                >
                  {/* Icon y Title & Description */}
                  <div className="flex flex-col items-center flex-grow">
                      {/* Icon */}
                      <div
                        className="w-14 h-14 sm:w-16 sm:h-16 mb-3 flex items-center justify-center bg-blue-100/50 rounded-xl"
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