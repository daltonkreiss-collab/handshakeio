import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';

const LeadMagnet: React.FC = () => {
  return (
    <section id="report" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950 to-slate-950"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="md:flex">
            {/* Left Side - Visual/Copy */}
            <div className="md:w-1/2 p-8 md:p-12 bg-slate-850 relative overflow-hidden">
               <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
               
               <FileText className="h-10 w-10 text-emerald-500 mb-6" />
               <h2 className="text-2xl font-bold text-white mb-4">See the Intelligence in Action.</h2>
               <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                 We aren't asking for a meeting yet. We want to show you the level of detail our system provides. Submit to view a sample Opportunity Report for a recent <strong className="text-slate-200">Food & Beverage plant expansion</strong>.
               </p>
               
               <div className="space-y-3">
                 <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span>Full project scope analysis</span>
                 </div>
                 <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span>CapEx budget estimate</span>
                 </div>
                 <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span>Key stakeholder contact info</span>
                 </div>
               </div>
            </div>

            {/* Right Side - Form */}
            <div className="md:w-1/2 p-8 md:p-12 bg-slate-900">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wider font-mono">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
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
                    className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    placeholder="jane@integrator.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-slate-400 mb-1 uppercase tracking-wider font-mono">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                    placeholder="Acme Automation Systems"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 px-4 rounded transition-all mt-2"
                >
                  Get Sample Report
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
    </section>
  );
};

export default LeadMagnet;