import React, { useState, useMemo } from 'react';
import { MusicTrack, TrackCategory } from '../types';
import { Play, Pause, Search, Sparkles, Disc, Sliders, ArrowUpRight, FileText, Music2 } from 'lucide-react';

interface MusicShowcaseProps {
  tracks: MusicTrack[];
  currentTrack: MusicTrack;
  isPlaying: boolean;
  onPlayTrack: (track: MusicTrack) => void;
  onOpenTrackModal: (track: MusicTrack) => void;
  onOpenLicensing: (trackTitle: string) => void;
}

export const MusicShowcase: React.FC<MusicShowcaseProps> = ({
  tracks,
  currentTrack,
  isPlaying,
  onPlayTrack,
  onOpenTrackModal,
  onOpenLicensing
}) => {
  const [activeCategory, setActiveCategory] = useState<TrackCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTracks = useMemo(() => {
    return tracks.filter((track) => {
      const matchesCategory = activeCategory === 'all' || track.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesQuery =
        track.title.toLowerCase().includes(q) ||
        track.album.toLowerCase().includes(q) ||
        track.key.toLowerCase().includes(q) ||
        track.tags.some((t) => t.toLowerCase().includes(q)) ||
        track.description.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [tracks, activeCategory, searchQuery]);

  return (
    <section id="discography" className="py-16 md:py-24 border-b border-[#20222e]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-amber-400 mb-2">
              <span>Dynamic Discography & AI Compositions</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Arfa Anjum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Featured Soundtracks, Scores & Neural Audio
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Listen to generative compositions with live Web Audio synthesis, inspect multi-stem prompt architectures, and preview sync licensing specifications.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by key, BPM, tags..."
              className="w-full pl-9 pr-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Functional Segmented Controls / Category Filter */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-900/90 border border-zinc-800 rounded-xl overflow-x-auto mb-10 w-fit max-w-full">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-zinc-800 text-amber-400 shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            All Tracks ({tracks.length})
          </button>
          <button
            onClick={() => setActiveCategory('symphonic')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'symphonic'
                ? 'bg-zinc-800 text-amber-400 shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Cyber-Symphonic
          </button>
          <button
            onClick={() => setActiveCategory('cinematic')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'cinematic'
                ? 'bg-zinc-800 text-amber-400 shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Cinematic Scores
          </button>
          <button
            onClick={() => setActiveCategory('ambient')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'ambient'
                ? 'bg-zinc-800 text-amber-400 shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Spatial Ambient & XR
          </button>
          <button
            onClick={() => setActiveCategory('electronic')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'electronic'
                ? 'bg-zinc-800 text-amber-400 shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Generative Electronic
          </button>
        </div>

        {/* Dynamic Discography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTracks.map((track) => {
            const isThisTrackPlaying = isPlaying && currentTrack.id === track.id;

            return (
              <div
                key={track.id}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900/90 hover:border-zinc-700 transition-all duration-200 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Track Album Artwork Frame with Play Button Overlay */}
                  <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                    <img
                      src={track.coverArt}
                      alt={track.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />
                    
                    {/* Unboxed Metadata in Overlay Corner */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-200">
                      <div className="flex items-center gap-2 drop-shadow-md">
                        <span className="font-semibold text-amber-300">{track.categoryLabel}</span>
                        <span aria-hidden="true" className="text-zinc-400">·</span>
                        <span className="text-zinc-300 font-mono">{track.duration}</span>
                      </div>
                      <span className="text-[11px] text-zinc-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10 font-mono">
                        {track.bpm} BPM · {track.key}
                      </span>
                    </div>

                    {/* Interactive Play Button on Artwork */}
                    <button
                      onClick={() => onPlayTrack(track)}
                      className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-amber-400 text-zinc-950 hover:bg-amber-300 flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer"
                      title={isThisTrackPlaying ? 'Pause' : 'Play Track'}
                    >
                      {isThisTrackPlaying ? (
                        <Pause className="w-6 h-6 fill-current" />
                      ) : (
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      )}
                    </button>

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-zinc-300 font-mono">
                      <span>{track.streamingCount}</span>
                      <span className="text-amber-400/90">{track.syncLicense}</span>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2 font-mono">
                      <span>Album: {track.album}</span>
                      <span aria-hidden="true" className="text-zinc-600">·</span>
                      <span>{track.year}</span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {track.title}
                    </h3>

                    <p className="text-sm font-serif italic text-zinc-200 leading-relaxed mb-3">
                      "{track.tagline}"
                    </p>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                      {track.description}
                    </p>

                    {/* Unboxed Tags */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-300 mb-5">
                      {track.tags.map((tag, tIdx) => (
                        <React.Fragment key={tag}>
                          <span>{tag}</span>
                          {tIdx < track.tags.length - 1 && (
                            <span aria-hidden="true" className="text-zinc-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Neural Architecture Footnote */}
                    <div className="p-3 bg-zinc-950/70 border border-zinc-800/80 rounded-lg text-xs space-y-1 mb-2">
                      <div className="flex items-center gap-1.5 text-amber-400 font-medium">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Latent Audio Model & Pipeline</span>
                      </div>
                      <p className="text-zinc-400 text-[11px] leading-normal font-mono">
                        {track.neuralArchitecture.latentModel}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-950/40 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenTrackModal(track)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Inspect Stems & Prompt Blueprint</span>
                  </button>

                  <button
                    onClick={() => onOpenLicensing(track.title)}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors cursor-pointer"
                  >
                    Sync License
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
