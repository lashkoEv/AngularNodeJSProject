import { AfterContentInit, ElementRef, Renderer2 } from '@angular/core';
import { CollapseDirective } from '../../collapse';
import * as i0 from "@angular/core";
export declare class NavbarTogglerDirective implements AfterContentInit {
    private renderer;
    private hostElement;
    /**
     * Reference to navbar collapse element (via # template variable) . [docs]
     * @type string
     * @default 'button'
     */
    collapseRef?: CollapseDirective;
    navbarToggler: boolean;
    /**
     * Default type for navbar-toggler. [docs]
     * @type string
     * @default 'button'
     */
    type: string;
    /**
     * Default aria-label attr for navbar-toggler. [docs]
     * @type string
     * @default 'Toggle navigation'
     */
    ariaLabel: string;
    private hasContent;
    constructor(renderer: Renderer2, hostElement: ElementRef);
    handleClick(): void;
    addDefaultIcon(): void;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NavbarTogglerDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NavbarTogglerDirective, "[cNavbarToggler]", never, { "collapseRef": { "alias": "cNavbarToggler"; "required": false; }; "type": { "alias": "type"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; }, {}, never, never, true, never>;
}
