import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import video1 from '../assets/1.mp4';
import video2 from '../assets/2.mp4';
import { motion } from 'motion/react';

const Projects: React.FC = () => {
  return (
    <section id="work" className="relative z-20 w-full min-h-[120vh] h-auto lg:h-[120vh] bg-[#03070d] text-white px-6 sm:px-12 md:px-16 lg:px-20 py-16 flex flex-col justify-between select-none">
      <div className="max-w-[1920px] mx-auto w-full h-full flex flex-col lg:flex-row gap-12 lg:gap-16 justify-between items-stretch">
        
        {/* Left Column Text (Sticky on Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-[32%] xl:w-[30%] lg:sticky lg:top-28 h-fit flex flex-col justify-between py-2"
        >
          {/* Top Label */}
          <div>
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] font-medium text-white uppercase font-gilroy">
              <span className="w-2 h-2 rounded-full bg-white inline-block" />
              <span>SELECTED PROJECTS</span>
            </div>
          </div>

          {/* Bottom Heading Paragraph */}
          <div className="mt-12 lg:mt-0">
            <h2 className="text-2xl sm:text-3xl lg:text-[1.7rem] font-normal leading-[1.25] text-white tracking-tight max-w-md font-poppins">
              Where effort meets the light. A glimpse of the stories we've brought to life, frame by frame.
            </h2>
          </div>
        </motion.div>

        {/* Right Media Grid (Top 70/30, Bottom 30/70) - Scale 0 to 1 Animation */}
        <div className="lg:w-[68%] xl:w-[70%] flex flex-col gap-4 lg:gap-6 h-full min-h-[600px] lg:min-h-0">
          
          {/* Top Row: 70% Left, 30% Right */}
          <div className="flex flex-col md:flex-row gap-4 lg:gap-6 h-full md:h-1/2">
            
            {/* Top Left Image (70% width) - Scale 0 -> 1 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-[70%] relative overflow-hidden h-full min-h-[280px] group origin-center cursor-pointer"
            >
              <img
                src={project1}
                alt="Selected Project 1"
                className="w-full h-full object-cover transition-transform duration-700 ease-out"
              />
              {/* Reveal Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                <div className="transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs tracking-[0.2em] font-semibold text-white/70 uppercase font-gilroy mb-1">
                      BRAND FILM • 2024
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white font-poppins tracking-tight">
                    Ethereal Horizons
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-poppins font-light mt-1 max-w-md line-clamp-2">
                    A visual journey capturing raw human emotion and breathtaking cinematic landscapes.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Top Right Image (30% width) - Scale 0 -> 1 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-[30%] relative overflow-hidden h-full min-h-[280px] group origin-center cursor-pointer"
            >
              <img
                src={project2}
                alt="Selected Project 2"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Reveal Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                <div className="transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs tracking-[0.2em] font-semibold text-white/70 uppercase font-gilroy mb-1">
                      CAMPAIGN • 2024
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white font-poppins tracking-tight">
                    Vanguard Vision
                  </h3>
                  <p className="text-xs text-gray-300 font-poppins font-light mt-1 line-clamp-2">
                    Editorial concept & high-contrast aesthetics.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Row: 30% Left, 70% Right */}
          <div className="flex flex-col md:flex-row gap-4 lg:gap-6 h-full md:h-1/2">
            
            {/* Bottom Left Video (30% width) - Scale 0 -> 1 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-[30%] relative overflow-hidden h-full min-h-[280px] group origin-center cursor-pointer"
            >
              <video
                src={video1}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Reveal Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                <div className="transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs tracking-[0.2em] font-semibold text-white/70 uppercase font-gilroy mb-1">
                      MOTION • 2024
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white font-poppins tracking-tight">
                    Pulse Dynamics
                  </h3>
                  <p className="text-xs text-gray-300 font-poppins font-light mt-1 line-clamp-2">
                    Dynamic visual composition and fluid rhythm.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Right Video (70% width) - Scale 0 -> 1 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-[70%] relative overflow-hidden h-full min-h-[280px] group origin-center cursor-pointer"
            >
              <video
                src={video2}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Reveal Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                <div className="transform translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-xs tracking-[0.2em] font-semibold text-white/70 uppercase font-gilroy mb-1">
                      DOCUMENTARY • 2024
                    </span>

                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white font-poppins tracking-tight">
                    Chronicles of Light
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 font-poppins font-light mt-1 max-w-md line-clamp-2">
                    An intimate look into stories untold, framed in pristine light and depth.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;