import React, { useRef, useEffect } from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LeadMagnet: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bulletsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline split text animation
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.word');
        gsap.from(words, {
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
        });
      }

      // Subtitle fade in
      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        ease: 'power2.out',
      });

      // Form card rise up with shadow expansion
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        y: 60,
        opacity: 0,
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        duration: 0.8,
        ease: 'power2.out',
      });

      // Bullet points stagger with emerald dot pop
      if (bulletsRef.current) {
        const bullets = bulletsRef.current.querySelectorAll('.bullet-item');
        const dots = bulletsRef.current.querySelectorAll('.bullet-dot');

        gsap.from(bullets, {
          scrollTrigger: {
            trigger: bulletsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          x: -20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.5,
        });

        gsap.from(dots, {
          scrollTrigger: {
            trigger: bulletsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          scale: 0,
          duration: 0.3,
          stagger: 0.1,
          ease: 'back.out(2)',
          delay: 0.6,
        });
      }

      // Form fields sequential glow animation
      if (formRef.current) {
        const inputs = formRef.current.querySelectorAll('input');
        gsap.from(inputs, {
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          y: 20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.15,
          ease: 'power2.out',
          delay: 0.4,
        });
      }

      // Submit button pulse animation when in view
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          scale: 0.95,
          opacity: 0,
          duration: 0.5,
          ease: 'back.out(1.7)',
          delay: 0.7,
        });

        // Subtle pulse animation
        ScrollTrigger.create({
          trigger: buttonRef.current,
          start: 'top 90%',
          onEnter: () => {
            gsap.to(buttonRef.current, {
              boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)',
              duration: 0.8,
              repeat: 2,
              yoyo: true,
              ease: 'sine.inOut',
            });
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const headlineText = "High-intent opportunities don't wait for RFPs.";

  return (
    <section ref={sectionRef} id="report" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950"></div>

      {/* Subtle animated glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Big headline section */}
        <div className="text-center mb-16 space-y-6">
          <h2
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            {headlineText.split(' ').map((word, i) => (
              <span key={i} className="word inline-block mr-[0.25em]">{word}</span>
            ))}
          </h2>
          <p ref={subtitleRef} className="text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
            By the time a project hits the general market, the relationship is already built. Be the one building it.
          </p>
        </div>

        {/* Form card */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={cardRef}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-slate-950/50"
          >
            <div className="md:flex">
              {/* Left Side - Visual/Copy */}
              <div className="md:w-1/2 p-8 md:p-12 bg-slate-850 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>

                <FileText className="h-10 w-10 text-emerald-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">See the Intelligence in Action.</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  Download our latest intelligence package to see what your team is missing.
                </p>

                <p className="text-emerald-400 font-semibold text-sm mb-4">
                  February 2026 Midwest F&B Intelligence Package:
                </p>

                <div ref={bulletsRef} className="space-y-3">
                  <div className="bullet-item flex items-start gap-3 text-xs text-slate-400">
                    <div className="bullet-dot w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
                    <span><strong className="text-slate-300">Qualified Company Report:</strong> Deep dive into a high-fit prospect.</span>
                  </div>
                  <div className="bullet-item flex items-start gap-3 text-xs text-slate-400">
                    <div className="bullet-dot w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
                    <span><strong className="text-slate-300">HTML Dashboard:</strong> The weekly "Monday Morning" view.</span>
                  </div>
                  <div className="bullet-item flex items-start gap-3 text-xs text-slate-400">
                    <div className="bullet-dot w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
                    <span><strong className="text-slate-300">Opportunity Report:</strong> Technical "Why" behind a $50M+ expansion.</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="md:w-1/2 p-8 md:p-12 bg-slate-900">
                <form ref={formRef} className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wider font-mono">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wider font-mono">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      placeholder="jane@integrator.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="title" className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wider font-mono">
                      Title / Position
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      placeholder="VP of Sales"
                    />
                  </div>

                  <button
                    ref={buttonRef}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 px-4 rounded transition-all mt-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Get Sample Intelligence Package
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="text-center text-xs text-slate-600 mt-4">
                    Data encrypted. No spam.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
