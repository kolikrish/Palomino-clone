import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Menu } from 'lucide-react';

// Custom Hook for KPVerse Character Shuffle Effect
const useShuffleText = (originalText: string) => {
  const [displayText, setDisplayText] = useState(originalText);
  const isAnimatingRef = useRef(false);

  const triggerShuffle = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const chars = originalText.split('');
    const shuffleInterval = 12;
    const resetDelay = 50;
    const additionalDelay = 60;

    let currentChars = [...chars];

    chars.forEach((origChar, index) => {
      if (origChar === ' ') return; // Preserve spaces

      setTimeout(() => {
        const interval = setInterval(() => {
          currentChars[index] = String.fromCharCode(97 + Math.floor(Math.random() * 26));
          setDisplayText(currentChars.join(''));
        }, shuffleInterval);

        setTimeout(() => {
          clearInterval(interval);
          currentChars[index] = origChar;
          setDisplayText(currentChars.join(''));

          if (index === chars.length - 1) {
            isAnimatingRef.current = false;
          }
        }, resetDelay + index * additionalDelay);
      }, index * shuffleInterval);
    });
  }, [originalText]);

  return { displayText, triggerShuffle };
};

interface MenuItemProps {
  label: string;
  href: string;
  pageNo: string;
  isActive?: boolean;
  onClose: () => void;
  index: number;
}

const KPVerseMenuItem: React.FC<MenuItemProps> = ({
  label,
  href,
  pageNo,
  isActive,
  onClose,
  index,
}) => {
  const { displayText: labelText, triggerShuffle: shuffleLabel } = useShuffleText(label);
  const { displayText: pageText, triggerShuffle: shufflePage } = useShuffleText(pageNo);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    shuffleLabel();
    shufflePage();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -80, opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative py-2 sm:py-3 transition-all duration-300 flex items-center group cursor-pointer"
    >
      {/* KPVerse Polygon Hover Background Badge */}
      <div
        className={`absolute inset-0 bg-white transition-all duration-300 pointer-events-none rounded-sm ${
          isActive ? 'opacity-100 bg-[#00f0ff]' : isHovered ? 'opacity-100' : 'opacity-0 scale-95'
        }`}
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 80%, 95% 100%, 0 100%, 0% 50%)',
        }}
      />

      <div className="relative z-10 flex items-center justify-between w-full px-4 py-1">
        {/* Main Item Text Link */}
        <a
          href={href}
          onClick={onClose}
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase font-gilroy tracking-tight transition-colors duration-200 ${
            isActive || isHovered ? 'text-black' : 'text-white'
          }`}
        >
          {labelText}
        </a>

        {/* Page Number Label */}
        <span
          className={`text-xs font-mono tracking-widest uppercase transition-colors duration-200 ml-4 ${
            isActive
              ? 'text-black font-bold'
              : isHovered
              ? 'text-black/80 font-bold'
              : 'text-white/40'
          }`}
        >
          {pageText}
        </span>
      </div>
    </motion.div>
  );
};

export const KPVerseMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'WORK', href: '#work', pageNo: 'Page 001' },
    { label: 'ABOUT', href: '#about', pageNo: 'Page 002' },
    { label: 'SERVICES', href: '#services', pageNo: 'Page 003' },
    { label: 'TESTIMONIALS', href: '#testimonials', pageNo: 'Page 004' },
    { label: 'CONTACT', href: '#contact', pageNo: 'Page 005' },
  ];

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-xs font-gilroy font-semibold tracking-[0.25em] text-white hover:text-cyan-400 uppercase transition-colors"
        aria-label="Open navigation menu"
      >
        <Menu className="w-4 h-4" />
        <span>MENU</span>
      </button>

      {/* Slide-In Overlay Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9998]"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 bottom-0 left-0 w-full sm:w-[85vw] md:w-[60vw] lg:w-[45vw] bg-[#0a0a0a] text-white z-[9999] p-6 sm:p-10 flex flex-col justify-between border-r border-white/10 shadow-2xl overflow-y-auto"
            >
              {/* Header: Title & Close Button */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                <span className="text-xs font-mono tracking-[0.3em] text-white/50 uppercase">
                  DISCOVER • PALOMINO
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/70 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Menu Items List */}
              <div className="flex flex-col space-y-4 my-auto">
                {menuItems.map((item, index) => (
                  <KPVerseMenuItem
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    pageNo={item.pageNo}
                    onClose={() => setIsOpen(false)}
                    index={index}
                  />
                ))}
              </div>

              {/* Footer Links & Info */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 mt-8 text-xs font-poppins">
                <div>
                  <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">
                    CONNECT
                  </span>
                  <a
                    href="mailto:contact@palominoprod.com"
                    className="hover:text-cyan-400 transition-colors block text-white/80"
                  >
                    EMAIL
                  </a>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">
                    SOCIALS
                  </span>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-400 transition-colors block text-white/80"
                  >
                    INSTAGRAM
                  </a>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">
                    STUDIO
                  </span>
                  <span className="text-white/80 font-mono">2026</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default KPVerseMenu;
