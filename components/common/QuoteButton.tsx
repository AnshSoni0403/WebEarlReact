"use client";

import React from 'react';
import Link from 'next/link';
import { FaQuoteRight } from 'react-icons/fa';
import styles from './QuoteButton.module.css';

const QuoteButton = () => {
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
