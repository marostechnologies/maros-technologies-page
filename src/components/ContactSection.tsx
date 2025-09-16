import { useIntersectionObserver } from '@/components/ui/intersection-observer';
import { Mail, MapPin, Instagram } from 'lucide-react';
import React from 'react';

const ContactSection = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

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
        className={`py-24 bg-white section-transition-container ${isIntersecting ? 'is-visible' : ''}`}
        id="contact"
      >
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#013467]/10 rounded-full text-[#013467] font-medium mb-6">
              <Mail className="w-4 h-4" />
              Contacto
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              ¿Listo para empezar <span className="text-[#013467]">tu proyecto?</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Conversemos sobre tu idea. Estamos aquí para crear la solución digital perfecta para tu negocio.
            </p>
          </div>

          {/* Contact Cards */}
          <div
            className={`grid grid-cols-2 gap-4 max-w-3xl mx-auto transition-opacity duration-1000 transform ${isIntersecting ? 'opacity-100' : 'opacity-0'}`}
          >

            {/* Email Card */}
            <a
              href="mailto:marostechnologies@gmail.com"
              className="group relative flex flex-col items-center text-center p-3 md:p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-transparent hover:ring-4 hover:ring-[#013467]/20"
            >
              <div className="space-y-2 flex flex-col items-center justify-center">
                <div className="p-2 md:p-3 bg-[#013467]/10 rounded-full group-hover:bg-yellow-400 transition-colors">
                  <Mail className="w-5 md:w-6 h-5 md:h-6 text-[#013467] group-hover:text-yellow-900" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-xs sm:text-sm md:text-base text-gray-900">Email</h4>
                  <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm font-medium group-hover:text-yellow-500 transition-colors break-words text-center">
                    marostechnologies@gmail.com
                  </p>
                  <p className="text-[9px] sm:text-xs md:text-sm text-gray-400 text-center">
                    Escríbenos para proyectos y consultas
                  </p>
                </div>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/marostechnology?igsh=bXljbTl0NTN5OWMx&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center text-center p-3 md:p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-transparent hover:ring-4 hover:ring-[#013467]/20"
            >
              <div className="space-y-2 flex flex-col items-center justify-center">
                <div className="p-2 md:p-3 bg-[#013467]/10 rounded-full group-hover:bg-yellow-400 transition-colors">
                  <Instagram className="w-5 md:w-6 h-5 md:h-6 text-[#013467] group-hover:text-yellow-900" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-xs sm:text-sm md:text-base text-gray-900">Instagram</h4>
                  <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm font-medium group-hover:text-yellow-500 transition-colors text-center">
                    @marostechnology
                  </p>
                  <p className="text-[9px] sm:text-xs md:text-sm text-gray-400 text-center">
                    Síguenos en redes sociales
                  </p>
                </div>
              </div>
            </a>

            {/* Map Card */}
            <div className="group relative flex flex-col items-center text-center p-3 md:p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-transparent hover:ring-4 hover:ring-[#013467]/20 col-span-2">
              <div className="space-y-2 mb-4 flex flex-col items-center justify-center">
                <div className="p-2 md:p-3 bg-[#013467]/10 rounded-full group-hover:bg-yellow-400 transition-colors">
                  <MapPin className="w-5 md:w-6 h-5 md:h-6 text-[#013467] group-hover:text-yellow-900" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-xs sm:text-sm md:text-base text-gray-900">Ubicación</h4>
                  <p className="text-gray-600 text-[10px] sm:text-xs md:text-sm font-medium">CDMX, México</p>
                </div>
              </div>

              <div className="w-full h-52 md:h-64 rounded-xl overflow-hidden shadow-inner">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240864.1951168045!2d-99.30876702731538!3d19.39065905548228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1757810212015!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;