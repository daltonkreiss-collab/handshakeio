import React from 'react';
import { Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center space-x-2">
          <Terminal className="h-5 w-5 text-slate-600" />
          <span className="text-lg font-bold tracking-tight text-slate-500 font-mono">
            HandshakeIO
          </span>
        </div>
        
        <div className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} HandshakeIO. All rights reserved.
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-slate-600 hover:text-emerald-500 text-sm">Privacy</a>
          <a href="#" className="text-slate-600 hover:text-emerald-500 text-sm">Terms</a>
          <a href="#" className="text-slate-600 hover:text-emerald-500 text-sm">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;