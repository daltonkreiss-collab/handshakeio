import React from 'react';
import { UserCheck, Linkedin, Mail, Send, CheckCircle } from 'lucide-react';

const contacts = [
  { name: 'Sarah Chen', title: 'VP Operations', linkedin: true, email: 's.chen@fmc.com' },
  { name: 'David Morales', title: 'Director, Plant Engineering', linkedin: true, email: 'd.morales@fmc.com' },
  { name: 'Jennifer Park', title: 'Sr. Procurement Manager', linkedin: true, email: 'j.park@fmc.com' },
];

const PanelConnection: React.FC = () => {
  return (
    <div className="w-full py-12 lg:py-16 flex items-center justify-center px-8 lg:px-16">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Copy + Contact Cards */}
        <div className="space-y-4 lg:-mt-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>the-right-people</span>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold text-white">The Connection</h3>
          <p className="text-xl lg:text-2xl text-slate-400 leading-relaxed">
            Move from "Lead" to "Contact" in seconds. Our system identifies three key decision-makers specific to the event—verified emails and LinkedIn profiles included. With one click, generate context-aware messages that reference the specific filing, ready to send from your outbox.
          </p>

          {/* Contact Cards — inline under copy */}
          <div className="space-y-2 pt-2">
            <div className="font-mono text-xs text-slate-600 uppercase tracking-wider mb-3">Key Decision-Makers</div>
            {contacts.map((contact) => (
              <div
                key={contact.name}
                className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-lg p-3 hover:border-emerald-500/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                      <UserCheck className="h-4 w-4 text-slate-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{contact.name}</div>
                      <div className="text-slate-500 text-xs">{contact.title}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {contact.linkedin && (
                      <div className="w-7 h-7 rounded bg-slate-800 border border-slate-700 flex items-center justify-center">
                        <Linkedin className="h-3.5 w-3.5 text-blue-400" />
                      </div>
                    )}
                    <div className="w-7 h-7 rounded bg-slate-800 border border-slate-700 flex items-center justify-center">
                      <Mail className="h-3.5 w-3.5 text-emerald-400" />
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center space-x-2">
                  <CheckCircle className="h-3 w-3 text-emerald-500" />
                  <span className="text-xs text-slate-500 font-mono">{contact.email} — Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Draft Email */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl blur-lg"></div>
          <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700 rounded-xl overflow-hidden">
            {/* Email header */}
            <div className="flex items-center justify-between px-5 py-3 bg-slate-950 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-slate-500" />
                <span className="font-mono text-xs text-slate-500">AUTO-GENERATED DRAFT</span>
              </div>
              <button className="flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded text-xs font-medium text-white transition-colors">
                <Send className="h-3 w-3" />
                <span>Send</span>
              </button>
            </div>

            {/* Email fields */}
            <div className="px-5 py-3 border-b border-slate-800 space-y-2">
              <div className="flex items-center space-x-3 text-xs">
                <span className="text-slate-600 w-8">To:</span>
                <span className="text-slate-300">Sarah Chen &lt;s.chen@fmc.com&gt;</span>
              </div>
              <div className="flex items-center space-x-3 text-xs">
                <span className="text-slate-600 w-8">Subj:</span>
                <span className="text-slate-300">Re: FMC Ohio Facility Modernization — Material Handling Solutions</span>
              </div>
            </div>

            {/* Email body */}
            <div className="p-5 space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>Hi Sarah,</p>

              <p>
                I noticed in FMC's recent 10-K filing the mention of the{' '}
                <span className="bg-emerald-900/30 text-emerald-400 px-1 rounded">
                  $185M Ohio facility modernization
                </span>{' '}
                project, specifically the investment in automated material transport and conveyor systems.
              </p>

              <p>
                We specialize in exactly this type of implementation — our team has delivered similar AS/RS and AGV deployments for companies like [Company A] and [Company B], typically reducing logistics costs by 30-40%.
              </p>

              <p>
                Would you have 15 minutes this week to discuss how we might support the Ohio project timeline?
              </p>

              <p className="text-slate-500">
                Best regards,<br />
                [Your Name]<br />
                <span className="text-xs font-mono">[Your Company] | Material Handling Systems</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelConnection;
