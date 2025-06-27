"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Preloader() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // Skip preloader on initial load
    }
    setShow(true);
    const timer = setTimeout(() => setShow(false), 1000); // 1s fade out
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!show) return null;

  return (
    <div id="preloader" style={{}}>
      <div id="status">
        <img src="/img/loading.gif" alt="LOADING....!!!!!" />
      </div>
    </div>
  );
}
