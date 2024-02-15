import { RendererFactory2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ClassToggleService {
    private document;
    private rendererFactory;
    private renderer;
    constructor(document: Document, rendererFactory: RendererFactory2);
    toggle(selector: any, className: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ClassToggleService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ClassToggleService>;
}
