import React from 'react';
import { FileText, Shield, ExternalLink } from 'lucide-react';

const PanelIntel: React.FC = () => {
  return (
    <div className="w-full py-12 lg:py-16 flex items-center justify-center px-8 lg:px-16">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div className="space-y-4 lg:order-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>the-right-reason</span>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold text-white">The Intel</h3>
          <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed">
            Be the first to know the "Why" behind the spend. Whether it's an SEC-referenced plant in Ohio or a modernization mandate in Mexico, you get the technical context before the competition even sees the headline.
          </p>
        </div>

  {/* 10-K Filing Mockup */}
  <div className="relative lg:order-1">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl blur-lg"></div>
          <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-xl overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-3 w-3 text-emerald-500" />
                <span className="font-mono text-xs text-slate-500">SEC EDGAR — Verified Source</span>
              </div>
              <ExternalLink className="h-3 w-3 text-slate-600" />
            </div>

            {/* Document content */}
            <div className="p-6 space-y-5 relative">
              {/* Scan line effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="w-full h-8 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent animate-scan"></div>
              </div>

              {/* Filing header */}
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
                <FileText className="h-5 w-5 text-slate-500" />
                <div>
                  <div className="font-mono text-xs text-emerald-400">FORM 10-K — ANNUAL REPORT</div>
                  <div className="font-mono text-xs text-slate-600 mt-0.5">FMC Corporation | Filed: Jan 2025</div>
                </div>
              </div>

              {/* Section label */}
              <div className="font-mono text-xs text-slate-600 uppercase tracking-wider">
                Item 1. Business — Capital Expenditure Overview
              </div>

              {/* Filing text with highlights */}
              <div className="text-sm text-slate-400 leading-relaxed space-y-4">
                <p>
                  In fiscal year 2024, the Company continued to invest in strategic growth initiatives across its global manufacturing footprint. As part of our{' '}
                  <span className="bg-emerald-500/15 text-emerald-300 px-1 py-0.5 rounded border-b border-emerald-500/40">
                    Factory 4.0 transformation roadmap
                  </span>
                  , we have allocated significant capital toward modernizing our production capabilities.
                </p>

                <p>
                  Specifically, we have committed{' '}
                  <span className="bg-emerald-500/15 text-emerald-300 px-1 py-0.5 rounded border-b border-emerald-500/40">
                    $185 million in Capex for Material Handling
                  </span>{' '}
                  systems and automated transport infrastructure at our{' '}
                  <span className="bg-emerald-500/15 text-emerald-300 px-1 py-0.5 rounded border-b border-emerald-500/40">
                    Ohio processing facility
                  </span>
                  . This investment will include conveyor systems, AS/RS installations, and AGV fleet deployment across three production lines.
                </p>

                <p className="text-slate-500">
                  The project is expected to commence in Q2 2025, with phased implementation targeting full operational capacity by Q4 2026. Management believes this investment will reduce unit logistics costs by approximately 34%...
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800">
                {['Factory 4.0', 'Capex: $185M', 'Material Handling', 'Greenfield', 'Ohio'].map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-xs font-mono text-slate-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelIntel;
