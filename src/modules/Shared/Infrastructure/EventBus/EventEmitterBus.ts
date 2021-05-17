import { DomainEvent } from '@modules/Shared/Domain/DomainEvent';
import { DomainEventSubscriber } from '@modules/Shared/Domain/DomainEventSubscriber';
import { EventEmitter } from 'events';

export class EventEmitterBus extends EventEmitter {
    registerSubscribers(subscribers?: DomainEventSubscriber<DomainEvent>[]): void {
        subscribers?.map(this.registerSubscriber);
    }

    private registerSubscriber(subscriber: DomainEventSubscriber<DomainEvent>): void {
        subscriber.subscribedTo().map(event => this.on(event.EVENT_NAME, subscriber.on.bind(subscriber)));
    }

    publish(events: DomainEvent[]): void {
        events.forEach(event => this.emit(event.eventName, event));
    }
}