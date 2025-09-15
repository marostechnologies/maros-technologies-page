"use client";

import { useState, useEffect } from "react";
import { Globe } from "lucide-react";

const words = ["Personalizado", "Innovador", "Funcional", "Responsivo", "Escalable"];

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacity = 1 - Math.min(1, scrollPosition / 1000); 
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-t from-white via-white/80 to-white"
    >
      {/* Círculo azul con efecto de ondas */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-95 pointer-events-none animate-pulse-slow"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #013467 0%, transparent 60%), radial-gradient(circle at center, #0166a1 0%, transparent 80%)',
          filter: 'blur(80px)',
        }}
      ></div>

      {/* Contenido principal con efecto de desvanecimiento */}
      <div 
        className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto transition-opacity duration-300"
        style={{ opacity: scrollOpacity }}
      >
        {/* Logo de Maros */}
        <div className="flex justify-center mb-4">
          <img 
            src="/MAROS_LOGO_SINFONDO.PNG" 
            alt="Maros Logo" 
            className="w-48 h-auto drop-shadow-lg transition-transform duration-300 hover:scale-110"
          />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight transition-all duration-300 hover:text-[#013467]">
          Desarrollo Web
          <br />
          <span 
            key={words[currentWordIndex]}
            className="inline-block text-[#013467] transition-all duration-700 ease-in-out transform"
            style={{ opacity: 1, transform: 'scale(1)' }}
          >
            {words[currentWordIndex]}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4 sm:mt-6 transition-all duration-300 hover:scale-105">
          Creamos soluciones de software y sitios web únicos que permiten la
          gestión completa de sistemas para cada cliente
        </p>
      </div>
    </section>
  );
};

export default HeroSection;