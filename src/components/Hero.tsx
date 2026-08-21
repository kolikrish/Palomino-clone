import React, { useRef } from 'react';
import heroImg from '../assets/hero.webp';
import { motion, useScroll, useTransform } from 'motion/react';

export const Hero: React.FC = () => {
  const description =
    "Sports film and photography studio. We turn brand campaigns and athlete journeys into stories worth remembering.";

  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll position of Hero section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // SPORTS slides left on scroll (-25vw)
  const sportsX = useTransform(scrollYProgress, [0, 1], ['0vw', '-25vw']);

  // STORIES slides right on scroll (+25vw)
  const storiesX = useTransform(scrollYProgress, [0, 1], ['0vw', '25vw']);

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 z-10 w-full min-h-screen h-[100vh] h-[100dvh] bg-[#03070d] overflow-hidden flex flex-col justify-between select-none"
    >
      {/* 1. Cinematic Background Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <img
          src={heroImg}
          alt="Palomino Sports Motion Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="h-24 sm:h-28 w-full" />

      {/* 2. Main Hero Typography (Staggered Layout: SPORTS INTO STORIES) */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex-1 flex flex-col justify-center my-auto">
        <div className="w-full flex flex-col space-y-0 font-display">
          
          {/* Row 1: SPORTS (Aligned Left - Slides Left on Scroll) */}
          <motion.div style={{ x: sportsX }} className="w-full flex justify-start pl-2 sm:pl-6 md:pl-10 lg:pl-16 overflow-hidden">
            <motion.h1
              initial={{ y: '120%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 2.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[14.5vw] sm:text-[13vw] md:text-[11.5vw] lg:text-[10.5vw] xl:text-[9.5rem] 2xl:text-[11rem] tracking-[-0.03em] leading-[0.84] text-white uppercase font-gilroy"
            >
              SPORTS
            </motion.h1>
          </motion.div>

          {/* Row 2: INTO (Offset Center-Right) */}
          <div className="w-full flex justify-center sm:justify-start pl-[20vw] sm:pl-[28vw] md:pl-[32vw] lg:pl-[35vw] overflow-hidden">
            <motion.h1
              initial={{ y: '120%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 2.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[14.5vw] sm:text-[13vw] md:text-[11.5vw] lg:text-[10.5vw] xl:text-[9.5rem] 2xl:text-[11rem] tracking-[-0.03em] leading-[0.84] text-white uppercase font-gilroy"
            >
              INTO
            </motion.h1>
          </div>

          {/* Row 3: STORIES (Aligned Far Right - Slides Right on Scroll) */}
          <motion.div style={{ x: storiesX }} className="w-full flex justify-end pr-2 sm:pr-6 md:pr-10 lg:pr-16 overflow-hidden">
            <motion.h1
              initial={{ y: '120%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: 2.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[14.5vw] sm:text-[13vw] md:text-[11.5vw] lg:text-[10.5vw] xl:text-[9.5rem] 2xl:text-[11rem] tracking-[-0.03em] leading-[0.84] text-white uppercase font-gilroy"
            >
              STORIES
            </motion.h1>
          </motion.div>

        </div>
      </div>

      {/* 3. Bottom Row Content: Left Paragraph Reveal */}
      <div className="relative z-20 w-full max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16 lg:px-10 pb-8 sm:pb-12 md:pb-10 flex flex-col sm:flex-row items-end justify-between gap-6 overflow-hidden">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.0,
            delay: 2.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-xs sm:max-w-sm md:max-w-md text-left"
        >
          <p className="text-xs sm:text-sm md:text-[15px] font-light leading-relaxed text-slate-300/90 tracking-wide font-poppins">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
