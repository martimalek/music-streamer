import * as dependencies from './dependencies';

export function registerSubscribers(): void {
    dependencies.eventBus.addSubscribers(
        Object.values(dependencies).filter(dependency => ('subscribedTo' in dependency)) as any[]
    );
}