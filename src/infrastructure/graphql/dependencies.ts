import { FromUrlDownloader } from '@modules/Audio/Application/FromUrlDownloader';
import { YouTubeDLAudioDownloader } from '@modules/Audio/Infrastructure/YouTubeDLAudioDownloader';

/**
 * Infrastructure Services
 */

export const audioDownloader = new YouTubeDLAudioDownloader();

/**
 * Application Services
 */

export const fromUrlDownloader = new FromUrlDownloader(audioDownloader);
