import youtubedl, { YtResponse } from 'youtube-dl-exec';
import { VideoConverter } from '../Domain/VideoConverter';

export class YouTubeDLVideoConverter implements VideoConverter {
    async convertFromUrlToMP3(videoUrl: string): Promise<any> {
        const { fulltitle } = await youtubedl(videoUrl, {
            dumpSingleJson: true,
            noWarnings: true,
            noCallHome: true,
            noCheckCertificate: true,
            preferFreeFormats: true,
            youtubeSkipDashManifest: true,
            referer: videoUrl,
        });

        return fulltitle;
    }
}