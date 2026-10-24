import React from 'react';
import { SONIC_PILLARS, AUDIO_TOOLKIT, ACCOLADES, TESTIMONIALS } from '../data/musicData';
import { Award, Music, Sparkles, Sliders, CheckCircle2 } from 'lucide-react';

export const BioSection: React.FC = () => {
  return (
    <section id="philosophy" className="py-16 md:py-24 border-b border-[#20222e]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-amber-400 mb-2">
            <span>Professional Biography & Sonic Manifesto</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Arfa Anjum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
            Classical Harmony Meets Latent Audio Diffusion
          </h2>
        </div>

        {/* Bio Grid: Long-form Bio & Portrait Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Main Editorial Bio Text */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-base">
            <p className="text-lg text-white font-serif italic border-l-0 pl-0">
              "We do not use synthetic intelligence to automate music. We use it to unearth acoustic textures and timbral worlds that human instruments could never physically resonate alone."
            </p>
            
            <p>
              Arfa Anjum is an acclaimed AI music creator, neural sound architect, and algorithmic film composer. Blending deep conservatory foundations in harmonic theory, modal counterpoint, and orchestration with cutting-edge latent audio diffusion architectures, Arfa pioneers soundscapes that bridge traditional acoustic grandeur with synthetic spatial frontiers.
            </p>

            <p>
              Her compositions range from towering cyber-symphonic film scores to binaural biophilic sound environments engineered for spatial computing, XR installations, and meditative wellness. Rather than relying on simple text-to-audio generators, Arfa engineers multi-stem diffusion pipelines: capturing raw acoustic instruments and training specialized neural audio autoencoders to generate isolated string, brass, and percussion stems with studio-grade dynamic range.
            </p>

            <p>
              Arfa’s works have amassed over 380,000 monthly streaming listeners, featured across Spotify’s premier algorithmic playlists, earned an Unreal Engine Spatial Audio Grant from Epic Games, and received original score honors at international film showcases.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
              <span className="text-white font-semibold">Creator</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Arfa Anjum</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <a href="mailto:arfaanjum407@gmail.com" className="text-amber-400 hover:underline">
                arfaanjum407@gmail.com
              </a>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>ASCAP / BMI Registered Composer</span>
            </div>
          </div>

          {/* Side Bio Card: Creator Profile & Studio Specs */}
          <div className="lg:col-span-5 p-7 bg-zinc-900/60 border border-zinc-800 rounded-2xl space-y-6">
            <div className="flex items-center gap-4 pb-4 border-b border-zinc-800">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-24_at_4.03.01_PM_d12c0709.jpeg"
                alt="Arfa Anjum profile"
                className="w-16 h-16 rounded-full object-cover object-[center_12%] border-2 border-amber-400/60 shadow-md"
              />
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">Arfa Anjum</h3>
                <p className="text-xs text-amber-400 font-mono">AI Music Creator & Sound Architect</p>
                <a 
                  href="mailto:arfaanjum407@gmail.com" 
                  className="text-xs text-zinc-400 hover:text-white transition-colors block mt-0.5"
                >
                  arfaanjum407@gmail.com
                </a>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div className="space-y-1">
                <span className="text-zinc-400 font-mono">Acoustic Specializations</span>
                <p className="text-zinc-200 text-sm font-medium">
                  Cyber-Symphonic Film Scores, Spatial Ambient Soundscapes, Interactive XR Audio, Generative Lofi.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-zinc-400 font-mono">Master Deliverables</span>
                <p className="text-zinc-200 text-sm font-medium">
                  24-bit / 96kHz Uncompressed Stems (Drums, Bass, Synths, Strings, Foley), Ambisonic B-format.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-zinc-400 font-mono">Direct Communication</span>
                <p className="text-zinc-200 text-sm font-medium">
                  Commissions & sync licensing handled directly at <span className="text-amber-400 font-mono">arfaanjum407@gmail.com</span> with 24h turnaround for project clearance.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-zinc-400 font-mono">Copyright & Ethics Pledge</span>
                <p className="text-zinc-300 leading-relaxed">
                  Every piece of music is 100% human-arranged and legally cleared. Neural models are trained exclusively on original or public-domain stems, ensuring complete commercial indemnity.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* The 4 Sonic Pillars */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
              Methodology & Sonic Discipline
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              The Four Pillars of Neural Sound Design
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SONIC_PILLARS.map((pillar) => (
              <div 
                key={pillar.number}
                className="p-7 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-2xl font-bold font-mono text-amber-400/90">{pillar.number}</span>
                  <span className="text-xs font-mono text-zinc-400">{pillar.deliverable}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Production Tech Stack */}
        <div className="mb-20 p-8 bg-zinc-900/30 border border-zinc-800 rounded-2xl">
          <div className="mb-6">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
              Production Tech Stack
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              The Neural Audio Studio Toolkit
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIO_TOOLKIT.map((category) => (
              <div key={category.category} className="space-y-3">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  {category.category}
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-200">
                  {category.tools.map((tool) => (
                    <li key={tool} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-400/80 rounded-full shrink-0" />
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Accolades & Sync Honors */}
        <div id="accolades" className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
              Industry Recognition
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Music Awards, Grants & Sync Placements
            </h3>
          </div>

          <div className="divide-y divide-zinc-800 border-y border-zinc-800">
            {ACCOLADES.map((item, idx) => (
              <div 
                key={idx}
                className="py-4.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-amber-400/90 tabular-nums w-12">{item.year}</span>
                  <span className="font-semibold text-white">{item.organization}</span>
                  <span aria-hidden="true" className="text-zinc-600 hidden sm:inline">·</span>
                  <span className="text-zinc-400">{item.award}</span>
                </div>
                <div className="font-mono text-xs text-zinc-400 pl-15 sm:pl-0">
                  {item.project}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attributable Testimonials */}
        <div>
          <div className="mb-8">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
              Collaborator Testimonials
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              What Directors & Audio Supervisors Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl flex flex-col justify-between"
              >
                <p className="text-sm font-serif italic text-zinc-200 leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-zinc-800/80">
                  <p className="text-xs font-bold text-white">{t.author}</p>
                  <p className="text-[11px] text-zinc-400">{t.title}</p>
                  <p className="text-[11px] text-amber-400/90 font-mono mt-0.5">{t.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
