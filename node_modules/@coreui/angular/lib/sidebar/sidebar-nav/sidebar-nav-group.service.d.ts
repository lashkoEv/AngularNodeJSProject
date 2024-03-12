import { SidebarNavGroupComponent } from './sidebar-nav.component';
import * as i0 from "@angular/core";
export interface ISidebarAction {
    open?: boolean;
    sidebarNavGroup?: SidebarNavGroupComponent;
}
export declare class SidebarNavGroupService {
    constructor();
    private sidebarNavGroupState;
    sidebarNavGroupState$: import("rxjs").Observable<ISidebarAction>;
    toggle(action: ISidebarAction): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarNavGroupService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SidebarNavGroupService>;
}
