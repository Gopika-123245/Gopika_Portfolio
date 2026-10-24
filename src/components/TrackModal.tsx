import React, { useState } from 'react';
import { MusicTrack } from '../types';
import { X, Play, Pause, Copy, Check, Sparkles, Sliders, Music, ShieldCheck } from 'lucide-react';

interface TrackModalProps {
  track: MusicTrack | null;
  isPlaying: boolean;
  onTogglePlay: (track: MusicTrack) => void;
  onClose: () => void;
  onOpenLicensing: (title: string) => void;
}

export const TrackModal: React.FC<TrackModalProps> = ({
  track,
  isPlaying,
  onTogglePlay,
  onClose,
  onOpenLicensing
}) => {
  if (!track) return null;

  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(track.neuralArchitecture.promptBlueprint);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0d14] border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-[#0e101a] shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-white tracking-tight text-base sm:text-lg">
              {track.title}
            </span>
            <span aria-hidden="true" className="text-zinc-600 hidden sm:inline">·</span>
            <span className="text-xs text-amber-400 font-mono hidden sm:inline">{track.album}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Top Track Banner */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-zinc-900/40 border border-zinc-800 p-5 rounded-xl">
            <div className="md:col-span-4 relative aspect-square rounded-lg overflow-hidden bg-zinc-950">
              <img
                src={track.coverArt}
                alt={track.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <span>{track.bpm} BPM</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>Key: {track.key}</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>Duration: {track.duration}</span>
              </div>

              <h3 className="text-2xl font-bold text-white">{track.title}</h3>
              <p className="text-sm font-serif italic text-zinc-300 leading-relaxed">
                "{track.tagline}"
              </p>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onTogglePlay(track)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isPlaying ? 'Pause Track' : 'Play Live Synthesizer'}</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenLicensing(track.title);
                  }}
                  className="px-4 py-2 text-xs font-medium text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
                >
                  License for Project
                </button>
              </div>
            </div>
          </div>

          {/* Neural Architecture Breakdown */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Generative Model Architecture & DSP Engineering</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl space-y-1">
                <span className="text-[11px] font-mono text-amber-400 uppercase block">Latent Audio Model</span>
                <p className="text-zinc-200 font-medium">{track.neuralArchitecture.latentModel}</p>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl space-y-1">
                <span className="text-[11px] font-mono text-amber-400 uppercase block">Mixing & DSP Pipeline</span>
                <p className="text-zinc-200 font-medium">{track.neuralArchitecture.dspPipeline}</p>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl space-y-1">
                <span className="text-[11px] font-mono text-amber-400 uppercase block">Human Authorship Core</span>
                <p className="text-zinc-200 font-medium">{track.neuralArchitecture.humanMasteryRatio}</p>
              </div>
            </div>
          </div>

          {/* Prompt Engineering Blueprint */}
          <div className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400 uppercase">
                Diffusion Model Conditioning Blueprint (Audio Prompt)
              </span>
              <button
                onClick={handleCopyPrompt}
                className="flex items-center gap-1.5 px-3 py-1 text-xs text-zinc-400 hover:text-white border border-zinc-800 bg-zinc-900 rounded-md cursor-pointer"
              >
                {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPrompt ? 'Copied' : 'Copy Prompt'}</span>
              </button>
            </div>

            <pre className="text-xs font-mono text-amber-300/90 bg-zinc-900/70 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {track.neuralArchitecture.promptBlueprint}
            </pre>
          </div>

          {/* Stems & Legal Provenance */}
          <div className="p-5 bg-zinc-900/30 border border-zinc-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-white font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% ASCAP / BMI Copyright Clearance</span>
              </div>
              <p className="text-zinc-400">
                Multi-track stems (24-bit WAV, 96kHz) available for Film, Commercials, Game Engines, and VR.
              </p>
            </div>

            <div className="font-mono text-zinc-300 text-xs">
              Direct Contact: <a href="mailto:arfaanjum407@gmail.com" className="text-amber-400 underline">arfaanjum407@gmail.com</a>
            </div>
          </div>

        </div>

        {/* Modal Bottom Strip */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0e101a] border-t border-zinc-800 shrink-0 text-xs text-zinc-400">
          <span>Composed & Produced by Arfa Anjum</span>
          <button
            onClick={() => {
              onClose();
              onOpenLicensing(track.title);
            }}
            className="px-4 py-2 font-semibold text-zinc-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
          >
            Request Sync License PDF
          </button>
        </div>

      </div>
    </div>
  );
};
