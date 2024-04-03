import { GutterBreakpoints, Gutters, IGutter, IGutterObject } from './gutter.type';
import * as i0 from "@angular/core";
export declare class GutterDirective implements IGutter {
    /**
     * Define padding between columns to space and align content responsively in the Bootstrap grid system.
     */
    gutter: (IGutterObject | GutterBreakpoints | Gutters);
    constructor();
    get hostClasses(): any;
    private static getGutterClasses;
    static ɵfac: i0.ɵɵFactoryDeclaration<GutterDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GutterDirective, "[gutter]", never, { "gutter": { "alias": "gutter"; "required": false; }; }, {}, never, never, true, never>;
}
