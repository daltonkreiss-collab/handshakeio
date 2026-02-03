import React from 'react';
import { ArrowRight } from 'lucide-react';
import computerReportImg from '@/assets/computer with report.png';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      {/* Background Image with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/factory1/1920/1080"
          alt="Modern automated facility"
          className="w-full h-full object-cover opacity-20 filter blur-sm grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/80"></div>
        
        {/* Grid Overlay */}
        <div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
            style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Copy */}
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>SYSTEM_ONLINE // MONITORING SEC_EDGAR</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Identify Greenfield <span className="text-emerald-400">Automation Projects</span> Before the RFP.
          </h1>
          
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Market intelligence for material handling integrators to identify high-intent automation projects, time the outreach perfectly, and connect with the right decision-makers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#report"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-500/20"
            >
              Get Sample Opportunity Report
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right Column: Report Image */}
        <div className="relative hidden lg:block">
          <img
            src={computerReportImg}
            alt="Computer with report"
            className="w-[130%] max-w-none h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;