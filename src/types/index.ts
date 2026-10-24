export type TrackCategory = 
  | 'all'
  | 'cinematic'
  | 'ambient'
  | 'symphonic'
  | 'electronic';

export interface StemState {
  drums: boolean;
  bass: boolean;
  melody: boolean;
  pad: boolean;
}

export interface MusicTrack {
  id: string;
  title: string;
  album: string;
  year: string;
  category: 'cinematic' | 'ambient' | 'symphonic' | 'electronic';
  categoryLabel: string;
  bpm: number;
  key: string;
  duration: string;
  coverArt: string;
  tagline: string;
  description: string;
  streamingCount: string;
  syncLicense: string;
  tags: string[];
  neuralArchitecture: {
    latentModel: string;
    dspPipeline: string;
    humanMasteryRatio: string;
    promptBlueprint: string;
  };
  audioFrequencies: {
    rootNote: number; // Hz for Web Audio synthesizer
    scaleType: 'minor' | 'dorian' | 'lydian' | 'pentatonic';
    tempoMultiplier: number;
  };
}

export interface Accolade {
  year: string;
  organization: string;
  award: string;
  project: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  organization: string;
}

export interface SonicPillar {
  number: string;
  title: string;
  summary: string;
  deliverable: string;
}
