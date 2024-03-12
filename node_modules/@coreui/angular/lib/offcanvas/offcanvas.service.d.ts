import { OffcanvasComponent } from './offcanvas/offcanvas.component';
import * as i0 from "@angular/core";
export interface IOffcanvasAction {
    show?: boolean | 'toggle';
    offcanvas?: OffcanvasComponent;
    id?: string;
}
export declare class OffcanvasService {
    private offcanvasState;
    offcanvasState$: import("rxjs").Observable<any>;
    constructor();
    toggle(action: IOffcanvasAction): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OffcanvasService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OffcanvasService>;
}
