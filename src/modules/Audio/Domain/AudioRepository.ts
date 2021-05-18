import { Audio } from './Audio';

export interface AudioRepository {
    findByUrl(url: string): Promise<Audio>;
}