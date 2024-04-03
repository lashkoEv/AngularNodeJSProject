import * as i0 from "@angular/core";
export declare class NavComponent {
    /**
     * Specify a layout type for component.
     * @type {'fill' | 'justified'}
     */
    layout?: 'fill' | 'justified';
    /**
     * Set the nav variant to tabs or pills.
     * @type {'tabs' | 'pills' | 'underline'}
     */
    variant?: '' | 'tabs' | 'pills';
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NavComponent, "c-nav", never, { "layout": { "alias": "layout"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], true, never>;
}
