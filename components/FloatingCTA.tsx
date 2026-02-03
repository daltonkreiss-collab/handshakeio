import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show after scrolling 30% of the page
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const reportSection = document.getElementById('report');

      // Hide when near the lead magnet section
      if (reportSection) {
        const rect = reportSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(false);
          return;
        }
      }

      // Show after 30% scroll, hide if dismissed
      if (scrollPercent > 30 && !isDismissed) {
        setIsVisible(true);
      } else if (scrollPercent <= 30) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>

        {/* Main button */}
        <div className="relative bg-slate-900 border border-slate-700 rounded-xl p-4 flex items-center gap-4 shadow-2xl">
          <button
            onClick={handleDismiss}
            className="absolute -top-2 -right-2 w-6 h-6 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Dismiss"
          >
            <X className="h-3 w-3" />
          </button>

          <div className="hidden sm:block">
            <p className="text-xs text-slate-400 mb-1">Ready to see real opportunities?</p>
            <p className="text-sm font-semibold text-white">Get a sample report</p>
          </div>

          <a
            href="#report"
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-all hover:scale-105"
          >
            <span className="sm:hidden">Get Sample Report</span>
            <span className="hidden sm:inline">View</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
