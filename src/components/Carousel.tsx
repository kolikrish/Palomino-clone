import React from 'react';

const logoModules = import.meta.glob('../assets/clients/*.png', {
  eager: true,
  import: 'default',
});

const clientLogos = Object.values(logoModules) as string[];

const Carousel: React.FC = () => {
  // Duplicate logos array to create seamless 360 infinite marquee loop
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="relative z-20 w-full bg-[#03070d] py-16 overflow-hidden select-none shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
      <div className="max-w-[1920px] mx-auto px-6 mb-10 text-center">
        <span className="text-lg text-white font-gilroy uppercase tracking-wide">
          TRUSTED BY LEADING GLOBAL BRANDS & ATHLETES
        </span>
      </div>

      {/* Infinite Marquee Track */}
      <div className="w-full overflow-hidden flex items-center">
        <div className="animate-marquee flex items-center gap-12 sm:gap-20 md:gap-24 py-4">
          {marqueeLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-10 sm:h-12 md:h-24"
            >
              <img
                src={logo}
                alt={`Client Logo ${index + 1}`}
                className="h-full w-auto max-w-[180px] sm:max-w-[200px] object-contain duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;