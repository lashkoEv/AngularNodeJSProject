import { ModalComponent } from './modal/modal.component';
import * as i0 from "@angular/core";
export interface IModalAction {
    show?: boolean | 'toggle';
    modal?: ModalComponent;
    id?: string;
}
export declare class ModalService {
    private modalState;
    modalState$: import("rxjs").Observable<any>;
    constructor();
    toggle(action: IModalAction): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModalService>;
}
