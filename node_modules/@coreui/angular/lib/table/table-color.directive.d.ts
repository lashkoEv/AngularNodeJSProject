import { Colors } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class TableColorDirective {
    /**
     * Use contextual color for tables, table rows or individual cells.
     * @type Colors
     */
    color?: Colors;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableColorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TableColorDirective, "[cTableColor]", never, { "color": { "alias": "cTableColor"; "required": false; }; }, {}, never, never, true, never>;
}
