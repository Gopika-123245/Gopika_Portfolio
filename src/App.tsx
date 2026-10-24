import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MusicShowcase } from './components/MusicShowcase';
import { SoundLab } from './components/SoundLab';
import { BioSection } from './components/BioSection';
import { ContactSection } from './components/ContactSection';
import { TrackModal } from './components/TrackModal';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { Footer } from './components/Footer';
import { MUSIC_TRACKS } from './data/musicData';
import { MusicTrack, StemState } from './types';
import { audioEngine } from './utils/audioEngine';

export default function App() {
  const [currentTrack, setCurrentTrack] = useState<MusicTrack>(MUSIC_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [stems, setStems] = useState<StemState>({
    drums: true,
    bass: true,
    melody: true,
    pad: true
  });
  const [volume, setVolume] = useState<number>(0.75);
  const [selectedModalTrack, setSelectedModalTrack] = useState<MusicTrack | null>(null);
  const [licensingTrackTitle, setLicensingTrackTitle] = useState<string>('');

  const handlePlayTrack = (track: MusicTrack) => {
    if (currentTrack.id === track.id && isPlaying) {
      audioEngine.stop();
      setIsPlaying(false);
    } else {
      setCurrentTrack(track);
      audioEngine.startTrack(track.audioFrequencies.rootNote, track.audioFrequencies.scaleType);
      audioEngine.setStems(stems);
      audioEngine.setVolume(volume);
      setIsPlaying(true);
    }
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      audioEngine.stop();
      setIsPlaying(false);
    } else {
      audioEngine.startTrack(currentTrack.audioFrequencies.rootNote, currentTrack.audioFrequencies.scaleType);
      audioEngine.setStems(stems);
      audioEngine.setVolume(volume);
      setIsPlaying(true);
    }
  };

  const handleToggleStem = (stemName: keyof StemState) => {
    const nextStems = {
      ...stems,
      [stemName]: !stems[stemName]
    };
    setStems(nextStems);
    audioEngine.setStems(nextStems);
  };

  const handleChangeVolume = (val: number) => {
    setVolume(val);
    audioEngine.setVolume(val);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLicensingForTrack = (trackTitle: string) => {
    setLicensingTrackTitle(trackTitle);
    handleScrollToSection('licensing');
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-[#ededef] flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      {/* Top Navigation Bar (Strict 3-Zone Contract) */}
      <Navbar 
        onOpenLicensing={() => handleScrollToSection('licensing')}
        onOpenSoundLab={() => handleScrollToSection('sound-lab')}
      />

      <main className="flex-1 pb-16">
        {/* Split-Screen Hero with Arfa Anjum Portrait and Animated Equalizer */}
        <Hero 
          onExploreDiscography={() => handleScrollToSection('discography')}
          onPlayFeaturedTrack={handlePlayTrack}
          onOpenLicensing={() => handleScrollToSection('licensing')}
          featuredTrack={currentTrack}
          isPlaying={isPlaying}
          onTogglePlay={handleTogglePlay}
        />

        {/* Dynamic Discography & Track Showcases */}
        <MusicShowcase 
          tracks={MUSIC_TRACKS}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          onPlayTrack={handlePlayTrack}
          onOpenTrackModal={(track) => setSelectedModalTrack(track)}
          onOpenLicensing={handleOpenLicensingForTrack}
        />

        {/* Interactive Neural Sound Lab & Blueprint Workbench */}
        <SoundLab />

        {/* Professional Biography, 4 Sonic Pillars, Toolkit & Accolades */}
        <BioSection />

        {/* Sync Licensing Desk & Direct Composer Inquiry */}
        <ContactSection preselectedTrack={licensingTrackTitle} />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Docked Master Audio Player Bar */}
      <AudioPlayerBar 
        currentTrack={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        stems={stems}
        onToggleStem={handleToggleStem}
        volume={volume}
        onChangeVolume={handleChangeVolume}
        onOpenTrackDetails={(track) => setSelectedModalTrack(track)}
      />

      {/* Track Inspection Modal */}
      {selectedModalTrack && (
        <TrackModal 
          track={selectedModalTrack}
          isPlaying={isPlaying && currentTrack.id === selectedModalTrack.id}
          onTogglePlay={handlePlayTrack}
          onClose={() => setSelectedModalTrack(null)}
          onOpenLicensing={handleOpenLicensingForTrack}
        />
      )}
    </div>
  );
}
