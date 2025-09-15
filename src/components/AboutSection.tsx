import { useIntersectionObserver } from '@/components/ui/intersection-observer';
import {
  SparklesIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const AboutIcon = ({ icon, title, size = 24 }) => {
  if (typeof icon === 'string') {
    return (
      <img
        src={icon}
        alt={`${title} icon`}
        className={`w-${size} h-${size} object-contain`} // tamaño dinámico
      />
    );
  } else {
    const Icon = icon;
    return <Icon className={`w-6 h-6 text-[#013467]`} />; // los demás iconos quedan igual
  }
};

const AboutSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

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

        /* Retardos para efectos secuenciales */
        .section-container.is-visible .text-content .item:nth-child(1) { transition-delay: 0s; }
        .section-container.is-visible .text-content .item:nth-child(2) { transition-delay: 0.1s; }
        .section-container.is-visible .text-content .item:nth-child(3) { transition-delay: 0.2s; }

        .section-container.is-visible .cards-content .item:nth-child(1) { transition-delay: 0.3s; }
        .section-container.is-visible .cards-content .item:nth-child(2) { transition-delay: 0.4s; }
        .section-container.is-visible .cards-content .item:nth-child(3) { transition-delay: 0.5s; }
        .section-container.is-visible .cards-content .item:nth-child(4) { transition-delay: 0.6s; }
        .section-container.is-visible .cards-content .item:nth-child(5) { transition-delay: 0.7s; }

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
        className={`py-12 bg-white md:py-16 section-container section-transition-container ${isIntersecting ? 'is-visible' : ''}`}
      >
        <div className="container px-6 mx-auto relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* ===================== TEXT CONTENT ===================== */}
            <div className="space-y-8 lg:space-y-10 text-content">
              <h2 className="item text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                Empresa Mexicana de <span className="text-[#013467]">Desarrollo Digital</span>
              </h2>

              <p className="item max-w-full text-base leading-relaxed text-justify text-gray-700 md:text-lg lg:max-w-xl">
                Fundada en 2025 en la Ciudad de México, nuestra empresa se distingue por el desarrollo
                y mantenimiento de soluciones digitales personalizadas. Nos enfocamos en la creación de
                sitios web diseñados para responder a las necesidades específicas de cada cliente.
              </p>

              <p className="item max-w-full text-base leading-relaxed text-justify text-gray-700 md:text-lg lg:max-w-xl">
                Nuestro propósito es ofrecer herramientas tecnológicas que faciliten la gestión integral
                de la información, otorgando a las organizaciones plena autonomía en su administración.
                Asimismo, brindamos servicios de mantenimiento especializado o, en su caso, la entrega
                completa de los sistemas para que cada cliente pueda asumir de manera independiente su
                gestión y actualización.
              </p>
            </div>

            {/* ===================== VISUAL CONTENT / CARDS ===================== */}
            <div className="space-y-8 lg:space-y-10 cards-content">
              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                {[
                  {
                    icon: '/about/mision.png',
                    title: 'Misión',
                    description:
                      'Desarrollar soluciones digitales personalizadas que impulsen a cada cliente a gestionar y optimizar su información de manera integral y eficiente.',
                    size: 12, // más grande solo para Misión
                  },
                  {
                    icon: '/about/vision.png',
                    title: 'Visión',
                    description:
                      'Ser una empresa mexicana referente en innovación tecnológica, reconocida por ofrecer sitios web y sistemas a la medida que generen autonomía y valor sostenible.',
                    size: 10, // más grande solo para Visión
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="item p-6 transition-all duration-300 bg-white rounded-2xl shadow-xl hover:scale-[1.04] hover:shadow-2xl"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 bg-[#013467]/10 rounded-lg`}>
                        <AboutIcon icon={item.icon} title={item.title} size={item.size} />
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
                    className="item flex items-start gap-4 p-4 transition-all duration-300 bg-white rounded-lg shadow hover:scale-[1.03] hover:shadow-lg"
                  >
                    <div className="p-2 rounded-lg shrink-0 bg-[#013467]/10">
                      <feature.icon className="w-6 h-6 text-[#013467]" />
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
    </>
  );
};

export default AboutSection;