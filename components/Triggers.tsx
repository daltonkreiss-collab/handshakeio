import React from 'react';
import { BarChart3, FileSearch, Globe, TrendingUp } from 'lucide-react';

const Triggers: React.FC = () => {
  const triggers = [
    {
      icon: <BarChart3 className="h-8 w-8 text-emerald-400" />,
      title: "Capex & Capacity Velocity",
      description: "We track active utilization rates and quarterly deployment. Identify companies like Jabil that have already deployed over $175M of a $750M automation budget in Q1.",
    },
    {
      icon: <FileSearch className="h-8 w-8 text-emerald-400" />,
      title: "Factory 4.0 Mandates",
      description: "Our system scans 10-K filings for \"Dark Factory\" and \"Industry 4.0\" mandates. We pinpoint board-level initiatives aimed at reducing labor dependency through high-speed automation.",
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-400" />,
      title: "Greenfield Timelines",
      description: "Isolate expansion projects in key global markets like Pune, India or Vietnam. We identify the exact 9-month window where the remaining $500M+ in capex budget will be awarded.",
    },
  ];

  return (
    <section id="triggers" className="py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
             <TrendingUp className="h-5 w-5 text-emerald-500" />
             <span className="text-emerald-500 font-mono text-sm tracking-wider uppercase">Signal vs. Noise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Look for "Capital Intent," Not Just "Leads."
          </h2>
          <p className="text-lg text-slate-400">
            We don't just identify companies; we identify intent. By monitoring triggers hidden in 100-page SEC filings and monitoring investor calls, we pinpoint the exact manufacturing initiatives that demand integrated material handling expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {triggers.map((trigger, index) => (
            <div 
              key={index} 
              className="group p-8 bg-slate-950 border border-slate-800 rounded-lg hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/10"
            >
              <div className="bg-slate-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors border border-slate-800 group-hover:border-emerald-500/20">
                {trigger.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{trigger.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {trigger.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Triggers;