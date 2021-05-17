import { Logger } from '../Domain/Logger';

export class ConsoleLogger implements Logger {
    log(log: unknown | unknown[]): void {
        if (Array.isArray(log)) log.forEach(console.log);
        else console.log(log);
    }
}