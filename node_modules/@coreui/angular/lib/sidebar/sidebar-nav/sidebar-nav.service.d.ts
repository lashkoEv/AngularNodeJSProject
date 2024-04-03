import { INavData } from './sidebar-nav';
import * as i0 from "@angular/core";
export declare abstract class SidebarNavService {
    /**
     * Returns a sidebar-nav items config NavData
     */
    abstract getSidebarNavItemsConfig(): INavData[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarNavService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SidebarNavService>;
}
export declare class SidebarNavHelper {
    itemType(item: INavData): string;
    isActive(router: any, item: INavData): boolean;
    hasBadge: (item: INavData) => boolean;
    hasIcon: (item: INavData) => boolean;
    hasIconComponent: (item: INavData) => boolean;
    getIconClass(item: INavData): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarNavHelper, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SidebarNavHelper>;
}
