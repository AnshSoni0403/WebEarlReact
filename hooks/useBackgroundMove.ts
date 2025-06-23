"use client"

import { useEffect, useRef } from 'react';

export const useBackgroundMove = (movementStrength = 50) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const pageX = clientX - (innerWidth / 2);
      const pageY = clientY - (innerHeight / 2);
      
      const width = movementStrength / innerWidth;
      const height = movementStrength / innerHeight;
      
      const newValueX = width * pageX * -1 - 25;
      const newValueY = height * pageY * -1 - 50;
      
      element.style.backgroundPosition = `${newValueX}px ${newValueY}px`;
    };

    element.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [movementStrength]);

  return elementRef;
};
