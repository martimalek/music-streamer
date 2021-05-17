import { AggregateRoot } from '@modules/Shared/Domain/AggregateRoot';

export class Audio extends AggregateRoot {
    constructor(
        public url: string,
        public path: string,
    ) {
        super();
    }
}