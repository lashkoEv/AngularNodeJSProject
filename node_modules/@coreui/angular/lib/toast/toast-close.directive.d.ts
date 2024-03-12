import { ToasterService } from './toaster/toaster.service';
import * as i0 from "@angular/core";
export declare class ToastCloseDirective {
    private toasterService;
    toast: any;
    constructor(toasterService: ToasterService);
    toggleOpen($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastCloseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ToastCloseDirective, "[cToastClose]", ["cToastClose"], { "toast": { "alias": "cToastClose"; "required": false; }; }, {}, never, never, true, never>;
}
