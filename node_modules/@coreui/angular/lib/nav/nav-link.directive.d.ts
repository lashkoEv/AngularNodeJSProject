import * as i0 from "@angular/core";
export declare class NavLinkDirective {
    /**
     * Sets .nav-link class to the host. [docs]
     * @type boolean
     * @default true
     */
    cNavLink: string | boolean;
    /**
     * Toggle the active state for the component. [docs]
     * @type boolean
     */
    active?: boolean;
    /**
     * Set disabled attr for the host element. [docs]
     * @type boolean
     */
    disabled: string | boolean;
    get ariaCurrent(): string | null;
    get isDisabled(): boolean | null;
    get attrDisabled(): "" | null;
    get getTabindex(): string | null;
    get getCursorStyle(): string | null;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavLinkDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NavLinkDirective, "[cNavLink]", never, { "cNavLink": { "alias": "cNavLink"; "required": false; }; "active": { "alias": "active"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_cNavLink: unknown;
    static ngAcceptInputType_disabled: unknown;
}
