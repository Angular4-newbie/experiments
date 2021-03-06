import {Injectable} from "@angular/core";

@Injectable()
export class IdService {
    /**
     * An id value that is associated with this instance of the service
     */
    id: string;

    constructor() {
        this.regenerate();
    }

    /**
     * Updates this instance of the service with a new id value
     */
    regenerate(): void {
        this.id = this.generateUUID();
    }

    /**
     * A simple method to generate a GUID-like value that is (for our
     * purposes) unique every time.
     */
    private generateUUID(): string {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };
}