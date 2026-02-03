import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PanelSignal from './pipeline/PanelSignal';
import PanelIntel from './pipeline/PanelIntel';
import PanelConnection from './pipeline/PanelConnection';

gsap.registerPlugin(ScrollTrigger);

const Pipeline: React.FC = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionRefs.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power2.out',
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-slate-950">
      {/* Section header (reduced spacing and simplified copy) */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-12">
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight whitespace-nowrap">
            Eliminate Research Latency.
          </h2>
          <p className="text-xl text-slate-400 leading-relaxed">
            We don't just alert you to an opportunity
            <br />we build the bridge to the decision-maker.
          </p>
        </div>
      </div>

      {/* Vertical panel sections */}
      <div>
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
  );
};

export default Pipeline;
