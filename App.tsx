import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarketOpportunity from './components/MarketOpportunity';
import Pipeline from './components/Pipeline';
import SignalTriggers from './components/SignalTriggers';
import Triggers from './components/Triggers';
// ProcessSlider removed from render — section deleted per request
import Customization from './components/Customization';
import LeadMagnet from './components/LeadMagnet';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans">
      <Navbar />
      <main>
        <Hero />
        <MarketOpportunity />
        <SignalTriggers />
        <Pipeline />
  <Customization />
  <Triggers />
        <LeadMagnet />
      </main>
      <Footer />
    </div>
  );
};

export default App;