import { AfterContentInit } from '@angular/core';
import { FormCheckLabelDirective } from './form-check-label.directive';
import * as i0 from "@angular/core";
export declare class FormCheckComponent implements AfterContentInit {
    #private;
    /**
     * Group checkboxes or radios on the same horizontal row.
     * @type boolean
     * @default false
     */
    inline: string | boolean;
    /**
     * Put checkboxes or radios on the opposite side.
     * @type boolean
     * @default false
     * @since 4.4.7
     */
    reverse: string | boolean;
    /**
     * Size the component large or extra large. Works only with `[switch]="true"` [docs]
     * @type {'lg' | 'xl' | ''}
     */
    sizing?: 'lg' | 'xl' | '';
    /**
     * Render a toggle switch on for checkbox.
     * @type boolean
     * @default false
     */
    switch: string | boolean;
    get hostClasses(): any;
    formCheckLabel: FormCheckLabelDirective;
    get formCheckClass(): boolean;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormCheckComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormCheckComponent, "c-form-check", ["cFormCheck"], { "inline": { "alias": "inline"; "required": false; }; "reverse": { "alias": "reverse"; "required": false; }; "sizing": { "alias": "sizing"; "required": false; }; "switch": { "alias": "switch"; "required": false; }; }, {}, ["formCheckLabel"], ["*"], true, never>;
    static ngAcceptInputType_inline: unknown;
    static ngAcceptInputType_reverse: unknown;
    static ngAcceptInputType_switch: unknown;
}
