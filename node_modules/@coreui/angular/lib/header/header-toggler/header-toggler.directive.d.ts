import { AfterContentInit, ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class HeaderTogglerDirective implements AfterContentInit {
    private renderer;
    private hostElement;
    headerToggler: boolean;
    /**
     * Default role for header-toggler. [docs]
     * @type string
     * @default 'button'
     */
    type: string;
    /**
     * Default aria-label attr for header-toggler. [docs]
     * @type string
     * @default 'Toggle navigation'
     */
    ariaLabel: string;
    private hasContent;
    constructor(renderer: Renderer2, hostElement: ElementRef);
    addDefaultIcon(): void;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderTogglerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<HeaderTogglerDirective, "[cHeaderToggler]", never, { "type": { "alias": "type"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; }, {}, never, never, true, never>;
}
