import * as i0 from "@angular/core";
export declare class FormLabelDirective {
    /**
     * For horizontal forms set labels to 'col' and make them vertically centered with their associated form controls.
     * @type 'col'
     */
    col: 'col' | '';
    /**
     * Size the label small or large.
     */
    sizing: '' | 'sm' | 'lg' | string;
    get hostClasses(): any;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<FormLabelDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormLabelDirective, "[cLabel]", never, { "col": { "alias": "cLabel"; "required": false; }; "sizing": { "alias": "sizing"; "required": false; }; }, {}, never, never, true, never>;
}
