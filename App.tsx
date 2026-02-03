import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pipeline from './components/Pipeline';
import Triggers from './components/Triggers';
import ProcessSlider from './components/ProcessSlider';
import Customization from './components/Customization';
import LeadMagnet from './components/LeadMagnet';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Pipeline />
        <Triggers />
        <ProcessSlider />
        <Customization />
        <LeadMagnet />
      </main>
      <Footer />
    </div>
  );
};

export default App;