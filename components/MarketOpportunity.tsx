import React from 'react';
import { TrendingUp } from 'lucide-react';

const MarketOpportunity: React.FC = () => {
  return (
    <section className="relative bg-slate-900 border-t border-b border-slate-800">
      {/* Market Opportunity Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Chart */}
            <div className="relative">
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

                  {/* Y-axis labels - positioned on left */}
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
                  {/* Chart area: x from 50-380 (330 wide), y from 30-190 (160 tall) */}
                  {/* $40B at y=150, $70B at y=120, $100B at y=90, $150B at y=40 */}
                  <path
                    d="M 50 150 C 100 140, 130 125, 160 120 C 200 110, 230 95, 270 90 C 310 80, 350 50, 380 40 L 380 190 L 50 190 Z"
                    fill="url(#chartGradient)"
                  />

                  {/* Main line */}
                  <path
                    d="M 50 150 C 100 140, 130 125, 160 120 C 200 110, 230 95, 270 90 C 310 80, 350 50, 380 40"
                    fill="none"
                    stroke="rgb(16, 185, 129)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Data points */}
                  {/* 2024: $40B → y=150, x=50 */}
                  <circle cx="50" cy="150" r="6" fill="rgb(16, 185, 129)" stroke="rgb(15, 23, 42)" strokeWidth="3" />
                  {/* 2027: $70B → y=120, x=160 */}
                  <circle cx="160" cy="120" r="6" fill="rgb(16, 185, 129)" stroke="rgb(15, 23, 42)" strokeWidth="3" />
                  {/* 2029: $100B → y=90, x=270 */}
                  <circle cx="270" cy="90" r="6" fill="rgb(16, 185, 129)" stroke="rgb(15, 23, 42)" strokeWidth="3" />
                  {/* 2031: $150B → y=40, x=380 */}
                  <circle cx="380" cy="40" r="6" fill="rgb(16, 185, 129)" stroke="rgb(15, 23, 42)" strokeWidth="3" />

                  {/* X-axis labels */}
                  <text x="50" y="215" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">2024</text>
                  <text x="160" y="215" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">2027</text>
                  <text x="270" y="215" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">2029</text>
                  <text x="380" y="215" fill="#64748b" fontSize="11" fontFamily="monospace" textAnchor="middle">2031</text>
                </svg>

                {/* Key stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400 font-mono">$40B</div>
                    <div className="text-xs text-slate-500">2024 Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white font-mono">3.75x</div>
                    <div className="text-xs text-slate-500">Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400 font-mono">$150B</div>
                    <div className="text-xs text-slate-500">2031 Projected</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Copy */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Δ_SUPERCHARGED_CAP</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Your team has the expertise and solutions.{' '}
                <span className="text-emerald-400">Let us point to the opportunities.</span>
              </h2>

              <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed">
                The global automated material handling (AMH) market is projected to more than double, reaching over <span className="text-emerald-400 font-semibold">$150 Billion</span> by the early 2030s.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Advantage Section - Connected */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950/50 border-t border-slate-800">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            The Strategic Advantage<br />
            <span className="text-emerald-400">Your Competitors Don't Have.</span>
          </h2>

          <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-4xl mx-auto">
            Think of the HandShakeIO solution as <span className="text-white font-semibold">10 highly trained research assistants</span> working around the clock—reading through hundreds of thousands of dense SEC filings and listening in on investor calls to pinpoint your perfect automation projects, identifying the specific decision-makers, and drafting context-rich messages for you.
          </p>

          <p className="text-xl lg:text-2xl text-white font-bold">
            ...all for a fraction of a single entry-level salary.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;
