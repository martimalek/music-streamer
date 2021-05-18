import { AggregateRoot } from '@modules/Shared/Domain/AggregateRoot';
import { Uuid } from '@modules/Shared/Domain/ValueObject/Uuid';
import { AudioCreatedDomainEvent } from './AudioCreatedDomainEvent';

export class Audio extends AggregateRoot {
    constructor(
        public id: Uuid,
        public url: string,
        public path?: string,
    ) {
        super();
    }

    static create = ({ id, url }: CreateAudioParams): Audio => {
        const audio = new Audio(id, url);

        audio.record(new AudioCreatedDomainEvent({
            aggregateId: id.value,
            url,
        }));

        return audio;
    }
}

type CreateAudioParams = {
    id: Uuid;
    url: string;
}