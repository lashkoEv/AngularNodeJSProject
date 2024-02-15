import { PipeTransform } from '@angular/core';
import { SidebarNavHelper } from './sidebar-nav.service';
import * as i0 from "@angular/core";
export declare class SidebarNavItemClassPipe implements PipeTransform {
    helper: SidebarNavHelper;
    constructor(helper: SidebarNavHelper);
    transform(item: any, args?: any[]): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarNavItemClassPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<SidebarNavItemClassPipe, "cSidebarNavItemClass", true>;
}
