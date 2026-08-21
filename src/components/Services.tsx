import React from 'react';
import ScrollStack, { ScrollStackItem } from '../utils/ScrollStack';
import firstImg from '../assets/images/first.jpg';
import secondImg from '../assets/images/second.jpg';
import thirdImg from '../assets/images/third.jpg';
import fourthImg from '../assets/images/fourth.jpg';
import { motion } from 'motion/react';

const servicesData = [
  {
    id: 1,
    num: '1.',
    image: firstImg,
    tagTitle: 'BRAND CAMPAIGNS',
    headline: 'Films built for brands that move culture.',
    description:
      'From global campaigns to product storytelling, we craft cinematic sports films and photography that elevate brands beyond traditional advertising. Strategy, aesthetics, execution, every detail built to the standards of premium sport and modern culture.',
    subServices: [
      'Creative Direction',
      'Campaign Development',
      'Brand Films',
      'Commercial Production',
      'Photography',
      'Pre–Production',
      'Casting & Talent',
      'Motion & Editing',
    ],
  },
  {
    id: 2,
    num: '2.',
    image: secondImg,
    tagTitle: 'ATHLETE STORIES',
    headline: 'Empowering athletes through cinematic narratives.',
    description:
      'We help athletes build meaningful narratives through cinematic content, documentaries and editorial photography. From training camps to championship moments, capturing the human story behind athletic excellence.',
    subServices: [
      'Documentary Features',
      'Athlete Branding',
      'Behind The Scenes',
      'High-Speed Filming',
      'Color Grading',
      'Sound Design',
    ],
  },
  {
    id: 3,
    num: '3.',
    image: thirdImg,
    tagTitle: 'STILLS & PHOTOGRAPHY',
    headline: 'High-impact visuals captured frame by frame.',
    description:
      'Striking sports action photography and commercial stills engineered for billboards, digital media, and editorial features. Precision lighting and high-speed capture built for maximum impact.',
    subServices: [
      'Action Photography',
      'Key Visuals',
      'Editorial Stills',
      'On-Field Lighting',
      'Commercial Retouching',
      'Asset Libraries',
    ],
  },
  {
    id: 4,
    num: '4.',
    image: fourthImg,
    tagTitle: 'CREATIVE DIRECTION',
    headline: 'Bespoke vision from concept to final delivery.',
    description:
      'Full spectrum creative direction and film production services designed to elevate global sports campaigns and push boundaries in visual storytelling.',
    subServices: [
      'Concept Architecture',
      'Storyboarding',
      'Production Rigging',
      'Post-Production',
      'VFX & Motion Graphics',
      'Final 8K Mastering',
    ],
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="w-full bg-black text-white py-16 select-none">
      {/* Top Section Tag */}
      <div className="max-w-[1920px] mx-auto px-6 sm:px-12 md:px-16 lg:px-20 mb-8">
        <div className="flex items-center gap-2 text-xs tracking-[0.25em] font-medium text-white uppercase font-gilroy">
          <span className="w-2 h-2 bg-white inline-block" />
          <span>SERVICES</span>
        </div>
      </div>

      {/* Stacking Cards Container */}
      <ScrollStack>
        {servicesData.map((service) => (
          <ScrollStackItem key={service.id}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 h-full items-stretch">
              
              {/* Left Column: Image with Overlay Number & Title (Scale 0 -> 1 Animation) */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-4 relative overflow-hidden min-h-[300px] lg:min-h-full group origin-center rounded-lg"
              >
                <img
                  src={service.image}
                  alt={service.tagTitle}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-110 transition-transform duration-700"
                />

                {/* Top-Left Number */}
                <span className="absolute top-6 left-6 text-2xl sm:text-3xl font-bold font-mono text-white drop-shadow-lg">
                  {service.num}
                </span>

                {/* Bottom Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                {/* Bottom Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase font-display tracking-tight">
                    {service.tagTitle}
                  </h3>
                </div>
              </motion.div>

              {/* Middle Column: Headline, Paragraph, Link */}
              <div className="lg:col-span-5 flex flex-col justify-between py-2 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-white leading-snug font-sans">
                    {service.headline}
                  </h3>
                  <p className="text-sm sm:text-lg text-slate-400 font-light leading-relaxed mt-6 font-poppins">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-white hover:text-cyan-400 uppercase transition-colors font-gilroy"
                  >
                    <span>SEE OUR RELATED PROJECTS</span>
                    <span className="text-sm">→</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Services List & Contact Link */}
              <div className="lg:col-span-3 flex flex-col justify-between lg:pl-8 pt-6 lg:pt-2 space-y-6">
                <div>
                  <span className="text-xs font-mono tracking-widest text-white/50 uppercase block mb-8">
                    SERVICES :
                  </span>
                  <ul className="space-y-2 text-lg text-slate-300 font-light font-poppins">
                    {service.subServices.map((sub, i) => (
                      <li key={i} className="leading-snug">
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-white hover:text-cyan-400 uppercase transition-colors font-gilroy"
                  >
                    <span>CONTACT US</span>
                    <span className="text-sm">→</span>
                  </a>
                </div>
              </div>

            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
};

export default Services;