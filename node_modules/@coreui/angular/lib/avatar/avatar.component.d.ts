import { Colors, Shapes, Sizes, TextColors } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class AvatarComponent {
    /**
     * Sets the background color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    color?: Colors;
    /**
     * Select the shape of the component.
     * @type Shapes
     */
    shape?: Shapes;
    /**
     * Size the component small, large, or extra large.
     * @default 'md'
     */
    size?: Omit<Sizes, 'xxl'>;
    /**
     * The src attribute for the img element.
     * @type string
     */
    src?: string;
    /**
     * Sets the color context of the status indicator to one of CoreUI’s themed colors.
     * @type Colors
     */
    status?: Colors;
    /**
     * Sets the text color of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'white' | 'muted' | string
     */
    textColor?: TextColors;
    constructor();
    get statusClass(): any;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarComponent, "c-avatar", never, { "color": { "alias": "color"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "size": { "alias": "size"; "required": false; }; "src": { "alias": "src"; "required": false; }; "status": { "alias": "status"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; }, {}, never, ["*"], true, never>;
}
