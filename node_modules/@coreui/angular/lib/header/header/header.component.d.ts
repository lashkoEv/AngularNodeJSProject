import { Positions } from '../../coreui.types';
import * as i0 from "@angular/core";
type Container = boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';
export declare class HeaderComponent {
    /**
     * Defines optional container wrapping children elements.
     */
    container?: Container;
    /**
     * Place header in non-static positions.
     */
    position?: Positions;
    /**
     * Default role for header. [docs]
     * @type string
     * @default 'header'
     */
    role: string;
    get getClasses(): any;
    get headerClasses(): any;
    get containerClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "c-header, [c-header]", never, { "container": { "alias": "container"; "required": false; }; "position": { "alias": "position"; "required": false; }; "role": { "alias": "role"; "required": false; }; }, {}, never, ["*", "*"], true, never>;
}
export {};
