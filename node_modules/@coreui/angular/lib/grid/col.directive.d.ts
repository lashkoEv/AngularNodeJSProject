import { BooleanInput, NumberInput } from '@angular/cdk/coercion';
import { ColOrder, ICol } from './col.type';
import * as i0 from "@angular/core";
export declare class ColDirective implements ICol {
    static ngAcceptInputType_cCol: (BooleanInput | NumberInput);
    static ngAcceptInputType_xs: (BooleanInput | NumberInput);
    static ngAcceptInputType_sm: (BooleanInput | NumberInput);
    static ngAcceptInputType_md: (BooleanInput | NumberInput);
    static ngAcceptInputType_lg: (BooleanInput | NumberInput);
    static ngAcceptInputType_xl: (BooleanInput | NumberInput);
    static ngAcceptInputType_xxl: (BooleanInput | NumberInput);
    /**
     * The number of columns/offset/order on extra small devices (<576px).
     * @type { 'auto' | number |  boolean }
     */
    set cCol(value: (BooleanInput | NumberInput));
    set xs(value: (BooleanInput | NumberInput));
    get xs(): (BooleanInput | NumberInput);
    private _xs;
    /**
     * The number of columns/offset/order on small devices (<768px).
     * @type { 'auto' | number |  boolean }
     */
    set sm(value: (BooleanInput | NumberInput));
    get sm(): (BooleanInput | NumberInput);
    private _sm;
    /**
     * The number of columns/offset/order on medium devices (<992px).
     * @type { 'auto' | number |  boolean }
     */
    set md(value: (BooleanInput | NumberInput));
    get md(): (BooleanInput | NumberInput);
    private _md;
    /**
     * The number of columns/offset/order on large devices (<1200px).
     * @type { 'auto' | number |  boolean }
     */
    set lg(value: (BooleanInput | NumberInput));
    get lg(): (BooleanInput | NumberInput);
    private _lg;
    /**
     * The number of columns/offset/order on X-Large devices (<1400px).
     * @type { 'auto' | number |  boolean }
     */
    set xl(value: (BooleanInput | NumberInput));
    get xl(): (BooleanInput | NumberInput);
    private _xl;
    /**
     * The number of columns/offset/order on XX-Large devices (≥1400px).
     * @type { 'auto' | number |  boolean }
     */
    set xxl(value: (BooleanInput | NumberInput));
    get xxl(): (BooleanInput | NumberInput);
    private _xxl;
    offset?: (number | {
        'xs'?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        xxl?: number;
    });
    order?: (ColOrder | {
        xs?: ColOrder;
        sm?: ColOrder;
        md?: ColOrder;
        lg?: ColOrder;
        xl?: ColOrder;
        xxl?: ColOrder;
    });
    get hostClasses(): any;
    coerceInput(value: (BooleanInput | NumberInput)): number | boolean | "auto";
    static ɵfac: i0.ɵɵFactoryDeclaration<ColDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ColDirective, "[cCol]", never, { "cCol": { "alias": "cCol"; "required": false; }; "xs": { "alias": "xs"; "required": false; }; "sm": { "alias": "sm"; "required": false; }; "md": { "alias": "md"; "required": false; }; "lg": { "alias": "lg"; "required": false; }; "xl": { "alias": "xl"; "required": false; }; "xxl": { "alias": "xxl"; "required": false; }; "offset": { "alias": "offset"; "required": false; }; "order": { "alias": "order"; "required": false; }; }, {}, never, never, true, never>;
}
