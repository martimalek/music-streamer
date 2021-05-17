/* eslint-disable @typescript-eslint/no-array-constructor */
import { DomainEvent } from '@modules/Shared/Domain/DomainEvent';
import { DomainEventSubscriber } from '@modules/Shared/Domain/DomainEventSubscriber';
import { Logger } from '@modules/Shared/Domain/Logger';
import { EventEmitterBus } from '@modules/Shared/Infrastructure/EventBus/EventEmitterBus';
import { InMemoryAsyncEventBus } from '@modules/Shared/Infrastructure/EventBus/InMemoryAsyncEventBus';
import { mock, mockReset } from 'jest-mock-extended';

describe('InMemoryAsyncEventBus should', () => {
    const eventEmitterBus = mock<EventEmitterBus>();
    const logger = mock<Logger>();
    const domainEventSubscriber = mock<DomainEventSubscriber<DomainEvent>>();
    const domainEvent = mock<DomainEvent>();

    const inMemoryAsyncEventBus = new InMemoryAsyncEventBus(eventEmitterBus, logger);

    beforeEach(() => {
        mockReset(eventEmitterBus);
        mockReset(logger);
        mockReset(domainEventSubscriber);
    });

    it.each([1, 2, 4, 5])('register subscribers to the bus on `addSubscribers`', (count) => {
        const domainEventSubscribers = new Array(count).fill(0).map(() => domainEventSubscriber);

        inMemoryAsyncEventBus.addSubscribers(domainEventSubscribers);

        expect(eventEmitterBus.registerSubscribers).toHaveBeenCalledWith(domainEventSubscribers);
    });

    it.each([1, 2, 4, 5])('publishes to the bus and logs on the logger on `publish`', (count) => {
        const domainEvents = new Array(count).fill(0).map(() => domainEvent);

        inMemoryAsyncEventBus.publish(domainEvents);

        expect(eventEmitterBus.publish).toHaveBeenCalledWith(domainEvents);
        expect(logger.log).toHaveBeenCalledWith(domainEvents);
    });
});
