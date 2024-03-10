import * as i0 from "@angular/core";
export declare class FormDirective {
    /**
     * Mark a form as validated. If you set it `true`, all validation styles will be applied to the form. [docs]
     * @type boolean
     * @default false
     */
    validated: string | boolean;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<FormDirective, "form[cForm]", never, { "validated": { "alias": "validated"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_validated: unknown;
}
