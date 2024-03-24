import { Colors, TextColors } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class CardComponent {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    color?: Colors;
    /**
     * Sets the text color context of the component to one of CoreUI’s themed colors.
     * @type TextColors
     */
    textColor?: TextColors;
    get hostClasses(): any;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CardComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CardComponent, "c-card, [c-card]", never, { "color": { "alias": "color"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; }, {}, never, ["*"], true, never>;
}
