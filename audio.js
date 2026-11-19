/* ==========================================================================
   WEDDING AUDIO CONTROLLER
   Single Unified Audio Controller for assets/wedding_bgm.mp3
   ========================================================================== */

class WeddingAudioManager {
  constructor() {
    this._audio = null;
    this._bound = false;
    this.isPlaying = false;
    this.hasUnlocked = false;
    this.setupGlobalUnlock();
  }

  get audio() {
    if (!this._audio) {
      this._audio = document.getElementById('wedding-bgm');
      if (!this._audio) {
        this._audio = new Audio('assets/wedding_bgm.mp3');
        this._audio.id = 'wedding-bgm';
        this._audio.loop = true;
        this._audio.preload = 'auto';
        this._audio.volume = 1.0;
        this._audio.setAttribute('playsinline', 'true');
        this._audio.setAttribute('webkit-playsinline', 'true');
      }
      this.bindAudioEvents();
    }
    return this._audio;
  }

  bindAudioEvents() {
    if (!this._audio || this._bound) return;
    this._bound = true;

    this._audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.hasUnlocked = true;
      if (typeof updateAudioBtnState === 'function') {
        updateAudioBtnState(true);
      }
    });

    this._audio.addEventListener('pause', () => {
      this.isPlaying = false;
      if (typeof updateAudioBtnState === 'function') {
        updateAudioBtnState(false);
      }
    });
  }

  start() {
    const el = this.audio;
    if (!el) return Promise.resolve(false);

    // Resume AudioContext if suspended
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        if (!window.__weddingAudioCtx) {
          window.__weddingAudioCtx = new AudioCtx();
        }
        if (window.__weddingAudioCtx.state === 'suspended') {
          window.__weddingAudioCtx.resume().catch(() => {});
        }
      }
    } catch (e) {}

    const playPromise = el.play();
    if (playPromise !== undefined) {
      return playPromise
        .then(() => {
          this.isPlaying = true;
          this.hasUnlocked = true;
          if (typeof updateAudioBtnState === 'function') {
            updateAudioBtnState(true);
          }
          return true;
        })
        .catch(err => {
          this.isPlaying = false;
          if (typeof updateAudioBtnState === 'function') {
            updateAudioBtnState(false);
          }
          return false;
        });
    }
    return Promise.resolve(false);
  }

  stop() {
    if (this._audio) {
      this._audio.pause();
      this.isPlaying = false;
      if (typeof updateAudioBtnState === 'function') {
        updateAudioBtnState(false);
      }
    }
  }

  toggle() {
    if (this.audio.paused) {
      this.start();
      return true;
    } else {
      this.stop();
      return false;
    }
  }

  setupGlobalUnlock() {
    const unlock = () => {
      if (!this.isPlaying) {
        this.start();
      }
      if (this.isPlaying || this.hasUnlocked) {
        ['pointerdown', 'touchstart', 'touchend', 'click', 'keydown', 'scroll'].forEach(evt => {
          window.removeEventListener(evt, unlock, { capture: true });
          document.removeEventListener(evt, unlock, { capture: true });
        });
      }
    };

    ['pointerdown', 'touchstart', 'touchend', 'click', 'keydown', 'scroll'].forEach(evt => {
      window.addEventListener(evt, unlock, { capture: true, passive: true });
      document.addEventListener(evt, unlock, { capture: true, passive: true });
    });
  }

  playTempleBell() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = window.__weddingAudioCtx || new AudioCtx();
      const t = ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99, 1046.50];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.06 / (idx + 1), t);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.8);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 1.8);
      });
    } catch (e) {}
  }
}

// Global instance immediately available
window.weddingAmbience = new WeddingAudioManager();
