import { DomainEvent } from '@modules/Shared/Domain/DomainEvent';

export class AudioCreatedDomainEvent extends DomainEvent {
    static readonly EVENT_NAME = 'audio.created';
    public readonly url: string;

    constructor(data: {
        aggregateId: string,
        url: string,
        eventId?: string,
        occurredOn?: Date,
    }) {
        super(AudioCreatedDomainEvent.EVENT_NAME, data.aggregateId, data.eventId, data.occurredOn);

        this.url = data.url;
    }

    toPrimitive(): AudioCreatedDomainEventBody {
        const { url } = this;

        return { url };
    }

    static fromPrimitives(
        aggregateId: string,
        body: AudioCreatedDomainEventBody,
        eventId?: string,
        occurredOn?: Date,
    ): DomainEvent {
        const { url } = body;

        return new AudioCreatedDomainEvent({
            aggregateId,
            url,
            eventId,
            occurredOn,
        });
    }
}

type AudioCreatedDomainEventBody = {
    url: string;
}