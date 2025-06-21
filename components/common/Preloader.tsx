"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => setShow(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div id="preloader" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#fff', zIndex: 999999999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div id="status">
        <img src="/img/loading.gif" alt="LOADING....!!!!!" />
      </div>
    </div>
  );
}
