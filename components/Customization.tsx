import React from 'react';
import { Settings, MapPin, Package, Cpu } from 'lucide-react';

const Customization: React.FC = () => {
  return (
    <section id="customization" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center space-x-2 mb-6">
               <Settings className="h-5 w-5 text-emerald-500" />
               <span className="text-emerald-500 font-mono text-sm uppercase">White Glove Service</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Not an "Out-of-the-Box" Tool. <br/>
              A Tailored Intelligence Partner.
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We recognize that every integrator has a "Sweet Spot." Whether you specialize in F&B, Consumer Goods, or specific geographic regions, we optimize our monitoring filters to align with your unique technical advantages.
            </p>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We work with you to refine the signal until you are only seeing projects you are equipped to win.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 hover:border-emerald-500/30 transition-colors">
              <Package className="h-8 w-8 text-slate-300 mb-4" />
              <h4 className="text-white font-bold mb-2">Vertical Specific</h4>
              <p className="text-sm text-slate-500">Food & Bev, Pharma, Automotive, Ecommerce.</p>
            </div>
            
            <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 hover:border-emerald-500/30 transition-colors">
              <MapPin className="h-8 w-8 text-slate-300 mb-4" />
              <h4 className="text-white font-bold mb-2">Geo-Fencing</h4>
              <p className="text-sm text-slate-500">Target plant expansions within your service radius.</p>
            </div>

            <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 hover:border-emerald-500/30 transition-colors">
              <Cpu className="h-8 w-8 text-slate-300 mb-4" />
              <h4 className="text-white font-bold mb-2">Tech Stack</h4>
              <p className="text-sm text-slate-500">ASRS, Conveyors, Robotics, AGV deployments.</p>
            </div>
            
            <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 flex items-center justify-center">
              <div className="text-center">
                <span className="block text-3xl font-bold text-emerald-500 mb-1">100%</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest">Tailored</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Customization;