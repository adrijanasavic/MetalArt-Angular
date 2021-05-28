import { EventEmitter } from "@angular/core";

export class HomeService{

    emailChange: EventEmitter<any> = new EventEmitter();
    email: string = "";

    emitEmailChangeEvent(email: string) {
        this.email = email;
        this.emailChange.emit(this.email);
    }

    getEmailChangeEmitter() {
        return this.emailChange;
    }
}