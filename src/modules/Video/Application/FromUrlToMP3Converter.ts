import { VideoConverter } from '../Domain/VideoConverter';

export class FromUrlToMP3Converter {
    constructor(
        private readonly videoConverter: VideoConverter,
    ) { }

    async execute(videoUrl: string): Promise<any> {
        const mp3Video = await this.videoConverter.convertFromUrlToMP3(videoUrl);

        return mp3Video;
    }
}