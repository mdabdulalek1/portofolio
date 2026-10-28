import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down beyond 300px (middle or bottom of page)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    // Check initial position on mount
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 transition-all duration-300 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <button
        type="button"
        onClick={handleScrollToTop}
        aria-label="Scroll back to top"
        title="Go to top"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#171717] text-white hover:bg-[#FFBD20] hover:text-[#171717] shadow-lg shadow-black/15 hover:shadow-xl hover:shadow-[#FFBD20]/20 border border-[#dedbd4]/40 transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#FFBD20] focus:ring-offset-2 cursor-pointer active:translate-y-0"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5] transition-transform duration-200 group-hover:-translate-y-0.5" />
        
        {/* Subtle hover tooltip */}
        <span
          className="absolute right-full mr-3 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider bg-[#171717] text-white rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md hidden sm:inline-block"
          aria-hidden="true"
        >
          Go to top
        </span>
      </button>
    </div>
  );
};
