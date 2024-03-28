import { AfterContentChecked, ComponentRef, ElementRef, Injector, NgModuleRef, OnInit, QueryList, Renderer2, ViewContainerRef } from '@angular/core';
import { IToasterAction, ToasterService } from './toaster.service';
import { ToasterHostDirective } from './toaster-host.directive';
import * as i0 from "@angular/core";
export declare enum ToasterPlacement {
    Static = "static",
    TopStart = "top-start",
    TopCenter = "top-center",
    TopEnd = "top-end",
    MiddleStart = "middle-start",
    MiddleCenter = "middle-center",
    MiddleEnd = "middle-end",
    BottomStart = "bottom-start",
    BottomCenter = "bottom-center",
    BottomEnd = "bottom-end"
}
export type TToasterPlacement = ToasterPlacement.Static | ToasterPlacement.TopStart | ToasterPlacement.TopCenter | ToasterPlacement.TopEnd | ToasterPlacement.MiddleStart | ToasterPlacement.MiddleCenter | ToasterPlacement.MiddleEnd | ToasterPlacement.BottomStart | ToasterPlacement.BottomCenter | ToasterPlacement.BottomEnd | string;
export declare class ToasterComponent implements OnInit, AfterContentChecked {
    #private;
    private hostElement;
    private renderer;
    private toasterService;
    constructor(hostElement: ElementRef, renderer: Renderer2, toasterService: ToasterService);
    placements: ToasterPlacement[];
    toasts: QueryList<ViewContainerRef>;
    toastsDynamic: any[];
    /**
     * Toaster placement
     * @type TToasterPlacement
     */
    placement: TToasterPlacement;
    /**
     * Toaster position
     * @type (string | 'absolute' | 'fixed' | 'static')
     */
    position: (string | 'absolute' | 'fixed' | 'static');
    toasterHost: ToasterHostDirective;
    contentToasts: QueryList<ViewContainerRef>;
    get hostClasses(): any;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    addToast(toast: any, props: any, options?: {
        index?: number;
        injector?: Injector;
        ngModuleRef?: NgModuleRef<unknown>;
        projectableNodes?: Node[][];
    }): ComponentRef<any>;
    removeToast(state: IToasterAction): void;
    private stateToasterSubscribe;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToasterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToasterComponent, "c-toaster", ["cToaster"], { "placement": { "alias": "placement"; "required": false; }; "position": { "alias": "position"; "required": false; }; }, {}, ["contentToasts"], ["*"], true, never>;
}
