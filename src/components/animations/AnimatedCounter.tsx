import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  delay = 0,
  prefix = '',
  suffix = '',
  className = ''
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? end : 0,
    delay,
    config: { duration }
  });

  return (
    <div ref={ref} className={className}>
      <animated.span>
        {prefix}
        {number.to(n => Math.floor(n))}
        {suffix}
      </animated.span>
    </div>
  );
};

export default AnimatedCounter;