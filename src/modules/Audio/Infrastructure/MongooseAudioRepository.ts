import { Audio } from '../Domain/Audio';
import { AudioRepository } from '../Domain/AudioRepository';
import { Audio as AudioModel } from '@infrastructure/mongodb/models/Audio';

export class MongooseAudioRepository implements AudioRepository {
    findByUrl = async (url: string): Promise<Audio> => {
        const audio = AudioModel.findOne().where('url').equals(url);
        console.log(audio);
        return null;
    }
}