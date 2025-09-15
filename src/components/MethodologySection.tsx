"use client";

import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/components/ui/intersection-observer';

const MethodologySection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });
  const [activeIndex, setActiveIndex] = useState(0);

  const scrumPhases = [
    {
      phase: "01",
      title: "Sprint Planning",
      description: "Definimos objetivos claros y planificamos cada iteración con precisión.",
      benefits: ["Objetivos SMART", "Estimaciones precisas", "Compromiso del equipo", "Backlog priorizado"],
      color: "#013467"
    },
    {
      phase: "02",
      title: "Daily Scrum",
      description: "Sincronización diaria y resolución proactiva de impedimentos.",
      benefits: ["Comunicación fluida", "Detección temprana", "Alineación constante", "Transparencia total"],
      color: "#014a7c"
    },
    {
      phase: "03",
      title: "Sprint Review",
      description: "Presentación de resultados y feedback continuo del cliente.",
      benefits: ["Feedback inmediato", "Validación temprana", "Iteración rápida", "Satisfacción garantizada"],
      color: "#0166a1"
    },
    {
      phase: "04",
      title: "Retrospective",
      description: "Análisis de mejoras continuas para optimizar próximos sprints.",
      benefits: ["Mejora continua", "Aprendizaje iterativo", "Optimización de procesos", "Cultura de excelencia"],
      color: "#0181c6"
    }
  ];

  useEffect(() => {
    if (isIntersecting) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % scrumPhases.length);
      }, 2700); // Velocidad ajustada a 2.7 segundos
      return () => clearInterval(interval);
    }
  }, [isIntersecting, scrumPhases.length]);

  const currentPhase = scrumPhases[activeIndex];

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

        /* Animación para el cambio de contenido */
        .content-transition {
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }
        
        .content-transition.is-visible {
          opacity: 1;
          transform: scale(1);
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
        className={`py-24 bg-white section-container section-transition-container ${isIntersecting ? 'is-visible' : ''}`}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div 
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="header-item inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-[#013467] font-semibold mb-4 shadow-sm">
              Metodología SCRUM
            </div>
            <h2 className="header-item text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Desarrollo Ágil con <span className="text-[#013467]">SCRUM</span>
            </h2>
            <p className="header-item text-base md:text-lg text-gray-600 leading-relaxed">
              Garantizamos entregas eficientes, comunicación transparente y adaptabilidad a los cambios durante todo el proceso.
            </p>
          </div>

          <div 
            className={`relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 max-w-[880px] mx-auto`}
          >
            <div 
              key={activeIndex + "-left"} 
              className={`flex-1 flex flex-col items-center md:items-start text-center md:text-left content-transition ${isIntersecting ? 'is-visible' : ''}`}
            >
              <div
                className="w-20 h-20 flex items-center justify-center rounded-full text-white font-bold text-2xl shadow-md mb-4 transition-all duration-700 ease-in-out"
                style={{ background: `linear-gradient(135deg, ${currentPhase.color}, #0166a1)` }}
              >
                {currentPhase.phase}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 transition-all duration-700 ease-in-out">
                {currentPhase.title}
              </h3>
            </div>

            <div 
              key={activeIndex + "-right"} 
              className={`flex-1 flex flex-col text-gray-700 content-transition ${isIntersecting ? 'is-visible' : ''}`}
            >
              <p className="mb-4 text-sm md:text-base">{currentPhase.description}</p>
              <div className="flex flex-wrap gap-3">
                {currentPhase.benefits.map((benefit, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-[#013467]/10 to-[#0166a1]/10 text-[#013467] rounded-full text-xs md:text-sm font-medium cursor-default transition-all duration-700 ease-in-out hover:scale-105"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MethodologySection;