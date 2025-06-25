"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaQuoteRight } from 'react-icons/fa';
import styles from './QuoteButton.module.css';

const QuoteButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth <= 1080);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!isVisible) return null;

  return (
    <section className={styles.quoteButton}>
      <div>
        <Link 
          href="/Quotation"
          className={`d-flex align-items-center justify-content-center ${styles.quoteLink}`}
          aria-label="Get a free quote"
        >
          <FaQuoteRight className={styles.quoteIcon} />
        </Link>
      </div>
    </section>
  );
};

export default QuoteButton;
