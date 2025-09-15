"use client";

import { useIntersectionObserver } from '@/components/ui/intersection-observer';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 });

  const mainLinks = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Objetivo', href: '#objective' },
    { name: 'Tecnologías', href: '#tech' },
  ];

  const secondaryLinks = [
    { name: 'Metodología', href: '#methodology' },
    { name: 'Contacto', href: '#contact' },
    { name: 'Pagos', href: '#payments' },
  ];

  const contactLinks = [
    { name: 'marostechnologies@gmail.com', href: 'mailto:marostechnologies@gmail.com', icon: <Mail className="w-4 h-4" /> },
    { name: 'marostechnologies', href: 'https://www.instagram.com/marostechnologies', icon: <Instagram className="w-4 h-4" /> },
    { name: 'CDMX, México', href: '#', icon: <MapPin className="w-4 h-4" /> }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#f5f7fa] text-gray-700 border-t border-[#d1d5db]">
      {/* Fondo sutil para diferenciar del contenido anterior */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#e2e6eb] to-transparent pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo y descripción */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="col-span-2 md:col-span-1 space-y-4"
          >
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
              <span className="font-semibold text-gray-900 text-lg">Maros Technologies</span>
            </div>
            <p className="text-sm text-gray-500">
              Empresa mexicana fundada en 2025, especializada en soluciones digitales.
            </p>
          </motion.div>

          {/* Enlaces de navegación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900">Navegación</h3>
            <div className="flex flex-col gap-2">
              {mainLinks.map((link, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-500 hover:text-[#013467] transition-colors text-sm text-left relative group"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900">Servicios</h3>
            <div className="flex flex-col gap-2">
              {secondaryLinks.map((link, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-500 hover:text-[#013467] transition-colors text-sm text-left relative group"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isIntersecting ? 1 : 0, y: isIntersecting ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900">Contacto</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#013467] transition-colors cursor-pointer"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
          <p>© 2025 Maros Technologies. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;