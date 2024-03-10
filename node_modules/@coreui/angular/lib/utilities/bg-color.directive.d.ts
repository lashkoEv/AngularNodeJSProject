import { BackgroundColors } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class BgColorDirective {
    /**
     * Set the background of an element to any contextual class
     */
    color: BackgroundColors;
    /**
     * Add linear gradient as background image to the backgrounds.
     * @type boolean
     */
    gradient?: boolean;
    get hostClasses(): any;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<BgColorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BgColorDirective, "[cBgColor]", never, { "color": { "alias": "cBgColor"; "required": false; }; "gradient": { "alias": "gradient"; "required": false; }; }, {}, never, never, true, never>;
}
