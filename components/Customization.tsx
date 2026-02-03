import React, { useRef, useEffect } from 'react';
import { Settings, MapPin, Package, Cpu, Layers } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Customization: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Vertical Specific",
      description: "Food & Bev, Pharma, Automotive, Ecommerce.",
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Geo-Fencing",
      description: "Target plant expansions within your service radius.",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Tech Specialization",
      description: "ASRS, Conveyors, Robotics, AGV deployments.",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Goldilocks Size",
      description: "Target companies the right size for your capacity.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Copy fade in from left
      gsap.from(copyRef.current, {
        scrollTrigger: {
          trigger: copyRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      });

      // Cards diagonal stagger (top-left to bottom-right)
      const validCards = cardsRef.current.filter(Boolean);
      // Order for diagonal: [0, 1, 2, 3] → stagger delays: [0, 1, 1, 2]
      const diagonalOrder = [0, 1, 2, 3]; // Already in good diagonal order for 2x2

      gsap.from(validCards, {
        scrollTrigger: {
          trigger: validCards[0],
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        y: 40,
        opacity: 0,
        scale: 0.95,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
      });

      // Card icons subtle draw-in animation
      validCards.forEach((card, index) => {
        if (!card) return;
        const icon = card.querySelector('.card-icon');
        if (icon) {
          gsap.from(icon, {
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
            scale: 0.5,
            opacity: 0,
            duration: 0.4,
            delay: 0.2 + index * 0.1,
            ease: 'back.out(1.7)',
          });
        }
      });

      // Card hover 3D tilt effect
      validCards.forEach((card) => {
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 20;
          const rotateY = (centerX - x) / 20;

          gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 1000,
            duration: 0.3,
            ease: 'power2.out',
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'power2.out',
          });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="customization"
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent pointer-events-none"></div>

      {/* Geometric pattern watermark */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <polygon
                points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" className="text-slate-400" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={copyRef}>
            <div className="inline-flex items-center space-x-2 mb-6">
              <Settings className="h-5 w-5 text-emerald-500" />
              <span className="text-emerald-500 font-mono text-sm uppercase">// WHITE_GLOVE_SERVICE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not an "Out-of-the-Box" Tool. <br />
              A Tailored Intelligence Partner.
            </h2>
            <p className="text-xl lg:text-2xl text-slate-400 mb-8 leading-relaxed">
              Every integrator has a "Sweet Spot." We optimize monitoring filters to align with your verticals, geography, and ideal customer profile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="bg-slate-950/80 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/10"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="card-icon text-emerald-400 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customization;
