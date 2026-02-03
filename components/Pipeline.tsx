import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PanelSignal from './pipeline/PanelSignal';
import PanelIntel from './pipeline/PanelIntel';
import PanelConnection from './pipeline/PanelConnection';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  { name: 'Signal', label: 'the-right-moment' },
  { name: 'Intel', label: 'the-right-reason' },
  { name: 'Connection', label: 'the-right-people' },
];

const Pipeline: React.FC = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeStage, setActiveStage] = useState(-1);
  const [showProgressBar, setShowProgressBar] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Show/hide progress bar based on section visibility
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => setShowProgressBar(true),
        onLeave: () => setShowProgressBar(false),
        onEnterBack: () => setShowProgressBar(true),
        onLeaveBack: () => setShowProgressBar(false),
      });

      // Track active stage based on which panel is in view
      sectionRefs.current.forEach((section, i) => {
        if (!section) return;
        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => setActiveStage(i),
          onEnterBack: () => setActiveStage(i),
        });
      });

      // Enhanced panel entry animations
      sectionRefs.current.forEach((section) => {
        if (!section) return;
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: 'power2.out',
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-slate-950">
      {/* Section header */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-12">
        <div className="space-y-4 max-w-3xl">
          <span className="text-emerald-500 font-mono text-sm tracking-wider uppercase">&gt;_ACTION_VS._INFO</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Own the <span className="text-emerald-400">Opportunity</span>, Not Just the Alert.
          </h2>
          <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed">
            We don't just find the signal; we build the bridge to the decision-maker enabling frictionless messaging.
          </p>
        </div>
      </div>

      {/* Main content with vertical progress indicator */}
      <div className="relative flex">
        {/* Vertical Progress Indicator - Left Side */}
        <div
          className={`hidden lg:flex flex-col items-center w-24 flex-shrink-0 sticky top-0 h-screen
                     transition-opacity duration-500 ${showProgressBar ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Vertical connector line (background) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[15%] bottom-[15%] w-0.5 bg-slate-800" />

          {/* Progress fill line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[15%] w-0.5 bg-emerald-500 transition-all duration-500 ease-out"
            style={{
              height: activeStage >= 0
                ? `${(activeStage / (stages.length - 1)) * 70}%`
                : '0%'
            }}
          />

          {/* Stage indicators positioned at each third */}
          {stages.map((stage, i) => (
            <div
              key={stage.name}
              className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3"
              style={{ top: `${15 + (i * 35)}%` }}
            >
              {/* Stage number circle */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center
                           font-mono text-lg font-bold transition-all duration-300 border-2
                           ${activeStage >= i
                             ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.6)]'
                             : 'bg-slate-900 text-slate-500 border-slate-700'}`}
              >
                {i + 1}
              </div>

              {/* Stage label - appears to the right */}
              <div
                className={`absolute left-16 whitespace-nowrap transition-all duration-300
                           ${activeStage === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
              >
                <div className="text-sm font-bold text-white">{stage.name}</div>
                <div className="text-xs text-slate-500 font-mono">{stage.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Panel sections */}
        <div className="flex-1">
          <div ref={(el) => { sectionRefs.current[0] = el; }}>
            <PanelSignal />
          </div>
          <div ref={(el) => { sectionRefs.current[1] = el; }}>
            <PanelIntel />
          </div>
          <div ref={(el) => { sectionRefs.current[2] = el; }}>
            <PanelConnection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pipeline;
