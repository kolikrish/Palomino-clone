import { useInView, useMotionValue, animate } from 'motion/react';
import { useCallback, useEffect, useRef } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === 'down' ? to : from);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;

      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const rounded = Math.round(latest * Math.pow(10, maxDecimals)) / Math.pow(10, maxDecimals);
      const formattedNumber = Intl.NumberFormat('en-US', options).format(rounded);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === 'down' ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === 'function') {
        onStart();
      }

      const startVal = direction === 'down' ? to : from;
      const targetVal = direction === 'down' ? from : to;

      motionValue.set(startVal);

      const controls = animate(motionValue, targetVal, {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo curve for sleek countup feel
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = formatValue(latest);
          }
        },
        onComplete: () => {
          if (typeof onEnd === 'function') {
            onEnd();
          }
        }
      });

      return () => controls.stop();
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, duration, onStart, onEnd, formatValue]);

  return <span className={className} ref={ref} />;
}
