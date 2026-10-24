import React from 'react';
import { Play, Pause, ArrowRight, Disc, Music, Sparkles, Volume2 } from 'lucide-react';
import { MusicTrack } from '../types';

interface HeroProps {
  onExploreDiscography: () => void;
  onPlayFeaturedTrack: (track: MusicTrack) => void;
  onOpenLicensing: () => void;
  featuredTrack: MusicTrack;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onExploreDiscography, 
  onPlayFeaturedTrack,
  onOpenLicensing,
  featuredTrack,
  isPlaying,
  onTogglePlay
}) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#20222e]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-amber-400 mb-4">
              <span>AI Music Creator</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Neural Sound Architect</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Algorithmic Film Scorer</span>
            </div>

            {/* Oversized Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.08] text-balance">
              Crafting acoustic emotion through generative neural soundscapes and symphonic intelligence.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              Arfa Anjum composes cinematic hybrid scores, procedural spatial audio, and neural ambient music. Blending classical harmonic structures with custom latent audio diffusion models to sculpt sound that breathes with human vulnerability.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                onClick={onTogglePlay}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 text-sm font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isPlaying ? 'Pause Neural Soundscape' : 'Listen: "Echoes of the Perigee"'}</span>
              </button>
              
              <button
                onClick={onExploreDiscography}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <Disc className="w-4 h-4 text-amber-400" />
                <span>Explore Discography</span>
              </button>

              <button
                onClick={onOpenLicensing}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
              >
                <Music className="w-4 h-4" />
                <span>Custom Score Inquiries</span>
              </button>
            </div>

            {/* Current Studio Status */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
              <span className="text-zinc-300 font-medium">Creator & Sound Architect</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Arfa Anjum</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <a href="mailto:arfaanjum407@gmail.com" className="text-amber-400 hover:underline">
                arfaanjum407@gmail.com
              </a>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Available for Sync & Commissions</span>
            </div>

          </div>

          {/* Right Column: Visual Frame featuring Arfa Anjum */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl h-full min-h-[440px] lg:min-h-[510px] flex flex-col">
              <img
                src="/assets/aistudio/WhatsApp_Image_2026-10-24_at_4.03.01_PM_d12c0709.jpeg"
                alt="Arfa Anjum - AI Music Creator and Sound Architect"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-[center_12%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent pointer-events-none" />
              
              {/* Bottom Visual Overlay Caption with Animated Equalizer */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-xs">
                <div className="flex items-center justify-between text-zinc-300 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-amber-400 font-semibold">ARFA ANJUM · NEURAL AUDIO SUITE</span>
                    <span className="font-mono text-[10px] text-zinc-400">24-BIT / 96KHZ</span>
                  </div>

                  {/* Live Equalizer Bars */}
                  <div className="flex items-end gap-1 h-3.5">
                    <span className={`w-0.5 bg-amber-400 rounded-full transition-all duration-300 ${isPlaying ? 'h-3.5 animate-pulse' : 'h-1'}`} />
                    <span className={`w-0.5 bg-amber-400 rounded-full transition-all duration-300 ${isPlaying ? 'h-2 animate-pulse delay-75' : 'h-1'}`} />
                    <span className={`w-0.5 bg-amber-400 rounded-full transition-all duration-300 ${isPlaying ? 'h-3 animate-pulse delay-150' : 'h-1'}`} />
                    <span className={`w-0.5 bg-amber-400 rounded-full transition-all duration-300 ${isPlaying ? 'h-1.5 animate-pulse delay-100' : 'h-1'}`} />
                  </div>
                </div>

                <p className="text-zinc-200 font-serif italic text-sm">
                  "Algorithms discover acoustic infinities; human composition gives them a reason to ache."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Full-Width Quantitative Rigor & KPI Strip (Below Hero Split) */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">380K+</p>
            <p className="text-xs text-zinc-400 font-medium">Monthly Streaming Listeners</p>
            <p className="text-[11px] text-zinc-400">Spotify AI Curated & Apple Music</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono tabular-nums">42+</p>
            <p className="text-xs text-zinc-400 font-medium">Original Neural Compositions</p>
            <p className="text-[11px] text-zinc-400">Symphonic, Ambient & Sci-Fi Scores</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">12</p>
            <p className="text-xs text-zinc-400 font-medium">Sync Film & Game Licensings</p>
            <p className="text-[11px] text-zinc-400">Epic Games MegaGrant & Cannes Shorts</p>
          </div>
          <div className="space-y-1">
            <p className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono tabular-nums">100%</p>
            <p className="text-xs text-zinc-400 font-medium">Harmonic Human Authorship</p>
            <p className="text-[11px] text-zinc-400">ASCAP/BMI copyright-safe clearance</p>
          </div>
        </div>

      </div>
    </section>
  );
};
