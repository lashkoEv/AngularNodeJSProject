import { OnInit } from '@angular/core';
import { SidebarNavHelper } from './sidebar-nav.service';
import * as i0 from "@angular/core";
export declare class SidebarNavLabelComponent implements OnInit {
    helper: SidebarNavHelper;
    constructor(helper: SidebarNavHelper);
    item: any;
    private classes;
    private iconClasses;
    ngOnInit(): void;
    getItemClass(): {
        'c-nav-label': boolean;
        'c-active': boolean;
    };
    getLabelIconClass(): {};
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarNavLabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarNavLabelComponent, "c-sidebar-nav-label", never, { "item": { "alias": "item"; "required": false; }; }, {}, never, never, true, never>;
}
