import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sliders, Disc, Sparkles } from 'lucide-react';
import { MusicTrack, StemState } from '../types';

interface AudioPlayerBarProps {
  currentTrack: MusicTrack;
  isPlaying: boolean;
  onTogglePlay: () => void;
  stems: StemState;
  onToggleStem: (stemName: keyof StemState) => void;
  volume: number;
  onChangeVolume: (val: number) => void;
  onOpenTrackDetails: (track: MusicTrack) => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  currentTrack,
  isPlaying,
  onTogglePlay,
  stems,
  onToggleStem,
  volume,
  onChangeVolume,
  onOpenTrackDetails
}) => {
  const [showStemControls, setShowStemControls] = useState(false);

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-[#0d0e17]/95 backdrop-blur-xl border-t border-[#20222e] shadow-2xl py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Track Info */}
        <div className="flex items-center gap-3.5 w-full md:w-auto shrink-0 justify-between md:justify-start">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 shrink-0">
              <img
                src={currentTrack.coverArt}
                alt={currentTrack.title}
                className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105' : ''}`}
              />
              {isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onOpenTrackDetails(currentTrack)}
                  className="font-bold text-sm text-white hover:text-amber-400 transition-colors text-left line-clamp-1 cursor-pointer"
                >
                  {currentTrack.title}
                </button>
                <span className="hidden sm:inline font-mono text-[10px] text-zinc-400 px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                  {currentTrack.key} · {currentTrack.bpm} BPM
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono line-clamp-1">
                {currentTrack.album} · Arfa Anjum
              </p>
            </div>
          </div>

          {/* Mobile Play Toggle */}
          <button
            onClick={onTogglePlay}
            className="md:hidden p-2.5 rounded-full bg-amber-400 text-zinc-950 hover:bg-amber-300 transition-colors cursor-pointer"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
          </button>
        </div>

        {/* Center: Playback & Animated Waveform */}
        <div className="flex flex-col items-center gap-2 w-full max-w-md">
          <div className="flex items-center gap-4">
            <button
              onClick={onTogglePlay}
              className="hidden md:flex p-2.5 rounded-full bg-amber-400 text-zinc-950 hover:bg-amber-300 transition-colors cursor-pointer shadow-sm items-center justify-center"
              title={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            {/* Live Frequency Spectrum Graphic */}
            <div className="flex items-center gap-0.5 h-6 px-3 bg-zinc-950/70 border border-zinc-800/80 rounded-lg">
              {[4, 8, 14, 18, 10, 16, 22, 12, 6, 15, 20, 11, 7, 13, 19, 9].map((height, i) => (
                <span
                  key={i}
                  className={`w-1 rounded-full transition-all duration-150 ${
                    isPlaying 
                      ? 'bg-amber-400' 
                      : 'bg-zinc-700'
                  }`}
                  style={{
                    height: isPlaying ? `${Math.max(4, (height * (i % 2 === 0 ? 1.1 : 0.8)))}px` : '4px',
                    opacity: isPlaying ? 0.9 : 0.4
                  }}
                />
              ))}
            </div>

            <span className="text-[11px] font-mono text-zinc-400">
              {isPlaying ? 'Synthesizing Live Audio' : 'Ready'}
            </span>
          </div>
        </div>

        {/* Right: Stem Isolators & Volume */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          
          {/* Stems Mute / Solo Button */}
          <div className="relative">
            <button
              onClick={() => setShowStemControls(!showStemControls)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors cursor-pointer ${
                showStemControls 
                  ? 'bg-amber-400 text-zinc-950 border-amber-400 font-semibold' 
                  : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Stem Mixer</span>
            </button>

            {/* Stem Controls Popover */}
            {showStemControls && (
              <div className="absolute right-0 bottom-full mb-3 p-3 bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl space-y-2 w-52 animate-in fade-in zoom-in-95 duration-150 text-xs">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block mb-1">
                  Neural Stem Bus Isolator
                </span>
                
                {(['drums', 'bass', 'melody', 'pad'] as (keyof StemState)[]).map((stem) => (
                  <button
                    key={stem}
                    onClick={() => onToggleStem(stem)}
                    className={`w-full flex items-center justify-between p-2 rounded-md font-mono text-xs cursor-pointer transition-colors ${
                      stems[stem]
                        ? 'bg-zinc-800 text-amber-300 border border-amber-400/30'
                        : 'bg-zinc-900/50 text-zinc-400 line-through'
                    }`}
                  >
                    <span className="capitalize">{stem}</span>
                    <span className="text-[10px]">{stems[stem] ? 'ACTIVE' : 'MUTED'}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Volume Control */}
          <div className="hidden sm:flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-zinc-400" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => onChangeVolume(parseFloat(e.target.value))}
              className="w-20 accent-amber-400 cursor-pointer"
            />
          </div>

        </div>

      </div>
    </div>
  );
};
