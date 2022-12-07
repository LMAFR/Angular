// import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class UserService {
    // Subjects are more efficient than EventEmitter for crosscomponent uses (as here, where we are using a service in several components)
    // or when we have to subscribe. 
    activatedEmitter = new Subject<boolean>();
}