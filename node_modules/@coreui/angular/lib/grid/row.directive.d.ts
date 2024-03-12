import { IRow, NumberOfColumns } from './row.type';
import * as i0 from "@angular/core";
export declare class RowDirective implements IRow {
    /**
     * The number of columns/offset/order on extra small devices (<576px).
     * @type {{ cols: 'auto' | number }
     */
    xs?: NumberOfColumns;
    /**
     * The number of columns/offset/order on small devices (<768px).
     * @type {{ cols: 'auto' | number }
     */
    sm?: NumberOfColumns;
    /**
     * The number of columns/offset/order on medium devices (<992px).
     * @type {{ cols: 'auto' | number }
     */
    md?: NumberOfColumns;
    /**
     * The number of columns/offset/order on large devices (<1200px).
     * @type {{ cols: 'auto' | number }
     */
    lg?: NumberOfColumns;
    /**
     * The number of columns/offset/order on X-Large devices (<1400px).
     * @type {{ cols: 'auto' | number }
     */
    xl?: NumberOfColumns;
    /**
     * The number of columns/offset/order on XX-Large devices (≥1400px).
     * @type {{ cols: 'auto' | number }
     */
    xxl?: NumberOfColumns;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<RowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RowDirective, "[cRow]", never, { "xs": { "alias": "xs"; "required": false; }; "sm": { "alias": "sm"; "required": false; }; "md": { "alias": "md"; "required": false; }; "lg": { "alias": "lg"; "required": false; }; "xl": { "alias": "xl"; "required": false; }; "xxl": { "alias": "xxl"; "required": false; }; }, {}, never, never, true, never>;
}
