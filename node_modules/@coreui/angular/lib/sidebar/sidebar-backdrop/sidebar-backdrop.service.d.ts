import { Renderer2 } from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import * as i0 from "@angular/core";
export declare class SidebarBackdropService {
    private document;
    private sidebarService;
    private backdrop;
    renderer: Renderer2;
    private clickListener;
    constructor(document: Document, sidebarService: SidebarService);
    setBackdrop(sidebar: SidebarComponent): void;
    clearBackdrop(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarBackdropService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SidebarBackdropService>;
}
