import { Sizes } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class ListGroupDirective {
    /**
     * Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`).
     * @type boolean
     */
    flush: string | boolean;
    /**
     * Specify horizontal layout type.
     */
    horizontal?: boolean | Sizes;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListGroupDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListGroupDirective, "[cListGroup]", never, { "flush": { "alias": "flush"; "required": false; }; "horizontal": { "alias": "horizontal"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_flush: unknown;
}
