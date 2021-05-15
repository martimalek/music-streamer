import { DomainEvent } from './DomainEvent';

export abstract class AggregateRoot {
    private domainEvents: DomainEvent[] = [];

    public record(domainEvent: DomainEvent): void {
        this.domainEvents.push(domainEvent);
    }

    public pullDomainEvents(): DomainEvent[] {
        const domainEvents = this.domainEvents.slice();

        this.domainEvents = [];

        return domainEvents;
    }
}
