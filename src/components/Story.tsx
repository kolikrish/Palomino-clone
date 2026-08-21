import React from 'react';
import storyImg from '../assets/images/third.jpg';
import { motion } from 'motion/react';

const Story: React.FC = () => {
  return (
    <section id="about" className="relative z-20 w-full bg-[#03070d] text-white py-24 px-6 sm:px-12 md:px-16 lg:px-20 select-none">
      <div className="max-w-[1920px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Label, Story Paragraph, About Link */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col justify-between h-full min-h-[420px] lg:min-h-[520px] py-4"
        >
          {/* Top Label Tag */}
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] font-medium text-white uppercase font-gilroy">
              <span className="w-2 h-2 rounded-full bg-white inline-block" />
              <span>OUR STORY</span>
            </div>
          </div>

          {/* Main Story Narrative */}
          <div className="my-auto py-8">
            <p className="text-2xl sm:text-3xl lg:text-[2rem] font-normal leading-[1.38] text-white tracking-tight font-poppins max-w-xl">
              Palomino became a photo and video production studio with a mission: to capture the emotion of sport and create value for everyone who makes it live, from brands to athletes, from federations to fans.
            </p>
          </div>

          {/* Bottom About CTA Link */}
          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-white hover:text-cyan-400 uppercase transition-colors font-gilroy"
            >
              <span>ABOUT US</span>
              <span className="text-sm">→</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Crew Photo (Scale 0 -> 1 Animation) */}
        <div className="lg:col-span-6 flex justify-end">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl overflow-hidden rounded-sm group shadow-2xl origin-center"
          >
            <img
              src={storyImg}
              alt="Palomino Production Crew"
              className="w-full h-auto max-h-[640px] object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Story;