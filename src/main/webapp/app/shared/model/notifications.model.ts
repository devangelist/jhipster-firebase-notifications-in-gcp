export interface INotifications {
    id?: number;
    title?: string;
    message?: string;
}

export class Notifications implements INotifications {
    constructor(public id?: number, public title?: string, public message?: string) {}
}
