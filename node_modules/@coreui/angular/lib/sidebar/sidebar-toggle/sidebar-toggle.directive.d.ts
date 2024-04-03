import { SidebarService } from '../sidebar.service';
import * as i0 from "@angular/core";
/**
 * Allows the sidebar to be toggled/folded via click on host element.
 */
export declare class SidebarToggleDirective {
    private sidebarService;
    /**
     * Id of sidebar for toggle action. [docs]
     *
     * @type string
     */
    id?: string;
    /**
     * Sidebar property name for toggle action. [docs]
     *
     * @type 'visible' | 'unfoldable'
     * @default 'visible'
     */
    toggle: 'visible' | 'unfoldable';
    constructor(sidebarService: SidebarService);
    toggleOpen($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarToggleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SidebarToggleDirective, "[cSidebarToggle]", ["cSidebarToggle"], { "id": { "alias": "cSidebarToggle"; "required": false; }; "toggle": { "alias": "toggle"; "required": false; }; }, {}, never, never, true, never>;
}
