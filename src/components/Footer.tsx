import React from 'react';
import videoSrc from '../assets/1.mp4';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white text-black font-poppins select-none">
      {/* 1. Top Section: Logo & 5 Columns Links */}
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 pt-16 pb-12">
        
        {/* Brand Flame Logo Icon (Black) */}
        <div className="mb-12">
          <a href="#" className="inline-block" aria-label="Palomino Home">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-black">
              <path d="M12 2L4.5 20.5H9.5L12 14.2L14.5 20.5H19.5L12 2Z" />
              <path d="M12 6L9 13.5H15L12 6Z" opacity="0.6" />
            </svg>
          </a>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 text-xs font-light text-slate-600 border-b border-black/10 pb-12">
          
          {/* Column 1: INFOS */}
          <div className="space-y-3">
            <span className="font-gilroy text-[11px] tracking-[0.25em] font-semibold text-black uppercase block mb-4">
              INFOS
            </span>
            <p className="leading-relaxed">Paris | Barcelone</p>
            <p className="leading-relaxed">
              <a href="mailto:contact@palominoprod.com" className="hover:text-black transition-colors">
                contact@palominoprod.com
              </a>
            </p>
            <p className="leading-relaxed">+33 6 44 24 32 25</p>
          </div>

          {/* Column 2: PAGES */}
          <div className="space-y-2">
            <span className="font-gilroy text-[11px] tracking-[0.25em] font-semibold text-black uppercase block mb-4">
              PAGES
            </span>
            <a href="#" className="block hover:text-black transition-colors uppercase">HOME</a>
            <a href="#work" className="block hover:text-black transition-colors uppercase">WORK</a>
            <a href="#archive" className="block hover:text-black transition-colors uppercase">ARCHIVE</a>
            <a href="#about" className="block hover:text-black transition-colors uppercase">ABOUT</a>
            <a href="#contact" className="block hover:text-black transition-colors uppercase">CONTACT</a>
          </div>

          {/* Column 3: SOCIALS */}
          <div className="space-y-2">
            <span className="font-gilroy text-[11px] tracking-[0.25em] font-semibold text-black uppercase block mb-4">
              SOCIALS
            </span>
            <a href="#" target="_blank" rel="noreferrer" className="block hover:text-black transition-colors uppercase">
              INSTAGRAM
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="block hover:text-black transition-colors uppercase">
              LINKEDIN
            </a>
          </div>

          {/* Column 4: LEGALS */}
          <div className="space-y-2">
            <span className="font-gilroy text-[11px] tracking-[0.25em] font-semibold text-black uppercase block mb-4">
              LEGALS
            </span>
            <a href="#" className="inline-flex items-center gap-2 hover:text-black transition-colors uppercase">
              <span className="w-2 h-2 rounded-full bg-black inline-block" />
              <span>TERMS</span>
            </a>
          </div>

          {/* Column 5: DESIGNED BY */}
          <div className="col-span-2 md:col-span-1 md:text-right self-end">
            <p className="text-[11px] text-slate-500 uppercase tracking-wider font-mono">
              DESIGNED & DEVELOPED BY{' '}
              <a href="#" className="underline font-bold text-black hover:text-cyan-600 transition-colors">
                METABOLE
              </a>
            </p>
          </div>

        </div>

      </div>

      {/* 2. Bottom Section: Massive PALOMINO Big Text with Video Inside */}
      <div className="w-full bg-white pt-4 pb-8 overflow-hidden flex items-center justify-center">
        <svg className="w-full h-auto select-none" viewBox="0 0 1200 220">
          <defs>
            {/* SVG Mask cutting out PALOMINO text */}
            <mask id="palomino-video-mask">
              <rect width="100%" height="100%" fill="black" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="central"
                fill="white"
                fontSize="215"
                fontWeight="900"
                fontFamily="Gilroy-Medium, sans-serif"
                letterSpacing="-8"
              >
                PALOMINO
              </text>
            </mask>
          </defs>

          {/* Video playing INSIDE the PALOMINO text */}
          <foreignObject x="0" y="0" width="1200" height="220" mask="url(#palomino-video-mask)">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </foreignObject>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;