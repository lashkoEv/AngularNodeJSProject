import { Colors } from '../coreui.types';
import * as i0 from "@angular/core";
export declare class CalloutComponent {
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     * @type Colors
     */
    color?: Colors;
    get hostClasses(): any;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CalloutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalloutComponent, "c-callout, [cCallout]", never, { "color": { "alias": "color"; "required": false; }; }, {}, never, ["*"], true, never>;
}
