import React from 'react';
import { TrendingUp, Building2, Clock, Flame } from 'lucide-react';

const PanelSignal: React.FC = () => {
  return (
    <div className="w-full py-12 lg:py-16 flex items-center justify-center px-8 lg:px-16">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>the right moment</span>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold text-white">The Signal</h3>
          <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed">
            Wake up every Monday to a tailored intelligence report. We identify exactly which of your ideal prospects have just announced greenfield plant openings or automation modernization initiatives.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl blur-lg"></div>
          <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-xl p-6 space-y-5">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="font-mono text-xs text-slate-500">OPPORTUNITY DASHBOARD</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-500">
                <Clock className="h-3 w-3" />
                <span className="font-mono text-xs">Monday, 8:00 AM</span>
              </div>
            </div>

            {/* Main Opportunity Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-lg p-5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-slate-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">FMC Corporation</div>
                    <div className="text-slate-500 text-xs font-mono">NYSE: FMC</div>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-red-500/10 border border-red-500/20 rounded-full">
                  <Flame className="h-3 w-3 text-red-400" />
                  <span className="text-xs font-semibold text-red-400">HOT</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-900 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-white font-mono">$185M</div>
                  <div className="text-xs text-slate-500 mt-1">Deal Potential</div>
                </div>
                <div className="bg-slate-900 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-emerald-400 font-mono">94%</div>
                  <div className="text-xs text-slate-500 mt-1">Confidence</div>
                </div>
                <div className="bg-slate-900 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-white font-mono">10-K</div>
                  <div className="text-xs text-slate-500 mt-1">Source</div>
                </div>
              </div>

              <div className="text-sm text-slate-400 border-t border-slate-800 pt-3">
                "Allocated <span className="text-emerald-300 bg-emerald-500/10 px-1">$185M for modernization</span> of the Ohio processing facility, including automated material transport..."
              </div>
            </div>

            {/* Secondary rows */}
            <div className="space-y-2">
              {[
                { ticker: 'GEN', name: 'General Dynamics', potential: '$92M', status: 'Warm', color: 'yellow' },
                { ticker: 'DOV', name: 'Dover Corp', potential: '$67M', status: 'New', color: 'blue' },
              ].map((row) => (
                <div key={row.ticker} className="flex items-center justify-between bg-slate-950/50 border border-slate-800/50 rounded-lg px-4 py-3">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs text-slate-500">${row.ticker}</span>
                    <span className="text-sm text-slate-300">{row.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="font-mono text-sm text-white">{row.potential}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      row.color === 'yellow'
                        ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}>
                      {row.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              <div className="flex items-center space-x-2 text-emerald-400">
                <TrendingUp className="h-4 w-4" />
                <span className="text-xs font-mono">3 new opportunities this week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelSignal;
