// Web Audio API Generative Synthesizer Engine for AI Music Experience
class GenerativeAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private padGain: GainNode | null = null;
  private bassGain: GainNode | null = null;
  private melodyGain: GainNode | null = null;
  private rhythmGain: GainNode | null = null;
  private isRunning: boolean = false;
  private timer: number | null = null;
  private currentScale: number[] = [220, 261.63, 293.66, 329.63, 392.0, 440]; // A Minor default
  private currentRoot: number = 220;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();

      // Master output
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // Stem Gain buses
      this.padGain = this.ctx.createGain();
      this.bassGain = this.ctx.createGain();
      this.melodyGain = this.ctx.createGain();
      this.rhythmGain = this.ctx.createGain();

      this.padGain.connect(this.masterGain);
      this.bassGain.connect(this.masterGain);
      this.melodyGain.connect(this.masterGain);
      this.rhythmGain.connect(this.masterGain);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setStems(stems: { drums: boolean; bass: boolean; melody: boolean; pad: boolean }) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    if (this.rhythmGain) this.rhythmGain.gain.setTargetAtTime(stems.drums ? 0.4 : 0.0001, now, 0.05);
    if (this.bassGain) this.bassGain.gain.setTargetAtTime(stems.bass ? 0.6 : 0.0001, now, 0.05);
    if (this.melodyGain) this.melodyGain.gain.setTargetAtTime(stems.melody ? 0.35 : 0.0001, now, 0.05);
    if (this.padGain) this.padGain.gain.setTargetAtTime(stems.pad ? 0.3 : 0.0001, now, 0.05);
  }

  public setVolume(val: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(Math.max(0, Math.min(1, val)), this.ctx.currentTime, 0.05);
    }
  }

  public startTrack(rootHz: number = 220, scale: 'minor' | 'dorian' | 'lydian' | 'pentatonic' = 'minor') {
    this.initContext();
    this.stop();
    this.isRunning = true;
    this.currentRoot = rootHz;

    // Calculate harmonic frequencies
    const intervals = 
      scale === 'minor' ? [0, 3, 5, 7, 10, 12, 15, 17] :
      scale === 'dorian' ? [0, 2, 3, 5, 7, 9, 10, 12] :
      scale === 'lydian' ? [0, 2, 4, 6, 7, 9, 11, 12] :
      [0, 3, 5, 7, 10, 12]; // Pentatonic

    this.currentScale = intervals.map((semi) => rootHz * Math.pow(2, semi / 12));

    // Start background resonant drone / pad
    this.playAmbientPad();

    // Start rhythmic melodic sequence loop
    let step = 0;
    this.timer = window.setInterval(() => {
      if (!this.isRunning || !this.ctx) return;
      
      // Play sub-bass on downbeats
      if (step % 4 === 0) {
        this.playSubBass(this.currentRoot / 2);
      }

      // Play soft percussion click
      if (step % 2 === 0) {
        this.playSoftPulse(step % 4 === 0);
      }

      // Generative melodic note
      const noteIndex = Math.floor(Math.random() * this.currentScale.length);
      const noteFreq = this.currentScale[noteIndex];
      this.playMelodicPluck(noteFreq);

      step++;
    }, 420);
  }

  private playAmbientPad() {
    if (!this.ctx || !this.padGain) return;
    
    // Warm detuned twin triangle oscillators
    [-2, 0, 7].forEach((semi) => {
      if (!this.ctx || !this.padGain) return;
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(this.currentRoot * Math.pow(2, semi / 12), this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(700, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 1.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.padGain);

      osc.start();
    });
  }

  private playSubBass(freq: number) {
    if (!this.ctx || !this.bassGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.35, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

    osc.connect(gain);
    gain.connect(this.bassGain);

    osc.start(now);
    osc.stop(now + 1.3);
  }

  private playMelodicPluck(freq: number) {
    if (!this.ctx || !this.melodyGain) return;
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(400, now + 0.6);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.melodyGain);

    osc.start(now);
    osc.stop(now + 0.7);
  }

  private playSoftPulse(isAccent: boolean) {
    if (!this.ctx || !this.rhythmGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(isAccent ? 120 : 80, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.1);

    gain.gain.setValueAtTime(isAccent ? 0.4 : 0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

    osc.connect(gain);
    gain.connect(this.rhythmGain);

    osc.start(now);
    osc.stop(now + 0.13);
  }

  public stop() {
    this.isRunning = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      setTimeout(() => {
        if (this.masterGain && this.ctx) {
          this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
        }
      }, 100);
    }
  }

  public isAudioActive(): boolean {
    return this.isRunning;
  }
}

export const audioEngine = new GenerativeAudioEngine();
