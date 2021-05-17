import { DomainEvent } from '@modules/Shared/Domain/DomainEvent';
import { DomainEventSubscriber } from '@modules/Shared/Domain/DomainEventSubscriber';
import { EventBus } from '@modules/Shared/Domain/EventBus';
import { Logger } from '@modules/Shared/Domain/Logger';
import { EventEmitterBus } from './EventEmitterBus';

export class InMemoryAsyncEventBus implements EventBus {
    constructor(
        private bus: EventEmitterBus,
        private logger: Logger,
    ) { }

    publish(domainEvents: DomainEvent[]): void {
        this.bus.publish(domainEvents);
        this.logger.log(domainEvents);
    }

    addSubscribers(subscribers: DomainEventSubscriber<DomainEvent>[]): void {
        this.bus.registerSubscribers(subscribers);
    }
}