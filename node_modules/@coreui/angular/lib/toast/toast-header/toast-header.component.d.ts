import { ToastComponent } from '../toast/toast.component';
import * as i0 from "@angular/core";
export declare class ToastHeaderComponent {
    toast?: ToastComponent | undefined;
    /**
     * Add close button to a toast header
     * @type boolean
     */
    closeButton: boolean;
    toastHeaderClass: boolean;
    constructor(toast?: ToastComponent | undefined);
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastHeaderComponent, [{ optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastHeaderComponent, "c-toast-header", ["cToastHeader"], { "closeButton": { "alias": "closeButton"; "required": false; }; }, {}, never, ["*"], true, never>;
}
