/* eslint-disable @typescript-eslint/no-explicit-any */
export abstract class ValueObject<T> {
    public readonly value: T;

    constructor(value: T) {
        this.value = value;
    }

    toJSON(): T {
        return this.value;
    }

    public isEqual(valueObject: ValueObject<T>): boolean {
        return this.value === valueObject.value;
    }
}