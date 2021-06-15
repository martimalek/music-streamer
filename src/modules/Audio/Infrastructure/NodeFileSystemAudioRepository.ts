import { promises } from 'fs';
import { Audio } from '../Domain/Audio';
import { AudioRepository } from '../Domain/AudioRepository';

export class NodeFileSystemAudioRepository implements AudioRepository {
    private readonly FILE_DIR = '.';

    /*
        TODO: This should be connected to mongoose as well
        so that on find we first search MongoDB and get the path 
        that we can use on the node file system
    */
    findByUrl = async (url: string): Promise<Audio> => {

        const dir = await promises.readdir(this.FILE_DIR);
        console.log('DIR ', dir);

        // If there is no audio persisted return null
        return null;

        // return AudioMapper.toDomain(rawAudio); // TODO: AudioMapper
    }
}