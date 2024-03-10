import { INavAttributes, INavLinkProps } from './breadcrumb-item';
import * as i0 from "@angular/core";
export declare class BreadcrumbItemComponent {
    /**
     * Toggle the active state for the component. [docs]
     * @type boolean
     */
    active?: boolean;
    /**
     * The `url` prop for the inner `[routerLink]` directive. [docs]
     * @type string
     */
    url?: string | any[];
    /**
     * Additional html attributes for link. [docs]
     * @type INavAttributes
     */
    attributes?: INavAttributes;
    /**
     * Some `NavigationExtras` props for the inner `[routerLink]` directive and `routerLinkActiveOptions`. [docs]
     * @type INavLinkProps
     */
    linkProps?: INavLinkProps;
    get ariaCurrent(): string | null;
    get hostClasses(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbItemComponent, "c-breadcrumb-item", never, { "active": { "alias": "active"; "required": false; }; "url": { "alias": "url"; "required": false; }; "attributes": { "alias": "attributes"; "required": false; }; "linkProps": { "alias": "linkProps"; "required": false; }; }, {}, never, ["*"], true, never>;
}
