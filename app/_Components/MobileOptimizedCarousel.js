'use client';

import { memo, useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMessageSquare, FiCalendar } from "react-icons/fi";

// Minimal mobile-first carousel component
const MobileOptimizedCarousel = memo(() => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    // Mark as loaded after minimal delay
    setTimeout(() => setIsLoaded(true), 100);
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile-first minimal loading state
  if (!isLoaded) {
    return (
      <div className="h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-48 h-6 bg-gray-700 rounded animate-pulse mx-auto"></div>
          <div className="w-32 h-4 bg-gray-800 rounded animate-pulse mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Simplified background for mobile */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
      
      {/* Content container - mobile optimized */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          
          {/* Tag line */}
          <div className="inline-block bg-gradient-to-r from-blue-600 to-red-600 rounded-full px-4 py-2 text-white text-sm font-semibold mb-6">
            INNOVATIVE IT & GIS SOLUTIONS
          </div>

          {/* Main heading - mobile optimized */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Driving Growth Through Smart{' '}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500">
              IT, GIS & Drone Solutions
            </span>
          </h1>

          {/* Simple keywords for mobile */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-lg">
            <span className="text-blue-400 font-semibold">Innovate</span>
            <span className="text-gray-400">•</span>
            <span className="text-blue-400 font-semibold">Plan</span>
            <span className="text-gray-400">•</span>
            <span className="text-blue-400 font-semibold">Achieve</span>
          </div>

          {/* CTA Buttons - mobile optimized */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-200"
            >
              <FiMessageSquare className="w-5 h-5" />
              Request a Quote
            </Link>

            <a
              target="_blank"
              href="https://calendly.com/techmapperz-projects/description-about-your-queries"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-full hover:bg-white/20 transition-all duration-200"
              rel="noopener noreferrer"
            >
              <FiCalendar className="w-5 h-5" />
              Book a Demo
            </a>
          </div>
        </div>

        {/* Hero image - only on desktop, hidden on mobile for performance */}
        {!isMobile && (
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full flex items-center justify-center opacity-20">
            <div className="w-96 h-96 bg-gradient-to-r from-blue-500/20 to-red-500/20 rounded-full blur-3xl"></div>
          </div>
        )}
      </div>

      {/* Simplified decorative elements for mobile */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-xl"></div>
    </div>
  );
});

MobileOptimizedCarousel.displayName = 'MobileOptimizedCarousel';

export default MobileOptimizedCarousel;