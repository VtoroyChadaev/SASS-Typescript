"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayerAdapter = exports.LegacyAudioPlayer = void 0;
class LegacyAudioPlayer {
    playMp3(fileName) {
        console.log(`Legacy player plays mp3: ${fileName}`);
    }
}
exports.LegacyAudioPlayer = LegacyAudioPlayer;
class AudioPlayerAdapter {
    constructor(legacyPlayer) {
        this.legacyPlayer = legacyPlayer;
    }
    play(fileName) {
        this.legacyPlayer.playMp3(fileName);
    }
}
exports.AudioPlayerAdapter = AudioPlayerAdapter;
