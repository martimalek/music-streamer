export class InvalidUuid extends Error {
    constructor() {
        super('The Uuid is not valid');
    }
}