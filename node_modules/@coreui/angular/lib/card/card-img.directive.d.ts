import * as i0 from "@angular/core";
export declare class CardImgDirective {
    /**
     * Optionally orientate the image to the top, bottom, or make it overlaid across the card.
     * @type {'top | 'bottom'}
     */
    orientation?: 'top' | 'bottom';
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<CardImgDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CardImgDirective, "[cCardImg]", never, { "orientation": { "alias": "cCardImg"; "required": false; }; }, {}, never, never, true, never>;
}
