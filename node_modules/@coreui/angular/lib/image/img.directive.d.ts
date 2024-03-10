import * as i0 from "@angular/core";
export declare class ImgDirective {
    /**
     * Set the horizontal aligment.
     * @type {'' | 'start' | 'end' | 'center'}
     */
    align: '' | 'start' | 'end' | 'center';
    /**
     * Make image responsive.
     * @type boolean
     */
    fluid: string | boolean;
    /**
     * Make image rounded.
     * @type boolean
     */
    rounded: string | boolean;
    /**
     * Give an image a rounded 1px border appearance.
     * @type boolean
     */
    thumbnail: string | boolean;
    /**
     * Color for image placeholder.
     */
    placeholderColor: string;
    get getStyles(): any;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImgDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ImgDirective, "[cImg]", never, { "align": { "alias": "align"; "required": false; }; "fluid": { "alias": "fluid"; "required": false; }; "rounded": { "alias": "rounded"; "required": false; }; "thumbnail": { "alias": "thumbnail"; "required": false; }; "placeholderColor": { "alias": "placeholderColor"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_fluid: unknown;
    static ngAcceptInputType_rounded: unknown;
    static ngAcceptInputType_thumbnail: unknown;
}
