import React from 'react';
import { motion } from 'motion/react';

const FtrTop: React.FC = () => {
  const lines = ["LET'S MAKE", "SOMETHING", "ICONIC."];

  return (
    <section className="min-h-[80vh] w-full flex items-center justify-center bg-black text-white select-none px-6 py-24 border-t border-white/10">
      <div className="flex flex-col items-center justify-center space-y-4">
        {lines.map((line, index) => (
          <div key={index} className="overflow-hidden py-2 px-4">
            <motion.h3
              initial={{ y: 120, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 1.0,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-gilroy text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white text-center tracking-tight leading-none"
            >
              {line}
            </motion.h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FtrTop;