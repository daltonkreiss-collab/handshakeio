import React, { useState } from 'react';
import { Filter, ScanEye, UserCheck, CheckCircle2 } from 'lucide-react';

interface Stage {
  id: number;
  title: string;
  icon: React.ReactNode;
  contentTitle: string;
  content: string;
}

const ProcessSlider: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages: Stage[] = [
    {
      id: 0,
      title: "Bulk Qualification",
      icon: <Filter className="h-5 w-5" />,
      contentTitle: "Filtering the Noise",
      content: "We filter the public company universe down to the ~400 companies that actually fit your engineering specialty. We ignore the rest to focus your resources."
    },
    {
      id: 1,
      title: "Continuous Monitoring",
      icon: <ScanEye className="h-5 w-5" />,
      contentTitle: "24/7 Watchtower",
      content: "Our system tracks these targets 24/7. When a trigger is hit, we don't just alert you—we analyze the context within the 10-K or 8-K filing."
    },
    {
      id: 2,
      title: "Decision-Maker Intel",
      icon: <UserCheck className="h-5 w-5" />,
      contentTitle: "Actionable Outreach",
      content: "We identify the specific stakeholders (Corporate Engineering, VP Ops) and draft a tailored message based on the specific SEC filing insights."
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-slate-800/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">How It Works</h2>
          <p className="text-slate-400 font-mono text-sm">System Workflow v1.0</p>
        </div>

        {/* Slider Controls */}
        <div className="flex flex-col md:flex-row border-b border-slate-800 mb-12">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`flex-1 group relative p-4 flex items-center justify-center md:justify-start gap-3 transition-colors outline-none ${
                activeStage === stage.id ? 'bg-slate-900' : 'hover:bg-slate-900/50'
              }`}
            >
              <div className={`p-2 rounded-md ${activeStage === stage.id ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400 group-hover:text-emerald-400'}`}>
                {stage.icon}
              </div>
              <span className={`font-medium ${activeStage === stage.id ? 'text-white' : 'text-slate-500'}`}>
                {stage.title}
              </span>
              {/* Active Indicator Line */}
              {activeStage === stage.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"></div>
              )}
            </button>
          ))}
        </div>

        {/* Active Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[400px]">
          {/* Text Content */}
          <div className="space-y-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-white">{stages[activeStage].contentTitle}</h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              {stages[activeStage].content}
            </p>
            <ul className="space-y-3 mt-6">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span>
                    {activeStage === 0 && i === 1 ? "Sector Filtering" : ""}
                    {activeStage === 0 && i === 2 ? "Market Cap Analysis" : ""}
                    {activeStage === 0 && i === 3 ? "Historical Capex Review" : ""}
                    
                    {activeStage === 1 && i === 1 ? "Real-time Keyword Matching" : ""}
                    {activeStage === 1 && i === 2 ? "Contextual Semantic Analysis" : ""}
                    {activeStage === 1 && i === 3 ? "Relevance Scoring" : ""}

                    {activeStage === 2 && i === 1 ? "Org Chart Mapping" : ""}
                    {activeStage === 2 && i === 2 ? "Email Pattern Discovery" : ""}
                    {activeStage === 2 && i === 3 ? "Context-Aware Templates" : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dynamic Visuals */}
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 shadow-2xl overflow-hidden h-full min-h-[350px] relative">
            
            {/* Visual for Stage 0: Filtering */}
            {activeStage === 0 && (
              <div className="space-y-3 relative">
                <div className="flex justify-between text-xs font-mono text-slate-500 mb-4 border-b border-slate-800 pb-2">
                  <span>RAW_DATA_INPUT</span>
                  <span>FILTER_STATUS: ACTIVE</span>
                </div>
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className={`flex items-center justify-between p-3 rounded bg-slate-800/50 border border-slate-700/50 transition-all duration-500 ${item > 2 ? 'opacity-30 translate-x-4 blur-[1px]' : 'opacity-100'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${item <= 2 ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                      <span className="font-mono text-sm text-slate-300">INC_{item}00{item * 43}</span>
                    </div>
                    <span className={`text-xs font-mono ${item <= 2 ? 'text-emerald-400' : 'text-slate-600'}`}>
                      {item <= 2 ? 'MATCH' : 'DISCARD'}
                    </span>
                  </div>
                ))}
                <div className="absolute bottom-4 right-4 bg-slate-950 border border-slate-700 px-3 py-1 rounded text-xs font-mono text-emerald-500">
                  REDUCING DATASET...
                </div>
              </div>
            )}

            {/* Visual for Stage 1: Scanning */}
            {activeStage === 1 && (
              <div className="font-mono text-xs text-slate-400 space-y-1 relative h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent h-8 w-full animate-scan pointer-events-none"></div>
                <p className="opacity-50">PART I. ITEM 1. BUSINESS</p>
                <p>Overview</p>
                <p className="mb-4">Company X is a leading global manufacturer...</p>
                <div className="bg-slate-800/50 p-2 rounded mb-2">
                  <p>...strategy to increase operational efficiency.</p>
                  <p>In 2024, we plan to invest <span className="bg-emerald-500/20 text-emerald-300 font-bold border-b border-emerald-500">$50 million in automation</span> technologies across our North American facilities...</p>
                </div>
                <p>...to offset labor shortages and improve throughput.</p>
                <div className="mt-4 p-3 bg-slate-950 border border-emerald-500/30 rounded">
                  <div className="text-emerald-500 font-bold flex items-center gap-2">
                    <ScanEye className="h-4 w-4" />
                    TRIGGER DETECTED
                  </div>
                  <div className="text-slate-500 mt-1">Confidence Score: 98.4%</div>
                </div>
              </div>
            )}

            {/* Visual for Stage 2: Intel */}
            {activeStage === 2 && (
              <div className="relative h-full flex flex-col">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
                   <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                     <UserCheck className="h-5 w-5" />
                   </div>
                   <div>
                     <div className="text-white font-bold text-sm">John D. Engineering</div>
                     <div className="text-slate-500 text-xs">VP of Operations @ Target Corp</div>
                   </div>
                   <div className="ml-auto px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded border border-emerald-500/20">
                     Verified
                   </div>
                </div>
                
                <div className="bg-slate-950 border border-slate-800 rounded p-4 flex-1">
                  <div className="text-xs text-slate-500 mb-2">GENERATED DRAFT:</div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    "Hi John,<br/><br/>
                    I noticed in your recent 10-K filing the mention of the <span className="text-emerald-400 bg-emerald-900/20 px-1">Ohio facility modernization</span> project.<br/><br/>
                    Given your focus on automated material transport, our team's experience with..."
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSlider;