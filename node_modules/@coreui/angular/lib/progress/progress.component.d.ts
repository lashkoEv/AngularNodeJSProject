import * as i0 from "@angular/core";
export declare class ProgressComponent {
    /**
     * Sets the height of the component. If you set that value the inner `<CProgressBar>` will automatically resize accordingly.
     * @type number
     */
    height: string | number;
    /**
     * Displays thin progress.
     * @type boolean
     */
    thin: string | boolean;
    /**
     * Change the default color to white.
     * @type boolean
     */
    white: string | boolean;
    get hostClasses(): any;
    get hostStyle(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressComponent, "c-progress", never, { "height": { "alias": "height"; "required": false; }; "thin": { "alias": "thin"; "required": false; }; "white": { "alias": "white"; "required": false; }; }, {}, never, ["*"], true, never>;
    static ngAcceptInputType_height: unknown;
    static ngAcceptInputType_thin: unknown;
    static ngAcceptInputType_white: unknown;
}
