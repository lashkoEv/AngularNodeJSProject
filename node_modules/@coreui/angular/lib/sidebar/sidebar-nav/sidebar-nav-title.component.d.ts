import { ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class SidebarNavTitleComponent implements OnInit {
    private el;
    private renderer;
    item: any;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    private addAttribs;
    private setStyle;
    private addClass;
    private setAttrib;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarNavTitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarNavTitleComponent, "c-sidebar-nav-title", never, { "item": { "alias": "item"; "required": false; }; }, {}, never, never, true, never>;
}
