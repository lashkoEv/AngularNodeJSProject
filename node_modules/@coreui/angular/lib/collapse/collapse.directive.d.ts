import { AfterViewInit, DoCheck, ElementRef, EventEmitter, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { BooleanInput } from '@angular/cdk/coercion';
import * as i0 from "@angular/core";
export declare class CollapseDirective implements OnChanges, OnDestroy, DoCheck, AfterViewInit {
    private hostElement;
    private renderer;
    private animationBuilder;
    static ngAcceptInputType_horizontal: BooleanInput;
    static ngAcceptInputType_navbar: BooleanInput;
    static ngAcceptInputType_visible: BooleanInput;
    /**
     * @ignore
     */
    set animate(value: boolean);
    get animate(): boolean;
    private _animate;
    /**
     * Set horizontal collapsing to transition the width instead of height.
     */
    set horizontal(value: boolean);
    get horizontal(): boolean;
    private _horizontal;
    /**
     * Toggle the visibility of collapsible element.
     */
    set visible(value: boolean);
    get visible(): boolean;
    private _visible;
    /**
     * Add `navbar` prop for grouping and hiding navbar contents by a parent breakpoint.
     */
    set navbar(value: boolean);
    get navbar(): boolean;
    private _navbar;
    /**
     * @ignore
     */
    duration: string;
    /**
     * @ignore
     */
    transition: string;
    /**
     * Event emitted on visibility change. [docs]
     * @type string
     */
    collapseChange: EventEmitter<string>;
    private player;
    private readonly host;
    private scrollWidth;
    private collapsing;
    constructor(hostElement: ElementRef, renderer: Renderer2, animationBuilder: AnimationBuilder);
    get hostClasses(): any;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    toggle(visible?: boolean): void;
    destroyPlayer(): void;
    createPlayer(visible?: boolean): void;
    setMaxSize(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CollapseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CollapseDirective, "[cCollapse]", ["cCollapse"], { "animate": { "alias": "animate"; "required": false; }; "horizontal": { "alias": "horizontal"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "navbar": { "alias": "navbar"; "required": false; }; "duration": { "alias": "duration"; "required": false; }; "transition": { "alias": "transition"; "required": false; }; }, { "collapseChange": "collapseChange"; }, never, never, true, never>;
}
