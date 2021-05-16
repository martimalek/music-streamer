import { AudioDownloader } from '../Domain/AudioDownloader';

export class FromUrlDownloader {
    constructor(
        private readonly audioDownloader: AudioDownloader,
    ) { }

    async execute(videoUrl: string): Promise<any> {
        return this.audioDownloader.downloadFromUrl(videoUrl);
    }
}