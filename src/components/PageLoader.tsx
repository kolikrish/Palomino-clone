import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const PageLoader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [triggerCircle, setTriggerCircle] = useState(false);

  useEffect(() => {
    // Prevent background scrolling while loading
    document.body.style.overflow = 'hidden';

    // 0 to 100 Counter Animation
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTriggerCircle(true);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = '';
          }, 1100);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden select-none pointer-events-auto"
        >
          {/* Brand Logo & Percentage Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 3 }}
            animate={{ opacity: 1, scale: 2 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.50 } }}
            className="flex flex-col items-center gap-4 z-20 text-white"
          >
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12 text-white animate-pulse"
              >
                <path d="M12 2L4.5 20.5H9.5L12 14.2L14.5 20.5H19.5L12 2Z" />
                <path d="M12 6L9 13.5H15L12 6Z" opacity="0.6" />
              </svg>
            </div>
            <span className="font-gilroy font-extrabold text-2xl sm:text-3xl tracking-[0.3em] uppercase text-white">
              PALOMINO
            </span>
            <span className="font-mono text-sm tracking-widest text-white/50">
              {count}%
            </span>
          </motion.div>

          {/* Scaling White Circle from 0 at the center */}
          <motion.div
            initial={{ scale: 0 }}
            animate={triggerCircle ? { scale: 50 } : { scale: 0 }}
            transition={{
              duration: 1.0,
              ease: [0.76, 0, 0.24, 1], // Sleek custom cubic-bezier exponential curve
            }}
            className="absolute w-16 h-16 rounded-full bg-white z-10 pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
