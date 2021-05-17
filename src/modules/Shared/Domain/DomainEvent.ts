import { Uuid } from './ValueObject/Uuid';

export abstract class DomainEvent {
    static EVENT_NAME: string;
    static fromPrimitives: (...args: unknown[]) => unknown;
    readonly aggregateId: string;
    readonly eventId: string;
    readonly occurredOn: Date;
    readonly eventName: string;

    constructor(eventName: string, aggregateId: string, eventId?: string, occurredOn?: Date) {
        this.eventName = eventName;
        this.aggregateId = aggregateId;
        this.eventId = eventId || Uuid.random().value;
        this.occurredOn = occurredOn || new Date();
    }

    abstract toPrimitive(): Record<string, unknown>;
}

export type DomainEventClass = {
    EVENT_NAME: string;
    fromPrimitives(...args: unknown[]): DomainEvent;
};
