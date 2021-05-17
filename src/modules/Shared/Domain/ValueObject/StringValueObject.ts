import { ValueObject } from '.';

export class StringValueObject extends ValueObject<string> {
    constructor(string: string) {
        super(string);

        this.validateIsAString();
    }

    private validateIsAString(): void {
        if (typeof this.value !== 'string') throw new TypeError(`[${this.constructor.name}] Must be a string`);
    }
}