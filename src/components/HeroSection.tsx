"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

const words = ["Personalizado", "Innovador", "Funcional", "Responsivo", "Escalable"];

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);

  // Animaciones GSAP principales (Entrada y scroll)
  useGSAP(() => {
    // Validar que los elementos de referencia existan antes de usarlos
    if (!titleRef.current || !subtitleRef.current) return;
    
    // Animación de entrada con SplitType
    const splitTitle = new SplitType(titleRef.current, { types: 'chars, words' });
    const splitSubtitle = new SplitType(subtitleRef.current, { types: 'lines' });

    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-logo",
      { opacity: 0, y: 30, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
    )
    .from(
      splitTitle.chars,
      {
        opacity: 0,
        y: 20,
        rotationX: 90,
        stagger: 0.05,
        duration: 0.8,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    )
    .from(
      splitSubtitle.lines,
      {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4"
    );
  }, { scope: mainRef });

  // Animación de cambio de palabras
  useEffect(() => {
    const interval = setInterval(() => {
      if (wordRef.current) {
        gsap.to(wordRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
            gsap.fromTo(
              wordRef.current,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
            );
          },
        });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Efecto de fade al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY;
        const opacity = 1 - Math.min(1, scrollY / 1000);
        gsap.to(containerRef.current, { opacity, duration: 0.3, ease: "power1.out" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animación de pulso para el fondo
  useEffect(() => {
    if (pulseRef.current) {
      gsap.to(pulseRef.current, {
        scale: 1.05,
        rotate: 5,
        y: "5%",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-t from-white via-white/80 to-white"
    >
      {/* Círculo azul con efecto de ondas */}
      <div
        ref={pulseRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none will-change-transform"
        style={{
          backgroundImage: "radial-gradient(circle at center, #013467 0%, transparent 60%), radial-gradient(circle at center, #0166a1 0%, transparent 80%)",
          filter: "blur(80px)",
        }}
      ></div>

      {/* Contenido principal */}
      <div
        ref={containerRef}
        className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto will-change-opacity transform-gpu"
      >
        <div ref={mainRef} className="flex flex-col items-center">
          {/* Logo */}
          <div className="flex justify-center mb-4 hero-logo">
            <img
              src="/MAROS_LOGO_SINFONDO.PNG"
              alt="Maros Logo"
              className="w-48 h-auto drop-shadow-lg will-change-transform"
            />
          </div>

          {/* Heading principal */}
          <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight will-change-transform text-gray-900">
            Desarrollo Web
            <br />
            <span
              ref={wordRef}
              className="inline-block text-[#013467] will-change-transform"
            >
              {words[currentWordIndex]}
            </span>
          </h1>

          {/* Subtítulo */}
          <p ref={subtitleRef} className="text-base sm:text-lg text-gray-950 max-w-2xl mx-auto leading-relaxed mt-4 sm:mt-6 will-change-transform">
            Creamos soluciones de software y sitios web únicos que permiten la
            gestión completa de sistemas para cada cliente
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;