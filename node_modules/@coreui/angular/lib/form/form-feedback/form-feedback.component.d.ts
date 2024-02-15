import * as i0 from "@angular/core";
export declare class FormFeedbackComponent {
    /**
     * If your form layout allows it, you can display validation feedback in a styled tooltip.
     * @type boolean
     */
    tooltip: string | boolean;
    /**
     * Set component validation state to valid.
     * @type boolean
     */
    valid?: boolean;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<FormFeedbackComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FormFeedbackComponent, "c-form-feedback", never, { "tooltip": { "alias": "tooltip"; "required": false; }; "valid": { "alias": "valid"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_tooltip: unknown;
}
