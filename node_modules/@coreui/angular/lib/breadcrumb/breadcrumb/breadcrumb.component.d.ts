import * as i0 from "@angular/core";
export declare class BreadcrumbComponent {
    /**
     * Default aria-label for breadcrumb. [docs]
     * @type string
     * @default 'breadcrumb'
     */
    ariaLabel: string;
    /**
     * Default role for breadcrumb. [docs]
     * @type string
     * @default 'navigation'
     */
    role: string;
    get hostClasses(): {
        breadcrumb: boolean;
    };
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbComponent, "c-breadcrumb", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; }; "role": { "alias": "role"; "required": false; }; }, {}, never, ["*"], true, never>;
}
