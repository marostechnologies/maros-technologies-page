"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import {
  SparklesIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

gsap.registerPlugin(ScrollTrigger);

const AboutIcon = ({ icon, title, size = 24 }) => {
  if (typeof icon === 'string') {
    return (
      <img
        src={icon}
        alt={`${title} icon`}
        className={`w-${size} h-${size} object-contain about-icon`}
        style={{ willChange: 'transform, opacity' }}
      />
    );
  } else {
    const Icon = icon;
    return <Icon className={`w-6 h-6 text-[#013467] about-icon`} style={{ willChange: 'transform, opacity' }} />;
  }
};

const AboutSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;

    const splitTitle = new SplitType(sectionRef.current.querySelector('.title-animation'), { types: 'chars' });
    gsap.from(splitTitle.chars, {
      y: isMobile ? 40 : 100,
      opacity: 0,
      stagger: isMobile ? 0.02 : 0.03,
      ease: "back.out(2)",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: isMobile ? "top 95%" : "top 80%",
        toggleActions: "play none none none",
      }
    });

    const textElements = gsap.utils.selector(sectionRef.current)('.text-content p');
    textElements.forEach((p, i) => {
      gsap.from(p, {
        y: isMobile ? 20 : 50 * (i + 1),
        opacity: 0,
        rotationX: isMobile ? 0 : 90,
        transformOrigin: "bottom center",
        ease: "power2.out",
        scrollTrigger: {
          trigger: p,
          start: isMobile ? "top 95%" : "top 90%",
          toggleActions: "play none none none",
        }
      });
    });

    const cardElements = gsap.utils.selector(sectionRef.current)('.about-card');
    cardElements.forEach((card, i) => {
      gsap.from(card, {
        x: isMobile ? 0 : (i % 2 === 0 ? -100 : 100),
        opacity: 0,
        rotation: isMobile ? 0 : (i % 2 === 0 ? -15 : 15),
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: isMobile ? "top 95%" : "top 90%",
          toggleActions: "play none none none",
        }
      });
    });

    const iconElements = gsap.utils.selector(sectionRef.current)('.about-icon');
    iconElements.forEach((icon, i) => {
      gsap.from(icon, {
        scale: 0,
        rotation: isMobile ? 0 : 360,
        ease: "back.out(2.5)",
        scrollTrigger: {
          trigger: icon,
          start: isMobile ? "top 95%" : "top 95%",
          toggleActions: "play none none none",
        }
      });
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-12 bg-white md:py-16">
      {/* Degradado sutil en la parte inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
           style={{ background: "linear-gradient(to bottom, transparent, #f9fafb)" }} />

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8 lg:space-y-10 text-content">
            <h2 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl title-animation">
              Empresa Mexicana de <span className="text-[#013467]">Desarrollo Digital</span>
            </h2>
            <p className="max-w-full text-base leading-relaxed text-justify text-gray-700 md:text-lg lg:max-w-xl">
              Fundada en 2025 en la Ciudad de México, nuestra empresa se distingue por el desarrollo
              y mantenimiento de soluciones digitales personalizadas. Nos enfocamos en la creación de
              sitios web diseñados para responder a las necesidades específicas de cada cliente.
            </p>
            <p className="max-w-full text-base leading-relaxed text-justify text-gray-700 md:text-lg lg:max-w-xl">
              Nuestro propósito es ofrecer herramientas tecnológicas que faciliten la gestión integral
              de la información, otorgando a las organizaciones plena autonomía en su administración.
              Asimismo, brindamos servicios de mantenimiento especializado o, en su caso, la entrega
              completa de los sistemas para que cada cliente pueda asumir de manera independiente su
              gestión y actualización.
            </p>
          </div>
          <div className="space-y-8 lg:space-y-10 cards-content">
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {[
                {
                  icon: '/about/mision.png',
                  title: 'Misión',
                  description: 'Desarrollar soluciones digitales personalizadas que impulsen a cada cliente a gestionar y optimizar su información de manera integral y eficiente.',
                },
                {
                  icon: '/about/vision.png',
                  title: 'Visión',
                  description: 'Ser una empresa mexicana referente en innovación tecnológica, reconocida por ofrecer sitios web y sistemas a la medida que generen autonomía y valor sostenible.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 transition-all duration-300 bg-white rounded-2xl shadow-xl hover:scale-[1.04] hover:shadow-2xl about-card"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-[#013467]/10 rounded-lg">
                      <AboutIcon icon={item.icon} title={item.title} size={10} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="leading-relaxed text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-6">
              {[
                {
                  icon: SparklesIcon,
                  title: 'Soluciones Personalizadas',
                  description: 'Cada proyecto es único y adaptado a las necesidades específicas del cliente',
                },
                {
                  icon: ComputerDesktopIcon,
                  title: 'Servicios Fullstack',
                  description: 'Desarrollo completo desde frontend hasta backend y gestión de datos',
                },
                {
                  icon: WrenchScrewdriverIcon,
                  title: 'Mantenimiento Opcional',
                  description: 'Ofrecemos mantenimiento bajo demanda o entrega completa del sistema',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 transition-all duration-300 bg-white rounded-lg shadow hover:scale-[1.03] hover:shadow-lg about-card"
                >
                  <div className="p-2 rounded-lg shrink-0 bg-[#013467]/10">
                    <feature.icon className="w-6 h-6 text-[#013467] about-icon" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-justify text-gray-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
