import { AggregateRoot } from '@modules/Shared/Domain/AggregateRoot';

export class Video extends AggregateRoot {
    constructor(
        public url: string,
    ) {
        super();
    }
}