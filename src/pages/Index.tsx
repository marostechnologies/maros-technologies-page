import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ObjectiveSection from '@/components/ObjectiveSection';
import TechSection from '@/components/TechSection';
import MethodologySection from '@/components/MethodologySection';
import ContactSection from '@/components/ContactSection';
import PaymentsSection from '@/components/PaymentsSection'; // <-- Importa el componente de pagos
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <div id="hero">
          <HeroSection />
        </div>
        
        <div id="about">
          <AboutSection />
        </div>
        
        <div id="objective">
          <ObjectiveSection />
        </div>
        
        <div id="tech">
          <TechSection />
        </div>
        
        <div id="methodology">
          <MethodologySection />
        </div>
        
        <div id="contact">
          <ContactSection />
        </div>

        {/* Agrega la sección de pagos aquí */}
        <div id="payments">
          <PaymentsSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;