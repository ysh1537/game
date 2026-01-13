const fs = require('fs');
const path = require('path');

// --- WAV Engine (Pure JS) ---

function writeWavHeader(sampleRate, numChannels, bitsPerSample, dataLength) {
    const buffer = Buffer.alloc(44);
    // RIFF identifier
    buffer.write('RIFF', 0);
    // file length
    buffer.writeUInt32LE(36 + dataLength, 4);
    // RIFF type
    buffer.write('WAVE', 8);
    // format chunk identifier
    buffer.write('fmt ', 12);
    // format chunk length
    buffer.writeUInt32LE(16, 16);
    // sample format (1 is PCM)
    buffer.writeUInt16LE(1, 20);
    // channel count
    buffer.writeUInt16LE(numChannels, 22);
    // sample rate
    buffer.writeUInt32LE(sampleRate, 24);
    // byte rate (sampleRate * blockAlign)
    buffer.writeUInt32LE(sampleRate * numChannels * (bitsPerSample / 8), 28);
    // block align (channel count * bytes per sample)
    buffer.writeUInt16LE(numChannels * (bitsPerSample / 8), 32);
    // bits per sample
    buffer.writeUInt16LE(bitsPerSample, 34);
    // data chunk identifier
    buffer.write('data', 36);
    // data chunk length
    buffer.writeUInt32LE(dataLength, 40);

    return buffer;
}

function generateTone(freq, duration, type = 'sine', vol = 0.5) {
    const sampleRate = 44100;
    const numSamples = Math.floor(sampleRate * duration);
    const buffer = Buffer.alloc(numSamples * 2); // 16-bit

    for (let i = 0; i < numSamples; i++) {
        const t = i / sampleRate;
        let sample = 0;

        if (type === 'sine') {
            sample = Math.sin(2 * Math.PI * freq * t);
        } else if (type === 'square') {
            sample = Math.sin(2 * Math.PI * freq * t) > 0 ? 1 : -1;
        } else if (type === 'sawtooth') {
            sample = 2 * (freq * t - Math.floor(freq * t + 0.5));
        } else if (type === 'noise') {
            sample = Math.random() * 2 - 1;
        }

        // Apply Envelope (Simple Attack/Release)
        const attackTime = 0.05;
        const releaseTime = 0.05;
        let env = 1;
        if (t < attackTime) env = t / attackTime;
        else if (t > duration - releaseTime) env = (duration - t) / releaseTime;

        sample *= env * vol;

        // Clip
        sample = Math.max(-1, Math.min(1, sample));

        // Write 16-bit PCM
        const intSample = sample < 0 ? sample * 32768 : sample * 32767;
        buffer.writeInt16LE(Math.floor(intSample), i * 2);
    }
    return buffer;
}

function generateSequence(notes, speed = 0.2, type = 'sine') {
    const buffers = notes.map(n => generateTone(n, speed, type, 0.4));
    return Buffer.concat(buffers);
}

// --- Sound Definitions ---

const OUT_DIR = 'assets/sounds';

const ASSETS = {
    // BGM: Arpeggios
    'bgm/lobby_theme': () => generateSequence([261, 329, 392, 523, 392, 329, 261, 196, 261, 329, 392, 493, 392, 329], 0.3, 'sine'), // C Major Arp
    'bgm/summon_mystic': () => generateSequence([440, 493, 554, 659, 554, 493], 0.5, 'sine'), // Magical
    'bgm/lab_tech': () => generateSequence([220, 0, 220, 440, 0, 220, 880], 0.15, 'square'), // Tech blips
    'bgm/battle_epic': () => generateSequence([110, 110, 164, 110, 196, 110, 164, 110], 0.2, 'sawtooth'), // Aggressive bass

    // SFX: UI
    'sfx/ui_click': () => generateTone(880, 0.1, 'sine', 0.6), // High blip
    'sfx/ui_hover': () => generateTone(440, 0.05, 'sine', 0.2), // Soft blip
    'sfx/ui_confirm': () => generateSequence([880, 1760], 0.1, 'sine'), // Ding-ding
    'sfx/ui_error': () => generateTone(150, 0.3, 'sawtooth', 0.5), // Buzz
    'sfx/ui_popup_open': () => generateTone(600, 0.2, 'sine', 0.4), // Swish-ish

    // FX
    'sfx/fx_summon_start': () => generateTone(220, 1.0, 'noise', 0.7), // Whoosh (Noise fade)
    'sfx/fx_summon_reveal': () => generateSequence([523, 1046, 2093], 0.1, 'sine'), // Tada!
    'sfx/fx_levelup': () => generateSequence([523, 659, 783, 1046], 0.1, 'square'), // Fanfare

    // Voice (Robot-ish tones)
    'voice/welcome_operator': () => generateSequence([440, 460, 480], 0.1, 'square'),
    'voice/summon_greeting': () => generateSequence([600, 500], 0.2, 'square'),
};

// --- Execution ---

console.log("Generating Synthesized Sounds...");

Object.keys(ASSETS).forEach(key => {
    try {
        const filePath = path.join(OUT_DIR, key + '.mp3'); // We save as .mp3 filename but content is WAV (Browsers handle this mostly, or we rename to .wav)
        // Wait, browser might reject wav content in mp3 extension. Let's force .wav extension in reality, and update SoundData to point to .wav
        // OR better: Just save as .wav and I will update SoundData.js next.

        const realPath = path.join(OUT_DIR, key + '.wav');
        const dir = path.dirname(realPath);

        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

        const pcmData = ASSETS[key]();
        const header = writeWavHeader(44100, 1, 16, pcmData.length);
        const fileData = Buffer.concat([header, pcmData]);

        fs.writeFileSync(realPath, fileData);
        console.log(`[Generated] ${realPath}`);
    } catch (e) {
        console.error(`[Error] ${key}:`, e);
    }
});
