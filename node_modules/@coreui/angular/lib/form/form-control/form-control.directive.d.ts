import { ElementRef, OnInit } from '@angular/core';
import { InputType } from '../../coreui.types';
import * as i0 from "@angular/core";
export declare class FormControlDirective implements OnInit {
    private hostElement;
    constructor(hostElement: ElementRef);
    /**
     * Size the component small or large.
     * @type {'sm' | 'lg'}
     */
    sizing?: '' | 'sm' | 'lg' | string;
    /**
     * Set component validation state to valid.
     * @type boolean | undefined
     */
    valid?: boolean;
    /**
     * Specifies the type of input element.
     */
    type: Omit<InputType, 'checkbox' | 'radio'>;
    /**
     * Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use alongside `readonly` [docs]
     */
    plaintext: string | boolean;
    get hostClasses(): any;
    get hostTag(): string;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormControlDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormControlDirective, "input[cFormControl], textarea[cFormControl]", never, { "sizing": { "alias": "sizing"; "required": false; }; "valid": { "alias": "valid"; "required": false; }; "type": { "alias": "type"; "required": false; }; "plaintext": { "alias": "plaintext"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_plaintext: unknown;
}
