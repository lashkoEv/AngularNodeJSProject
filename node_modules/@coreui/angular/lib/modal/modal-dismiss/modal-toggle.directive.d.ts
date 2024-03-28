import { ModalService } from '../modal.service';
import * as i0 from "@angular/core";
export declare class ModalToggleDirective {
    private modalService;
    /**
     * Html id attr of modal to dismiss.
     */
    id: string | undefined;
    constructor(modalService: ModalService);
    dismiss($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalToggleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ModalToggleDirective, "[cModalToggle]", never, { "id": { "alias": "cModalToggle"; "required": false; }; }, {}, never, never, true, never>;
}
