import { SidebarComponent } from './sidebar/sidebar.component';
import * as i0 from "@angular/core";
export interface ISidebarAction {
    unfoldable?: boolean | 'toggle';
    visible?: boolean | 'toggle';
    toggle?: 'visible' | 'unfoldable';
    narrow?: boolean;
    mobile?: boolean;
    sidebar?: SidebarComponent;
    id?: string;
}
export declare class SidebarService {
    private sidebarState;
    sidebarState$: import("rxjs").Observable<ISidebarAction>;
    constructor();
    toggle(action: ISidebarAction): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SidebarService>;
}
