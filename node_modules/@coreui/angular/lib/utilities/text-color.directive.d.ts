import { TextColors } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class TextColorDirective {
    /**
     * Set text-color of element
     * @type TextColors
     */
    color: TextColors;
    get hostClasses(): any;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TextColorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TextColorDirective, "[cTextColor]", never, { "color": { "alias": "cTextColor"; "required": false; }; }, {}, never, never, true, never>;
}
