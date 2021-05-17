import { FromUrlDownloader } from '@modules/Audio/Application/FromUrlDownloader';
import { YouTubeDLAudioDownloader } from '@modules/Audio/Infrastructure/YouTubeDLAudioDownloader';
import { ConsoleLogger } from '@modules/Shared/Infrastructure/ConsoleLogger';
import { EventEmitterBus } from '@modules/Shared/Infrastructure/EventBus/EventEmitterBus';
import { InMemoryAsyncEventBus } from '@modules/Shared/Infrastructure/EventBus/InMemoryAsyncEventBus';

/**
 * Infrastructure Services
 */

export const logger = new ConsoleLogger();
export const eventEmitterBus = new EventEmitterBus();
export const eventBus = new InMemoryAsyncEventBus(eventEmitterBus, logger);
export const audioDownloader = new YouTubeDLAudioDownloader();

/**
 * Application Services
 */

export const fromUrlDownloader = new FromUrlDownloader(audioDownloader);
