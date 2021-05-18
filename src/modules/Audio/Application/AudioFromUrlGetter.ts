import { EventBus } from '@modules/Shared/Domain/EventBus';
import { Audio } from '../Domain/Audio';
import { AudioFromUrlGetterService } from '../Domain/AudioFromUrlGetterService';

export class AudioFromUrlGetter {
    constructor(
        private readonly audioFromUrlGetterService: AudioFromUrlGetterService,
        private readonly eventBus: EventBus,
    ) { }

    execute = async (url: string): Promise<Audio> => {
        const audio = await this.audioFromUrlGetterService.execute(url);

        this.eventBus.publish(audio.pullDomainEvents());

        return audio;
    }
}