import React from 'react';
import CountUp from '../utils/CountUp';

interface FigureItem {
  id: number;
  count: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

const figures: FigureItem[] = [
  {
    id: 1,
    count: 150,
    suffix: '+',
    label: 'Projects Delivered',
  },
  {
    id: 2,
    count: 45,
    suffix: '+',
    label: 'Brand & Federation' },
  {
    id: 3,
    count: 18,
    suffix: '+',
    label: 'Generated Views',
  },
  {
    id: 4,
    count: 12,
    suffix: '+',
    label: 'Global Audience',
  },
  {
    id: 5,
    count: 100,
    suffix: '+',
    label: 'Cinematic Rigor',
  },
  {
    id: 6,
    count: 10,
    suffix: '+',
    label: 'Years Of Excellence',
  },
];

const KeyFigures: React.FC = () => {
  return (
    <>
    <div className='w-full h-8 flex items-center justify-left p-6 bg-black pt-10'>
        <h3 className='text-white text-2xl font-light capitalize tracking-wide'>Key Figures</h3>
    </div>
    <section className="w-full min-h-[65vh] lg:h-[60vh] bg-black text-white px-6 sm:px-12 md:px-16 lg:px-4 py-4 flex flex-col justify-center select-none">
      <div className="max-w-[1920px] mx-auto w-full h-full flex flex-col justify-between gap-6">
        
        {/* 6 Boxes Grid: 3 in Top, 3 in Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-4 w-full h-full flex-1">
          {figures.map((item) => (
            <div
              key={item.id}
              className="bg-[#111111] p-8 sm:p-10 lg:p-6 flex justify-between items-start h-full min-h-[200px] lg:min-h-[220px] transition-all duration-300"
            >
              {/* Top Left: Box ID */}
              <div className="text-sm sm:text-2xl font-medium text-white/50 tracking-widest font-light">
                {String(item.id).padStart(2)}
              </div>

              {/* Right Side: CountUp & Label */}
              <div className="flex flex-col items-end text-right justify-between h-full space-y-6">
                {/* Animated CountUp Number */}
                <div className="text-4xl sm:text-5xl lg:text-7xl xl:text-7xl text-white/50 tracking-tight flex font-medium justify-end leading-none">
                  {item.prefix && <span>{item.prefix}</span>}
                  <CountUp to={item.count} duration={2.5} />
                  {item.suffix && <span className="text-white/50">{item.suffix}</span>}
                </div>

                {/* Label */}
                <div>
                  <h3 className="text-sm sm:text-base lg:text-xl font-normal text-white/50 capitalize">
                   {item.label}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
};

export default KeyFigures;