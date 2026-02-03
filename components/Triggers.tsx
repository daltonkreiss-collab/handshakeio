import React, { useState } from 'react';
import { CheckCircle2, MapPin, Filter, Radio, Send, RefreshCw } from 'lucide-react';

interface Phase {
  id: number;
  title: string;
  timeline: string;
  text: string;
  checklist: string[];
  icon: React.ReactNode;
}

const Triggers: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(0);

  const phases: Phase[] = [
    {
      id: 0,
      title: "Discovery & Specialty Mapping",
      timeline: "Week 1",
      text: "We conduct a deep-dive audit of your \"Goldilocks Fit.\" By digesting historical customer data to find patterns and conducting strategic alignment interviews, we define an ideal customer profile that balances your past successes with your future strategic direction.",
      checklist: [
        "Ideal Customer Profile (ICP) Document",
        "Verticals Architecture Flowmap",
        "Functional Design Specification (FDS)"
      ],
      icon: <MapPin className="h-5 w-5" />
    },
    {
      id: 1,
      title: "The Automated Audit",
      timeline: "Week 2",
      text: "We cast the widest possible net across your vertical, ingesting data from revolutionary tools to identify over 1,000 potential prospects. Every company is then processed through our proprietary AI filter to assign a fit and confidence score, narrowing the field to 100–500 high-probability targets for monitoring.",
      checklist: [
        "Initial Dataset (1,000+ Potential Prospects)",
        "Individual Company Audits (Excel-parsed with Fit/Confidence Scores)",
        "Qualified Monitoring List (100–500 Verified Targets)"
      ],
      icon: <Filter className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Live Signal Tuning",
      timeline: "Week 3",
      text: "We deploy proprietary monitors across SEC filings, FDA alerts, and global news releases to scan for intent, not just keywords. This weekly automation identifies newsworthy triggers and runs a secondary analysis to determine the true scope of the automation opportunity.",
      checklist: [
        "Weekly Dashboard Report (HTML & Excel)",
        "Individual Opportunity Deep-Dive (HTML detailed report)",
        "Accuracy Guarantee (< 20% False Positives)"
      ],
      icon: <Radio className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Outreach & Workflow Integration",
      timeline: "Week 4",
      text: "We leverage redundant contact discovery tools to map decision-makers, including verified bios for context-rich messaging. We collaborate with your sales team to tailor outreach templates and create custom reporting structures that align perfectly with your existing user preferences.",
      checklist: [
        "Contact Discovery & Confidence Report",
        "Three Custom-Tailored Outreach Templates",
        "Factory Acceptance Testing (FAT) for Deployment"
      ],
      icon: <Send className="h-5 w-5" />
    }
  ];

  return (
    <section id="triggers" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-emerald-500 font-mono text-sm tracking-wider uppercase">=SALES_PARTNER</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Commissioning Roadmap
          </h2>
          <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed">
            A 30-day, high-touch deployment engineered for your specific vertical.
          </p>
        </div>

        {/* Progress Bar Timeline */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-xs font-mono text-slate-500">DAY 1</span>
            <span className="text-xs font-mono text-slate-500">DAY 30</span>
          </div>

          {/* Phase Progress Bar */}
          <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden mb-4">
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
            />
          </div>

          {/* Phase Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {phases.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(index)}
                className={`group relative p-4 rounded-xl border transition-all duration-300 text-left
                  ${activePhase === index
                    ? 'bg-slate-800/80 border-emerald-500/50 shadow-lg shadow-emerald-900/20'
                    : 'bg-slate-950/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                  }
                  backdrop-blur-sm
                `}
              >
                {/* Phase number indicator */}
                <div className={`flex items-center gap-3 mb-2 transition-colors duration-300
                  ${activePhase === index ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-400'}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-mono font-bold transition-all duration-300
                    ${activePhase === index
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-slate-800 text-slate-500 border border-slate-700 group-hover:border-slate-600'
                    }`}
                  >
                    {phase.icon}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider">{phase.timeline}</span>
                </div>

                <h3 className={`font-semibold text-sm transition-colors duration-300
                  ${activePhase === index ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}`}
                >
                  {phase.title}
                </h3>

                {/* Active indicator bar */}
                <div className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full transition-all duration-300
                  ${activePhase === index ? 'bg-emerald-500' : 'bg-transparent'}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Phase Content */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left: Description */}
          <div
            className="p-8 rounded-2xl bg-slate-950/70 border border-slate-800 backdrop-blur-xl
              transition-all duration-500 ease-out flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                {phases[activePhase].icon}
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-500 uppercase tracking-wider">Phase {activePhase + 1}</span>
                <h3 className="text-xl font-bold text-white">{phases[activePhase].title}</h3>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed flex-grow">
              {phases[activePhase].text}
            </p>
          </div>

          {/* Right: Checklist */}
          <div
            className="p-8 rounded-2xl bg-slate-950/70 border border-slate-800 backdrop-blur-xl
              transition-all duration-500 ease-out flex flex-col"
          >
            <div className="mb-6">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Deliverables</span>
            </div>

            <div className="space-y-4 flex-grow">
              {phases[activePhase].checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800
                    transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-900/80 group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.4s ease-out forwards'
                  }}
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-slate-300 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Maintenance Card */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-slate-950/90 to-slate-900/50 border border-emerald-500/20 backdrop-blur-xl
          relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">

          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/15 transition-all duration-500" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0
              group-hover:bg-emerald-500/20 transition-all duration-300">
              <RefreshCw className="h-7 w-7 text-emerald-400" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white">Monthly Optimization & Check-in</h3>
                <span className="px-2 py-0.5 rounded text-xs font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ONGOING
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                We don't just deploy tech and walk away. Every month, we host an Optimization Day to refine your "Signal," review project fit, and update decision-maker targets. This ongoing partnership ensures your pipeline stays sharp and focused on projects you are equipped to win.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Triggers;
