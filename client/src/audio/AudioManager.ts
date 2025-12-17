export class AudioManager {
    private ctx: AudioContext;
    private masterGain: GainNode;
    private musicGain: GainNode;
    private sfxGain: GainNode;
    private musicOscillators: OscillatorNode[] = [];

    constructor() {
        // Basic AudioContext fallback
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        this.ctx = new AudioContext();

        this.masterGain = this.ctx.createGain();
        this.masterGain.connect(this.ctx.destination);

        this.musicGain = this.ctx.createGain();
        this.musicGain.gain.value = 0.2; // Lower music volume
        this.musicGain.connect(this.masterGain);

        this.sfxGain = this.ctx.createGain();
        this.sfxGain.gain.value = 0.4;
        this.sfxGain.connect(this.masterGain);

        // Initial user interaction unlock
        window.addEventListener('click', () => {
            if (this.ctx.state === 'suspended') this.ctx.resume();
        }, { once: true });
    }

    // --- Music (Themed Christmas Synth Loops) ---
    public startMusic(theme: 'lobby' | 'heaven' | 'earth' | 'hell' | 'victory' | 'defeat') {
        if (this.musicOscillators.length > 0) {
            // Stop current if switching? For now, singleton music.
            this.stopMusic();
        }

        let melody: { freq: number, dur: number }[] = [];
        let bassFreq = 65.41; // C2

        if (theme === 'lobby') {
            // Deck the Halls (Fast & Bouncy)
            // G G G F E D C D E F G
            const G4 = 392.00, F4 = 349.23, E4 = 329.63, D4 = 293.66, C4 = 261.63;
            melody = [
                { freq: G4, dur: 0.3 }, { freq: 0, dur: 0.1 }, { freq: F4, dur: 0.1 }, { freq: E4, dur: 0.2 },
                { freq: D4, dur: 0.2 }, { freq: C4, dur: 0.2 }, { freq: D4, dur: 0.2 }, { freq: E4, dur: 0.2 },
                { freq: C4, dur: 0.4 }, { freq: 0, dur: 0.2 },
                { freq: D4, dur: 0.2 }, { freq: E4, dur: 0.2 }, { freq: F4, dur: 0.2 }, { freq: D4, dur: 0.2 },
                { freq: E4, dur: 0.4 }, { freq: 0, dur: 0.4 }
            ];
            bassFreq = 58.27; // Bb1
        } else if (theme === 'heaven') {
            // Silent Night (Slow & Airy)
            // G A G E ... G A G E
            const G4 = 392.00, A4 = 440.00, E4 = 329.63, D5 = 587.33, C5 = 523.25, B4 = 493.88;
            melody = [
                { freq: G4, dur: 0.6 }, { freq: A4, dur: 0.2 }, { freq: G4, dur: 0.4 }, { freq: E4, dur: 1.0 },
                { freq: G4, dur: 0.6 }, { freq: A4, dur: 0.2 }, { freq: G4, dur: 0.4 }, { freq: E4, dur: 1.0 },
                { freq: D5, dur: 0.6 }, { freq: D5, dur: 0.4 }, { freq: B4, dur: 1.0 },
                { freq: C5, dur: 0.6 }, { freq: C5, dur: 0.4 }, { freq: G4, dur: 1.0 }
            ];
            bassFreq = 130.81; // C3 (High bass for heaven)
        } else if (theme === 'hell') {
            // Carol of the Bells (Fast & Minor/Creepy)
            // Bb A Bb G ... 
            const Bb4 = 466.16, A4 = 440.00, G4 = 392.00, F4 = 349.23;
            melody = [
                { freq: Bb4, dur: 0.15 }, { freq: A4, dur: 0.15 }, { freq: Bb4, dur: 0.15 }, { freq: G4, dur: 0.15 },
                { freq: Bb4, dur: 0.15 }, { freq: A4, dur: 0.15 }, { freq: Bb4, dur: 0.15 }, { freq: G4, dur: 0.15 },
                { freq: Bb4, dur: 0.15 }, { freq: A4, dur: 0.15 }, { freq: Bb4, dur: 0.15 }, { freq: G4, dur: 0.15 }
            ];
            bassFreq = 36.71; // D1 (Deep rumble)
        } else if (theme === 'defeat') {
            // Funeral March / Sad
            const Bb3 = 233.08, A3 = 220.00, G3 = 196.00, F3 = 174.61;
            melody = [
                { freq: Bb3, dur: 0.6 }, { freq: 0, dur: 0.2 },
                { freq: Bb3, dur: 0.6 }, { freq: 0, dur: 0.2 },
                { freq: Bb3, dur: 0.6 }, { freq: 0, dur: 0.2 },
                { freq: Bb3, dur: 0.4 }, { freq: A3, dur: 0.2 }, { freq: G3, dur: 0.2 }, { freq: F3, dur: 0.8 },
                { freq: 0, dur: 0.5 }
            ];
            bassFreq = 58.27; // Bb1
        } else if (theme === 'victory') {
            // We Wish You A Merry Christmas
            const C5 = 523.25, D5 = 587.33, E5 = 659.25, F5 = 698.46, G5 = 783.99, A5 = 880.00, B5 = 987.77;
            const G4 = 392.00, A4 = 440.00, B4 = 493.88;
            melody = [
                { freq: G4, dur: 0.4 },
                { freq: C5, dur: 0.4 }, { freq: C5, dur: 0.2 }, { freq: D5, dur: 0.2 }, { freq: C5, dur: 0.2 }, { freq: B4, dur: 0.2 }, { freq: A4, dur: 0.8 },
                { freq: A4, dur: 0.4 },
                { freq: D5, dur: 0.4 }, { freq: E5, dur: 0.2 }, { freq: D5, dur: 0.2 }, { freq: C5, dur: 0.2 }, { freq: B4, dur: 0.2 }, { freq: G4, dur: 0.8 },
                { freq: G4, dur: 0.4 },
                { freq: E5, dur: 0.4 }, { freq: F5, dur: 0.2 }, { freq: E5, dur: 0.2 }, { freq: D5, dur: 0.2 }, { freq: C5, dur: 0.2 }, { freq: A4, dur: 0.4 }, { freq: G4, dur: 0.4 },
                { freq: A4, dur: 0.4 }, { freq: D5, dur: 0.4 }, { freq: B4, dur: 0.4 }, { freq: C5, dur: 1.0 },
                { freq: 0, dur: 0.5 }
            ];
            bassFreq = 130.81; // C3
        } else {
            // Earth / Default: Jingle Bells
            const E4 = 329.63, G4 = 392.00, C5 = 523.25, D5 = 587.33;
            melody = [
                { freq: E4, dur: 0.2 }, { freq: 0, dur: 0.05 }, { freq: E4, dur: 0.2 }, { freq: 0, dur: 0.05 }, { freq: E4, dur: 0.4 },
                { freq: 0, dur: 0.2 },
                { freq: E4, dur: 0.2 }, { freq: 0, dur: 0.05 }, { freq: E4, dur: 0.2 }, { freq: 0, dur: 0.05 }, { freq: E4, dur: 0.4 },
                { freq: 0, dur: 0.2 },
                { freq: E4, dur: 0.2 }, { freq: G4, dur: 0.2 }, { freq: C5, dur: 0.3 }, { freq: D5, dur: 0.1 }, { freq: E4, dur: 0.8 },
                { freq: 0, dur: 0.4 }
            ];
            bassFreq = 65.41; // C2
        }

        let noteIdx = 0;
        let nextNoteTime = this.ctx.currentTime;

        const scheduler = () => {
            while (nextNoteTime < this.ctx.currentTime + 0.5) {
                const note = melody[noteIdx % melody.length];
                if (note.freq > 0) {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = theme === 'hell' ? 'sawtooth' : 'triangle'; // Sawtooth for Hell
                    osc.frequency.value = note.freq;

                    gain.gain.setValueAtTime(0.1, nextNoteTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, nextNoteTime + note.dur - 0.05);

                    osc.connect(gain);
                    gain.connect(this.musicGain);

                    osc.start(nextNoteTime);
                    osc.stop(nextNoteTime + note.dur);
                }
                nextNoteTime += note.dur;
                noteIdx++;
            }
        };

        const interval = setInterval(scheduler, 100);

        // Bass
        const bass = this.ctx.createOscillator();
        bass.type = theme === 'hell' ? 'sawtooth' : 'sine';
        bass.frequency.value = bassFreq;
        const bassGain = this.ctx.createGain();
        bassGain.gain.value = 0.2;
        bass.connect(bassGain);
        bassGain.connect(this.musicGain);
        bass.start();

        (this as any).cleanupMusic = () => {
            clearInterval(interval);
            bass.stop();
            this.musicOscillators = [];
        };
        this.musicOscillators.push(bass);
    }

    public stopMusic() {
        if ((this as any).cleanupMusic) (this as any).cleanupMusic();
    }

    public playOof() {
        // Roblox style "Oof" / Punch to gut
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.sfxGain);

        const now = this.ctx.currentTime;
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.15); // Pitch drop

        gain.gain.setValueAtTime(0.8, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

        osc.start(now);
        osc.stop(now + 0.15);
    }

    // --- SFX Generators ---

    public playShoot(type: 'snowball' | 'icicle' | 'gift' | 'shotgun') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.connect(gain);
        gain.connect(this.sfxGain);

        const now = this.ctx.currentTime;

        if (type === 'shotgun') {
            // Noise-ish burst (approximated by fast freq sweep saw)
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(100, now);
            osc.frequency.exponentialRampToValueAtTime(10, now + 0.2);
            gain.gain.setValueAtTime(1, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            osc.start(now);
            osc.stop(now + 0.3);
        } else if (type === 'icicle') {
            // High ping
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.linearRampToValueAtTime(200, now + 0.1);
            gain.gain.setValueAtTime(0.5, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
            osc.start(now);
            osc.stop(now + 0.2);
        } else if (type === 'gift') {
            // Whoosh
            osc.type = 'sine';
            osc.frequency.setValueAtTime(200, now);
            osc.frequency.linearRampToValueAtTime(600, now + 0.5);
            gain.gain.setValueAtTime(0.5, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.5);
            osc.start(now);
            osc.stop(now + 0.5);
        } else {
            // Standard pew
            osc.type = 'square';
            osc.frequency.setValueAtTime(400, now);
            osc.frequency.exponentialRampToValueAtTime(100, now + 0.1);
            gain.gain.setValueAtTime(0.3, now);
            gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            osc.start(now);
            osc.stop(now + 0.1);
        }
    }

    public playAxeThrow() {
        // Low Whoosh
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.sfxGain);

        const now = this.ctx.currentTime;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.linearRampToValueAtTime(100, now + 0.3);

        gain.gain.setValueAtTime(0.3, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.3);

        osc.start(now);
        osc.stop(now + 0.3);
    }

    public playHeal() {
        // Magical Chime
        const now = this.ctx.currentTime;
        const notes = [523.25, 659.25, 783.99]; // C Major Arp
        notes.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = freq;
            osc.connect(gain);
            gain.connect(this.sfxGain);

            const start = now + i * 0.1;
            gain.gain.setValueAtTime(0, start);
            gain.gain.linearRampToValueAtTime(0.3, start + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.01, start + 0.4);

            osc.start(start);
            osc.stop(start + 0.4);
        });
    }

    public playPowerup() {
        // Ascending Power Sound
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.sfxGain);

        const now = this.ctx.currentTime;
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.5); // Slide Up

        // Vibrato
        const lfo = this.ctx.createOscillator();
        lfo.frequency.value = 20;
        const lfoGain = this.ctx.createGain();
        lfoGain.gain.value = 50;
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start(now);
        lfo.stop(now + 0.5);

        gain.gain.setValueAtTime(0.5, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.5);

        osc.start(now);
        osc.stop(now + 0.5);
    }

    public playExplosion() {
        // Low rumble
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.connect(gain);
        gain.connect(this.sfxGain);

        const now = this.ctx.currentTime;
        osc.frequency.setValueAtTime(100, now);
        osc.frequency.exponentialRampToValueAtTime(1, now + 0.5);

        gain.gain.setValueAtTime(1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);

        osc.start(now);
        osc.stop(now + 0.8);
    }

    private lastKillLineTime = 0;

    public playKillLine() {
        if (!window.speechSynthesis) return;
        const now = Date.now();
        if (now - this.lastKillLineTime < 3000) return; // Max once per 3s
        this.lastKillLineTime = now;

        // Cancel previous to avoid queue buildup?
        window.speechSynthesis.cancel();

        const lines = [
            "Jingle bells!",
            "Ho ho ho!",
            "Merry Christmas!",
            "Slay bells ring!",
            "Naughty list for you!",
            "Put that cookie down!"
        ];
        const text = lines[Math.floor(Math.random() * lines.length)];
        const utter = new SpeechSynthesisUtterance(text);

        // Funny/Sarcastic voice params
        utter.pitch = 1.5 + (Math.random() * 0.5); // High pitch like an elf
        utter.rate = 1.2; // Fast
        utter.volume = 0.8;

        window.speechSynthesis.speak(utter);
    }

    private lastHitTime = 0;
    public playHit() {
        const now = this.ctx.currentTime;
        if (now - this.lastHitTime < 0.05) return; // Limit to 20 per sec
        this.lastHitTime = now;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.sfxGain);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

        osc.start(now);
        osc.stop(now + 0.1);
    }

    public playPoint() {
        // Ding!
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.sfxGain);

        const now = this.ctx.currentTime;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, now);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

        osc.start(now);
        osc.stop(now + 0.5);
    }

    public playDeath() {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.sfxGain);

        const now = this.ctx.currentTime;
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.linearRampToValueAtTime(50, now + 0.4);
        gain.gain.setValueAtTime(0.5, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.4);

        osc.start(now);
        osc.stop(now + 0.4);
    }
}

export const AUDIO = new AudioManager();
