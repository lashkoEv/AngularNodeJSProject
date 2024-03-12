import { Alignment } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class AlignDirective {
    /**
     * Set vertical alignment of inline, inline-block, inline-table, and table cell elements
     * @type Alignment
     */
    align?: Alignment;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlignDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<AlignDirective, "[cAlign]", never, { "align": { "alias": "cAlign"; "required": false; }; }, {}, never, never, true, never>;
}
