'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Mobile-first carousel with minimal loading
const MobileOptimizedCarousel = dynamic(() => import('./MobileOptimizedCarousel'), {
  ssr: true,
  loading: () => (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="text-center space-y-3 animate-pulse">
        <div className="h-6 bg-gray-700 rounded w-48 mx-auto"></div>
        <div className="h-4 bg-gray-800 rounded w-32 mx-auto"></div>
      </div>
    </div>
  ),
});

// Desktop carousel - loads only when needed
const OptimizedHomeCarousel = dynamic(() => import('./OptimizedHomeCarousel'), {
  ssr: false,
  loading: () => (
    <div className="h-[90vh] bg-black flex items-center justify-center">
      <div className="text-center space-y-4 animate-pulse">
        <div className="h-8 bg-gray-800 rounded w-64 mx-auto"></div>
        <div className="h-4 bg-gray-700 rounded w-48 mx-auto"></div>
      </div>
    </div>
  ),
});

export default function AdaptiveCarousel() {
  const [isMobile, setIsMobile] = useState(true); // Start with mobile assumption
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsLoaded(true);
    };

    // Check device type after component mounts
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Show mobile version by default during SSR and mobile detection
  if (!isLoaded || isMobile) {
    return <MobileOptimizedCarousel />;
  }

  // Load desktop version only for larger screens
  return <OptimizedHomeCarousel />;
}