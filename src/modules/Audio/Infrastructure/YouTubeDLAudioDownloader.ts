import youtubedl from 'youtube-dl-exec';

import { AudioDownloader } from '../Domain/AudioDownloader';

const FILES_PATH = './src/infrastructure/files/'
const AUDIO_FORMAT = 'mp3';

export class YouTubeDLAudioDownloader implements AudioDownloader {
    async downloadFromUrl(videoUrl: string): Promise<string> {
        const { title } = await youtubedl(videoUrl, {
            noWarnings: true,
            noCallHome: true,
            noCheckCertificate: true,
            youtubeSkipDashManifest: true,
            x: true,
            audioFormat: AUDIO_FORMAT,
            printJson: true,
            o: FILES_PATH + '%(title)s.%(ext)s',
        });

        return `${FILES_PATH}${title}.${AUDIO_FORMAT}`;
    }
}