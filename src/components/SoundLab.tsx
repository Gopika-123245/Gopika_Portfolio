import React, { useState } from 'react';
import { Sparkles, Sliders, Play, Pause, Copy, Check, Volume2, Music, Terminal } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';
import { GoogleGenAI } from '@google/genai';

interface GeneratedBlueprint {
  title: string;
  genre: string;
  bpm: number;
  key: string;
  promptString: string;
  harmonicProgression: string;
  layerBreakdown: string[];
  mixingDirectives: string;
}

export const SoundLab: React.FC = () => {
  const [mood, setMood] = useState('Deep Space Cyber-Symphonic');
  const [keyScale, setKeyScale] = useState<'minor' | 'dorian' | 'lydian' | 'pentatonic'>('minor');
  const [rootHz, setRootHz] = useState<number>(146.83); // D3
  const [bpm, setBpm] = useState<number>(118);
  const [isSynthPlaying, setIsSynthPlaying] = useState<boolean>(false);
  const [isGeneratingBlueprint, setIsGeneratingBlueprint] = useState<boolean>(false);
  const [blueprint, setBlueprint] = useState<GeneratedBlueprint | null>(null);
  const [copied, setCopied] = useState(false);

  const handleToggleLiveSynth = () => {
    if (isSynthPlaying) {
      audioEngine.stop();
      setIsSynthPlaying(false);
    } else {
      audioEngine.startTrack(rootHz, keyScale);
      setIsSynthPlaying(true);
    }
  };

  const handleGenerateBlueprint = async () => {
    setIsGeneratingBlueprint(true);

    try {
      const apiKey = (window as any).GEMINI_API_KEY || (import.meta as any).env?.VITE_GEMINI_API_KEY || '';

      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        const promptText = `You are Arfa Anjum, an elite AI Music Creator and Neural Sound Architect.
Generate an authentic latent audio prompt conditioning blueprint for:
Genre / Mood: ${mood}
BPM: ${bpm}
Scale Mode: ${keyScale}

Output strictly valid JSON with this exact schema:
{
  "title": "Evocative 2-3 word track title",
  "genre": "${mood}",
  "bpm": ${bpm},
  "key": "Musical Key string (e.g. D Minor)",
  "promptString": "Detailed prompt for Suno/Udio/MusicGen specifying instruments, acoustic space, mix balance, and emotional resolution",
  "harmonicProgression": "e.g. i - VI - III - VII",
  "layerBreakdown": ["Layer 1 description", "Layer 2 description", "Layer 3 description"],
  "mixingDirectives": "EQ, saturation, and dynamic mastering notes"
}`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: promptText,
          config: {
            responseMimeType: 'application/json'
          }
        });

        if (response.text) {
          const parsed = JSON.parse(response.text);
          setBlueprint(parsed);
          setIsGeneratingBlueprint(false);
          return;
        }
      }
    } catch (e) {
      console.warn('Falling back to local audio blueprint engine:', e);
    }

    // High quality local algorithmic fallback
    setTimeout(() => {
      setBlueprint({
        title: 'Chrono-Resonance',
        genre: mood,
        bpm: bpm,
        key: keyScale === 'minor' ? 'D Minor' : keyScale === 'dorian' ? 'F# Dorian' : keyScale === 'lydian' ? 'A Lydian' : 'C Pentatonic',
        promptString: `Cinematic ${mood.toLowerCase()}, ${bpm} BPM, crystalline acoustic felt piano, soaring anamorphic solo cello, warm Moog sub-bass drone, tape saturation, zero mud in 250Hz, pristine 24-bit studio stereo width.`,
        harmonicProgression: 'i - iv - VI - VII (Melancholic resolving to expansive awe)',
        layerBreakdown: [
          'Stem 1: Archival chamber string quartet recorded in natural cathedral acoustics',
          'Stem 2: Neural-modulated granular metallic pad with 432Hz harmonic alignment',
          'Stem 3: Sub-bass fundamental sine wave at 42Hz for visceral physical presence'
        ],
        mixingDirectives: 'Sidechain compress ambient reverb to cello transients. Tape warmth on master bus with +1.5dB gentle high-shelf boost at 12kHz.'
      });
      setIsGeneratingBlueprint(false);
    }, 800);
  };

  return (
    <section id="sound-lab" className="py-16 md:py-24 border-b border-[#20222e] bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-amber-400 mb-2">
              <span>Interactive Neural Sound Lab</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Test Generative Audio Synthesis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              The AI Audio Synthesis Workbench
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Sculpt acoustic parameters in real-time: trigger live Web Audio oscillators or generate precision prompt blueprints used in Arfa Anjum’s studio productions.
            </p>
          </div>
        </div>

        {/* Two-Column Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 p-7 bg-zinc-900/60 border border-zinc-800 rounded-2xl space-y-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>Acoustic Frequency Matrix</span>
            </h3>

            {/* Mood selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-zinc-400 block">Sonic Palette / Mood</label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-xs rounded-lg p-2.5 focus:outline-none focus:border-amber-400 cursor-pointer"
              >
                <option value="Deep Space Cyber-Symphonic">Deep Space Cyber-Symphonic</option>
                <option value="Cinematic Sci-Fi Tension">Cinematic Sci-Fi Tension</option>
                <option value="Ethereal Biophilic Ambient (432Hz)">Ethereal Biophilic Ambient (432Hz)</option>
                <option value="Neo-Classical Felt Piano & Drone">Neo-Classical Felt Piano & Drone</option>
                <option value="Generative Algorithmic Lofi">Generative Algorithmic Lofi</option>
              </select>
            </div>

            {/* Key and scale selector */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400 block">Root Frequency</label>
                <select
                  value={rootHz}
                  onChange={(e) => setRootHz(parseFloat(e.target.value))}
                  className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-xs rounded-lg p-2.5 focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value={146.83}>D3 (146.8 Hz)</option>
                  <option value={185.0}>F#3 (185.0 Hz)</option>
                  <option value={220.0}>A3 (220.0 Hz)</option>
                  <option value={130.81}>C3 (130.8 Hz)</option>
                  <option value={164.81}>E3 (164.8 Hz)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-zinc-400 block">Harmonic Scale</label>
                <select
                  value={keyScale}
                  onChange={(e) => setKeyScale(e.target.value as any)}
                  className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-xs rounded-lg p-2.5 focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="minor">Natural Minor</option>
                  <option value="dorian">Dorian Mode</option>
                  <option value="lydian">Lydian Mode</option>
                  <option value="pentatonic">Pentatonic Zen</option>
                </select>
              </div>
            </div>

            {/* BPM Slider */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Tempo (BPM)</span>
                <span className="text-amber-400 font-bold">{bpm} BPM</span>
              </div>
              <input
                type="range"
                min="60"
                max="140"
                step="2"
                value={bpm}
                onChange={(e) => setBpm(parseInt(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
            </div>

            {/* Live Web Audio Synthesizer Trigger */}
            <div className="pt-2 border-t border-zinc-800 space-y-3">
              <button
                onClick={handleToggleLiveSynth}
                className={`w-full py-2.5 px-4 font-semibold text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                  isSynthPlaying 
                    ? 'bg-rose-500 hover:bg-rose-400 text-white' 
                    : 'bg-amber-400 hover:bg-amber-300 text-zinc-950'
                }`}
              >
                {isSynthPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                <span>{isSynthPlaying ? 'Halt Live Audio Synthesis' : 'Trigger Live Web Audio Soundscape'}</span>
              </button>

              <button
                onClick={handleGenerateBlueprint}
                disabled={isGeneratingBlueprint}
                className="w-full py-2.5 px-4 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-white font-medium text-xs rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                {isGeneratingBlueprint ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Synthesizing Model Prompt...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Generate Neural Prompt Blueprint</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800 text-[11px] text-zinc-400 font-mono">
              Live Web Audio API utilizes twin detuned triangle oscillators, resonant biquad lowpass filtering, and algorithmic sub-bass pulses.
            </div>
          </div>

          {/* Blueprint Output View */}
          <div className="lg:col-span-7 p-7 bg-zinc-900/30 border border-zinc-800 rounded-2xl min-h-[460px] flex flex-col justify-between">
            {blueprint ? (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                  <div>
                    <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block">
                      Generated Audio Model Blueprint
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {blueprint.title}
                    </h4>
                  </div>

                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(JSON.stringify(blueprint, null, 2));
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-zinc-400 hover:text-white border border-zinc-800 bg-zinc-950 rounded-md cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Blueprint'}</span>
                  </button>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase block mb-1">
                      Latent Audio Model Prompt (Suno / Udio / MusicLM)
                    </span>
                    <pre className="text-xs font-mono text-amber-300 bg-zinc-950 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap leading-relaxed border border-zinc-800">
                      {blueprint.promptString}
                    </pre>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800">
                      <span className="text-[10px] font-mono text-amber-400 uppercase block mb-1">Harmonic Progression</span>
                      <p className="text-xs text-zinc-200 font-mono">{blueprint.harmonicProgression}</p>
                    </div>
                    <div className="p-3 bg-zinc-950 rounded-lg border border-zinc-800">
                      <span className="text-[10px] font-mono text-amber-400 uppercase block mb-1">Key & Tempo</span>
                      <p className="text-xs text-zinc-200 font-mono">{blueprint.key} · {blueprint.bpm} BPM</p>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase block mb-1.5">
                      Multi-Stem Isolation Blueprint
                    </span>
                    <ul className="space-y-1.5 text-xs text-zinc-300">
                      {blueprint.layerBreakdown.map((layer, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-400 font-mono">0{idx + 1}.</span>
                          <span>{layer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 bg-zinc-950/80 border border-zinc-800 rounded-lg text-xs font-mono">
                    <span className="text-[10px] text-zinc-400 uppercase block mb-1">Mastering Directive</span>
                    <p className="text-zinc-300 text-xs">{blueprint.mixingDirectives}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 text-zinc-400 space-y-3">
                <Music className="w-10 h-10 text-zinc-600 mb-1" />
                <p className="text-base text-zinc-300 font-medium">Ready to Synthesize Neural Soundscape</p>
                <p className="text-xs max-w-md">
                  Choose your musical mood and harmonic scale on the left. Click "Trigger Live Web Audio Soundscape" to hear generated frequencies, or generate a full multi-track studio blueprint.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
