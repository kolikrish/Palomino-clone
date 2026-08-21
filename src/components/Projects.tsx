import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import video1 from '../assets/1.mp4';
import video2 from '../assets/2.webm';
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
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-[70%] relative overflow-hidden h-full min-h-[280px] group origin-center"
            >
              <img
                src={project1}
                alt="Selected Project 1"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </motion.div>

            {/* Top Right Image (30% width) - Scale 0 -> 1 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-[30%] relative overflow-hidden h-full min-h-[280px] group origin-center"
            >
              <img
                src={project2}
                alt="Selected Project 2"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </motion.div>

          </div>

          {/* Bottom Row: 30% Left, 70% Right */}
          <div className="flex flex-col md:flex-row gap-4 lg:gap-6 h-full md:h-1/2">
            
            {/* Bottom Left Video (30% width) - Scale 0 -> 1 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-[30%] relative overflow-hidden h-full min-h-[280px] group origin-center"
            >
              <video
                src={video1}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform"
              />
            </motion.div>

            {/* Bottom Right Video (70% width) - Scale 0 -> 1 */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:w-[70%] relative overflow-hidden h-full min-h-[280px] group origin-center"
            >
              <video
                src={video2}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform"
              />
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;