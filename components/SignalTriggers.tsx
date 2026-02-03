import React, { useRef, useEffect } from 'react';
import { BarChart3, FileSearch, Globe, TrendingUp } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SignalTriggers: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const triggers = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Capex & Capacity Velocity",
      description: "Track utilization rates and CapEx velocity. Spot companies mid-deployment of $500M+ automation budgets.",
      color: 'emerald',
    },
    {
      icon: <FileSearch className="h-8 w-8" />,
      title: "Factory 4.0 Mandates",
      description: "Scan 10-K filings for \"Dark Factory\" and Industry 4.0 mandates. Find board-level automation initiatives.",
      color: 'cyan',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Greenfield Timelines",
      description: "Isolate expansion projects globally. Identify the exact window when $500M+ CapEx budgets get awarded.",
      color: 'amber',
    },
  ];

  const colorClasses: Record<string, { icon: string; border: string; bg: string; shadow: string }> = {
    emerald: {
      icon: 'text-emerald-400',
      border: 'group-hover:border-emerald-500/50',
      bg: 'group-hover:bg-emerald-500/10',
      shadow: 'hover:shadow-emerald-900/20',
    },
    cyan: {
      icon: 'text-cyan-400',
      border: 'group-hover:border-cyan-500/50',
      bg: 'group-hover:bg-cyan-500/10',
      shadow: 'hover:shadow-cyan-900/20',
    },
    amber: {
      icon: 'text-amber-400',
      border: 'group-hover:border-amber-500/50',
      bg: 'group-hover:bg-amber-500/10',
      shadow: 'hover:shadow-amber-900/20',
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header fade up
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      });

      // Cards stagger reveal from bottom
      const validCards = cardsRef.current.filter(Boolean);
      gsap.from(validCards, {
        scrollTrigger: {
          trigger: validCards[0],
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
      });

      // Card icons rotate + scale in with elastic ease
      validCards.forEach((card) => {
        if (!card) return;
        const icon = card.querySelector('.card-icon');
        if (icon) {
          gsap.from(icon, {
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            scale: 0,
            rotation: -180,
            duration: 0.6,
            ease: 'elastic.out(1, 0.5)',
            delay: 0.3,
          });
        }
      });

      // Card hover animations
      validCards.forEach((card) => {
        if (!card) return;

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -8,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="signals"
      className="py-24 bg-slate-950 relative overflow-hidden"
    >
      {/* Diagonal divider at top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-slate-900 -skew-y-1 origin-top-left transform -translate-y-12"></div>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="h-5 w-5 text-emerald-500" />
            <span className="text-emerald-500 font-mono text-sm tracking-wider uppercase">:SIGNAL_VS._NOISE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Look for <span className="text-emerald-400">Capital Intent</span>, Not Just Leads.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {triggers.map((trigger, index) => {
            const colors = colorClasses[trigger.color];
            return (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className={`group p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl ${colors.border} transition-all duration-300 hover:shadow-2xl ${colors.shadow}`}
              >
                <div className={`card-icon bg-slate-800/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${colors.bg} transition-colors border border-slate-700 group-hover:border-opacity-50`}>
                  <span className={colors.icon}>{trigger.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{trigger.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {trigger.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SignalTriggers;
