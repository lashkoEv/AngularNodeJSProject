import { EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ISidebarAction, SidebarService } from '../sidebar.service';
import { SidebarBackdropService } from '../sidebar-backdrop/sidebar-backdrop.service';
import * as i0 from "@angular/core";
export declare class SidebarComponent implements OnChanges, OnDestroy, OnInit {
    #private;
    private document;
    private renderer;
    private breakpointObserver;
    private sidebarService;
    private backdropService;
    static ngAcceptInputType_narrow: BooleanInput;
    static ngAcceptInputType_overlaid: BooleanInput;
    static ngAcceptInputType_unfoldable: BooleanInput;
    static ngAcceptInputType_visible: BooleanInput;
    state: ISidebarAction;
    /**
     * Sets if the color of text should be colored for a light or dark background. [docs]
     *
     * @type 'dark' | 'light'
     */
    colorScheme?: 'dark' | 'light';
    /**
     * Sets html attribute id. [docs]
     *
     * @type string
     */
    id?: string;
    /**
     * Make sidebar narrow. [docs]
     * @type boolean
     */
    set narrow(value: boolean);
    get narrow(): boolean;
    /**
     * Set sidebar to overlaid variant.
     * @type boolean
     */
    set overlaid(value: boolean);
    get overlaid(): boolean;
    /**
     * Components placement, there’s no default placement. [docs]
     * @type 'start' | 'end'
     */
    placement?: 'start' | 'end';
    /**
     * Place sidebar in non-static positions. [docs]
     * @default 'fixed'
     */
    position: 'fixed' | 'sticky';
    /**
     * Size the component small, large, or extra large. [docs]
     */
    size?: 'sm' | 'lg' | 'xl';
    /**
     * Expand narrowed sidebar on hover. [docs]
     */
    set unfoldable(value: boolean);
    get unfoldable(): boolean;
    /**
     * Toggle the visibility of sidebar component. [docs]
     */
    set visible(value: boolean);
    get visible(): boolean;
    /**
     * Event emitted on visibility change. [docs]
     * @type boolean
     */
    visibleChange: EventEmitter<boolean>;
    set sidebarState(value: ISidebarAction);
    get sidebarState(): ISidebarAction;
    get getMobileBreakpoint(): string;
    constructor(document: Document, renderer: Renderer2, breakpointObserver: BreakpointObserver, sidebarService: SidebarService, backdropService: SidebarBackdropService);
    get getClasses(): any;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setInitialState(): void;
    private stateToggleSubscribe;
    layoutChangeSubscribe(subscribe?: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarComponent, "c-sidebar", ["cSidebar"], { "colorScheme": { "alias": "colorScheme"; "required": false; }; "id": { "alias": "id"; "required": false; }; "narrow": { "alias": "narrow"; "required": false; }; "overlaid": { "alias": "overlaid"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "position": { "alias": "position"; "required": false; }; "size": { "alias": "size"; "required": false; }; "unfoldable": { "alias": "unfoldable"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; }, { "visibleChange": "visibleChange"; }, never, ["*"], true, never>;
}
