import React, { useRef, useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Counter animation component
const AnimatedCounter: React.FC<{
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  trigger: boolean;
}> = ({ end, prefix = '', suffix = '', decimals = 0, duration = 1.5, trigger }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: end,
      duration,
      ease: 'power2.out',
      onUpdate: () => setValue(obj.val),
    });
  }, [trigger, end, duration]);

  return <>{prefix}{decimals > 0 ? value.toFixed(decimals) : Math.round(value)}{suffix}</>;
};

const MarketOpportunity: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartLineRef = useRef<SVGPathElement>(null);
  const chartAreaRef = useRef<SVGPathElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(SVGCircleElement | null)[]>([]);
  const [countersTriggered, setCountersTriggered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Chart container scroll-triggered reveal
      gsap.from(chartContainerRef.current, {
        scrollTrigger: {
          trigger: chartContainerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: 'power2.out',
      });

      // SVG line draw animation
      if (chartLineRef.current) {
        const pathLength = chartLineRef.current.getTotalLength();
        gsap.set(chartLineRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(chartLineRef.current, {
          scrollTrigger: {
            trigger: chartContainerRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
          strokeDashoffset: 0,
          duration: 1.5,
          ease: 'power2.inOut',
          delay: 0.3,
        });
      }

      // Area fill fade in
      if (chartAreaRef.current) {
        gsap.from(chartAreaRef.current, {
          scrollTrigger: {
            trigger: chartContainerRef.current,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          duration: 1,
          delay: 1,
        });
      }

      // Data points stagger in
      const validDots = dotsRef.current.filter(Boolean);
      gsap.from(validDots, {
        scrollTrigger: {
          trigger: chartContainerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.15,
        ease: 'back.out(1.7)',
        delay: 0.5,
      });

      // Trigger counters
      ScrollTrigger.create({
        trigger: chartContainerRef.current,
        start: 'top 60%',
        onEnter: () => setCountersTriggered(true),
      });

      // Copy block fade in from right
      gsap.from(copyRef.current, {
        scrollTrigger: {
          trigger: copyRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.4,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-900 border-t border-slate-800 overflow-hidden"
    >
      {/* Radial gradient background for visual differentiation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-900 to-slate-900 pointer-events-none"></div>

      {/* Accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      {/* Market Opportunity Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Chart */}
            <div ref={chartContainerRef} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-8">
                {/* Chart Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                    <span className="font-mono text-sm text-slate-400">AMH MARKET TRAJECTORY</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                    CAGR 9-13%
                  </span>
                </div>

                {/* Self-contained SVG Chart */}
                <svg viewBox="0 0 400 250" className="w-full h-auto">
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Y-axis labels */}
                  <text x="35" y="35" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="end">$160B</text>
                  <text x="35" y="75" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="end">$120B</text>
                  <text x="35" y="115" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="end">$80B</text>
                  <text x="35" y="155" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="end">$40B</text>
                  <text x="35" y="195" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="end">$0</text>

                  {/* Grid lines */}
                  <line x1="50" y1="30" x2="380" y2="30" stroke="#334155" strokeWidth="1" />
                  <line x1="50" y1="70" x2="380" y2="70" stroke="#334155" strokeWidth="1" />
                  <line x1="50" y1="110" x2="380" y2="110" stroke="#334155" strokeWidth="1" />
                  <line x1="50" y1="150" x2="380" y2="150" stroke="#334155" strokeWidth="1" />
                  <line x1="50" y1="190" x2="380" y2="190" stroke="#334155" strokeWidth="1" />

                  {/* Area fill under the curve */}
                  <path
                    ref={chartAreaRef}
                    d="M 50 150 C 100 140, 130 125, 160 120 C 200 110, 230 95, 270 90 C 310 80, 350 50, 380 40 L 380 190 L 50 190 Z"
                    fill="url(#chartGradient)"
                  />

                  {/* Main line - animated */}
                  <path
                    ref={chartLineRef}
                    d="M 50 150 C 100 140, 130 125, 160 120 C 200 110, 230 95, 270 90 C 310 80, 350 50, 380 40"
                    fill="none"
                    stroke="rgb(16, 185, 129)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Data points - animated */}
                  <circle ref={el => { dotsRef.current[0] = el; }} cx="50" cy="150" r="6" fill="rgb(16, 185, 129)" stroke="rgb(15, 23, 42)" strokeWidth="3" />
                  <circle ref={el => { dotsRef.current[1] = el; }} cx="160" cy="120" r="6" fill="rgb(16, 185, 129)" stroke="rgb(15, 23, 42)" strokeWidth="3" />
                  <circle ref={el => { dotsRef.current[2] = el; }} cx="270" cy="90" r="6" fill="rgb(16, 185, 129)" stroke="rgb(15, 23, 42)" strokeWidth="3" />
                  <circle ref={el => { dotsRef.current[3] = el; }} cx="380" cy="40" r="6" fill="rgb(16, 185, 129)" stroke="rgb(15, 23, 42)" strokeWidth="3" />

                  {/* X-axis labels */}
                  <text x="50" y="215" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">2024</text>
                  <text x="160" y="215" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">2027</text>
                  <text x="270" y="215" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">2029</text>
                  <text x="380" y="215" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">2031</text>
                </svg>

                {/* Key stats with animated counters */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400 font-mono">
                      <AnimatedCounter end={40} prefix="$" suffix="B" trigger={countersTriggered} />
                    </div>
                    <div className="text-xs text-slate-500">2024 Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white font-mono">
                      <AnimatedCounter end={3.75} suffix="x" decimals={2} trigger={countersTriggered} />
                    </div>
                    <div className="text-xs text-slate-500">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400 font-mono">
                      <AnimatedCounter end={150} prefix="$" suffix="B" trigger={countersTriggered} />
                    </div>
                    <div className="text-xs text-slate-500">2031 Projected</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Copy */}
            <div ref={copyRef} className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Δ_SUPERCHARGED_CAP</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                The AMH market is projected to hit <span className="text-emerald-400">$150B by 2031</span>.
              </h2>

              <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed">
                We'll show you exactly where your slice is.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
