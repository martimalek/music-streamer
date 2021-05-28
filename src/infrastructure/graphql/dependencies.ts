import { AudioFromUrlGetter } from '@modules/Audio/Application/AudioFromUrlGetter';
import { FromUrlDownloader } from '@modules/Audio/Application/FromUrlDownloader';
import { AudioFromUrlGetterService } from '@modules/Audio/Domain/AudioFromUrlGetterService';
import { NodeFileSystemAudioRepository } from '@modules/Audio/Infrastructure/NodeFileSystemAudioRepository';
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
export const audioRepository = new NodeFileSystemAudioRepository();

/**
 * Domain Services
 */

export const audioFromUrlGetterService = new AudioFromUrlGetterService(audioRepository);

/**
 * Application Services
 */

export const fromUrlDownloader = new FromUrlDownloader(audioDownloader);
export const audioFromUrlGetter = new AudioFromUrlGetter(audioFromUrlGetterService, eventBus);
