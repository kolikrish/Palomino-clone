import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialItem {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  projectLink?: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "With Palomino, I delegate without ever worrying about the outcome. They get the brief, they understand what's at stake for a brand, and they speak the language of sports.",
    name: 'Robin Haziza',
    role: 'Padel + Agency',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    projectLink: '#work',
  },
  {
    id: 2,
    quote:
      "Their team captured our athlete journey with cinematic perfection. The imagery and film quality elevated our entire global commercial rollout beyond expectations.",
    name: 'Marc Dupont',
    role: 'Salomon • Global Brand Director',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    projectLink: '#work',
  },
  {
    id: 3,
    quote:
      "Palomino brings an unmatched artistic rigor to sports documentary film making. They don't just shoot footage; they craft unforgettable visual legacies.",
    name: 'Elena Rostova',
    role: 'Red Bull • Creative Producer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    projectLink: '#work',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="relative z-20 w-full min-h-[85vh] bg-[#03070d] text-white py-10 flex flex-col justify-between items-center select-none border-b border-t border-white/10">
      
      {/* Top Header Tag */}
      <div className="flex items-center gap-2 text-xs tracking-[0.25em] font-medium text-white uppercase font-gilroy">
        <span className="w-2 h-2 rounded-full bg-white inline-block" />
        <span>TESTIMONIALS</span>
      </div>

      {/* Center Main Card Container with Vertical Border Lines */}
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-12 py-12 lg:py-16 flex flex-col items-center justify-center text-center border-l border-r border-white/10 my-auto relative group">
        
        {/* Quote Text */}
        <div className="max-w-2xl mx-auto min-h-[100px] flex items-center justify-center">
          <p className="text-xl sm:text-2xl lg:text-xl font-normal leading-relaxed text-white font-poppins transition-all duration-500">
            "{current.quote}"
          </p>
        </div>

        {/* Author Avatar */}
        <div className="mt-6 mb-2 relative">
          <img
            src={current.avatar}
            alt={current.name}
            className="w-20 h-20 rounded-full object-cover border border-white/20 shadow-lg"
          />
        </div>

        {/* Author Name */}
        <h3 className="text-xl sm:text-2xl font-normal text-white font-gilroy tracking-wide">
          {current.name}
        </h3>

        {/* Author Role */}
        <p className="text-sm text-slate-400 font-poppins mt-1">
          {current.role}
        </p>

        {/* See Project CTA */}
        <div className="mt-8">
          <a
            href={current.projectLink || '#work'}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-400 hover:text-white uppercase transition-colors font-gilroy"
          >
            <span>SEE THE PROJECT</span>
            <span className="text-sm">→</span>
          </a>
        </div>

        {/* Previous / Next Arrow Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/30 hover:text-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/30 hover:text-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex items-center space-x-2 mt-8">
        {testimonialsData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Testimonials;