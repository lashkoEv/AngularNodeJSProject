import { AfterViewInit, OnChanges, OnDestroy, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PopoverComponent implements AfterViewInit, OnChanges, OnDestroy {
    private renderer;
    /**
     * Content of popover
     * @type {string | TemplateRef}
     */
    content: string | TemplateRef<any>;
    /**
     * Toggle the visibility of popover component.
     * @type boolean
     */
    visible: boolean;
    id?: string;
    role: string;
    viewContainerRef: ViewContainerRef;
    private textNode;
    constructor(renderer: Renderer2);
    get hostClasses(): {
        [klass: string]: any;
    };
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private clear;
    private updateView;
    static ɵfac: i0.ɵɵFactoryDeclaration<PopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PopoverComponent, "c-popover", never, { "content": { "alias": "content"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; "id": { "alias": "id"; "required": false; }; "role": { "alias": "role"; "required": false; }; }, {}, never, never, true, never>;
}
