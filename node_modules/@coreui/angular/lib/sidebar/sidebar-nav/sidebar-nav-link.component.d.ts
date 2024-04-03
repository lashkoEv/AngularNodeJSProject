import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarNavHelper } from './sidebar-nav.service';
import { INavData } from './sidebar-nav';
import * as i0 from "@angular/core";
export declare class SidebarNavLinkContentComponent {
    helper: SidebarNavHelper;
    item?: INavData;
    constructor(helper: SidebarNavHelper);
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarNavLinkContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarNavLinkContentComponent, "c-sidebar-nav-link-content", never, { "item": { "alias": "item"; "required": false; }; }, {}, never, never, true, never>;
}
export declare class SidebarNavLinkComponent implements OnInit, OnDestroy {
    router: Router;
    protected _item: INavData;
    set item(item: INavData);
    get item(): INavData;
    linkClick: EventEmitter<any>;
    linkType: string;
    href: string;
    linkActive: boolean;
    private url;
    private navigationEndObservable;
    private navSubscription;
    constructor(router: Router);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getLinkType(): string;
    isDisabled(): boolean;
    isExternalLink(): boolean;
    linkClicked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarNavLinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarNavLinkComponent, "c-sidebar-nav-link", never, { "item": { "alias": "item"; "required": false; }; }, { "linkClick": "linkClick"; }, never, never, true, never>;
}
