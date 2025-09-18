"use client";

import { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/components/ui/intersection-observer';

const technologies = [
  { name: 'React', img: '/logos/react.png', category: '', desc: 'Creación de interfaces interactivas' },
  { name: 'Angular', img: '/logos/angular.png', category: '', desc: 'Desarrollo de aplicaciones web' },
  { name: 'UI Libraries', img: '/logos/ui.png', category: '', desc: 'Diseño y componentes visuales' },

  { name: 'PHP', img: '/logos/php.png', category: '', desc: 'Gestión de procesos en el servidor' },
  { name: 'Supabase', img: '/logos/supabase.png', category: '', desc: 'Servicios para datos y autenticación' },

  { name: 'SQL', img: '/logos/sql.png', category: '', desc: 'Almacenamiento de información' },
  { name: 'PHPMyAdmin', img: '/logos/phpmyadmin.png', category: '', desc: 'Administración de bases de datos' },

  { name: 'Git', img: '/logos/git.png', category: '', desc: 'Control y seguimiento de proyectos' },
  { name: 'GitHub', img: '/logos/github.png', category: '', desc: 'Plataforma para colaborar y compartir' },
  { name: 'Vite', img: '/logos/vite.png', category: '', desc: 'Herramienta para iniciar proyectos' },
  { name: 'Postman', img: '/logos/postman.png', category: '', desc: 'Pruebas y validación de servicios' },

  { name: 'Vercel', img: '/logos/vercel.png', category: '', desc: 'Publicación de aplicaciones web' },
  { name: 'Netlify', img: '/logos/netlify.png', category: '', desc: 'Implementación y alojamiento de sitios' }
];

const TechSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // Ajusta la velocidad de desplazamiento
    const checkPoint = carousel.scrollWidth / 2 - carousel.offsetWidth / 2;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= carousel.scrollWidth / 2) {
        scrollAmount = 0; // Reinicia el desplazamiento para el efecto infinito
      }
      carousel.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Concatenar el array para el efecto de carrusel infinito
  const infiniteTechnologies = [...technologies, ...technologies];

  return (
    <>
      <style jsx>{`
        /* Estilos del pseudo-elemento para la animación de fondo */
        .section-transition-container {
          position: relative;
          overflow: hidden;
        }

        .section-transition-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background: radial-gradient(circle at 100% 0, rgba(2, 52, 104, 0.08), transparent 50%),
                      radial-gradient(circle at 0% 100%, rgba(2, 52, 104, 0.08), transparent 50%);
          background-size: 200% 200%;
          opacity: 0;
          transition: opacity 1s ease-out, transform 1s ease-out;
          transform: translate3d(50px, 50px, 0); 
        }
        
        .section-transition-container.is-visible::before {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      `}</style>
      <section 
        ref={ref}
        className={`py-6 bg-white md:py-8 overflow-hidden section-transition-container ${isIntersecting ? 'is-visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-[#013467] font-semibold mb-3 shadow-sm">
              Herramientas Tecnológicas
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
              <span className="text-[#013467]">Stack</span> de Vanguardia
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Tecnologías modernas y confiables para soluciones robustas y escalables.
            </p>
          </div>

          {/* Carrusel */}
          <div 
            ref={carouselRef} 
            className="flex overflow-x-hidden gap-14 lg:gap-20 pb-4"
          >
            {infiniteTechnologies.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center cursor-pointer px-1 sm:px-3 rounded-xl min-h-[120px] sm:min-h-[180px] lg:min-h-[220px] transition-all duration-300 transform scale-100"
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="w-10 h-10 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain mb-1 sm:mb-3"
                />
                <h3 className="font-semibold text-gray-900 text-[10px] sm:text-sm lg:text-base text-center">
                  {tech.name}
                </h3>
                <span className="text-[8px] sm:text-xs lg:text-sm text-gray-500 text-center">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TechSection;