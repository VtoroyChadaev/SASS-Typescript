export interface MediaPlayer {
  play(fileName: string): void;
}

export class LegacyAudioPlayer {
  public playMp3(fileName: string): void {
    console.log(`Legacy player plays mp3: ${fileName}`);
  }
}

export class AudioPlayerAdapter implements MediaPlayer {
  public constructor(private readonly legacyPlayer: LegacyAudioPlayer) {}

  public play(fileName: string): void {
    this.legacyPlayer.playMp3(fileName);
  }
}
