import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Music2, ShieldCheck, Headphones, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  preselectedTrack?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedTrack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [licensingType, setLicensingType] = useState('Sync Licensing for Film / TV');
  const [selectedTrack, setSelectedTrack] = useState(preselectedTrack || 'Echoes of the Perigee');
  const [budgetTier, setBudgetTier] = useState('Indie Film / Festival ($1,500 - $5,000)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <section id="licensing" className="py-16 md:py-24 border-b border-[#20222e]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-amber-400 mb-2">
            <span>Sync Licensing & Custom Scoring</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Arfa Anjum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Audio Licensing Desk & Studio Commissions
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            Acquire sync rights for existing catalog tracks with full multi-stem packages, or commission custom neural score architecture for films, XR, and games.
          </p>
        </div>

        {/* Two-Column Grid: Studio Desk & Interactive Request Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Studio Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Creator Desk Card */}
            <div className="p-6 bg-zinc-900/70 border border-amber-400/30 rounded-2xl space-y-3">
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block font-semibold">
                Direct Composer Desk
              </span>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Connect directly with AI music creator & sound architect Arfa Anjum for sync quotes, custom score briefs, and stem requests:
              </p>
              <a 
                href="mailto:arfaanjum407@gmail.com" 
                className="inline-flex items-center gap-2 text-sm font-mono text-amber-300 hover:text-amber-200 transition-colors font-semibold"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>arfaanjum407@gmail.com</span>
              </a>
            </div>

            {/* Publishing & Rights Clearance */}
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>Publishing & Master Rights</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">100% One-Stop Sync Clearance</h3>
                <p className="text-xs text-zinc-400 mt-0.5">Master & Sync rights controlled 100% by Arfa Anjum</p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 space-y-2 text-xs text-zinc-300">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">PRO Affiliation:</span>
                  <span className="font-medium text-white">ASCAP / BMI Registered</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Stem Formats:</span>
                  <span>24-bit / 96kHz WAV, Pro Tools / Ableton Session</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Turnaround Time:</span>
                  <span className="font-mono text-amber-300">Same-Day NDA & Stems</span>
                </div>
              </div>
            </div>

            {/* Spatial & Game Audio Package */}
            <div className="p-6 bg-zinc-900/30 border border-zinc-800/80 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-white text-xs font-mono">
                <Headphones className="w-4 h-4 text-amber-400" />
                <span>Interactive XR & Spatial Audio Integration</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Need adaptive procedural music for Unreal Engine 5 or Unity? We deliver dynamic Wwise/FMOD soundbanks with horizontal re-sequencing and vertical stem layering.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Sync & Scoring Form */}
          <div className="lg:col-span-7 p-8 bg-zinc-900/60 border border-zinc-800 rounded-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-200">
                <CheckCircle2 className="w-12 h-12 text-amber-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Licensing Brief Transmitted</h3>
                <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{name}</span>. Your licensing inquiry for <span className="text-amber-400 font-mono">"{selectedTrack}"</span> has been delivered to Arfa Anjum (<a href="mailto:arfaanjum407@gmail.com" className="text-amber-400 underline">arfaanjum407@gmail.com</a>). You will receive full master stems and license terms within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 text-xs font-medium text-amber-400 hover:text-amber-300 underline cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <h3 className="text-base font-bold text-white">
                    Sync License & Commission Request
                  </h3>
                  <span className="text-[11px] font-mono text-zinc-400">
                    24h Turnaround Guaranteed
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-zinc-400">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Maya Chen"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-zinc-400">Professional Email *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. m.chen@horizonfilms.com"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-zinc-400">Production Company / Studio</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Epic Games, Neon Horizon, BBC"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-zinc-400">Inquiry Type</label>
                    <select
                      value={licensingType}
                      onChange={(e) => setLicensingType(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-400 cursor-pointer"
                    >
                      <option value="Sync Licensing for Film / TV">Sync Licensing for Film / TV</option>
                      <option value="Custom Film / Trailer Score Commission">Custom Film / Trailer Score Commission</option>
                      <option value="Interactive XR & Game Audio Architecture">Interactive XR & Game Audio Architecture</option>
                      <option value="Brand Sonic Identity & Commercial Ad">Brand Sonic Identity & Commercial Ad</option>
                      <option value="Multi-Stem Audio Sample Pack Licensing">Multi-Stem Audio Sample Pack Licensing</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-zinc-400">Catalog Track or Project</label>
                    <select
                      value={selectedTrack}
                      onChange={(e) => setSelectedTrack(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-400 cursor-pointer"
                    >
                      <option value="Echoes of the Perigee">Echoes of the Perigee (Hybrid Symphonic)</option>
                      <option value="Subharmonic Genesis">Subharmonic Genesis (Cinematic Sci-Fi)</option>
                      <option value="Solaris Resonance">Solaris Resonance (Spatial Ambient XR)</option>
                      <option value="Ghosts in the Latent Space">Ghosts in the Latent Space (Felt Piano)</option>
                      <option value="Original Custom Commission">Custom Score Commission (New Work)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-zinc-400">Production Budget Scope</label>
                    <select
                      value={budgetTier}
                      onChange={(e) => setBudgetTier(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 focus:outline-none focus:border-amber-400 cursor-pointer"
                    >
                      <option value="Indie Film / Festival ($1,500 - $5,000)">Indie Film / Festival ($1,500 - $5,000)</option>
                      <option value="Studio Feature / Series ($5,000 - $25,000)">Studio Feature / Series ($5,000 - $25,000)</option>
                      <option value="Video Game / XR Soundtrack ($10,000 - $40,000)">Video Game / XR Soundtrack ($10,000 - $40,000)</option>
                      <option value="Commercial Campaign ($3,000 - $15,000)">Commercial Campaign ($3,000 - $15,000)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-400">Creative Brief / Temp Track References</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your scene emotional intent, temp score references, required delivery date, or stem requirements..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Sync License & Score Request</span>
                  </button>
                </div>

                <p className="text-[11px] text-zinc-400 font-mono text-center">
                  Protected under ASCAP standard sync clearance. One-stop master & publishing rights.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
