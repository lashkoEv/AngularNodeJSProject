import { TToasterPlacement } from './toaster.component';
import { ToastComponent } from '../toast/toast.component';
import * as i0 from "@angular/core";
export interface IToasterAction {
    placement?: TToasterPlacement;
    toast?: ToastComponent;
    show?: boolean;
}
export declare class ToasterService {
    private toasterState;
    toasterState$: import("rxjs").Observable<IToasterAction>;
    constructor();
    setState(state: IToasterAction): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToasterService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToasterService>;
}
