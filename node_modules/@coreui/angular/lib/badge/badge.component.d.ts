import { BadgePositions, Colors, Shapes } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class BadgeComponent {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    color?: Colors;
    /**
     * Position badge in one of the corners of a link or button.
     * @type BadgePositions
     */
    position?: BadgePositions;
    /**
     * Select the shape of the component.
     * @type Shapes
     */
    shape?: Shapes;
    /**
     * Size the component small.
     */
    size?: 'sm';
    /**
     * Sets the text color of the component to one of CoreUI’s themed colors.
     * @type TextColors
     */
    textColor?: string;
    constructor();
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<BadgeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BadgeComponent, "c-badge", never, { "color": { "alias": "color"; "required": false; }; "position": { "alias": "position"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "size": { "alias": "size"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; }, {}, never, ["*"], true, never>;
}
