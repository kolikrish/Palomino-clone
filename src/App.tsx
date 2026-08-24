import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import Carousel from './components/Carousel';
import Projects from './components/Projects';
import KeyFigures from './components/KeyFigures';
import Services from './components/Services';
import Story from './components/Story';
import Testimonials from './components/Testimonials';
import FtrTop from './components/FtrTop';
import Footer from './components/Footer';
import { PageLoader } from './components/PageLoader';
import Ribbons from './utils/Ribbons';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#03070d] text-white selection:bg-white selection:text-black relative overflow-x-hidden">
      {/* Intro Landing Animation */}
      <PageLoader />

      {/* Interactive Ribbon Cursor Overlay Container */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-40 overflow-hidden">
        <Ribbons
          baseThickness={30}
          colors={['#5227FF', '#00f0ff', '#ffffff']}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={false}
        />
      </div>

      <Navbar />
      <main className="w-full">
        <Hero />
        <Carousel />
        <Projects />
        <KeyFigures />
        <Story />
        <Services />
        <Testimonials />
        <FtrTop />
        <Footer />
      </main>
    </div>
  );
};

export default App;

