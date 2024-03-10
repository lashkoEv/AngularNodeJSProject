import { AfterContentInit, ElementRef, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PageItemDirective implements AfterContentInit, OnChanges {
    private renderer;
    /**
     * Toggle the active state for the component.
     * @type boolean
     */
    active?: boolean;
    /**
     * Toggle the disabled state for the component.
     * @type boolean
     */
    disabled?: boolean;
    get ariaCurrent(): string | null;
    get hostClasses(): any;
    pageLinkElementRef: ElementRef;
    constructor(renderer: Renderer2);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    setAttributes(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PageItemDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PageItemDirective, "[cPageItem]", never, { "active": { "alias": "active"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, ["pageLinkElementRef"], never, true, never>;
}
