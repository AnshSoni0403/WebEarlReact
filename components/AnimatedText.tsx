'use client';

import { useEffect, ElementType, ReactNode } from 'react';
import 'aos/dist/aos.css';

interface AnimatedTextProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  animation?: string;
  delay?: number;
  duration?: number;
  anchorPlacement?: string;
}

export default function AnimatedText({
  as: Tag = 'div',
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 1000,
  anchorPlacement = 'top-bottom',
}: AnimatedTextProps) {
  useEffect(() => {
    // Initialize AOS when component mounts
    const AOS = require('aos');
    AOS.init({
      duration: 1000,
      once: true, // Only animate once
      easing: 'ease-out-quart',
    });

    // Refresh AOS when component updates
    AOS.refresh();
  }, []);

  const Component = Tag as ElementType;

  return (
    <Component 
      className={className}
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-anchor-placement={anchorPlacement}
    >
      {children}
    </Component>
  );
}
