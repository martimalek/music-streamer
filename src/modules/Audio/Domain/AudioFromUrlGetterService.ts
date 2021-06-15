import { Uuid } from '@modules/Shared/Domain/ValueObject/Uuid';
import { Audio } from './Audio';
import { AudioRepository } from './AudioRepository';

export class AudioFromUrlGetterService {
    constructor(
        private readonly audioRepository: AudioRepository,
    ) {}

    execute = async (url: string): Promise<Audio> => {
        let audio = await this.audioRepository.findByUrl(url);

        if (!audio) {
            // There is no audio, it should try to download it 
            // and create a new entry in db
            console.log('THERE IS NO AUDIO');
            // TODO: Create subscriber that creates audio in DB on Audio created
            audio = Audio.create({ id: Uuid.random(), url });
        } else console.log('THERE IS AUDIO');

        return audio;
    }
}