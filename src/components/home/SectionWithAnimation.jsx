import React from 'react';
import { useInView } from 'react-intersection-observer';

const SectionWithAnimation = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`animated-section ${inView ? 'in-view' : ''}`}
    >
      {children}
    </div>
  );
};

export default SectionWithAnimation;
