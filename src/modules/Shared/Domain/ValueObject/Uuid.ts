import UUID from 'uuid';
import { InvalidUuid } from '../Errors/InvalidUuid';
import { StringValueObject } from './StringValueObject';

export class Uuid extends StringValueObject {
    constructor(uuid: string) {
        super(uuid);

        this.validateIsAValidUuid();
    }

    private validateIsAValidUuid(): void {
        const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        const secondRegex = /^[0-9a-f]{30}/;

        if (!regex.test(this.value) && !secondRegex.test(this.value)) throw new InvalidUuid();
    }

    public static random(): Uuid {
        return new Uuid(UUID.v4());
    }
}