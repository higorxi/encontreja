"use client"
import { useState, useEffect } from 'react';

export function Loading() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length === 3 ? '' : prevDots + '.'));
    }, 500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.75)]">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-t-transparent border-gray-300"></div>
        <p className="text-white text-lg font-semibold tracking-wide">
          Loading<span className="animate-pulse">{dots}</span>
        </p>
      </div>
    </div>
  );
}
