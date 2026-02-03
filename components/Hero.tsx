import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import computerReportImg from '@/assets/computer with report.png';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial timeline for entrance animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Badge fade in from left
      tl.from(badgeRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.6,
      });

      // Heading words stagger in
      if (headingRef.current) {
        const words = headingRef.current.querySelectorAll('.word');
        tl.from(words, {
          y: 40,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
        }, '-=0.3');
      }

      // Paragraph fade up with blur
      tl.from(paragraphRef.current, {
        y: 30,
        opacity: 0,
        filter: 'blur(10px)',
        duration: 0.6,
      }, '-=0.2');

      // Button scale in with bounce
      tl.from(buttonRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
      }, '-=0.3');

      // Hero image fade in
      tl.from(imageRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5');

      // Parallax effect on scroll for hero image
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Grid subtle drift animation
      gsap.to(gridRef.current, {
        backgroundPosition: '24px 24px',
        duration: 20,
        repeat: -1,
        ease: 'none',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Split heading into words for staggered animation
  const headingText = 'Identify Greenfield';
  const highlightText = 'Automation Projects';
  const endText = 'Before the RFP.';

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Image with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/factory1/1920/1080"
          alt="Modern automated facility"
          className="w-full h-full object-cover opacity-20 filter blur-sm grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/80"></div>

        {/* Grid Overlay with drift animation */}
        <div
          ref={gridRef}
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
          style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Copy */}
        <div className="space-y-8">
          <div
            ref={badgeRef}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-emerald-400"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>&gt; GROWTH_MODE_ENABLED</span>
          </div>

          <h1
            ref={headingRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            {headingText.split(' ').map((word, i) => (
              <span key={i} className="word inline-block mr-[0.25em]">{word}</span>
            ))}
            <span className="text-emerald-400">
              {highlightText.split(' ').map((word, i) => (
                <span key={i} className="word inline-block mr-[0.25em]">{word}</span>
              ))}
            </span>
            {endText.split(' ').map((word, i) => (
              <span key={i} className="word inline-block mr-[0.25em]">{word}</span>
            ))}
          </h1>

          <p
            ref={paragraphRef}
            className="text-xl lg:text-2xl text-slate-400 max-w-xl leading-relaxed"
          >
            Market intelligence that identifies high-intent automation projects, times outreach perfectly, and connects you with the right decision-makers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              ref={buttonRef}
              href="#report"
              className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:scale-105"
            >
              Get Sample Opportunity Report
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right Column: Report Image */}
        <div ref={imageRef} className="relative hidden lg:block">
          <img
            src={computerReportImg}
            alt="Computer with report"
            className="w-[150%] max-w-none h-auto"
          />
        </div>
      </div>

      {/* Gradient fade at bottom for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
