import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class PlaceholderDirective {
    static ngAcceptInputType_visible: BooleanInput;
    constructor();
    /**
     * placeholder toggler
     * @type boolean
     * @default false
     */
    set visible(value: boolean);
    get visible(): boolean;
    private _visible;
    /**
     * Size the placeholder extra small, small, large.
     */
    size?: 'xs' | 'sm' | 'lg';
    get ariaHidden(): boolean | null;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaceholderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PlaceholderDirective, "[cPlaceholder]", ["cPlaceholder"], { "visible": { "alias": "cPlaceholder"; "required": false; }; "size": { "alias": "cPlaceholderSize"; "required": false; }; }, {}, never, never, true, never>;
}
