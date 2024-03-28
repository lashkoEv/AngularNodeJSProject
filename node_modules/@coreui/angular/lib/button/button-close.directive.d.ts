import { ButtonDirective } from './button.directive';
import * as i0 from "@angular/core";
export declare class ButtonCloseDirective extends ButtonDirective {
    /**
     * Change the default color to white.
     * @type boolean
     */
    white: string | boolean;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonCloseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ButtonCloseDirective, "[cButtonClose]", never, { "white": { "alias": "white"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_white: unknown;
}
