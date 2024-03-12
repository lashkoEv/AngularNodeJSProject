import { OffcanvasService } from '../offcanvas.service';
import * as i0 from "@angular/core";
export declare class OffcanvasToggleDirective {
    private offcanvasService;
    /**
     * Html id attr of offcanvas to toggle.
     * @type string
     */
    id?: string;
    constructor(offcanvasService: OffcanvasService);
    toggleOpen($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OffcanvasToggleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<OffcanvasToggleDirective, "[cOffcanvasToggle]", never, { "id": { "alias": "cOffcanvasToggle"; "required": false; }; }, {}, never, never, true, never>;
}
