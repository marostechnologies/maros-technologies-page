import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Objetivo', href: '#objective' },
    { name: 'Tecnologías', href: '#tech' },
    { name: 'Metodología', href: '#methodology' },
    { name: 'Contacto', href: '#contact' },
    { name: 'Pagos', href: '#payments' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 15 } },
  };

  const linkVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20 relative">
          
          {/* Espacio para que el menú ocupe todo el ancho y las palabras se centren */}
          <div className="flex-grow flex justify-center hidden lg:flex">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                custom={index}
                variants={linkVariants}
                initial="initial"
                animate="animate"
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold tracking-wide text-[#013467] transition-all duration-300 hover:text-[#0050a0] hover:scale-105 mx-4"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-[#013467]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.4 }}
        className="lg:hidden overflow-hidden bg-white shadow-md"
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              onClick={() => scrollToSection(item.href)}
              className="text-left text-[#013467] font-semibold text-lg hover:text-[#0050a0] hover:scale-105 transition-transform duration-300"
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;