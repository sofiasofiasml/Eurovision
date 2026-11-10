import { EurovisionSong } from '../types/game';

export type AudioSourceType = 'html5-preview' | 'synth';

interface PlaybackCallbacks {
  onProgress?: (
    progressPercent: number,
    elapsedSec: number,
    totalSec: number,
    sourceType: AudioSourceType
  ) => void;
  onEnded?: () => void;
  onError?: (fallbackUsed: boolean) => void;
}

class EurovisionAudioEngine {
  private ctx: AudioContext | null = null;
  private htmlAudio: HTMLAudioElement | null = null;
  private activeInterval: number | null = null;
  private activeTimeouts: number[] = [];
  private activeOscillators: OscillatorNode[] = [];
  private isMuted = false;
  private previewCache: Map<string, string> = new Map();
  private currentPlaybackId = 0;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (this.htmlAudio) {
      this.htmlAudio.muted = muted;
    }
    if (muted) {
      this.stopSongIntro();
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  /**
   * Stops any active song intro playback immediately
   * ensuring two songs never play simultaneously.
   */
  public stopSongIntro(): void {
    this.currentPlaybackId++;

    if (this.activeInterval !== null) {
      window.clearInterval(this.activeInterval);
      this.activeInterval = null;
    }

    this.activeTimeouts.forEach((id) => window.clearTimeout(id));
    this.activeTimeouts = [];

    this.activeOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Ignore
      }
    });
    this.activeOscillators = [];

    if (this.htmlAudio) {
      try {
        this.htmlAudio.oncanplay = null;
        this.htmlAudio.onloadeddata = null;
        this.htmlAudio.onerror = null;
        this.htmlAudio.pause();
        this.htmlAudio.removeAttribute('src');
        this.htmlAudio.load();
      } catch {
        // Ignore cleanup errors
      }
      this.htmlAudio = null;
    }
  }

  /**
   * Resolves a fresh playable audio URL by exact verified iTunes trackId lookup if needed,
   * validating artistName so a homonymous track by another artist is never chosen.
   */
  private async resolvePreviewUrl(song: EurovisionSong): Promise<string | null> {
    if (this.previewCache.has(song.id)) {
      return this.previewCache.get(song.id) || null;
    }

    const normalize = (s: string) =>
      s
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    try {
      const controller = new AbortController();
      const timeoutId = window.setTimeout(() => controller.abort(), 3500);
      const url = song.itunesTrackId
        ? `https://itunes.apple.com/lookup?id=${song.itunesTrackId}&country=ES`
        : `https://itunes.apple.com/search?term=${encodeURIComponent(song.itunesQuery)}&country=ES&entity=song&limit=10`;
      const response = await fetch(url, { signal: controller.signal });
      window.clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        const results: Array<{ previewUrl?: string; artistName?: string; trackName?: string }> =
          data?.results || [];

        const expectedArtist = normalize(song.artist.split('&')[0].trim());
        const matched =
          results.find(
            (r) =>
              r.previewUrl &&
              r.artistName &&
              (normalize(r.artistName).includes(expectedArtist) || song.itunesTrackId !== undefined)
          ) || results[0];

        if (matched?.previewUrl) {
          this.previewCache.set(song.id, matched.previewUrl);
          return matched.previewUrl;
        }
      }
    } catch {
      // Ignore network errors
    }

    return null;
  }

  /**
   * Plays a 10-second fragment of the official Eurovision song using HTML5 Audio API.
   * Never replaces real songs with random 8-bit synth melodies.
   */
  public async playSongIntro(
    song: EurovisionSong,
    _forceSynth = false,
    callbacks: PlaybackCallbacks = {}
  ): Promise<AudioSourceType> {
    this.stopSongIntro();
    const playbackId = this.currentPlaybackId;
    const INTRO_DURATION_SEC = 10.0;

    // 1. Play the verified song.audioUrl immediately via HTML5 Audio API
    if (song.audioUrl) {
      const playedDirect = await this.tryPlayHtml5Audio(
        song.audioUrl,
        INTRO_DURATION_SEC,
        playbackId,
        callbacks
      );
      if (playedDirect) {
        return 'html5-preview';
      }
    }

    if (playbackId !== this.currentPlaybackId) return 'html5-preview';

    // 2. If the CDN rotated the preview URL, fetch fresh URL using the exact itunesTrackId
    const remotePreviewUrl = await this.resolvePreviewUrl(song);
    if (playbackId !== this.currentPlaybackId) return 'html5-preview';

    if (remotePreviewUrl) {
      const playedRemote = await this.tryPlayHtml5Audio(
        remotePreviewUrl,
        INTRO_DURATION_SEC,
        playbackId,
        callbacks
      );
      if (playedRemote) {
        return 'html5-preview';
      }
    }

    callbacks.onError?.(false);
    return 'html5-preview';
  }

  private tryPlayHtml5Audio(
    src: string,
    durationSec: number,
    playbackId: number,
    callbacks: PlaybackCallbacks
  ): Promise<boolean> {
    return new Promise((resolve) => {
      try {
        const audio = new Audio();
        audio.preload = 'auto';
        audio.muted = this.isMuted;
        audio.volume = 0.9;
        this.htmlAudio = audio;

        let settled = false;
        let playAttempted = false;

        const failTimeout = window.setTimeout(() => {
          if (!settled) {
            settled = true;
            resolve(false);
          }
        }, 6000);
        this.activeTimeouts.push(failTimeout);

        const cleanupFail = () => {
          if (!settled) {
            settled = true;
            window.clearTimeout(failTimeout);
            resolve(false);
          }
        };

        audio.onerror = cleanupFail;

        const beginTimerAndResolve = () => {
          if (settled) return;
          settled = true;
          window.clearTimeout(failTimeout);
          resolve(true);

          const startTime = performance.now();
          this.activeInterval = window.setInterval(() => {
            if (playbackId !== this.currentPlaybackId) return;
            const elapsed = (performance.now() - startTime) / 1000;
            const clamped = Math.min(elapsed, durationSec);
            const pct = Math.min(100, (clamped / durationSec) * 100);
            callbacks.onProgress?.(pct, clamped, durationSec, 'html5-preview');

            if (elapsed >= durationSec) {
              this.stopSongIntro();
              callbacks.onEnded?.();
            }
          }, 80);
        };

        const attemptPlay = () => {
          if (settled || playAttempted) return;
          if (playbackId !== this.currentPlaybackId) {
            settled = true;
            resolve(false);
            return;
          }
          playAttempted = true;
          audio
            .play()
            .then(beginTimerAndResolve)
            .catch(cleanupFail);
        };

        audio.src = src;
        // Start playback immediately with the user's click gesture
        attemptPlay();
      } catch {
        resolve(false);
      }
    });
  }

  /**
   * Eurovision Te Deum inspired stage fanfare
   */
  public playStageIntroFanfare(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const notes = [
      { f: 293.66, t: 0, d: 0.18 },
      { f: 392.0, t: 0.18, d: 0.35 },
      { f: 392.0, t: 0.55, d: 0.18 },
      { f: 440.0, t: 0.75, d: 0.35 },
      { f: 493.88, t: 1.12, d: 0.55 },
      { f: 587.33, t: 1.7, d: 0.7 },
    ];

    const now = ctx.currentTime + 0.02;
    notes.forEach(({ f, t, d }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, now + t);
      gain.gain.setValueAtTime(0.001, now + t);
      gain.gain.exponentialRampToValueAtTime(0.15, now + t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + t + d);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + t);
      osc.stop(now + t + d + 0.02);
    });
  }

  public playCorrectSound(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const chord = [523.25, 659.25, 783.99, 1046.5];
    const now = ctx.currentTime + 0.01;
    chord.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      const start = now + idx * 0.07;
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.001, start);
      gain.gain.exponentialRampToValueAtTime(0.16, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.45);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.48);
    });
  }

  public playWrongSound(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime + 0.01;
    [246.94, 220.0].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      const start = now + idx * 0.16;
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.001, start);
      gain.gain.exponentialRampToValueAtTime(0.11, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.28);
    });
  }

  public playPointAssignSound(points: number): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime + 0.01;
    const baseFreq = 330 + points * 32;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.25, now + 0.18);
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.15, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.24);
  }

  /**
   * Iconic "12 POINTS!" celebration fanfare
   */
  public playDocePuntosFanfare(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const seq = [
      { f: 523.25, t: 0, d: 0.14 },
      { f: 659.25, t: 0.14, d: 0.14 },
      { f: 783.99, t: 0.28, d: 0.14 },
      { f: 1046.5, t: 0.42, d: 0.4 },
      { f: 880.0, t: 0.85, d: 0.18 },
      { f: 1046.5, t: 1.05, d: 0.75 },
    ];
    const now = ctx.currentTime + 0.02;
    seq.forEach(({ f, t, d }) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, now + t);
      gain.gain.setValueAtTime(0.001, now + t);
      gain.gain.exponentialRampToValueAtTime(0.2, now + t + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + t + d);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + t);
      osc.stop(now + t + d + 0.03);
    });
  }
}

export const audioEngine = new EurovisionAudioEngine();
