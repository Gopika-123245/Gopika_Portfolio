import { MusicTrack, Accolade, Testimonial, SonicPillar } from '../types';

export const MUSIC_TRACKS: MusicTrack[] = [
  {
    id: 'echoes-of-the-perigee',
    title: 'Echoes of the Perigee',
    album: 'Cosmic Echoes: Sonic Odyssey',
    year: '2025',
    category: 'symphonic',
    categoryLabel: 'Cyber-Symphonic & Neural Orchestra',
    bpm: 118,
    key: 'D Minor',
    duration: '4:32',
    coverArt: '/src/assets/images/album_echoes_perigee_1792838166466.jpg',
    tagline: 'When orbital gravitational mechanics meet deep generative strings and sub-harmonic frequencies.',
    description: 'Composed for a full virtual hybrid orchestra where the string sections were trained on archival 20th-century violin recordings and modulated in real time via latent audio diffusion models. Explores time dilation and cosmic distance through accelerating polyrhythms.',
    streamingCount: '480K+ Streams',
    syncLicense: 'Available for Film, Game & XR Sync',
    tags: ['Hybrid Orchestral', 'Cosmic Sci-Fi', 'Anamorphic Strings', 'Sub-Bass Resonance'],
    neuralArchitecture: {
      latentModel: 'Suno v3 & Custom RAVE Neural Diffusion Audio Fine-Tune',
      dspPipeline: 'Ableton Live 12 Suite · FabFilter Pro-Q3 · Spitfire Chamber Strings',
      humanMasteryRatio: '100% Original Melodic Composition & Arrangement by Arfa Anjum',
      promptBlueprint: 'Cinematic hybrid orchestral crescendo, D minor, 118 BPM, soaring violins, detuned analog Moog sub-bass, zero harmonic clash, celestial reverb.'
    },
    audioFrequencies: {
      rootNote: 146.83, // D3
      scaleType: 'minor',
      tempoMultiplier: 1.0
    }
  },
  {
    id: 'subharmonic-genesis',
    title: 'Subharmonic Genesis',
    album: 'Echoes of the Dark Chamber',
    year: '2025',
    category: 'cinematic',
    categoryLabel: 'Cinematic Sci-Fi Film Score',
    bpm: 96,
    key: 'F# Minor',
    duration: '3:48',
    coverArt: '/src/assets/images/album_subharmonic_genesis_1792838167438.jpg',
    tagline: 'Acoustic tension sculpted from modular synthesis and metallic acoustic resonance.',
    description: 'Official selection soundtrack for speculative thriller cinema. Features deep tectonic rumble, custom granular sound design, and an evocative solo cello motif that fractures into crystalline algorithmic echoes as tension mounts.',
    streamingCount: '320K+ Streams',
    syncLicense: 'Cannes Short Film Score Nominee',
    tags: ['Neo-Noir', 'Film Trailer', 'Granular Synthesis', 'Dark Ambient'],
    neuralArchitecture: {
      latentModel: 'Custom Variational Autoencoder (VAE) Trained on Acoustic Metals',
      dspPipeline: 'Logic Pro X · Serum Wavetable Synthesis · Eventide Blackhole Reverb',
      humanMasteryRatio: 'Composed, Scored & Mixed by Arfa Anjum',
      promptBlueprint: 'Dark cinematic sci-fi soundtrack, 96 BPM, F# minor, massive brass stabs, ominous sub-bass pulse, metallic grain textures, Hans Zimmer tension aesthetic.'
    },
    audioFrequencies: {
      rootNote: 185.0, // F#3
      scaleType: 'dorian',
      tempoMultiplier: 0.8
    }
  },
  {
    id: 'solaris-resonance',
    title: 'Solaris Resonance',
    album: 'Echoes in the Mist: Biolumina',
    year: '2024',
    category: 'ambient',
    categoryLabel: 'Spatial Ambient & Biophilic Sound',
    bpm: 72,
    key: 'A Major / Pentatonic',
    duration: '5:15',
    coverArt: '/src/assets/images/album_solaris_resonance_1792838167852.jpg',
    tagline: 'Procedural generative soundscapes designed for meditation, spatial XR, and architectural installations.',
    description: 'An immersive binaural composition where water droplet hydrophones and botanical micro-electrical impulses were mapped to soft pentatonic marimbas and tape-saturated analog pads. Engineered to stimulate alpha brainwave synchronization.',
    streamingCount: '620K+ Streams',
    syncLicense: 'Epic Games Unreal Engine MegaGrant Audio Partner',
    tags: ['Spatial XR', 'Alpha Waves', 'Biophilic Sound', 'Organic Tape Pad'],
    neuralArchitecture: {
      latentModel: 'MusicLM & AudioCraft Latent Diffusion Ambient Engine',
      dspPipeline: 'Modular Pure Data generative patch routed through Strymon BigSky',
      humanMasteryRatio: 'Curated Acoustic Harmonics & Spatial Mix by Arfa Anjum',
      promptBlueprint: 'Ethereal ambient soundscape, A major pentatonic, 72 BPM, tape warmth, lush bioluminescent pads, water droplet resonance, 432Hz harmonic tuning.'
    },
    audioFrequencies: {
      rootNote: 220.0, // A3
      scaleType: 'pentatonic',
      tempoMultiplier: 0.6
    }
  },
  {
    id: 'ghosts-in-the-latent-space',
    title: 'Ghosts in the Latent Space',
    album: 'Algorithmic Introspection EP',
    year: '2024',
    category: 'electronic',
    categoryLabel: 'Generative Electronic & Neural Lofi',
    bpm: 88,
    key: 'C Minor',
    duration: '3:22',
    coverArt: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_4.03.01_PM_d12c0709.jpeg',
    tagline: 'Intimate felt piano recorded in solitude, enveloped in algorithmic vinyl flutter and warm sub-bass.',
    description: 'A study in emotional nostalgia within synthetic systems. Arfa recorded a 1912 upright piano with damp felt hammers, then fed the audio through neural autoencoders to introduce phantom harmonics and warm lo-fi tape saturation.',
    streamingCount: '540K+ Streams',
    syncLicense: 'Featured on Spotify Editorial "AI Soundscapes"',
    tags: ['Felt Piano', 'Lo-Fi Chill', 'Tape Flutter', 'Emotional Introspection'],
    neuralArchitecture: {
      latentModel: 'Neural Audio Style Transfer & Custom Convolution IR',
      dspPipeline: 'Spitfire Felt Piano · RC-20 Retro Color · Soundtoys EchoBoy',
      humanMasteryRatio: 'Solo Piano Performance & Production by Arfa Anjum',
      promptBlueprint: 'Intimate nostalgic felt piano, 88 BPM, C minor, delicate room acoustic tone, subtle tape flutter, gentle sub-bass groove, emotive melancholic melody.'
    },
    audioFrequencies: {
      rootNote: 130.81, // C3
      scaleType: 'minor',
      tempoMultiplier: 0.75
    }
  }
];

export const SONIC_PILLARS: SonicPillar[] = [
  {
    number: '01',
    title: 'Harmonic Human Authorship as Invariant Core',
    summary: 'Neural models are extraordinarily gifted at discovering alien timbres and micro-textures, but they lack human soul. Every chord sequence, emotional dynamic swell, and thematic motif is composed and performed with intentional human musicality.',
    deliverable: '100% ASCAP/BMI Registered Original Master Scores'
  },
  {
    number: '02',
    title: 'Multi-Stem Latent Diffusion & Neural DSP',
    summary: 'We reject one-click monolithic audio generation. Arfa architectures isolated neural stem generation: generating separate latent layers for strings, analog basses, percussion, and acoustic foley for surgical professional mixing.',
    deliverable: 'Production-Ready 24-bit / 96kHz Stems & Multitracks'
  },
  {
    number: '03',
    title: 'Spatial Audio & Dynamic XR Soundscapes',
    summary: 'Sound in modern media is interactive. We architect procedural adaptive music systems that transition seamlessly based on audience motion, gameplay state, and environmental telemetry in Unreal Engine and Unity.',
    deliverable: 'Ambisonic 3D Audio & Procedural Game Audio Bibles'
  },
  {
    number: '04',
    title: 'Ethical Training Datasets & Clean Copyright',
    summary: 'Every neural model in Arfa’s production stack is trained strictly on public domain historical performances, proprietary self-recorded audio libraries, or licensed commercial datasets with full copyright indemnity.',
    deliverable: 'Full Commercial Indemnity & Sync Clearance'
  }
];

export const AUDIO_TOOLKIT = [
  { category: 'Digital Audio Workstations', tools: ['Ableton Live 12 Suite', 'Logic Pro X', 'Pro Tools Ultimate', 'FL Studio 24'] },
  { category: 'AI & Neural Audio Models', tools: ['Suno v3 API', 'Udio Audio Engine', 'RAVE Neural Audio Synth', 'AudioCraft / MusicGen', 'ElevenLabs Audio'] },
  { category: 'Virtual Instruments & Foley', tools: ['Spitfire Audio BBC Symphony', 'Spectrasonics Omnisphere', 'Serum Wavetable', 'Native Instruments Komplete'] },
  { category: 'Mixing & Mastering Plugins', tools: ['FabFilter Pro Suite', 'iZotope Ozone 11 Advanced', 'Soundtoys 5', 'Valhalla DSP VintageVerb'] }
];

export const ACCOLADES: Accolade[] = [
  {
    year: '2025',
    organization: 'International AI Music Awards',
    award: 'Best Hybrid Symphonic Composition',
    project: 'Echoes of the Perigee'
  },
  {
    year: '2025',
    organization: 'Epic Games',
    award: 'Unreal Engine Spatial Audio Grant',
    project: 'Solaris Resonance'
  },
  {
    year: '2024',
    organization: 'Cannes Short Film Festival',
    award: 'Best Original Speculative Score Nominee',
    project: 'Subharmonic Genesis'
  },
  {
    year: '2024',
    organization: 'Spotify Curated Editorial',
    award: 'Featured Pioneer: Generative Soundscapes',
    project: 'Ghosts in the Latent Space'
  },
  {
    year: '2023',
    organization: 'Tribeca Immersive',
    award: 'Sound Design & Spatial Audio Honoree',
    project: 'Neural Acoustic Sanctuary'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Arfa’s hybrid scores possess the emotional weight of Jóhann Jóhannsson combined with the mind-bending acoustic possibilities of latent neural audio. Working with her transformed our sci-fi feature film.',
    author: 'David Sterling',
    title: 'Director & Executive Producer',
    organization: 'Horizon Cinema Labs'
  },
  {
    quote: 'In game audio, everyone is trying to figure out how to use AI without sounding cheap. Arfa is the gold standard: she uses models to generate alien biological timbres while keeping the thematic melody deeply memorable.',
    author: 'Elena R. Vance',
    title: 'Audio Director',
    organization: 'Epic Games Interactive'
  },
  {
    quote: 'Her stems arrived pristinely organized with 24-bit headroom and surgical dynamic range. The fastest turnaround and most innovative sonic palette we have ever licensed for a global campaign.',
    author: 'Marcella Fontane',
    title: 'Music Supervisor',
    organization: 'Vanguard Media Group'
  }
];
