import React, { useEffect, useState } from 'react';

const AnimatedNumber = ({ value, animate }) => {
  const [count, setCount] = useState(animate ? 0 : value);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const end = value;
    const duration = 2000; // duration in ms
    const incrementTime = 1000 / 60; // 60fps
    const increment = (end - start) / (duration / incrementTime);

    const animateNumber = () => {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        requestAnimationFrame(animateNumber);
      } else {
        setCount(end);
      }
    };

    animateNumber();
  }, [value, animate]);

  return <span style={{ fontWeight: 'bold' }}>{count}</span>;
};

export default AnimatedNumber;
